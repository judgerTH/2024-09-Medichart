const express = require('express');
const bodyParser = require('body-parser');
const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3001; // 포트를 3001로 설정

// JSON 파싱 미들웨어
app.use(bodyParser.json());

// Dialogflow 설정
const projectId = 'medichart-428805';
const sessionId = uuid.v4();
const languageCode = 'ko-KR';

// 서비스 계정 키 파일 경로 (절대 경로 설정)
const keyFile = path.resolve(__dirname, '..', '..', 'resources', 'medichart-428805-42763aa8030c.json');

// Dialogflow 클라이언트 설정
const sessionClient = new dialogflow.SessionsClient({ keyFilename: keyFile });
const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

// 챗봇 엔드포인트
app.post('/chatbot', async (req, res) => {
    const message = req.body.message;

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: message,
                languageCode: languageCode,
            },
        },
    };

    try {
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;
        res.json({ response: result.fulfillmentText });
    } catch (error) {
        console.error('ERROR:', error);
        res.status(500).send('Error processing request');
    }
});

// 정적 파일 서빙
const staticPath = path.resolve(__dirname, '..', '..', 'resources', 'templates');
console.log(`Static files will be served from: ${staticPath}`);

// Ensure the staticPath exists
if (!fs.existsSync(staticPath)) {
    console.error(`Error: Static path ${staticPath} does not exist.`);
    process.exit(1);
}

app.use(express.static(staticPath));

// 기본 경로 설정
app.get('/', (req, res) => {
    const filePath = path.join(staticPath, 'chatbot.html');
    console.log(`Serving file: ${filePath}`);

    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send('File not found');
    }
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

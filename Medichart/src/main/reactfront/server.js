const express = require('express');
const bodyParser = require('body-parser');
const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const projectId = 'medichart-428805';

const sessionId = uuid.v4();


const sessionClient = new dialogflow.SessionsClient();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../resources/templates/chatbot.html'));
});

app.post('/chatbot', async (req, res) => {
    const message = req.body.message;

    const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: message,
                languageCode: 'ko-KR',
            },
        },
    };

    try {
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;

        res.json({ response: result.fulfillmentText });
    } catch (error) {
        console.error('Dialogflow Error:', error);
        res.status(500).send('Dialogflow request failed');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

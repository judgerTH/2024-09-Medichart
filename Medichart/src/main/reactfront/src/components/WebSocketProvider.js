import React, { createContext, useEffect, useState } from "react";

export const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
    const [userSocket, setUserSocket] = useState(null);
    const [adminSocket, setAdminSocket] = useState(null);

    useEffect(() => {
        const userWS = new WebSocket("ws://localhost:8080/user");
        const adminWS = new WebSocket("ws://localhost:8080/admin");

        userWS.onopen = () => {
            console.log("User WebSocket connection established");
            setUserSocket(userWS);
        };

        userWS.onclose = () => {
            console.log("User WebSocket connection closed");
            setUserSocket(null);
        };

        userWS.onerror = (error) => {
            console.error("User WebSocket error:", error);
        };

        adminWS.onopen = () => {
            console.log("Admin WebSocket connection established");
            setAdminSocket(adminWS);
        };

        adminWS.onclose = () => {
            console.log("Admin WebSocket connection closed");
            setAdminSocket(null);
        };

        adminWS.onerror = (error) => {
            console.error("Admin WebSocket error:", error);
        };

        return () => {
            if (userWS) userWS.close();
            if (adminWS) adminWS.close();
        };
    }, []);

    return (
        <WebSocketContext.Provider value={{ userSocket, adminSocket }}>
            {children}
        </WebSocketContext.Provider>
    );
};

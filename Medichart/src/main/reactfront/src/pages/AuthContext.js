import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    const [username, setUsername] = useState(''); // 사용자 이름 상태 추가

    useEffect(() => {
        fetch('http://localhost:3000/profile', { credentials: 'include' })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched profile data:', data); // 응답 데이터 로그
                if (data.username) { // userId가 아니라 username으로 체크해보세요
                    setIsLoggedIn(true);
                    setUserId(data.userId); // userId가 데이터에 포함되어야 함
                    setUsername(data.username || '');
                } else {
                    setIsLoggedIn(false);
                    setUserId(null);
                    setUsername('');
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
                setIsLoggedIn(false);
                setUserId(null);
                setUsername('');
            });
    }, []);



    const login = (userId, username) => {
        setIsLoggedIn(true);
        setUserId(userId);
        setUsername(username); // 로그인 시 사용자 이름 설정
    };

    const logout = () => {
        fetch('http://localhost:3000/logout', {
            method: 'POST',
            credentials: 'include'
        })
            .then(() => {
                setIsLoggedIn(false);
                setUserId(null);
                setUsername(''); // 로그아웃 시 사용자 이름 초기화
            })
            .catch(err => console.error('Failed to log out:', err));
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userId, username, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

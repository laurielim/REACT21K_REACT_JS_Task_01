import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState({});

	const login = (username, password) => {
		/*    const params = {
            username: username,
            password: 
        }

        const url = "server-link.com";

        return axios.get(url, params).then(res => {
            setCurrentUser({
                username: username,
                password: password,
            });
            return 1;
        }).catch(err=>{
            return 0;
        })
 */
		setCurrentUser({
			username: username,
			password: password,
		});
		return 1;
	};
	const signup = () => {};
	const logout = () => {
		setCurrentUser({});
	};

	const value = {
		currentUser: currentUser,
		login: login,
		logout: logout,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

import React, { useState } from 'react';

export const AuthContext = React.createContext({ currentUser: null });

const AuthProvider: React.FC = ({ children }) => {
	const [currentUser] = useState(null);
	return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

import React from 'react';
import AuthProvider from './auth/Auth';
import RootRouter from './router/RootRouter';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faFileAlt, faQuestionCircle, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faFileAlt, faQuestionCircle, faCommentAlt);

function App() {
	return (
		<AuthProvider>
			<RootRouter></RootRouter>
		</AuthProvider>
	);
}

export default App;

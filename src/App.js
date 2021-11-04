import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
const projectID = "12e32061-d20d-4aea-bb15-7cb40d75645f";

export function App() {
	if (!localStorage.getItem('username')) return <LoginForm/>;
	return (
		<ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID={projectID}

      renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} /> }
	  onNewMessage={()=>new Audio ('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}



      />
		
	);

};
// infinite scroll, logout, more customizations...
export default App;
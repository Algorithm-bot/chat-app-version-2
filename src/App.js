import { ChatEngine } from 'react-chat-engine';
import "./App.css";
import  ChatFeed  from  './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
   
  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <ChatEngine
      height="100vh"
      projectID="671f0abf-09e1-4bb6-ac99-893198dcfc49"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
    />
  );
};

export default App;


import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import HomePage from './Components/HomePage';
import ChatsPage from './Components/ChatsPage';

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={ChatsPage} exact />
      
    </div>
  );
}

export default App;

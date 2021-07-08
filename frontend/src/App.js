import "./App.css";
import { ChatComponent } from "./Component/chat.component";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat App</h1>
        <ChatComponent />
      </header>
    </div>
  );
}

export default App;

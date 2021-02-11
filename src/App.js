import { Chat } from "@material-ui/icons";
import "./App.css";
import Sidebar from "./Sidebar";
import Chats from "./Chats";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chats />
      </div>
    </div>
  );
}

export default App;

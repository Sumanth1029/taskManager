import "./App.css";
import TaskListProvider from "./Contexts/context";
import TaskList from "./Components/TaskList/TaskList";
import TaskInput from "./Components/TaskInput/TaskInput";
import Header from "./Components/Header/Header";

function App() {
  return (
    <TaskListProvider>
      <Header />
      <TaskInput />
      <TaskList />
    </TaskListProvider>
  );
}

export default App;

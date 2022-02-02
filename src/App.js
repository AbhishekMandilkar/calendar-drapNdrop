import { Calendar, SideBar } from "./components";
import store from "./app/store";
import { Provider } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function App() {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <div className="App flex h-full ">
          <SideBar />
          <Calendar />
        </div>
      </DndProvider>
    </Provider>
  );
}

export default App;

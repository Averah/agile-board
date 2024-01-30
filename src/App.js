import { observer } from "mobx-react-lite";
import { useStore } from "./hooks/useStore";


function App() {
  const { users } = useStore();
  console.log(users.toJSON());
  return (
    <div className="App">
      start
    </div>
  );
}

export default observer(App);

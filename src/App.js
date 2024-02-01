import { observer } from "mobx-react-lite";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";


function App() {
  return (
    <>
    <Header />
    <div>
      <Dashboard />
    </div>
    </>

  );
}

export default observer(App);
 
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Routers from "./routers/Router";
import './scss/main.scss';

function App() {
  return (
    <div className="App">
      
      <Nav />

      <div className="main-wrapper">
        <SideBar />

        <Routers />
      </div>

    </div>
  );
}

export default App;

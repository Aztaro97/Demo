import './App.css';
import Header from "./components/header/Navbar";
import SideBar from "./components/sidebar/sidebar";
import Main from "./components/main/main"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="d-flex" style={{height:"100vh"}}>
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import ItemCount from "./components/ItemCount/ItemCount";

function App() {
    return (
        <div className="App">
            <Navbar />
            <ItemListContainer greeting={"Bienvenido a Beatport"} />
            {/* <ItemCount /> */}
        </div>
    );
}

export default App;

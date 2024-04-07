import "./App.css";
import Events from "./Components/Pages/Events";
import AddEvents from "./Components/Pages/AddEvents";
import Navbar from "./Components/Shared/Navbar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <AddEvents />
      <Events></Events>
    </>
  );
}

export default App;

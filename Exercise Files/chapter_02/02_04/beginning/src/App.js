import Navbar from "./components/Navbar";
import Card from "./components/Card"
import "./App.css";

//https://via.placeholder.com/200
function App() {
  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <h1>Gallery</h1>
        <div className="row">
        {Array.apply(null, {length: 9}).map((_, index) => <Card key={index} />)}
        </div>
      </div>
    </>
  );
}

export default App;

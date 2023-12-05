import './App.css';
import Navbar from './components/Navbar.jsx';
import Gallery from './components/Gallery.jsx';
import UploadForm from './components/UploadForm';
import { useState } from 'react';

function App() {
  const [isCollapsed, collapse] = useState(true);
  const [input, setInput] = useState();
  const handleOnChange = event => setInput(event.target.value);
  const handleOnSubmit = () => {};

  const toggle = () => {
    collapse(!isCollapsed);
  };
  return (
    <div className="App">
      <Navbar />
      <div
        className="container mt-5 align-items-center justify-content-center"
        align="center"
      >
        <button className="btn btn-success float-end" onClick={toggle}>
          {isCollapsed ? '➕ Add' : '❌ Close'}
        </button>
        <div className="clearfix mb-4"></div>
        <UploadForm
          isVisible={!isCollapsed}
          handleChange={handleOnChange}
          handleSubmit={handleOnSubmit}
        />
        <Gallery />
      </div>
    </div>
  );
}

export default App;

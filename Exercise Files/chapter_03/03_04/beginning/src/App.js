import { useState } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import UploadForm from './components/UploadForm';
import './App.css';

// const photos = [
//   'https://picsum.photos/id/1001/200/200',
//   'https://picsum.photos/id/1002/200/200',
//   'https://picsum.photos/id/1003/200/200',
//   'https://picsum.photos/id/1004/200/200',
//   'https://picsum.photos/id/1005/200/200',
//   'https://picsum.photos/id/1006/200/200',
// ];

function App() {
  const [items, setItems] = useState([]);
  const [isCollapsed, collapse] = useState(false);
  const toggle = () => collapse(!isCollapsed);

  const [input, setInput] = useState();
  const handleOnChange = event => setInput(event.target.value);
  const handleOnSubmit = event => {
    event.preventDefault();
    setItems({});
  };

  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={toggle}>
          {isCollapsed ? 'Close' : '+ Add'}
        </button>
        <div className="clearfix mb-4"></div>
        <UploadForm
          isVisible={isCollapsed}
          handleChange={handleOnChange}
          handleSubmit={handleOnSubmit}
        />
        <h1>Gallery</h1>
        <div className="row">
          {items.map((photo, index) => (
            <Card key={index} src={photo} />
          ))}
        </div>
      </div>
    </>
  );
}
export default App;

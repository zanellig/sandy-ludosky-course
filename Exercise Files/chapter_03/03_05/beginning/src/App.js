import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import UploadForm from './components/UploadForm';
import './App.css';

const photos = ['https://picsum.photos/id/1001/200/200'];

function App() {
  const [isCollapsed, collapse] = useState(false);
  const toggle = () => collapse(!isCollapsed);

  const [inputs, setInput] = useState({ title: null, file: null, path: null });
  const [items, setItems] = useState(photos);

  const handleOnChange = e => {
    console.log(e.target.name);
    if (e.target.name === 'file') {
      setInput({
        ...inputs,
        file: e.target.files[0],
        path: URL.createObjectURL(e.target.files[0]),
        fakepath: e.target.value,
      });
    }
    if (e.target.name === 'title') {
      setInput({
        title: e.target.value,
        ...inputs,
      });
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    setItems([inputs.path, ...items]);
  };

  const [count, setCount] = useState();

  useEffect(() => {
    setCount(`You have ${items.length} image${items.length > 1 ? 's' : ''}`);
  }, [items]);

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
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
          componentInput={{ ...inputs }}
        />
        {count}
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

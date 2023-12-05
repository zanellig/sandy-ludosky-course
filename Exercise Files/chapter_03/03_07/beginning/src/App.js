import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import UploadForm from './components/UploadForm';
import './App.css';
import { useReducer } from 'react';

const handleOnChange = (state, e) => {
  if (e.target.name === 'file') {
    return {
      ...state.inputs,
      file: e.target.files[0],
      path: URL.createObjectURL(e.target.files[0]),
    };
  } else {
    return { ...state.inputs, title: e.target.value };
  }
};

const initialState = {
  items: [],
  count: [].length,
  inputs: { title: null, file: null, path: null },
  isCollapsed: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'setItems':
      return {
        ...state,
        items: [state.inputs, ...state.items],
        count: state.items.lenght + 1,
        inputs: initialState.inputs,
      };
    case 'setInputs':
      return { ...state, inputs: handleOnChange(state, action.payload.value) };
    case 'collapse':
      return { ...state, isCollapsed: action.payload.bool };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [count, setCount] = useState();

  const toggle = () =>
    dispatch({ type: 'collapse', payload: { bool: !state.isCollapsed } });

  const handleOnChange = e =>
    dispatch({ type: 'setInputs', payload: { value: e } });

  const handleOnSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'setItems' });
    toggle();
  };

  useEffect(() => {
    setCount(
      `you have ${state.items.length} image${
        state.items.length !== 1 ? 's' : ''
      }`
    );
  }, [state.items]);
  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={toggle}>
          {state.isCollapsed ? 'Close' : '+ Add'}
        </button>
        <div className="clearfix mb-4"></div>
        <UploadForm
          inputs={state.inputs}
          isVisible={state.isCollapsed}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        />
        <h1>Gallery</h1>
        {count}
        <div className="row">
          {state.items.map((photo, index) => (
            <Card key={index} src={photo.path} />
          ))}
        </div>
      </div>
    </>
  );
}
export default App;

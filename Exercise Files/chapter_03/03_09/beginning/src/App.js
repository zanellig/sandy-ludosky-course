import { useState, useEffect, useReducer, useMemo } from 'react';
import Card from './components/Card';
import './App.css';
import Layout from './components/Layout';

const photos = [];

const initialState = {
  items: photos,
  count: photos.length,
  inputs: { title: null, file: null, path: null },
  isCollapsed: false,
};
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

function reducer(state, action) {
  switch (action.type) {
    case 'setItem':
      return {
        ...state,
        items: [state.inputs, ...state.items],
        inputs: initialState.inputs,
        count: state.count + 1,
      };
    case 'setInputs':
      return {
        ...state,
        inputs: handleOnChange(state, action.payload.value),
      };
    case 'collapse':
      return {
        ...state,
        isCollapsed: action.payload.bool,
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggle = bool => dispatch({ type: 'collapse', payload: { bool } });
  const handleOnChange = e =>
    dispatch({ type: 'setInputs', payload: { value: e } });
  const handleOnSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'setItem' });
    toggle(!state.isCollapsed);
  };

  const count = useMemo(() => {
    return `you have ${state.count} image${state.count !== 1 ? 's' : ''}`;
  }, [state.count]);

  return (
    <>
      <Layout
        state={state}
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
        toggle={toggle}
      >
        <h1 className="text-center">Gallery</h1>
        <p>{count}</p>
        <div className="row">
          {state.items.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </Layout>
    </>
  );
}
export default App;

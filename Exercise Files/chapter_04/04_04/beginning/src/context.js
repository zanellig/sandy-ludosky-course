import { createContext, useReducer } from 'react';

export const Context = createContext();
const photos = [];

const initialState = {
  items: photos,
  count: photos.length,
  inputs: { title: null, file: null, path: null },
  isCollapsed: false,
};
const handleChange = (state, e) => {
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
        count: state.items.length + 1,
        inputs: { title: null, file: null, path: null },
      };
    case 'setInputs':
      return {
        ...state,
        inputs: handleChange(state, action.payload.value),
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

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggle = bool => dispatch({ type: 'collapse', payload: { bool } });

  const handleOnChange = e =>
    dispatch({ type: 'setInputs', payload: { value: e } });
  const handleOnSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'setItem' });
    toggle(!state.isCollapsed);
  };

  return (
    <Context.Provider
      value={{
        dispatch,
        state,
        handleOnChange,
        handleOnSubmit,
        toggle,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default Provider;

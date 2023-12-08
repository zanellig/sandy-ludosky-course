import { useContext } from 'react';

import Navbar from './Navbar';
import UploadForm from './UploadForm';

import { Context } from '../context';

function Layout({ children }) {
  const { state, toggle } = useContext(Context);

  return (
    <>
      <Navbar />
      <div className="container  mt-5">
        <button
          className="btn btn-success float-end"
          onClick={() => toggle(!state.isCollapsed)}
        >
          {state.isCollapsed ? 'Close' : '+ Add'}
        </button>
        <div className="clearfix mb-4"></div>
        <UploadForm />
        {children}
      </div>
    </>
  );
}
export default Layout;

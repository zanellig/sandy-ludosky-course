import { useContext } from "react"
import { Context } from "../context"
import Navbar from "./Navbar"
import UploadForm from "./UploadForm"

function Layout({ children }) {
    const { dispatch, state, error } = useContext(Context)
    const { isCollapsed : isVisible, inputs  } = state // destructuring the current state
    const toggle = (bool) => dispatch({ type: "collapse", payload: { bool }})
    return(
    <>
    <Navbar />
    {error && <p style={{ color: "crimson"}}>update the firebase configuration in .env file to access the firebase services</p>}
        <div className="container  mt-5">
        <button className="btn btn-success float-end" onClick={() => toggle(!isVisible)}>{isVisible ? 'Close' : '+ Add'}</button>
        <div className="clearfix mb-4"></div>
        <UploadForm 
            inputs={inputs}
            isVisible={isVisible}
        />
        {children}
        </div>
      </>)
}
export default Layout
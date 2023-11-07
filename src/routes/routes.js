import { BrowserRouter as Router,Routes,Route,Redirct } from "react-router-dom"
import Home from "../pages/Home/Home"

const routesPrincipal = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>          
        </Routes>
    </Router>
    </>
  )
}

export default routesPrincipal
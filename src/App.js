import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Navigate,Routes,Route,redirect  } from "react-router-dom"
import './App.css';
import Loading from "./componetes/Loading";


const Tickes = lazy(()=>import("./pages/Tickes/Tickes"))
const Home = lazy(() => import("../src/pages/Home/Home"));


function App() {
  return (
    <div className="App">
    <Router>
      <Suspense fallback={<Loading/>}>
        <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/tickes" element={<Tickes/>}/>  
            <Route
              path="*"
              element={<Navigate to="/" replace />} />
        </Routes>        
      </Suspense>

    </Router>
    </div>
  );
}

export default App;

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import About from "./pages/About.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/sing-in" element={<SignIn/>}/>
                <Route path="/sing-up" element={<SignUp/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>

            </Routes>
        </BrowserRouter>
    )
}
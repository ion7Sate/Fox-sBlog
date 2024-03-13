import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import About from "./pages/About.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Header from "./components/Header.jsx";
import Projects from "./pages/Projects.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/sing-in" element={<SignIn/>}/>
                <Route path="/sing-up" element={<SignUp/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>

            </Routes>
        </BrowserRouter>
    )
}
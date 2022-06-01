import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router";

import Navibar from "./components/Navibar/Navibar";
import Footer from "./components/Footer/Footer";
import GraphicEditor from "./components/GraphicEditor/GraphicEditor";
import About from "./components/About/About";
import Info from "./components/Info/Info";


function App() {
    return (
        <div className="App">
            <div className="wrapper d-flex flex-column min-vh-100">
                <Navibar/>

                <Routes>
                    <Route path='/' element={<GraphicEditor/>}/>
                    <Route path='/About' element={<About/>}/>
                    <Route path='/Info' element={<Info/>}/>
                </Routes>

                <Footer/>
            </div>
        </div>
    );
}

export default App;




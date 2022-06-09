import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navibar from "./components/Navibar/Navibar";
import Footer from "./components/Footer/Footer";
import AppRouter from "./components/AppRouter/AppRouter";


function App() {
    return (
        <div className="App">
            <div className="wrapper d-flex flex-column min-vh-100">
                <Navibar/>
                <AppRouter/>
                {/*<Routes>*/}
                {/*    <Route path='/' element={<GraphicEditor/>}/>*/}
                {/*    <Route path='/About' element={<About/>}/>*/}
                {/*    <Route path='/Info' element={<Info/>}/>*/}
                {/*    <Route path='/TasksPage' element={<TasksPage/>}/>*/}
                {/*    <Route path='/Task' element={<Task/>}/>*/}
                {/*    <Route path='/GebraExample' element={<GebraExample/>}/>*/}
                {/*</Routes>*/}

                <Footer/>
            </div>
        </div>
    );
}

export default App;




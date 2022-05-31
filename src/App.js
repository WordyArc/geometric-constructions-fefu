import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navibar from "./components/Navibar/Navibar";
import Footer from "./components/Footer/Footer";
// import Info from "./components/Info/Info";

function App() {
  return (
    <div className="App">
      <div className="wrapper d-flex flex-column min-vh-100">
          <Navibar/>
          {/*<Info/>*/}
          <Footer/>
      </div>

    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navibar from "./components/Navibar/Navibar";
import Footer from "./components/Footer/Footer";
import Info from "./components/Info/Info";

function App() {
  return (
    <div className="App">
      <Navibar/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;

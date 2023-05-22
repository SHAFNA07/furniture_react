
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Furniture from './Furniture';
import Header from './Header';
import FurnitureView from './FurnitureView';
import Home from './Home';
import About from './About';





function App() {
  return (
    <div className="App">

      <Header></Header>
      <Home/>
      <About/>
      <Routes>
      <Route path='/' element={<Furniture/>}>  </Route> 
      <Route path='/viewFurniture/:id' element={<FurnitureView></FurnitureView>}>  </Route>
      </Routes>

      <Footer></Footer>
      
    </div>
  );
}

export default App;

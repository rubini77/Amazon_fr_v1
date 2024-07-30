
import SignUpPage from './Module/SignUpPage';
import SignInPage from './Module/SignInPage'
import AddProducts from './Module/AddProducts'
import HomePage from './Module/HomePage'
import AdminPage from './Module/AdminPage'
import Navbarcheck from './Module/navbarcheck'
import ProductViewPage from './Module/ProductViewPage'
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<SignUpPage/>}></Route>
        <Route path='/addproducts' element={<AddProducts/>}></Route>
        <Route path='/signin' element={<SignInPage/>}></Route>
        <Route path='/homepage' element={<HomePage/>}></Route>
        <Route path='/adminpage' element={<AdminPage/>}></Route>
        <Route path='/productviewpage' element={<ProductViewPage/>}></Route>
        <Route path='/navbarcheck' element={<Navbarcheck/>}></Route>
       </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;


import SignUpPage from './Module/SignUpPage';
import SignInPage from './Module/SignInPage'
import AddProducts from './Module/AddProducts'
import HomePage from './Module/HomePage'
import Check from './Module/check'
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
        <Route path='/check' element={<Check/>}></Route>
       </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;

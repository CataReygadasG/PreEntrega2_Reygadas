import ItemListContainer from "./routes/ItemListContainer"
import ItemDetailContainer from "./routes/ItemDetailContainer"
import CartWidget from "./routes/CartWidget"
import NavBar from "./componentes/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {

  return (
<BrowserRouter>

    <NavBar/>
    
    <Routes>
    <Route path='/' element={<ItemListContainer />} />
    <Route path='/category/:id' element={<ItemListContainer />} />
    <Route path='/item/:id' element={<ItemDetailContainer />} />
    <Route exact path='/carrito' element={<CartWidget />} />
 
    </Routes>
    </BrowserRouter>

  );
}

export default App;
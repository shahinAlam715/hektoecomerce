import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./Component/Pages/Home"
import { Product } from "./Component/Pages/Product";
import Rootlayout from "./Component/Rootlayout";
import Productdetails from "./Component/Pages/Productdetails";
import Cart from "./Component/Pages/Cart";
import Error from "./Component/Error";

let router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route element={<Rootlayout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/product/:id" element={<Productdetails/>}></Route>
        <Route path="/productdetails" element={<Productdetails/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
    </Route>
    <Route path="*" element={<Error/>}></Route>
  </>
))



function App() {
  

  
  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

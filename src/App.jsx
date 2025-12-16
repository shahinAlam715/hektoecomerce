import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./Component/Pages/Home"
import { Product } from "./Component/Pages/Product";
import Rootlayout from "./Component/Rootlayout";
import Productdetails from "./Component/Pages/Productdetails";
import Cart from "./Component/Pages/Cart";
import Error from "./Component/Error";
import Checkout from "./Component/Pages/Checkout";
import { MdArrowUpward } from "react-icons/md";
import { useState } from "react";
import Myaccount from "./Component/Myaccount";
import Registration from "./Component/Registration";



let router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route element={<Rootlayout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/product/:id" element={<Productdetails/>}></Route>
        <Route path="/productdetails" element={<Productdetails/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/myaccount" element={<Myaccount/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
    </Route>
    <Route path="*" element={<Error/>}></Route>
  </>
))



function App() {

let handletop = ()=>{
 
  window.scrollTo({top: 0, behavior: "smooth"})

}

let [ttop1, settop1] = useState(false)

window.addEventListener("scroll", ()=>{
  let scroling = window.scrollY
  console.log(scroling);

  if (scroling > 40) {

    settop1(!ttop1)

  }else{
     settop1(false)
  }
  
})

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
     {ttop1 &&
     <div className="" onClick={handletop}>
        <div className="ami">
          <h2>
          <MdArrowUpward />
          </h2>
        </div>
     </div>
     }
    </>
  )
}

export default App

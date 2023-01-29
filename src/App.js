import LoginPage from "./pages/LoginPage/LoginPage"
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import HomePage from "./pages/HomePage/HomePage"
import ProductPage from "./pages/ProductPage/ProductPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserContext } from "./contexts/UserContext"
import { useState } from "react"

export default function App() {

  const [ selectedProduct, setSelectedProduct ] = useState({})
  const [  totaValue, setTotalValue ] = useState(0)

  return (

    <UserContext.Provider value={{ selectedProduct, setSelectedProduct, totaValue, setTotalValue}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/productPage" element={<ProductPage />} />
        </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    
  )
}
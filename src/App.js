import React,{useContext} from 'react'
import Introduction from './components/intro/introduction'
import About from "../src/components/About/About"
import ProductList from './components/ProductList/ProductList'
import Contact from './components/Contact/Contact'
import Toggle from './components/Toggle/Toggle';
import { ThemeContext } from './context'

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div style={{backgroundColor : darkMode ?"black" : "white" , Color :darkMode && "White"}}>
     <Toggle> </Toggle>
     <Introduction />
    <About />
    <ProductList/>
    <Contact/>
  

   </div>
  )
}

export default App
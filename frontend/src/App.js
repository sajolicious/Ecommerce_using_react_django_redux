import './bootstrap.min.css'
import { Container } from 'react-bootstrap'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header  from './components/Header'
import { Footer } from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen' 
import ProfileScreen from './screens/ProfileScreen' 
function App(){
  return (
    <Router>

      <Header/>
      <main className="py-5">
     
        <Container>
        <Routes>
          <Route path='/' element={<HomeScreen/>} exact/>
          <Route path='/login' element={<LoginScreen/>} />
          <Route path='/register' element={<RegisterScreen/>} />
          <Route path='/:id' element={<ProductScreen/>} />
          <Route path='/:id?' element={<CartScreen/>} />
          <Route path="/cart/:id?" element={CartScreen} />
          <Route path='/profile' element={<ProfileScreen/>} />
        </Routes>
          </Container>
        
      </main>
      <Footer/>
    
    </Router>
  );
}

export default App;

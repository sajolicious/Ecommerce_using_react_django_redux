
import Container from 'react-bootstrap/Container';
import { useSelector,useDispatch } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import { NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions';
function Header() {
  const userLogin=useSelector(state=>state.userLogin)
  const {userInfo}=userLogin
  const dispatch=useDispatch()
  const logoutHandler=()=>
  {
    dispatch(logout())
  }
   
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container fluid>
      <LinkContainer to="/">
        <Navbar.Brand >ProShop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
              <LinkContainer to="/cart">
            <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
            </LinkContainer>
            {userInfo ?(
              <NavDropdown title={userInfo.name} id='user'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>LogOut</NavDropdown.Item>
              </NavDropdown>
            ):(
              <LinkContainer to="/login">
              <Nav.Link ><i className="fas fa-user"></i>Login</Nav.Link>
              </LinkContainer>
            )
            }
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
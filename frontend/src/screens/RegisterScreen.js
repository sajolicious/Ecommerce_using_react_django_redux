import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const location = useLocation;
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const userRegister = useSelector((state) => state.userRegister);

  const { userInfo, loading, error } = userRegister;
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== ConfirmPassword){
       setMessage('password do not match')
    }else{
        dispatch(register(name, email, password));
    }
    /* FIRING OFF THE ACTION CREATORS USING DISPATCH FOR LOGIN */
    
  };

  return (
  
  <FormContainer>
        <h1>Sign In</h1>
        {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}

   <Form onSubmit={submitHandler}>
   <Form.Group controlId="name">
          <Form.Label>User Name</Form.Label>
          <Form.Control
          required
            type="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
          required
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
          required
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
          
        <Form.Group controlId="ConfirmPassword">
          <Form.Label>Password Confirm</Form.Label>
          <Form.Control
          required
            type="password"
            placeholder="ConfirmPassword"
            value={ConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-3">
          Register
        </Button>
   </Form>
   
   <Row className="py-3">
        <Col>
          Have An Account ?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            Sign In
          </Link>
        </Col>
      </Row>
  </FormContainer>
  
  )
};

export default RegisterScreen;

import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link, useLocation} from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
function LoginScreen() {
  /* STATE */
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();
  const location=useLocation

  /* SETTING UP REDIRECT */
  const redirect = location.search ? location.search.split("=")[1] : "/";

  /* PULLING A PART OF STATE FROM THE ACTUAL STATE IN THE REDUX STORE */
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo, loading, error } = userLogin;
  
  /* REDIRECTING AN ALREADY LOGGED IN USER, AS WE DON'T WANT THEM TO SEE THE LOGIN PAGE */
  const navigate=useNavigate()
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  /* HANDLERS */

  const submitHandler = (e) => {
    e.preventDefault();

    /* FIRING OFF THE ACTION CREATORS USING DISPATCH FOR LOGIN */
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-3">
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New Customer ?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default LoginScreen;
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, login } from "../actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { updateUserprofile } from "../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { user, loading, error } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin

  
  const userUpdateProfile = useSelector((state) => state.userLogin);
  const {success } = userUpdateProfile

  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }else
    {
      if (!user || !user.name||success){
        dispatch({type:USER_UPDATE_PROFILE_RESET})
        dispatch(getUserDetails('profile'))
      }else{
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [navigate, dispatch,userInfo,user,success]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== ConfirmPassword){
       setMessage('password do not match')
    }else{
      dispatch(updateUserprofile({
        'id':user._id,
        'name':name,
        'email':email,
        'password':password
    }))
    }
    /* FIRING OFF THE ACTION CREATORS USING DISPATCH FOR LOGIN */
    
  };

  
  return (
    <div>
      <Col md={3}>
        <h2>user Profile</h2>
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
          
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
          
        <Form.Group controlId="ConfirmPassword">
          <Form.Label>Password Confirm</Form.Label>
          <Form.Control
          
            type="password"
            placeholder="ConfirmPassword"
            value={ConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-3">
          Update
        </Button>
   </Form>
        </Col>
        <Col>
        <h2>user order </h2>
        </Col>

    </div>
  )
}

export default ProfileScreen

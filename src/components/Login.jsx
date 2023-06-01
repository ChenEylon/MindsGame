import React, { useEffect, useState } from 'react';
import "./Login.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginData, setLoginData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const loginDataString = localStorage.getItem('loginData');
    if (loginDataString) {
      const parsedLoginData = JSON.parse(loginDataString);
      setLoginData(parsedLoginData);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const updatedLoginData = {
      ...loginData,
      [username]: password
    };

    const updatedLoginDataString = JSON.stringify(updatedLoginData);

    localStorage.setItem('loginData', updatedLoginDataString);

    setUsername('');
    setPassword('');
    setLoginData(updatedLoginData);
    setSubmitted(true);
  };

  const handleNewForm = () => {
    setSubmitted(false);
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              {submitted ? (
                <>
                  <h2 className="fw-bold mb-2 text-uppercase">Form Submitted</h2>
                  <p className="text-white-50 mb-5">Thank you for submitting the form!</p>
                  <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={handleNewForm}>
                    Create New Form
                  </MDBBtn>
                </>
              ) : (
                <>
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>
                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    labelClass='text-white'
                    label='Email address'
                    id='emailFormControlLg'
                    type='email'
                    size="lg"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    labelClass='text-white'
                    label='Password'
                    id='passwordFormControlLg'
                    type='password'
                    size="lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                  <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={handleLogin}>
                    Login
                  </MDBBtn>
                  <div className='d-flex flex-row mt-3 mb-5'>
                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                      <MDBIcon fab icon='facebook-f' size="lg"/>
                    </MDBBtn>
                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                      <MDBIcon fab icon='twitter' size="lg"/>
                    </MDBBtn>
                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                      <MDBIcon fab icon='google' size="lg"/>
                    </MDBBtn>
                  </div>
                  <div>
                    <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p>
                  </div>
                </>
              )}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;

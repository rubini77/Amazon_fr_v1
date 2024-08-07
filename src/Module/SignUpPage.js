import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';
import * as formik from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().matches(/^[a-z]+\d*@gmail\.com$/, 'Invalid email format').required(),
    password: yup.string().required()
  }); 

  const [values,Setdata]=useState({
        name:"",
        email:"",
        password:""
    });

   const navigate = useNavigate()
  const handleSubmit =(values, {setSubmitting})=>{
    // event.preventDefault();
    console.log('SUBMITTING FORM:' ,values)
    fetch("http://localhost:8080/user/saveuser",
        {
            headers:{
                "Content-Type":"application/json"
            },
            method:"post",
            body:JSON.stringify(values)
        })
        .then((response)=>{
            if(!response.ok){
                throw new Error('Failed to fetch data');
            }
            else{
                return response.json();
            }
        })
        .then((response)=>{
          if(response == true){
            console.log("the Fectched data is",response);
            Setdata(response);
            navigate('/SignIn');
          }
          else{
            alert("Email/username already exists")
            
          }
        })
        .catch((e)=>{
            console.log("error",e);
        })
        .finally(() =>{
          setSubmitting(false);
        })
      
  };


  return (
    <div>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <div className="">
            
            <img src="/amazon-logo.jpg" style={{height:"100px",width:"150px"}}></img>
          </div>
          <div className="p-3 border rounded">
                  <div className="py-1">
                      <div className="fs-3">Create Account</div>
                  </div>
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
        name: '',
        email: '',
        password: '',
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        
        <Form noValidate onSubmit={handleSubmit}>
          <Col className="mb-3" style={{fontSize:"13px"}}>
      
      
            <Form.Group as={Col}  controlId="validationFormik03">
              <Form.Label className="fw-bold">Your name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First and last name"
                style={{minWidth:"320px"}}
                name="name"
                value={values.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />

              <Form.Control.Feedback type="invalid" >
              {errors.name}
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col}  controlId="validationFormik04">
              <Form.Label className="fw-bold">Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email Address"
                style={{minWidth:"320px"}}
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid" >
              {errors.email}
              </Form.Control.Feedback>
              {/* <Form.Control.Feedback type="invalid">
              {errors.email && <div className="text-danger">{errors.email}</div>}
              </Form.Control.Feedback> */}
            </Form.Group>


            <Form.Group as={Col}  controlId="validationFormik05">
              <Form.Label className="fw-bold">password</Form.Label>
              <Form.Control
                type="password"
                placeholder="At least 6 characters"
                style={{minWidth:"320px"}}
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />

              <Form.Control.Feedback type="invalid" >
              {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            </Col>
            <p  className="py-3 text-black">
                To verify your number, we will send you a text<br/>
                message with a temporary code.Message and data<br/>
                rates may apply.
            </p>

         
          <div className="text-center pb-4 border-bottom" style={{boxShadow: "0 2px 2px -2px rgba(0, 0, 0, 0.2)" }}>
                    <button type="submit" className="btn w-100 rounded p-1" style={{backgroundColor:"#FFD814"}}><small>Verify Mobile Number</small></button>
                </div>
            </Form>
             )}
            </Formik>
            
                <div className="pt-4" style={{fontSize:"13px"}}>
                    <div>
                        <div className="fw-normal">Already have an account? <a href="#" style={{textDecoration:"none"}}>Sign in</a></div>
                        <div>Buying for work? <a href="#" style={{textDecoration:"none"}}>Create a free business account</a></div>
                    </div>
                    <div className="pt-4">
                        <div>
                        By creating an account or logging in, you agree to<br/>
                        Amazon’s <a href="#" style={{textDecoration:"none"}}>Conditions of Use</a> and 
                        <a href="#" style={{textDecoration:"none"}}>Privacy Policy.</a>
                        </div>
                    </div>
                </div>
                </div>
          </div>
          
          <div className="py-3" style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"10px"}}>
               
                <Stack direction="horizontal" gap={1}>
      <div className="p-1"><a href="#" style={{textDecoration:"none"}}>Conditions of Use</a></div>
      <div className="p-1"><a href="#" style={{textDecoration:"none"}}>Privacy Notice</a></div>
      <div className="p-1"><a href="#" style={{textDecoration:"none"}}>Help</a></div>
    </Stack>
          </div>
   </div>
                   
       
  );

}
export default SignUpForm;
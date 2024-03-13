import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import ProductImgUpload from '../Components/ProductImgUpload';
import * as yup from 'yup';
import { useState } from 'react';
import { Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import Table from 'react-bootstrap/Table';


function ContainerOutsideExample() {
  const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.string().required()
  }); 

    // const[productData,setData] = useState({
    //     name:"",
    //     description:"",
    //     price:"",
    //      productImage:""
    // });
    const [selectedImage, setSelectedImage] = useState("");
    const handleImageUpload =async (imageName) => {
      setSelectedImage(imageName);
    };

  // const handleFile = () => {
  //   console.log("hello world")
  //   const formData = new FormData();
  //   formData.append("file", selectedImage);

  //   fetch("http://localhost:8080/file/upload", {
  //       method: 'POST',
  //       body: formData,
  //       dataType: "jsonp"
  //   })
  //   .then(response => response.text())
  //   .then(text => {
       
  //       console.log(text)
        
  //   })
  // }
    
    const handleSubmit = (productData, {setSubmitting}) => {
        const productDetails = {
            name: productData.name,
            price: productData.price,
            description: productData.description,
             image:selectedImage
        }
        fetch("http://localhost:8080/product/set", {
            headers:{
                "Content-Type": "application/json"
            },
            method: "post",
            body: JSON.stringify(productDetails)
        })
        .then(response => {
            console.log("Data Received " + response)
        })
        .catch((e)=>{
          console.log("error",e);
        })
        .finally(() =>{
          setSubmitting(false);
        })

    }

    

  return (
    <div>
        <div className="p-3 bg-primary text-center">
        <div>
          <div href="#" className='fw-bolder fs-4 text-white'>Amazon.com</div>
        </div>
      </div>
    <Container>
      
   
    <div>
    <div className='m-2' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
        name: '',
        description: '',
        price: '',
        image:''
        
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        
        <Form noValidate onSubmit={handleSubmit}>
          <Col className="mb-3" >
          <Form.Group>
          <Form.Label className="fw-bold">Product Image</Form.Label>
            <ProductImgUpload onImageUpload={ handleImageUpload}/>
            </Form.Group>
      
            <Form.Group as={Col}  controlId="validationFormik03">
              <Form.Label className="fw-bold">Product name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product name"
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
              <Form.Label className="fw-bold">Product Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                style={{minWidth:"320px"}}
                name="description"
                value={values.description}
                onChange={handleChange}
                isInvalid={!!errors.description}
              />
              <Form.Control.Feedback type="invalid" >
              {errors.description}
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col}  controlId="validationFormik05">
              <Form.Label className="fw-bold">Product Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Price"
                style={{minWidth:"320px"}}
                name="price"
                value={values.price}
                onChange={handleChange}
                isInvalid={!!errors.price}
              />

              <Form.Control.Feedback type="invalid" >
              {errors.price}
              </Form.Control.Feedback>
            </Form.Group>
           
            </Col>
            
        <button className='btn btn-primary'>Add Product</button>
            
            </Form>
              
             )}
            </Formik>
           
        </div>
    </div>
    </Container>
    
    </div>
  );
}

export default ContainerOutsideExample;
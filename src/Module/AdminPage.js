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
    price: yup.string().required(),
    category:yup.string().required()
  }); 

    
    const [selectedImage, setSelectedImage] = useState("");

    // const[datas,setDatas]=useState(
    //   {
    //     name:'',
    //     description:'',
    //     price:''
    //   }
    // )
    
    const handleSubmit = (productData, {setSubmitting}) => {
      console.log("hello world")
    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("name",productData.name)
    formData.append("description",productData.description)
    formData.append("price",productData.price)
    formData.append("category",productData.category)
        
        fetch("http://localhost:8080/file/uploadProduct", {
            // headers:{
            //     "Content-Type": "application/json"
            // },
            method: "post",
            body: formData,
            dataType: "jsonp"
        })
        .then(response => {
            console.log("Data Received " + response.json())
            alert("Product Details Uploaded Succuessfull")
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
        image:'',
        category:''
         
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        
        <Form noValidate onSubmit={handleSubmit}>
          <Col className="mb-3" >
         
      
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

            <Form.Group as={Col}  controlId="validationFormik06">
              <Form.Label className="fw-bold">Product category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category"
                style={{minWidth:"320px"}}
                name="category"
                value={values.category}
                onChange={handleChange}
                isInvalid={!!errors.category}
              />
              <Form.Control.Feedback type="invalid" >
              {errors.category}
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

             <Form.Group>
          <Form.Label className="fw-bold">Product Image</Form.Label>
          <div>

            {selectedImage && (
              <div>
                <img
                  alt="not found"
                  width={"250px"}
                  src={URL.createObjectURL(selectedImage)}
                />
                <br />
                {/* <button className="btn btn-danger" onClick={() => setSelectedImage(null)}>Remove</button>
                <button className="btn btn-primary" onClick={() => handleFile()}>Upload</button> */}
              </div>
            )}
            <br />
            <br />

            <input
              type="file"
              name="myImage"
              // value={selectedImage}
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
            />
            </div>
           
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
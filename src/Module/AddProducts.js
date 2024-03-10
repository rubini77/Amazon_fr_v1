import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ProductImgUpload from './ProductImgUpload';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';


function ContainerOutsideExample() {

    const[productData,setData] = useState({
        productName:"",
        productDes:"",
        productPrice:""
    });
    const givenData =  (event) => {
        const {name, value} = event.target
        setData({...productData, [name]:value})
    }
    const submitProduct = () => {
        const productDetails = {
            name: productData.productName,
            price: productData.productPrice,
            description: productData.productDes
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

    }
  return (
    <div>
        <Navbar expand="lg" className="bg-primary ">
        <Container>
          <Navbar.Brand href="#">Add Products</Navbar.Brand>
        </Container>
      </Navbar>
    <Container>
      
   
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Product Price</th>
            <th>Product Image</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{paddingTop:"50px"}}>1</td>
            <td style={{paddingTop:"50px"}}><input required name="productName" value={productData.productName} onChange={givenData} type="text"></input></td>
            <td style={{paddingTop:"50px"}}><input required name="productDes" value={productData.productDes} onChange={givenData} type="text"></input></td>
            <td style={{paddingTop:"50px"}}><input required name="productPrice" value={productData.productPrice} onChange={givenData} type="text"></input></td>
            <td><ProductImgUpload/></td>
            <td style={{paddingTop:"50px"}}><button className='btn btn-primary' onClick={submitProduct}>Add Product</button></td>
            <td style={{paddingTop:"50px"}}><button className='btn btn-danger'>Delete Product</button></td>
          </tr>
          
        </tbody>
      </Table>
    </div>
    </Container>
    </div>
  );
}

export default ContainerOutsideExample;
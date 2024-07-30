import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

function Demo() {
  const [datas, setdatas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/product/get')
      .then(response => {
        setdatas(response.data);
      })
      .catch(error => {
        console.error('Error fetching hotels:', error);
      });
  }, []);

  const deleteProduct = (id) => {
    fetch(`http://localhost:8080/product/delete/${id}`, {
            headers:{
                "Content-Type": "application/json"
            },
            method: "delete",
            body: JSON.stringify({id:id})
        })
        .then(response => {
            console.log("Data Received " + response)
            window.location.reload()
        })
        .catch((e)=>{
          console.log("error",e);
        })
        


  }

  return (
    <div>
      <h1>Amazon</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Product Category</th>
            <th>Product Price</th>
            <th>Product Image</th>
            {/* Add more columns if needed */}
          </tr>
        </thead>
        <tbody>
          {datas.map(data => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.description}</td>
              <td>{data.category}</td>
              <td>{data.price}</td>
              <td><img src={"http://localhost:8080/uploads/"+data.image} style={{height:"80px",width:"130px"}}></img></td>
              <td><button className='btn btn-danger' onClick={() => deleteProduct(data.id)}>DELETE</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Demo;
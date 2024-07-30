import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row  from 'react-bootstrap/Row';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

function NavScrollExample() {
  return (
    <div>
    <Navbar  className="" style={{backgroundColor:"#131921"}} >
     
        <Row className="align-items-center">
          <Col xs="auto" className='d-none d-md-flex' style={{display:"flex"}}>
        <Navbar.Brand href="#"><img style={{height:"30px",width:"100px"}} src="/amazon-text-white-img-with-bg-removebg-preview.png"></img></Navbar.Brand>
        
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className='d-flex flex-column text-white' style={{fontSize:"13px"}}>
            <div className='ps-2'>Delivering to Location</div>
            <div className='fw-bold'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg>
              Update Location
            </div>
            </div>
            
          </Nav>         
          </Navbar.Collapse>
          </Col>
          <Col xs="auto" className="mx-auto" style={{minWidth:"350px"}}>
        <InputGroup className="my-1 text-white" >
        <DropdownButton
        style={{backgroundColor:"grey"}}
        
          variant="outline-secondary" 
          title="All"
          id="input-group-dropdown-1"
        >
          <div style={{height:"300px",overflowY:"scroll",fontSize:"13px"}}>
          <Dropdown.Item href="#">All Categories</Dropdown.Item>
          <Dropdown.Item href="#">Alexa Skills</Dropdown.Item>
          <Dropdown.Item href="#">Amazon Devices</Dropdown.Item>
          <Dropdown.Item href="#">Amazon Fashion</Dropdown.Item>
          <Dropdown.Item href="#">Amazon Fresh</Dropdown.Item>
          <Dropdown.Item href="#">Amazon Pharmacy</Dropdown.Item>
          <Dropdown.Item href="#">Appliances</Dropdown.Item>
          <Dropdown.Item href="#">Apps and Games</Dropdown.Item>
          <Dropdown.Item href="#">Audible Audiobooks</Dropdown.Item>
          <Dropdown.Item href="#">Baby</Dropdown.Item>
          <Dropdown.Item href="#">Beauty</Dropdown.Item>
          <Dropdown.Item href="#">Books</Dropdown.Item>
          <Dropdown.Item href="#">Cars & Motorbike</Dropdown.Item>
          <Dropdown.Item href="#">Clothing & Accessories</Dropdown.Item>
          <Dropdown.Item href="#">Computer & Accessories</Dropdown.Item>

          </div>
        
        
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" />
        <Button className='bg-warning text-dark' variant="outline-secondary" id="button-addon2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>        </Button>
      </InputGroup>
      </Col>
      
   
        <Col xs="auto" className="ms-auto d-none d-md-flex">
        <div className="d-flex text-white">
         <small className='pe-4' style={{fontSize:"13px"}}>Return<br></br><span className='fw-bold'>&Orders</span></small>
            
        <div><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16"><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708"/></svg>
            <sub style={{fontSize:"13px"}} className='fw-bold p-1'>Cart</sub>
        </div>
        </div>
        </Col>
        </Row>
        
    </Navbar>


    <div>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_2x._CB597740150_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/Holi/Makeup-PC._CB578876927_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/saba/branddays/5300---Kitchen---Citi-bank-strip._CB580044345_.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/GW/Unrec/Pets-PC_GW_Hero_3000x1200_01._CB578900116_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/CE/March/Unrec/HF/Under_1499_Tallhero_3000x1200._CB581730972_.jpg"
          alt="First slide"
        />
      </Carousel.Item><Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/shoes/2024/Sports_Shoes/GW/ATF/Unrec/Bandhan/rev/Frame_500._CB578862729_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      
      
    </Carousel>
    </div>

    <div className="d-flex gap-4 p-5" style={{backgroundColor:"whitesmoke"}}>
        <Card  style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title>Revamp your home in style</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title>Appliances for your home | Up to 55% off</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title>Up to 60% off | Styles for men</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title>Up to 60% off | Styles for women</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
      </div>


    </div>
  );
}

export default NavScrollExample;
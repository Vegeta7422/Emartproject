import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Container } from "react-bootstrap";

function Promotions() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data from the backend API
    fetch("http://localhost:8080/api/promotion")
      .then(response => response.json())
      .then(data => setProducts(data)) 
      .catch(error => console.error(error));

  }, []);

  return (
    <div style={{ 
      backgroundImage: "url('https://thumbs.dreamstime.com/b/e-commerce-online-shopping-digital-marketing-sales-business-technology-concept-137074336.jpg')",
      backgroundSize: "cover",
      minHeight: "100vh",
      }}>
      <Container style={{ paddingTop: "50px" }}>
        <Row>
          <h3>Promotions</h3>
          {products.map(product => (
            <Col sm={4} key={product.p_Id}>
              <Card style={{ margin: "25px", backgroundColor: "#f8f9fa" }}>
                <Card.Img variant="top" src={product.p_Image} />
                <Card.Body>
                  <Card.Title>{product.p_Name}</Card.Title>
                  <Card.Text>
                    <h2>{product.p_Name}</h2>
                    <p>Price: ₹{product.p_Price}</p>
                  </Card.Text>
                  <Button variant="primary" href={'/productdetails/' + product.p_Id}>View details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Promotions;

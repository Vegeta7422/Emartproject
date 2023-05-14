import React, { useState, useEffect } from 'react';
import { Form, Button,Card  } from 'react-bootstrap';
import './pd.css';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  const [product, setProduct] = useState({});
  const [customerDetails, setCustomerDetails] = useState({});
  const [walletDiscount, setWalletDiscount] = useState(0);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [discountedPrice, setDiscountedPrice] = useState(product.p_Price);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [cartDetails, setCartDetails]=useState({});
  const { code } = useParams();


  const p_Id = code; // Replace with actual product ID
  const username = "sid@13"; // Replace with actual username
  

  useEffect(() => {
    // Fetch product details by ID
    fetch(`http://localhost:8080/api/productsById/${p_Id}`)
      .then(res => res.json())
      .then(data => {setProduct(data);setDiscountedPrice(data.p_Price)})
      .catch(err => console.log(err));

    fetch(`http://localhost:8080/api/productDetailsById/${p_Id}`)
      .then(res => res.json())
      .then(data => setProductDetails(data))
      .catch(err => console.log(err));

    // Fetch customer details by username
    fetch(`http://localhost:8080/api/getByUserName/${username}`)
      .then(res => res.json())
      .then(data =>{ setCustomerDetails(data[0]); setCartDetails(data[1])})
      .catch(err => console.log(err));
  }, [p_Id, username]);


  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const handleWalletDiscountChange = (event) => {
    const value = event.target.value;
    setWalletDiscount(value);
  };

  const applyDiscount = () => {
    if (isCheckboxChecked && customerDetails.prime_Customer && product.p_Prime) {
      const productPrice = parseFloat(product.p_Price);
      const walletBalance = parseFloat(customerDetails.wallet);
      const discountAmount = 0.1 * productPrice;
      const addon = 0.01*product.p_Price;
  
      if (discountAmount <= walletBalance) {
        const newPrice = productPrice - discountAmount;
        setDiscountedPrice(newPrice.toFixed(2));
        
        const updatedWalletBalance = walletBalance - discountAmount + addon;
  
        fetch(`http://localhost:8080/api/customer/${customerDetails.customer_Id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ wallet: updatedWalletBalance }),
        })
          .then(res => {
            if (!res.ok) {
              throw new Error(`Response status ${res.status}`);
            }
            return res.json();
          })
          .then(data => {
            setCustomerDetails(data);
          })
          .catch(err => console.log(err));
  
        return newPrice;
      }
    }
  };
  


  const handleAddToCart = () => {
    setIsAddedToCart(true);
    
    const pid=product.p_Id;
    const price=discountedPrice;//product.p_Price;
    const cartid=cartDetails.cart_Id;

    const data = {
      "quantity": 1,
      "prime_CustomerPrice": price,
      "p_Id": pid,
      "cart_Id": cartid
    };
  
    if(productDetails){
    // Send a POST request to the API endpoint
    fetch('http://localhost:8080/api/cartitems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.ok) {
        alert('Item added to cart!');
      } else {
        alert('Failed to add item to cart.');
      }
    })
    .catch(error => {
      alert('Failed to add item to cart: ' + error.message);
    });
  }
};

  
  return (
    <div>
      <h1>Product Details</h1>

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={product.p_Image} />
  <Card.Body>
    <Card.Title>{product.p_Name}</Card.Title>
    <Card.Text>
      Price: ₹{product.p_Price}
      <br />
      Discount: -₹{product.p_Price - discountedPrice}
      <br />
      Discounted Price: ₹{discountedPrice}
    </Card.Text>
    <Card.Text>{productDetails.p_Description}</Card.Text>
  </Card.Body>
</Card>

      {customerDetails.prime_Customer && product.p_Prime && (
  <Form>
    <Form.Group controlId="formCheckbox">
      <Form.Check
        type="checkbox"
        label="Use wallet balance as discount"
        checked={isCheckboxChecked}
        onChange={handleCheckboxChange}
      />
    </Form.Group>

    {isCheckboxChecked && (
      <Form.Group controlId="formWalletDiscount">
        <Form.Label>Wallet Balance = {customerDetails.wallet} </Form.Label><br/>
        {/* <Form.Control
          type="number"
          value={walletDiscount}
          onChange={handleWalletDiscountChange}
        /> */}
        <Button variant="primary" onClick={applyDiscount}>
          Apply 10% Discount
        </Button>
      </Form.Group>
    )}
  </Form>
)}

{!isAddedToCart && (
  <Button variant="primary" onClick={handleAddToCart}>
    {isCheckboxChecked ? "Add to Cart - with Discounted Price" : "Add to Cart"}
  </Button>
)}

{isAddedToCart && (
  <Button variant="success" disabled>
    Added to Cart
  </Button>
)}

      {/* <h1>Customer Details</h1>
      <p>{customerDetails.username}</p>
      <p>{customerDetails.email_Id}</p>
      <p>{customerDetails.wallet}</p>
      <p>{cartDetails.cart_Id}</p>

      <p>{customerDetails.prime_Customer}</p> */}
    </div>
  );
}
export default ProductDetails;

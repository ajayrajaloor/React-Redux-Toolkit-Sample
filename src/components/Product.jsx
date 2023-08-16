import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { Alert } from "react-bootstrap";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
    const dispatch = useDispatch() 
    const {data:products,status} = useSelector(state => state.products)
    

  useEffect(() => {

    //dispatch an action for fetchProducts
    dispatch(getProducts())
    //api
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => getProducts(result));
  }, []);


  if(status === 'loading'){
    return <Alert key='success' variant="success">Loading...</Alert>
  }

  if(status === 'error'){
    return <Alert key='danger' variant="danger">Something went wrong! Please try again later</Alert>
  }


  const addToCart = (product) =>{ 
    //dispatch an add action 
    dispatch(add(product))
  } 

  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={product.id}  className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>

        <Card.Footer style={{ background: 'white' }}>
          <Button variant="primary" onClick={() =>addToCart(product)}>Add To Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
       <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;

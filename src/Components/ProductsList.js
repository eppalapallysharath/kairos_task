import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const ProductsList = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState("");
  const [search, setSearch] = useState([]);
  const fetchProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        // console.log(response.data);
        setSearch(response.data);
        setData(response.data.products);
      })
      .catch((error) => console.log(error));
  };

  const searchProducts = (title) => {
    const updateItems = search?.products?.filter((val) =>
      val.title.toLowerCase().includes(title.toLowerCase())
    );
    setData(updateItems);
    setInputData("");
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  // console.log(data);

  return (
    <>
      {data.length > 0 ? (
        <>
          <Form className="d-flex w-25 mx-auto m-4">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
                setInputData(e.target.value);
              }}
              value={inputData}
            />
            <Button
              variant="outline-success"
              onClick={() => searchProducts(inputData)}
            >
              Search
            </Button>
          </Form>
          <div className="products-list-container">
            {data?.map((items, index) => (
              <div className="products-list" key={index}>
                <Link to={`/productDetails/${items.id}`}>
                  <img src={items.images[0]} alt={items.title} />
                  <p>{items.title}</p>
                  <p>Price: {items.price}$</p>
                  <p>
                    Discount upto <strong>{items.discountPercentage}%</strong>
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="secondary" />
        </div>
      )}
    </>
  );
};

export default ProductsList;

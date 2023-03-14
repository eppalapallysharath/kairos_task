import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetilas = () => {
  const [data, setData] = useState({});
  const [images, setImages] = useState();
  const { id } = useParams();
  const product = () => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleImages = (i) => {
    setImages(data?.images[i]);
  };
  useEffect(() => {
    product();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {Object.keys(data).length > 0 ? (
        <>
          <h3>Product Details</h3>
          <div className="product-details-container">
            <div className="product-images-container">
              <div className="product-all-images">
                {data?.images?.map((val, i) => (
                  <li key={i} onClick={() => handleImages(i)}>
                    <img src={val} alt={i} width="80px" />
                  </li>
                ))}
              </div>
              <div className="product-image">
                <img
                  src={images?.length > 0 ? images : data.images[0]}
                  alt="product"
                />
              </div>
            </div>
            <div className="product-description">
              <h3>{data.title}</h3>
              <p>
                <strong>Price:</strong> {data.price}$
              </p>
              <p>
                <strong>Discount Upto</strong> {data.discountPercentage}%
              </p>
              <p>
                <strong> Category:</strong>
                {data.category}
              </p>
              <p>
                <strong> Description:</strong> {data.description}
              </p>
              <p>
                <strong> Rating:</strong> {data.rating}
              </p>
              <p>
                <strong>Stock:</strong> {data.stock} only left
              </p>
            </div>
          </div>
        </>
      ) : (
        <h3>...Loading</h3>
      )}
    </div>
  );
};

export default ProductDetilas;

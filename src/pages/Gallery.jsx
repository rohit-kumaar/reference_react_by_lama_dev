import axios from "axios";
import React, { useEffect, useState } from "react";
import LazyImage from "../components/LazyImage";

const URL = `https://dummyjson.com/products`;

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let isCancelled = false;

    axios
      .get(URL)
      .then((res) => {
        if (!isCancelled) {
          setImages(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        {images?.products?.map((product) => (
          <LazyImage
            id={product.id}
            key={product.id}
            src={product.thumbnail}
            alt={product.description}
            title={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;

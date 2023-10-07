import React, { useState } from "react";

const DerivedStates = () => {
  const [products, setProducts] = useState([
    { id: 1, title: "Shirt", quantity: 1 },
    { id: 2, title: "Jeans", quantity: 1 },
    { id: 3, title: "Hat", quantity: 1 },
  ]);

  const [selectedId, setSelectedId] = useState(null);
  const selectedProduct = products.find((p) => p.id === selectedId);

  const increment = (id) => {
    setProducts((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });
    });
  };

  const handleChoose = (id) => {
    setSelectedId(id);
  };

  return (
    <div>
      <h1>All Products</h1>
      {products?.map((product) => (
        <div key={product.id} style={{ margin: "20px" }}>
          <span>
            {product.title}
            <button
              style={{ marginLeft: "30px" }}
              onClick={() => handleChoose(product.id)}
            >
              Choose
            </button>
          </span>

          <div style={{ marginTop: "5px" }}>
            <button> - </button>
            <span style={{ marginInline: "20px" }}>{product.quantity}</span>
            <button onClick={() => increment(product.id)}>+</button>
          </div>
        </div>
      ))}
      <h4>Selected Product</h4>
      <span>{selectedProduct?.title}</span>
      <span>{selectedProduct?.quantity}</span>
    </div>
  );
};

export default DerivedStates;

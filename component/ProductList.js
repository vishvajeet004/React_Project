import React from "react";

const ProductList = ({ products, incrementQuantity, decrementQuantity }) => {
  return (
    <div>
      {products.map((product, index) => (
        <div key={index} className="row mb-3">
          <div className="col-md-6">
            <h4>{product.name}</h4>
            <p>Price: ₹{product.price}</p>
          </div>
          <div className="col-md-6">
            <div className="btn-group" role="group" aria-label="Quantity controls">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => decrementQuantity(index)}
              >
                -
              </button>
              <button type="button" className="btn btn-warning">
                {product.quantity}
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => incrementQuantity(index)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

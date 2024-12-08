import React, { useState } from "react";
import Navbar from "./component/navbar";
import ProductList from "./component/ProductList";
import Footer from "./component/Footer";

function App() {
  const initialProducts = [
    {
      price: 120000,
      name: "iPhone 15 Pro",
      quantity: 0,
    },
    {
      price: 34990,
      name: "Canon EOS 3000D Digital SLR Camera",
      quantity: 0,
    },
    {
      price: 59990,
      name: "Sony WH-1000XM4 Wireless Headphones",
      quantity: 0,
    },
  ];

  const [productList, setProductList] = useState(initialProducts);

  const incrementQuantity = (index) => {
    const updatedProducts = [...productList];
    updatedProducts[index].quantity++;
    setProductList(updatedProducts);
  };

  const decrementQuantity = (index) => {
    const updatedProducts = [...productList];
    if (updatedProducts[index].quantity > 0) {
      updatedProducts[index].quantity--;
    }
    setProductList(updatedProducts);
  };

  const calculateTotal = () => {
    return productList.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
  };

  return (
    <>
      <Navbar totalItems={productList.reduce((sum, p) => sum + p.quantity, 0)} />
      <main className="container mt-5">
        <ProductList
          products={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
        <h3 className="mt-3">Total Price: ₹{calculateTotal()}</h3>
      </main>
      <Footer />
    </>
  );
}

export default App;

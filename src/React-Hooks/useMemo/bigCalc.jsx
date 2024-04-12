import React, { useState, useMemo } from "react";

const ProductList = () => {
  const [products, setProducts] = useState(
    Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `Product ${i + 1}`,
      price: Math.floor(Math.random() * 100) + 1,
    }))
  );

  const totalPrice = useMemo(() => {
    return products.reduce((total, product) => total + product.price, 0);
  }, [products]);

  const handlePriceChange = (id, newPrice) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, price: newPrice } : product
      )
    );
  };

  return (
    <div className="flex flex-col justify-center w-full min-h-screen p-4 bg-gray-100">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-bold text-gray-700">React useMemo Hook</h1>
        <h2 className="pb-5 text-base text-gray-600 px-7">
          Optimizing Total Price Calculation in a Product List with React's
          useMemo Hook
        </h2>
      </div>
      <h2 className="p-2 mb-4 text-2xl font-bold text-center text-teal-600 border-2 border-black">
        Total Price: ${totalPrice.toFixed(2)}
        <p className="text-base font-normal text-black">
          (Change Price in Product List to see the Total Price Calculation)
        </p>
      </h2>
      <ul className="flex flex-wrap justify-center gap-2">
        {products.map((product) => (
          <li
            key={product.id}
            className="p-4 mb-2 bg-white border border-gray-400 rounded shadow"
          >
            <h3 className="mb-2 font-bold">{product.name}</h3>
            <div className="flex items-center">
              <span className="mr-2 font-bold">$</span>
              <input
                type="number"
                min="0"
                value={product.price}
                onChange={(e) =>
                  handlePriceChange(product.id, parseFloat(e.target.value))
                }
                className="p-1 border border-gray-400 rounded"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

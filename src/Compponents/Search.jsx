import { useEffect, useRef, useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products",
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const foundProduct = data.find((p) =>
          p.title.toLowerCase().includes(query.toLowerCase())
        );
        setProduct(foundProduct || null);
        if (!foundProduct) {
          setError("Not Found");
        } else {
          setError(null);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
          setError(error.message);
        }
      }
    }

    if (query) {
      fetchProducts();
    } else {
      setProduct(null);
      setError(null);
    }

    return () => controller.abort();
  }, [query]);

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div >
        <h1 className="text-4xl mt-32 font-medium ml-[550px]">Search Product</h1>
    <div className="max-w-2xl mx-auto p-4 mt-36">
      <input
        type="text"
        placeholder="Search Product"
        className="w-full p-3 rounded-md border border-gray-300 bg-white text-black shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
        onChange={changeHandler}
        value={query}
        ref={inputRef}
      />
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {product && (
        <div className="mt-6 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">{product.title}</h2>
          <p>{product.description}</p>
          {product.images && (
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-32 h-32 mt-4 mx-auto"
            />
          )}
        </div>
      )}
    </div>
    </div>
  );
}

export default Search;

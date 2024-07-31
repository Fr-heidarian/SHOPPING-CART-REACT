import { useState } from "react";
import { useCreateProductMutation } from "../features/product/productSlice-rtkQuery";

export default function CreateProductPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [createProduct] = useCreateProductMutation();

  const handlesubmit = (e) => {
    e.preventDefault();
    createProduct({ name, price });
  };

  return (
    <div>
      <form onSubmit={handlesubmit} className="form-container">
        <label className="form-label">
          Name :
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label className="form-label">
          Price :
          <input
            type="number"
            id="price"
            className="form-input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" className="submit-button" value={"CREATE"} />
      </form>
    </div>
  );
}

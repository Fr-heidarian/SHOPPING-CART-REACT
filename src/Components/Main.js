import { useState } from "react";
import Products from "./Products-rtkQuery";

export default function Main() {
  const [searchParam, setSearchParam] = useState("");

  return (
    <div className="section section-area-left">
      <h2>Products</h2>
      <div>
        <input
          type="text"
          placeholder="Search here..."
          className="search-input"
          value={searchParam}
          onChange={(e) => {
            setSearchParam(e.target.value);
          }}
        />
        <Products searchParam={searchParam} />
      </div>
    </div>
  );
}

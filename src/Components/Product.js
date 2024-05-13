export default function product({ product,onAdd }) {
  const { name, price, image } = product;
  
  return (
    <>
      <div className="card">
        <img src={image} alt={name} className="small" />
        <h3>{name}</h3>
        <div>${price}</div>
        <button onClick={()=>{onAdd(product)}}>Add To Cart</button>
      </div>
    </>
  );
}

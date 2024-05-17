export default function CartButtons({ onAdd, onRemove, item }) {
  return (
    <div className="buttons-container">
      <button className="remove" onClick={() => onRemove(item)}>
        -
      </button>
      <div>{item.qty}</div>
      <button className="add" onClick={() => onAdd(item)}>
        +
      </button>
    </div>
  );
}

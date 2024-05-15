export default function Header({ cartItemsCount }) {
  return (
    <div className="row section">
      <a href="#">Simple Shopping Cart</a>
      <div className="row center">
        <a href="#">Cart</a>
        <div className="badge">{cartItemsCount}</div>
        <a href="#">Sign In</a>
      </div>
    </div>
  );
}

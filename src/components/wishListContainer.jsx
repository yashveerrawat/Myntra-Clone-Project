import Header from "./Header";

const WishlistContainer = () => {
  return (
    <>
      <Header></Header>
      <div>
        <div className="wishlistLogin-container">
          <div className="wishlistLogin-heading">PLEASE LOG IN</div>
          <div className="wishlistLogin-info">
            Login to view items in your wishlist.
          </div>
          <img
            className=" wishlistLogin-icon sprites-emptyIcon"
            src="images/empty-wishlist.png"
          ></img>
          <div>
            <button className="wishlistLogin-button">LOGIN</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default WishlistContainer;

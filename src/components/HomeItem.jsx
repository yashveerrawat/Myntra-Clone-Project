import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.rate} ⭐ | {item.rating.count}
      </div>

      <div className="company-name">{item.title}</div>
      <div className="item-name">{item.description}</div>
      <div className="price">
        <span className="current-price">Rs {item.price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">(% OFF)</span>
      </div>
      <button className="btn-add-bag" onClick={handleAddToBag}>
        Add to Bag
      </button>
    </div>
  );
};

export default HomeItem;

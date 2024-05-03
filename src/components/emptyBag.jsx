import BagHeader from "./bagHEADER";

import { Link } from "react-router-dom";

const EmptyBag = () => {
  return (
    <>
      <div className="page">
        <div>
          <div className="desktop-base-emptyCart">
            <div className="emptyCart-base-mainContainer">
              <div className="emptyCart-base-subContainer">
                <div className="imageBanner-base-container emptyCart-base-emptyBagImage">
                  <picture className="image-base-imgResponsive">
                    <img
                      src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
                      className="image-base-imgResponsive"
                    ></img>
                  </picture>
                </div>
                <div className="emptyCart-base-emptyText">
                  Hey, it feels so light
                </div>
                <div className="emptyCart-base-emptyDesc">
                  There is nothing in your bag. Let's add some items.
                </div>

                <Link to="/wishlist" className="emptyCart-base-addFromWishlist">
                  <button className="button-base-button emptyCart-base-wishlistButton  button-base-textTransform">
                    ADD ITEMS FROM WISHLIST
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EmptyBag;

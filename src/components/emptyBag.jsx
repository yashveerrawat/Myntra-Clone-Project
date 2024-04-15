import { Link } from "react-router-dom";

const EmptyBag = () => {
  return (
    <>
      <div className="layout">
        <div className="headerEmptyBag">
          <div className="site-nav-container container">
            <div className="logo_container">
              <Link to="/">
                <img
                  className="myntra_home"
                  src="images/myntra-logo.png"
                  alt="Myntra Home"
                />
              </Link>
            </div>

            <ol className="checkout-steps">
              <li className="step step1 active">BAG</li>
              <li className="divider"></li>
              <li className="step step2">ADDRESS</li>
              <li className="divider"></li>
              <li className="step stepPayment">PAYMENT</li>
            </ol>
            <div className="secureContainer">
              <img
                src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
                className="secureIcon"
              ></img>
              <div className="secure">100% SECURE</div>
            </div>
          </div>
        </div>
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
                  <div className="emptyCart-base-addFromWishlist">
                    <button className="button-base-button emptyCart-base-wishlistButton  button-base-textTransform">
                      ADD ITEMS FROM WISHLIST
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EmptyBag;

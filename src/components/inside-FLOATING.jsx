import React, { useState } from "react";
import DiscountButton from "./floatingBtn";

const PromoMessage = () => {
  const [promoMessageVisible, setPromoMessageVisible] = useState(true);

  const handleOnClick = () => {
    setPromoMessageVisible(false);
  };

  return (
    <>
      {promoMessageVisible && (
        <div>
          <button
            className="FreeShippingBanner-bannerExpanded"
            onClick={handleOnClick}
          >
            <div className="arrowSecond"></div>
            <p className="discount-text">FLAT ₹200 OFF</p>
          </button>
          <div className="FreeShippingBanner-banner-expanded">
            <div className="FreeShippingBanner-first-row">
              <div className="FreeShippingBanner-description">
                <div className="FreeShippingBanner-pre-header">Avail Flat</div>

                <div className="FreeShippingBanner-header FreeShippingBanner-header-primary">
                  {" "}
                  200 OFF{" "}
                </div>

                <div className="FreeShippingBanner-header FreeShippingBanner-header-secondary"></div>
              </div>

              <div className="FreeShippingBanner-image">
                <img
                  draggable="false"
                  className="FreeShippingBanner-imageContent"
                  src="https://assets.myntassets.com/assets/images/2023/10/29/f6fe9e04-9f3c-462a-ac6e-b4d3853b96041698602536832-Flat_200.jpg"
                ></img>
              </div>
            </div>

            <div className="FreeShippingBanner-second-row">
              <div className="FreeShippingBanner-coupon">
                <div className="myntracoupan">
                  <span className="FreeShippingBanner-textFor">
                    Coupon Code:
                  </span>
                  <span className="FreeShippingBanner-codeFor coupancode">
                    MYNTRA200
                  </span>
                </div>

                <div className="FreeShippingBanner-footer">
                  Applicable on your first order
                </div>
              </div>

              <div className="FreeShippingBanner-signup">
                <button className="FreeShippingBanner-text FreeShippingBanner-button">
                  {" "}
                  SIGN UP NOW
                </button>
              </div>
            </div>
            <div className="FreeShippingBanner-trust-builders">
              <div className="FreeShippingBanner-item">
                <div className=" FreeShippingBanner-text">Genuine Products</div>
              </div>
              <div className="FreeShippingBanner-item">
                <div className=" FreeShippingBanner-text">Try & buy</div>
              </div>
              <div className="FreeShippingBanner-item">
                <div className=" FreeShippingBanner-text">
                  Easy Exchanges & Returns
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!promoMessageVisible && <DiscountButton />}
    </>
  );
};

export default PromoMessage;

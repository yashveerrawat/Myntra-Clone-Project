import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const BagContent = ({}) => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);

  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  const CONVENIENCE_FEES = 99;
  let totalItem = bagItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.price;
    totalDiscount += bagItem.price - bagItem.price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return (
    <>
      <div className="bagggggggggg">
        <div className="itemBlock-base-leftBlock">
          <div className="addressStripV2-base-desktopContainer">
            <div className="addressStripV2-base-title">
              Deliver to:
              <span className="addressStripV2-base-highlight"> 475110</span>
            </div>
            <div className="addressStripV2-base-changeBtn addressStripV2-base-changeBtnDesktop">
              CHANGE ADDRESS
            </div>
          </div>
          <div className="messageContainer-base-messageContainer">
            <div className="offersV2-base-container">
              <div className="offersV2-base-title ">Available Offers</div>
              <div>
                <li className="offersV2-base-message ">
                  <span>
                    10% Instant Discount on Citi Credit and Debit Cards on a
                    minimum spend of ₹3,000. TCA
                  </span>
                </li>
                <div className="offersV2-base-more ">
                  <span className="">Show More</span>
                </div>
              </div>
            </div>

            <div />
          </div>
          <div className="bulkActionStrip-desktopContainer">
            <div className="bulkActionStrip-selectionIcon"></div>
            <div className="bulkActionStrip-message">
              <span className="bulkActionStrip-itemSelected">
                1/1 ITEMS SELECTED
              </span>
            </div>
            <div className="inlinebuttonV2-base-actions bulkActionStrip-desktopButton">
              <div className="removefrombagbtn">
                <button className="removeinside">REMOVE</button>
              </div>
              <Link to="/wishlist" className="Movetowishlistbtn">
                <button className="Movetowishlistbtninside">
                  MOVE TO WISHLIST
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="desktop-base-right">
          <div>
            <div>
              <div>
                <div className="coupons-base-header">Coupons</div>
                <div className="coupons-base-content">
                  <div className="coupons-base-label ">Apply Coupons</div>
                  <button
                    fontSize="body3"
                    fontWeight="bold"
                    role="button"
                    className="css-15k6cs5"
                  >
                    <div className="css-xjhrni">APPLY</div>
                  </button>
                  <div className="coupons-base-couponMessage">
                    <a
                      href="/login?referer=/checkout/cart"
                      className="coupons-base-logIn"
                    >
                      Login
                    </a>
                    <span> to get upto ₹200 OFF on first order</span>
                  </div>
                </div>
              </div>
              <div className="giftWrap-base-container">
                <div className="giftWrap-base-header">
                  GIFTING &amp; PERSONALISATION
                </div>
                <div className="giftWrap-base-content">
                  <div
                    className="imageBanner-base-container giftWrap-base-gift"
                    style={{ background: "none", height: 99, width: 39 }}
                  >
                    <picture
                      className="image-base-imgResponsive"
                      style={{ width: "100%" }}
                    >
                      <link
                        fetchpriority="auto"
                        rel="preload"
                        as="image"
                        href="https://constant.myntassets.com/checkout/assets/img/gift-big.webp"
                      />
                      <source
                        srcSet="https://constant.myntassets.com/checkout/assets/img/gift-big.webp"
                        type="image/webp"
                      />
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/gift-big.png"
                        className="image-base-imgResponsive"
                        alt="image"
                        fetchpriority="auto"
                        loading="eager"
                        style={{ height: 99, width: 39 }}
                      />
                    </picture>
                  </div>
                  <div className="giftWrap-base-title">
                    Buying for a loved one?
                  </div>
                  <div>
                    <span>
                      Gift wrap and personalised message on card, Only for{" "}
                    </span>
                    <svg
                      width={7}
                      height={9}
                      className="giftWrap-base-rupeeIcon"
                    >
                      <g clipPath="url(#a)">
                        <path
                          fillRule="nonzero"
                          d="M.967 4.7 3.5 9h1.255L2.19 4.883c.652-.09 1.174-.298 1.566-.624.4-.335.628-.8.685-1.395h1.591V2.08H4.418a1.912 1.912 0 0 0-.233-.746 2.012 2.012 0 0 0-.465-.55h2.313V0H.967v.783h.269c.416 0 .767.045 1.052.135.294.09.527.232.698.428.171.188.286.433.343.734H.967v.784H3.34c-.033.326-.135.583-.306.77-.171.188-.408.323-.71.404a4.134 4.134 0 0 1-1.089.123h-.27v.538Z"
                        />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fillRule="nonzero" d="M0 0h7v9H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>25</span>
                  </div>
                  <button
                    fontSize="body3"
                    fontWeight="bold"
                    role="button"
                    className="css-8bt89l"
                  >
                    <div className="css-xjhrni">ADD GIFT WRAP</div>
                  </button>
                </div>
              </div>
              <div className="donationStrip-base-desktopHeader">
                Support transformative social work in India
              </div>
              <div className="donationStrip-base-bodyContainer donationStrip-base-desktopBodyContainer">
                <div className="donationStrip-base-titleContainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    className="donationStrip-base-icon"
                  >
                    <path
                      fillRule="nonzero"
                      d="M14.85 2.14v11.71a1 1 0 0 1-1 1H2.14a1 1 0 0 1-1-1V2.14a1 1 0 0 1 1-1h11.71a1 1 0 0 1 1 1zM14.222 0H1.778C.8 0 0 .8 0 1.778v12.444C0 15.2.8 16 1.778 16h12.444C15.2 16 16 15.2 16 14.222V1.778C16 .8 15.2 0 14.222 0z"
                    />
                  </svg>
                  Donate and make a difference
                </div>
                <div className="donationStrip-base-pillContainer">
                  <div className="pillView-base-pillsContainer pillView-base-pillsDesktopContainer">
                    <div
                      className="pillView-base-pill donationStrip-base-pill pillView-base-normalPill"
                      data-key={10}
                    >
                      <div className="pillView-base-textStyle">₹10</div>
                    </div>
                    <div
                      className="pillView-base-pill donationStrip-base-pill pillView-base-normalPill"
                      data-key={20}
                    >
                      <div className="pillView-base-textStyle">₹20</div>
                    </div>
                    <div
                      className="pillView-base-pill donationStrip-base-pill pillView-base-normalPill"
                      data-key={50}
                    >
                      <div className="pillView-base-textStyle">₹50</div>
                    </div>
                    <div
                      className="pillView-base-pill donationStrip-base-pill pillView-base-normalPill"
                      data-key={100}
                    >
                      <div className="pillView-base-textStyle">₹100</div>
                    </div>
                  </div>
                </div>
                <div className="donationStrip-base-desktopKnowMore">
                  Know More
                </div>
              </div>
            </div>
          </div>
          <div className="priceBlock-base-container">
            <div className="priceBlock-base-priceHeader">
              PRICE DETAILS ({totalItem}Item)
            </div>
            <div className="priceBreakUp-base-orderSummary" id="priceBlock">
              <div className="priceDetail-base-row ">
                <span className=" ">Total MRP</span>
                <span className="priceDetail-base-value ">
                  <span />
                  <span>
                    {" "}
                    <span className="">₹</span>
                    {totalMRP}
                  </span>
                </span>
              </div>
              <div className="priceDetail-base-row ">
                <span className=" ">
                  Discount on MRP
                  <span className="priceDetail-base-knowMore ">Know More</span>
                </span>
                <span className="priceDetail-base-value priceDetail-base-discount">
                  <span>-</span>
                  <span>
                    {" "}
                    <span className="">₹</span>0%
                  </span>
                </span>
              </div>
              <div className="priceDetail-base-row ">
                <span>Coupon Discount</span>
                <span className="priceDetail-base-value priceDetail-base-action">
                  Apply Coupon
                </span>
              </div>
              <div className="priceDetail-base-row ">
                <span className=" ">
                  Convenience Fee
                  <span className="priceDetail-base-knowMore ">Know More</span>
                </span>
                <span className="priceDetail-base-value">
                  <span className="">₹{CONVENIENCE_FEES}</span>
                </span>
              </div>
              <div className="priceDetail-base-row ">
                <span>
                  Shipping Fee
                  <span className="priceDetail-base-knowMore ">Know More</span>
                  <div className="priceDetail-base-infoTextContainer"></div>
                </span>
                <span className="priceDetail-base-value">
                  <span className="priceDetail-base-striked priceDetail-base-spaceRight">
                    <span>₹79 </span>
                  </span>
                  <span className="priceDetail-base-discount">FREE</span>
                </span>
                <div className="priceDetail-base-convenienceCalloutText">
                  Free shipping for you
                </div>
              </div>
              <div className="priceDetail-base-total ">
                <span className=" ">Total Amount</span>
                <span className="priceDetail-base-value ">
                  <span />
                  <span>
                    {" "}
                    <span className="priceDetail-base-redesignRupeeTotalIcon">
                      ₹
                    </span>
                    {finalPayment}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div>
            <button
              width="100%"
              letterspacing="1px"
              fontWeight="bold"
              role="button"
              className="css-ibwr57"
            >
              <div className="css-xjhrni">PLACE ORDER</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BagContent;

import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { useSelector } from "react-redux";
import BagContent from "./BagContent";

const BagItem = ({ item }) => {
  const bagItems = useSelector((state) => state.bag);
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  const CONVENIENCE_FEES = 99;
  let totalItem = bagItems.length;

  return (
    <>
      <div className="desktop-base-cartLayout">
        <div className="NEWcartItemsList">
          <div className="itemContainer-base-itemMargin">
            <div>
              <div className="item-base-item">
                <div />
                <div className="itemContainer-base-item ">
                  <div className="itemContainer-base-itemLeft">
                    <div className="itemComponents-base-selectionIconContainer itemContainer-base-selectionIndicator">
                      <div className="itemComponents-base-animationContainer "></div>
                    </div>
                    <a>
                      <div
                        className=""
                        style={{
                          background: "rgb(244, 255, 249)",
                          height: 148,
                          width: 111,
                        }}
                      >
                        <picture
                          className="image-base-imgResponsive"
                          style={{ width: "100%" }}
                        >
                          <img
                            src={item.image}
                            className="image-base-imgResponsive"
                            alt="image"
                            fetchpriority="high"
                            loading="eager"
                            style={{ height: 148, width: 111 }}
                          />
                        </picture>
                      </div>
                    </a>
                  </div>
                  <div className="itemContainer-base-itemRight">
                    <div className="itemContainer-base-details">
                      <div>
                        <div className="itemContainer-base-brand">
                          {item.title}
                        </div>
                        <a className="itemContainer-base-itemLink">
                          {item.description}
                        </a>
                      </div>
                      <div className="itemComponents-base-sellerContainer">
                        <div className="itemComponents-base-sellerData">
                          Sold by: Supercom Net
                        </div>
                      </div>
                      <div className="itemContainer-base-sizeAndQtyContainer">
                        <div className="itemContainer-base-sizeAndQty">
                          <div className="itemComponents-base-size">
                            <span className="">Size: Onesize</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={6}
                              height={3}
                              viewBox="0 0 6 3"
                              className="itemComponents-base-dropDown"
                            >
                              <path fillRule="evenodd" d="M0 0h6L3 3z" />
                            </svg>
                          </div>
                          <div className="itemComponents-base-quantity">
                            <span className="">Qty: 1</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={6}
                              height={3}
                              viewBox="0 0 6 3"
                              className="itemComponents-base-dropDown"
                            >
                              <path fillRule="evenodd" d="M0 0h6L3 3z" />
                            </svg>
                          </div>
                        </div>
                        <div className="itemComponents-base-lowUnitCount">
                          3 left
                        </div>
                      </div>
                      <div className="itemContainer-base-price">
                        <div className="itemComponents-base-price itemComponents-base-bold ">
                          <div>
                            <svg
                              width={8}
                              height={10}
                              viewBox="0 0 8 10"
                              className="itemComponents-base-rupeeBoldIcon"
                            >
                              <path
                                fillRule="nonzero"
                                d="M3.418 10 .898 5.604V4.568h.84c.336 0 .63-.047.882-.14.262-.103.476-.247.644-.434.178-.187.299-.41.364-.672H.898V2.286h2.716a1.694 1.694 0 0 0-.294-.644 1.289 1.289 0 0 0-.532-.434 1.678 1.678 0 0 0-.784-.168H.898V.004h6.314V1.04H5.014c.159.177.29.369.392.574.112.205.187.43.224.672h1.582v1.036H5.658c-.093.69-.36 1.232-.798 1.624-.438.383-1.003.644-1.694.784L5.91 10H3.418Z"
                              />
                            </svg>
                            {item.price}
                          </div>
                        </div>
                        <div className="itemContainer-base-discountBlock">
                          <span className="itemComponents-base-strikedAmount">
                            <span className="itemComponents-base-price itemComponents-base-strike itemContainer-base-strikedAmount"></span>
                          </span>
                          <span className="itemComponents-base-itemDiscount">
                            <svg
                              width={7}
                              height={9}
                              className="itemComponents-base-tradeRupeeIcon"
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
                            <span>0% OFF</span>
                          </span>
                        </div>
                      </div>
                      <div />
                      <div className="itemComponents-base-returnInfoContainer">
                        <div className="itemComponents-base-returnPolicyMessage">
                          <div className="itemComponents-base-messageText itemComponents-base-message">
                            <div>
                              <span className="itemComponents-base-highlight">
                                <div>Not returnable</div>
                              </span>
                              <span />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="itemComponents-base-messageContainer">
                        <div>
                          <div className="itemComponents-base-message itemComponents-base-deliveryDateContainer">
                            <div className="itemComponents-base-deliveryIconStyle">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={8}
                                viewBox="0 0 10 8"
                                className="itemComponents-base-checkIcon"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M9.775.227A.716.716 0 0 0 8.716.24L3.373 6.015a.09.09 0 0 1-.133 0L1.278 3.91a.716.716 0 0 0-1.059-.001.834.834 0 0 0 0 1.127l2.565 2.742c.14.15.33.223.53.223h.004a.71.71 0 0 0 .53-.23l5.939-6.416A.833.833 0 0 0 9.775.227"
                                />
                              </svg>
                            </div>
                            <div className="itemComponents-base-messageText itemComponents-base-message">
                              <span>Delivery by</span>
                              <span className="itemComponents-base-highlightedMessage ">
                                {" "}
                                30 Apr 2024
                              </span>
                            </div>
                          </div>
                          <div className="itemComponents-base-orderWithinTimer" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      className="itemContainer-base-closeIcon"
                      onClick={handleRemoveItem}
                    >
                      <path
                        fill="#000"
                        fillRule="evenodd"
                        d="M9.031 8l6.756-6.756a.731.731 0 0 0 0-1.031.732.732 0 0 0-1.031 0L8 6.969 1.244.213a.732.732 0 0 0-1.031 0 .731.731 0 0 0 0 1.03L6.969 8 .213 14.756a.731.731 0 0 0 0 1.031.732.732 0 0 0 1.031 0L8 9.031l6.756 6.756a.732.732 0 0 0 1.031 0 .731.731 0 0 0 0-1.03L9.031 8z"
                      />
                    </svg>
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

export default BagItem;

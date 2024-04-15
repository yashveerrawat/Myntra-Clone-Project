import React, { useState } from "react";
import PromoMessage from "./inside-FLOATING";

const DiscountButton = () => {
  const [showPromoMessage, setPromoMessage] = useState(false);

  const handleButtonClick = () => {
    if (!showPromoMessage) {
      setPromoMessage(true);
    } else {
      showPromoMessage(false);
    }
  };

  return (
    <>
      <button className="discount-button" onClick={handleButtonClick}>
        <div className="arrow"></div>
        <p className="discount-text">FLAT ₹200 OFF</p>
      </button>

      {showPromoMessage && <PromoMessage />}
    </>
  );
};

export default DiscountButton;

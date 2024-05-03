import { Link } from "react-router-dom";

const BagHeader = () => {
  return (
    <>
      <div className="headerEmptyBag ">
        <div className="site-nav-container container">
          <div className=" BaglogoContainer" data-reactid={15}>
            <Link to="/">
              <img
                className="myntraweb-sprite desktop-logo sprites-headerLogo "
                src="https://s.yimg.com/fz/api/res/1.2/bwLpWMzIshGmcI0m5FeHcw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/88485e2c-b94e-3589-b5cc-f911bca0be47/t_500x300"
                data-reactid={16}
              />
            </Link>
          </div>
          <ol className="checkout-steps">
            <li className="step step1 active">BAG</li>{" "}
            <li className="divider" />
            <li className="step step2">ADDRESS</li> <li className="divider" />
            <li className="step step3">PAYMENT</li>
          </ol>
          <div className="secureContainer">
            <img
              src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
              className="secureIcon"
              width={26}
              height={28}
            />
            <div className="secure">100% SECURE</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BagHeader;

import { Link } from "react-router-dom";

import DiscountButton from "../components/floatingBtn";

const FrontPage = () => {
  return (
    <>
      <DiscountButton></DiscountButton>
      <main>
        <Link to="/home">
          <div className="banner_containerNEW">
            <img
              className="banner-imgNEW"
              src="images/banner-img.jpg"
              alt="Main Banner"
            />
          </div>
          <div className="category_headingNEW">MEDAL WORTHY BRANDS TO BAG</div>
          <div className="category_itemsNEW">
            <a href="#">
              <img className="sale_itemNEW" src="offers/2.png" />
            </a>
            <a href="#">
              <img className="sale_itemNEW" src="offers/2.png" />
            </a>
            <a href="#">
              <img className="sale_itemNEW" src="offers/3.png" />
            </a>
            <a href="#">
              <img className="sale_itemNEW" src="/offers/4.png" />
            </a>
            <a href="#">
              <img className="sale_itemNEW" src="offers/5.png" />
            </a>
            <a href="#">
              <img className="sale_itemNEW" src="/offers/6.png" />
            </a>
            <a href="#">
              <img className="sale_itemNEW" src="offers/7.png" />
            </a>
            <a href="#">
              <img className="sale_itemNEW" src="offers/8.png" />
            </a>
            <a href="#">
              <img className="sale_itemNEW" src="offers/9.png" />
            </a>
          </div>
          <div className="category_headingNEW">SHOP BY CATEGORIES</div>
          <div className="category_itemsNEW">
            <a href="#">
              <img className="sale_itemNEW" src="categories/1.jpg" />
            </a>
            <a href="#">
              <img className="sale_itemNEW" src="categories/2.jpg" />
            </a>
            <a href="#">
              <img className="sale_itemNEW" src="categories/3.jpg" />
            </a>
            <a href="#">
              <img className="sale_itemNEW" src="categories/4.jpg" />
            </a>
            <a href="#">
              <img className="sale_itemNEW" src="categories/5.jpg" />
            </a>
            <a href="#">
              <img className="sale_itemNEW" src="categories/6.jpg" />
            </a>
            <a href="#">
              <img className="sale_itemNEW" src="categories/7.jpg" />
            </a>
            <a href="#">
              <img className="sale_itemNEW" src="categories/8.jpg" />
            </a>
            <a href="#">
              <img className="sale_itemNEW" src="categories/9.jpg" />
            </a>
            <a href="#">
              <img className="sale_itemNEW" src="categories/10.jpg" />
            </a>
          </div>
        </Link>
      </main>
    </>
  );
};

export default FrontPage;

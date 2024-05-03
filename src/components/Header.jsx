import { BsPerson } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((store) => store.bag);

  return (
    <header className="desktop-container" id="desktop-header-cnt">
      <div className="desktop-bound" data-reactid={14}>
        <div className="desktop-logoContainer" data-reactid={15}>
          <Link to="/">
            <img
              className="myntraweb-sprite desktop-logo sprites-headerLogo "
              src="https://s.yimg.com/fz/api/res/1.2/bwLpWMzIshGmcI0m5FeHcw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/88485e2c-b94e-3589-b5cc-f911bca0be47/t_500x300"
              data-reactid={16}
            />
          </Link>
        </div>
        <nav className="desktop-navbar" data-reactid={17}>
          <div className="desktop-navLinks" data-reactid={18}>
            <div className="desktop-navContent mennavlink" data-reactid={19}>
              <div className="desktop-navLink " data-reactid={20}>
                <Link
                  data-index={0}
                  data-group="men"
                  data-color="#ee5f73"
                  data-type="navElements"
                  style={{ borderBottomColor: "#ee5f73" }}
                  className="desktop-main mendesktop"
                  data-reactid={21}
                >
                  Men
                </Link>
                {/* react-text: 22 */}
                {/* /react-text */}
                <div className="desktop-backdropStyle" data-reactid={23}>
                  <div className="desktop-paneContent" data-reactid={24}>
                    <div
                      className="desktop-categoryContainer"
                      data-index={0}
                      data-group="men"
                      data-color="#ee5f73"
                      data-reactid={25}
                    >
                      <li
                        className="desktop-oddColumnContent"
                        data-reactid={26}
                      >
                        <ul className="desktop-navBlock" data-reactid={27}>
                          <li data-reactid={28}>
                            <Link
                              style={{ color: "#ee5f73" }}
                              className="desktop-categoryName"
                              data-reactid={29}
                            >
                              Topwear
                            </Link>
                          </li>
                          <li data-reactid={30}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={31}
                            >
                              T-Shirts
                            </Link>
                          </li>
                          <li data-reactid={32}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={33}
                            >
                              Casual Shirts
                            </Link>
                          </li>
                          <li data-reactid={34}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={35}
                            >
                              Formal Shirts
                            </Link>
                          </li>
                          <li data-reactid={36}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={37}
                            >
                              Sweatshirts
                            </Link>
                          </li>
                          <li data-reactid={38}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={39}
                            >
                              Sweaters
                            </Link>
                          </li>
                          <li data-reactid={40}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={41}
                            >
                              Jackets
                            </Link>
                          </li>
                          <li data-reactid={42}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={43}
                            >
                              Blazers &amp; Coats
                            </Link>
                          </li>
                          <li data-reactid={44}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={45}
                            >
                              Suits
                            </Link>
                          </li>
                          <li data-reactid={46}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={47}
                            >
                              Rain Jackets
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={48} />
                          <li data-reactid={49}>
                            <Link
                              style={{ color: "#ee5f73" }}
                              className="desktop-categoryName"
                              data-reactid={50}
                            >
                              Indian &amp; Festive Wear
                            </Link>
                          </li>
                          <li data-reactid={51}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={52}
                            >
                              Kurtas &amp; Kurta Sets
                            </Link>
                          </li>
                          <li data-reactid={53}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={54}
                            >
                              Sherwanis
                            </Link>
                          </li>
                          <li data-reactid={55}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={56}
                            >
                              Nehru Jackets
                            </Link>
                          </li>
                          <li data-reactid={57}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={58}
                            >
                              Dhotis
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="desktop-evenColumnContent desktop-oddColumnContent"
                        data-reactid={59}
                      >
                        <ul className="desktop-navBlock" data-reactid={60}>
                          <li data-reactid={61}>
                            <Link
                              style={{ color: "#ee5f73" }}
                              className="desktop-categoryName"
                              data-reactid={62}
                            >
                              Bottomwear
                            </Link>
                          </li>
                          <li data-reactid={63}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={64}
                            >
                              Jeans
                            </Link>
                          </li>
                          <li data-reactid={65}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={66}
                            >
                              Casual Trousers
                            </Link>
                          </li>
                          <li data-reactid={67}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={68}
                            >
                              Formal Trousers
                            </Link>
                          </li>
                          <li data-reactid={69}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={70}
                            >
                              Shorts
                            </Link>
                          </li>
                          <li data-reactid={71}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={72}
                            >
                              Track Pants &amp; Joggers
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={73} />
                          <li data-reactid={74}>
                            <Link
                              style={{ color: "#ee5f73" }}
                              className="desktop-categoryName"
                              data-reactid={75}
                            >
                              Innerwear &amp; Sleepwear
                            </Link>
                          </li>
                          <li data-reactid={76}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={77}
                            >
                              Briefs &amp; Trunks
                            </Link>
                          </li>
                          <li data-reactid={78}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={79}
                            >
                              Boxers
                            </Link>
                          </li>
                          <li data-reactid={80}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={81}
                            >
                              Vests
                            </Link>
                          </li>
                          <li data-reactid={82}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={83}
                            >
                              Sleepwear &amp; Loungewear
                            </Link>
                          </li>
                          <li data-reactid={84}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={85}
                            >
                              Thermals
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={86} />
                          <li data-reactid={87}>
                            <Link
                              style={{ color: "#ee5f73" }}
                              className="desktop-categoryName"
                              data-reactid={88}
                            >
                              Plus Size
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="desktop-oddColumnContent"
                        data-reactid={89}
                      >
                        <ul className="desktop-navBlock" data-reactid={90}>
                          <li data-reactid={91}>
                            <Link
                              style={{ color: "#ee5f73" }}
                              className="desktop-categoryName"
                              data-reactid={92}
                            >
                              Footwear
                            </Link>
                          </li>
                          <li data-reactid={93}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={94}
                            >
                              Casual Shoes
                            </Link>
                          </li>
                          <li data-reactid={95}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={96}
                            >
                              Sports Shoes
                            </Link>
                          </li>
                          <li data-reactid={97}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={98}
                            >
                              Formal Shoes
                            </Link>
                          </li>
                          <li data-reactid={99}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={100}
                            >
                              Sneakers
                            </Link>
                          </li>
                          <li data-reactid={101}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={102}
                            >
                              Sandals &amp; Floaters
                            </Link>
                          </li>
                          <li data-reactid={103}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={104}
                            >
                              Flip Flops
                            </Link>
                          </li>
                          <li data-reactid={105}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={106}
                            >
                              Socks
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={107} />
                          <li data-reactid={108}>
                            <Link
                              style={{ color: "#ee5f73" }}
                              className="desktop-categoryName"
                              data-reactid={109}
                            >
                              Personal Care &amp; Grooming
                            </Link>
                          </li>
                          <li data-reactid={110}>
                            <Link
                              style={{ color: "#ee5f73" }}
                              className="desktop-categoryName"
                              data-reactid={111}
                            >
                              Sunglasses &amp; Frames
                            </Link>
                          </li>
                          <li data-reactid={112}>
                            <Link
                              style={{ color: "#ee5f73" }}
                              className="desktop-categoryName"
                              data-reactid={113}
                            >
                              Watches
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="desktop-evenColumnContent desktop-oddColumnContent"
                        data-reactid={114}
                      >
                        <ul className="desktop-navBlock" data-reactid={115}>
                          <li data-reactid={116}>
                            <Link
                              style={{ color: "#ee5f73" }}
                              className="desktop-categoryName"
                              data-reactid={117}
                            >
                              Sports &amp; Active Wear
                            </Link>
                          </li>
                          <li data-reactid={118}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={119}
                            >
                              Sports Shoes
                            </Link>
                          </li>
                          <li data-reactid={120}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={121}
                            >
                              Sports Sandals
                            </Link>
                          </li>
                          <li data-reactid={122}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={123}
                            >
                              Active T-Shirts
                            </Link>
                          </li>
                          <li data-reactid={124}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={125}
                            >
                              Track Pants &amp; Shorts
                            </Link>
                          </li>
                          <li data-reactid={126}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={127}
                            >
                              Tracksuits
                            </Link>
                          </li>
                          <li data-reactid={128}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={129}
                            >
                              Jackets &amp; Sweatshirts
                            </Link>
                          </li>
                          <li data-reactid={130}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={131}
                            >
                              Sports Accessories
                            </Link>
                          </li>
                          <li data-reactid={132}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={133}
                            >
                              Swimwear
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={134} />
                          <li data-reactid={135}>
                            <Link
                              style={{ color: "#ee5f73" }}
                              className="desktop-categoryName"
                              data-reactid={136}
                            >
                              Gadgets
                            </Link>
                          </li>
                          <li data-reactid={137}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={138}
                            >
                              Smart Wearables
                            </Link>
                          </li>
                          <li data-reactid={139}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={140}
                            >
                              Fitness Gadgets
                            </Link>
                          </li>
                          <li data-reactid={141}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={142}
                            >
                              Headphones
                            </Link>
                          </li>
                          <li data-reactid={143}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={144}
                            >
                              Speakers
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="desktop-oddColumnContent"
                        data-reactid={145}
                      >
                        <ul className="desktop-navBlock" data-reactid={146}>
                          <li data-reactid={147}>
                            <Link
                              style={{ color: "#ee5f73" }}
                              className="desktop-categoryName"
                              data-reactid={148}
                            >
                              Fashion Accessories
                            </Link>
                          </li>
                          <li data-reactid={149}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={150}
                            >
                              Wallets
                            </Link>
                          </li>
                          <li data-reactid={151}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={152}
                            >
                              Belts
                            </Link>
                          </li>
                          <li data-reactid={153}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={154}
                            >
                              Perfumes &amp; Body Mists
                            </Link>
                          </li>
                          <li data-reactid={155}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={156}
                            >
                              Trimmers
                            </Link>
                          </li>
                          <li data-reactid={157}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={158}
                            >
                              Deodorants
                            </Link>
                          </li>

                          <li data-reactid={161}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={162}
                            >
                              Accessory Gift Sets
                            </Link>
                          </li>
                          <li data-reactid={163}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={164}
                            >
                              Caps &amp; Hats
                            </Link>
                          </li>
                          <li data-reactid={165}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={166}
                            >
                              Mufflers, Scarves &amp; Gloves
                            </Link>
                          </li>
                          <li data-reactid={167}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={168}
                            >
                              Phone Cases
                            </Link>
                          </li>
                          <li data-reactid={169}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={170}
                            >
                              Rings &amp; Wristwear
                            </Link>
                          </li>
                          <li data-reactid={171}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={172}
                            >
                              Helmets
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={173} />
                          <li data-reactid={174}>
                            <Link
                              style={{ color: "#ee5f73" }}
                              className="desktop-categoryName"
                              data-reactid={175}
                            >
                              Bags &amp; Backpacks
                            </Link>
                          </li>
                          <li data-reactid={176}>
                            <Link
                              style={{ color: "#ee5f73" }}
                              className="desktop-categoryName"
                              data-reactid={177}
                            >
                              Luggages &amp; Trolleys
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="desktop-navContent womennav" data-reactid={178}>
              <div className="desktop-navLink" data-reactid={179}>
                <Link
                  data-index={1}
                  data-group="women"
                  data-color="#fb56c1"
                  data-type="navElements"
                  style={{ borderBottomColor: "#fb56c1" }}
                  className="desktop-main womendesktop"
                  data-reactid={180}
                >
                  Women
                </Link>
                {/* react-text: 181 */}
                {/* /react-text */}
                <div className="desktop-backdropStyle" data-reactid={182}>
                  <div className="desktop-paneContent" data-reactid={183}>
                    <div
                      className="desktop-categoryContainer"
                      data-index={1}
                      data-group="women"
                      data-color="#fb56c1"
                      data-reactid={184}
                    >
                      <li
                        className="desktop-oddColumnContent"
                        data-reactid={185}
                      >
                        <ul className="desktop-navBlock" data-reactid={186}>
                          <li data-reactid={187}>
                            <Link
                              href="/fusion-wear"
                              style={{ color: "#fb56c1" }}
                              className="desktop-categoryName"
                              data-reactid={188}
                            >
                              Indian &amp; Fusion Wear
                            </Link>
                          </li>
                          <li data-reactid={189}>
                            <Link
                              href="/women-kurtas-kurtis-suits"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={190}
                            >
                              Kurtas &amp; Suits
                            </Link>
                          </li>
                          <li data-reactid={191}>
                            <Link
                              href="/ethnic-tops"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={192}
                            >
                              Kurtis, Tunics &amp; Tops
                            </Link>
                          </li>
                          <li data-reactid={193}>
                            <Link
                              href="/saree"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={194}
                            >
                              Sarees
                            </Link>
                          </li>
                          <li data-reactid={195}>
                            <Link
                              href="/women-ethnic-wear"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={196}
                            >
                              Ethnic Wear
                            </Link>
                          </li>
                          <li data-reactid={197}>
                            <Link
                              href="/women-ethnic-bottomwear?f=categories%3AChuridar%2CLeggings%2CSalwar"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={198}
                            >
                              Leggings, Salwars &amp; Churidars
                            </Link>
                          </li>
                          <li data-reactid={199}>
                            <Link
                              href="/skirts-palazzos"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={200}
                            >
                              Skirts &amp; Palazzos
                            </Link>
                          </li>
                          <li data-reactid={201}>
                            <Link
                              href="/dress-material"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={202}
                            >
                              Dress Materials
                            </Link>
                          </li>
                          <li data-reactid={203}>
                            <Link
                              href="/lehenga-choli"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={204}
                            >
                              Lehenga Cholis
                            </Link>
                          </li>
                          <li data-reactid={205}>
                            <Link
                              href="/dupatta-shawl"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={206}
                            >
                              Dupattas &amp; Shawls
                            </Link>
                          </li>
                          <li data-reactid={207}>
                            <Link
                              href="/women-jackets"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={208}
                            >
                              Jackets
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={209} />
                          <li data-reactid={210}>
                            <Link
                              href="/women-accessories"
                              style={{ color: "#fb56c1" }}
                              className="desktop-categoryName"
                              data-reactid={211}
                            >
                              Belts, Scarves &amp; More
                            </Link>
                          </li>
                          <li data-reactid={212}>
                            <Link
                              href="/women-watches"
                              style={{ color: "#fb56c1" }}
                              className="desktop-categoryName"
                              data-reactid={213}
                            >
                              Watches &amp; Wearables
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="desktop-evenColumnContent desktop-oddColumnContent"
                        data-reactid={214}
                      >
                        <ul className="desktop-navBlock" data-reactid={215}>
                          <li data-reactid={216}>
                            <Link
                              href="/womens-western-wear"
                              style={{ color: "#fb56c1" }}
                              className="desktop-categoryName"
                              data-reactid={217}
                            >
                              Western Wear
                            </Link>
                          </li>
                          <li data-reactid={218}>
                            <Link
                              href="/dresses?f=Gender%3Amen%20women%2Cwomen"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={219}
                            >
                              Dresses
                            </Link>
                          </li>
                          <li data-reactid={220}>
                            <Link
                              href="/tops"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={221}
                            >
                              Tops
                            </Link>
                          </li>
                          <li data-reactid={222}>
                            <Link
                              href="/myntra-fashion-store?f=Categories%3ATshirts%3A%3AGender%3Amen%20women%2Cwomen"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={223}
                            >
                              Tshirts
                            </Link>
                          </li>
                          <li data-reactid={224}>
                            <Link
                              href="/women-jeans"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={225}
                            >
                              Jeans
                            </Link>
                          </li>
                          <li data-reactid={226}>
                            <Link
                              href="/women-trousers"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={227}
                            >
                              Trousers &amp; Capris
                            </Link>
                          </li>
                          <li data-reactid={228}>
                            <Link
                              href="/women-shorts-skirts"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={229}
                            >
                              Shorts &amp; Skirts
                            </Link>
                          </li>
                          <li data-reactid={230}>
                            <Link
                              href="/myntra-fashion-store?f=Categories%3AClothing%20Set%2CCo-Ords%3A%3AGender%3Amen%20women%2Cwomen"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={231}
                            >
                              Co-ords
                            </Link>
                          </li>
                          <li data-reactid={232}>
                            <Link
                              href="/playsuit?f=Gender%3Amen%20women%2Cwomen"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={233}
                            >
                              Playsuits
                            </Link>
                          </li>
                          <li data-reactid={234}>
                            <Link
                              href="/jumpsuits?f=Gender%3Amen%20women%2Cwomen"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={235}
                            >
                              Jumpsuits
                            </Link>
                          </li>
                          <li data-reactid={236}>
                            <Link
                              href="/women-shrugs"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={237}
                            >
                              Shrugs
                            </Link>
                          </li>
                          <li data-reactid={238}>
                            <Link
                              href="/women-sweaters-sweatshirts"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={239}
                            >
                              Sweaters &amp; Sweatshirts
                            </Link>
                          </li>
                          <li data-reactid={240}>
                            <Link
                              href="/women-jackets-coats"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={241}
                            >
                              Jackets &amp; Coats
                            </Link>
                          </li>
                          <li data-reactid={242}>
                            <Link
                              href="/women-blazers-waistcoats"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={243}
                            >
                              Blazers &amp; Waistcoats
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={244} />
                          <li data-reactid={245}>
                            <Link
                              href="/women-plus-store"
                              style={{ color: "#fb56c1" }}
                              className="desktop-categoryName"
                              data-reactid={246}
                            >
                              Plus Size
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="desktop-oddColumnContent"
                        data-reactid={247}
                      >
                        <ul className="desktop-navBlock" data-reactid={248}>
                          <li data-reactid={249}>
                            <Link
                              href="/myntra-fashion-store?f=Categories%3ACamisoles%2CChuridar%2CDresses%2CHarem%20Pants%2CJeans%2CKurta%20Sets%2CKurtas%2CKurtis%2CLeggings%2CLounge%20Tshirts%2CNightdress%2CPalazzos%2CShirts%2CShrug%2CSkirts%2CTops%2CTrack%20Pants%2CTrousers%2CTshirts%2CTunics%3A%3AGender%3Amen%20women%2Cwomen%3A%3AOccasion%3AMaternity"
                              style={{ color: "#fb56c1" }}
                              className="desktop-categoryName"
                              data-reactid={250}
                            >
                              Maternity
                            </Link>
                          </li>
                          <li data-reactid={251}>
                            <Link
                              href="/women-sunglasses"
                              style={{ color: "#fb56c1" }}
                              className="desktop-categoryName"
                              data-reactid={252}
                            >
                              Sunglasses &amp; Frames
                            </Link>
                          </li>
                          <li data-reactid={253}>
                            <Link
                              href="/women-footwear"
                              style={{ color: "#fb56c1" }}
                              className="desktop-categoryName"
                              data-reactid={254}
                            >
                              Footwear
                            </Link>
                          </li>
                          <li data-reactid={255}>
                            <Link
                              href="/flats"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={256}
                            >
                              Flats
                            </Link>
                          </li>
                          <li data-reactid={257}>
                            <Link
                              href="/women-casual-shoes"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={258}
                            >
                              Casual Shoes
                            </Link>
                          </li>
                          <li data-reactid={259}>
                            <Link
                              href="/women-heels"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={260}
                            >
                              Heels
                            </Link>
                          </li>
                          <li data-reactid={261}>
                            <Link
                              href="/women-boots-menu"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={262}
                            >
                              Boots
                            </Link>
                          </li>
                          <li data-reactid={263}>
                            <Link
                              href="/women-sports-shoes"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={264}
                            >
                              Sports Shoes &amp; Floaters
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={265} />
                          <li data-reactid={266}>
                            <Link
                              href="/women-sportswear"
                              style={{ color: "#fb56c1" }}
                              className="desktop-categoryName"
                              data-reactid={267}
                            >
                              Sports &amp; Active Wear
                            </Link>
                          </li>
                          <li data-reactid={268}>
                            <Link
                              href="/women-sportswear-clothing"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={269}
                            >
                              Clothing
                            </Link>
                          </li>
                          <li data-reactid={270}>
                            <Link
                              href="/women-sports-shoes"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={271}
                            >
                              Footwear
                            </Link>
                          </li>
                          <li data-reactid={272}>
                            <Link
                              href="/women-sports-accessories"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={273}
                            >
                              Sports Accessories
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="desktop-evenColumnContent desktop-oddColumnContent"
                        data-reactid={276}
                      >
                        <ul className="desktop-navBlock" data-reactid={277}>
                          <li data-reactid={278}>
                            <Link
                              href="/lingerie-and-loungewear1"
                              style={{ color: "#fb56c1" }}
                              className="desktop-categoryName"
                              data-reactid={279}
                            >
                              Lingerie &amp; Sleepwear
                            </Link>
                          </li>
                          <li data-reactid={280}>
                            <Link
                              href="/bra"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={281}
                            >
                              Bra
                            </Link>
                          </li>
                          <li data-reactid={282}>
                            <Link
                              href="/women-briefs"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={283}
                            >
                              Briefs
                            </Link>
                          </li>
                          <li data-reactid={284}>
                            <Link
                              href="/women-clothing-shapewear"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={285}
                            >
                              Shapewear
                            </Link>
                          </li>
                          <li data-reactid={286}>
                            <Link
                              href="/women-loungewear-and-nightwear"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={287}
                            >
                              Sleepwear &amp; Loungewear
                            </Link>
                          </li>
                          <li data-reactid={288}>
                            <Link
                              href="/women-swimwear"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={289}
                            >
                              Swimwear
                            </Link>
                          </li>
                          <li data-reactid={290}>
                            <Link
                              href="/camisoles-and-thermals"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={291}
                            >
                              Camisoles &amp; Thermals
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={292} />
                          <li data-reactid={293}>
                            <Link
                              href="/women-personal-care"
                              style={{ color: "#fb56c1" }}
                              className="desktop-categoryName"
                              data-reactid={294}
                            >
                              Beauty &amp; Personal Care
                            </Link>
                          </li>
                          <li data-reactid={295}>
                            <Link
                              href="/makeup"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={296}
                            >
                              Makeup
                            </Link>
                          </li>
                          <li data-reactid={297}>
                            <Link
                              href="/skin-care?f=gender%3Amen%20women%2Cwomen"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={298}
                            >
                              Skincare
                            </Link>
                          </li>
                          <li data-reactid={299}>
                            <Link
                              href="/women-personal-care?f=brand%3ABobbi%20Brown%2CBvlgari%2CCalvin%20Klein%2CClinique%2CDAVIDOFF%2CDermalogica%2CForest%20Essentials%2CKAMA%20AYURVEDA%2CSalvatore%20Ferragamo"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={300}
                            >
                              Premium Beauty
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="desktop-oddColumnContent"
                        data-reactid={305}
                      >
                        <ul className="desktop-navBlock" data-reactid={306}>
                          <li data-reactid={307}>
                            <Link
                              href="/gadgets"
                              style={{ color: "#fb56c1" }}
                              className="desktop-categoryName"
                              data-reactid={308}
                            >
                              Gadgets
                            </Link>
                          </li>
                          <li data-reactid={309}>
                            <Link
                              href="/smart-wearables"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={310}
                            >
                              Smart Wearables
                            </Link>
                          </li>
                          <li data-reactid={311}>
                            <Link
                              href="/smart-wearables?f=Categories%3AFitness%20Bands"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={312}
                            >
                              Fitness Gadgets
                            </Link>
                          </li>
                          <li data-reactid={313}>
                            <Link
                              href="/headphones"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={314}
                            >
                              Headphones
                            </Link>
                          </li>
                          <li data-reactid={315}>
                            <Link
                              href="/speakers"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={316}
                            >
                              Speakers
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={317} />
                          <li data-reactid={318}>
                            <Link
                              href="/women-jewellery"
                              style={{ color: "#fb56c1" }}
                              className="desktop-categoryName"
                              data-reactid={319}
                            >
                              Jewellery
                            </Link>
                          </li>
                          <li data-reactid={320}>
                            <Link
                              href="/fashion-jewellery"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={321}
                            >
                              Fashion Jewellery
                            </Link>
                          </li>
                          <li data-reactid={322}>
                            <Link
                              href="/fine-jewellery"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={323}
                            >
                              Fine Jewellery
                            </Link>
                          </li>
                          <li data-reactid={324}>
                            <Link
                              href="/earrings"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={325}
                            >
                              Earrings
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={326} />
                          <li data-reactid={327}>
                            <Link
                              href="/backpacks-for-women"
                              style={{ color: "#fb56c1" }}
                              className="desktop-categoryName"
                              data-reactid={328}
                            >
                              Backpacks
                            </Link>
                          </li>
                          <li data-reactid={329}>
                            <Link
                              href="/handbags-and-bags"
                              style={{ color: "#fb56c1" }}
                              className="desktop-categoryName"
                              data-reactid={330}
                            >
                              Handbags, Bags &amp; Wallets
                            </Link>
                          </li>
                          <li data-reactid={331}>
                            <Link
                              href="/trolley-bags"
                              style={{ color: "#fb56c1" }}
                              className="desktop-categoryName"
                              data-reactid={332}
                            >
                              Luggages &amp; Trolleys
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="desktop-navContent kidsnav" data-reactid={333}>
              <div className="desktop-navLink" data-reactid={334}>
                <Link
                  data-index={2}
                  data-group="kids"
                  data-color="#f26a10"
                  data-type="navElements"
                  style={{ borderBottomColor: "#f26a10" }}
                  className="desktop-main kidsdesktop"
                  data-reactid={335}
                >
                  Kids
                </Link>
                {/* react-text: 336 */}
                {/* /react-text */}
                <div className="desktop-backdropStyle" data-reactid={337}>
                  <div className="desktop-paneContent" data-reactid={338}>
                    <div
                      className="desktop-categoryContainer"
                      data-index={2}
                      data-group="kids"
                      data-color="#f26a10"
                      data-reactid={339}
                    >
                      <li
                        className="desktop-oddColumnContent"
                        data-reactid={340}
                      >
                        <ul className="desktop-navBlock" data-reactid={341}>
                          <li data-reactid={342}>
                            <Link
                              href="/kids?f=Gender%3Aboys%2Cboys%20girls&plaEnabled=false"
                              style={{ color: "#f26a10" }}
                              className="desktop-categoryName"
                              data-reactid={343}
                            >
                              Boys Clothing
                            </Link>
                          </li>
                          <li data-reactid={344}>
                            <Link
                              href="/kids?f=Categories%3ATshirts%3A%3AGender%3Aboys%2Cboys%20girls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={345}
                            >
                              T-Shirts
                            </Link>
                          </li>
                          <li data-reactid={346}>
                            <Link
                              href="/kids?f=Categories%3AShirts%3A%3AGender%3Aboys%2Cboys%20girls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={347}
                            >
                              Shirts
                            </Link>
                          </li>
                          <li data-reactid={348}>
                            <Link
                              href="/kids?f=Categories%3AShorts%3A%3AGender%3Aboys%2Cboys%20girls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={349}
                            >
                              Shorts
                            </Link>
                          </li>
                          <li data-reactid={350}>
                            <Link
                              href="/kids?f=Categories%3AJeans%3A%3AGender%3Aboys%2Cboys%20girls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={351}
                            >
                              Jeans
                            </Link>
                          </li>
                          <li data-reactid={352}>
                            <Link
                              href="/kids?f=Categories%3ATrousers%3A%3AGender%3Aboys%2Cboys%20girls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={353}
                            >
                              Trousers
                            </Link>
                          </li>
                          <li data-reactid={354}>
                            <Link
                              href="/kids?f=Categories%3AClothing%20Set%3A%3AGender%3Aboys%2Cboys%20girls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={355}
                            >
                              Clothing Sets
                            </Link>
                          </li>
                          <li data-reactid={356}>
                            <Link
                              href="/ki-etnhc?f=Gender%3Aboys%2Cboys%20girls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={357}
                            >
                              Ethnic Wear
                            </Link>
                          </li>
                          <li data-reactid={358}>
                            <Link
                              href="/kids?f=Categories%3ALounge%20Pants%2CPyjamas%2CTrack%20Pants%3A%3AGender%3Aboys%2Cboys%20girls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={359}
                            >
                              Track Pants &amp; Pyjamas
                            </Link>
                          </li>
                          <li data-reactid={360}>
                            <Link
                              href="/kids?f=Categories%3ADresses%2CJackets%2CSweaters%2CSweatshirts%3A%3AGender%3Aboys%2Cboys%20girls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={361}
                            >
                              Jacket, Sweater &amp; Sweatshirts
                            </Link>
                          </li>
                          <li data-reactid={362}>
                            <Link
                              href="/kdsprtywr?f=Gender%3Aboys%2Cboys%20girls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={363}
                            >
                              Party Wear
                            </Link>
                          </li>
                          <li data-reactid={364}>
                            <Link
                              href="/kids-innerwear?f=Gender%3Aboys%2Cboys%20girls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={365}
                            >
                              Innerwear &amp; Thermals
                            </Link>
                          </li>
                          <li data-reactid={366}>
                            <Link
                              href="/kids-nightwear?f=Gender%3Aboys%2Cboys%20girls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={367}
                            >
                              Nightwear &amp; Loungewear
                            </Link>
                          </li>
                          <li data-reactid={368}>
                            <Link
                              href="/kids-packs-?f=Gender%3Aboys%2Cboys%20girls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={369}
                            >
                              Value Packs
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="desktop-evenColumnContent desktop-oddColumnContent"
                        data-reactid={370}
                      >
                        <ul className="desktop-navBlock" data-reactid={371}>
                          <li data-reactid={372}>
                            <Link
                              href="/kids?f=Gender%3Aboys%20girls%2Cgirls&plaEnabled=false"
                              style={{ color: "#f26a10" }}
                              className="desktop-categoryName"
                              data-reactid={373}
                            >
                              Girls Clothing
                            </Link>
                          </li>
                          <li data-reactid={374}>
                            <Link
                              href="/kids?f=Categories%3ADresses%3A%3AGender%3Aboys%20girls%2Cgirls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={375}
                            >
                              Dresses
                            </Link>
                          </li>
                          <li data-reactid={376}>
                            <Link
                              href="/kids?f=Categories%3ATops%3A%3AGender%3Aboys%20girls%2Cgirls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={377}
                            >
                              Tops
                            </Link>
                          </li>
                          <li data-reactid={378}>
                            <Link
                              href="/kids?f=Categories%3ATshirts%3A%3AGender%3Aboys%20girls%2Cgirls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={379}
                            >
                              Tshirts
                            </Link>
                          </li>
                          <li data-reactid={380}>
                            <Link
                              href="/kids?f=Categories%3AClothing%20Set%3A%3AGender%3Aboys%20girls%2Cgirls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={381}
                            >
                              Clothing Sets
                            </Link>
                          </li>
                          <li data-reactid={382}>
                            <Link
                              href="/kids?f=Categories%3ALehenga%20Choli&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={383}
                            >
                              Lehenga choli
                            </Link>
                          </li>
                          <li data-reactid={384}>
                            <Link
                              href="/kids?f=Categories%3AKurta%20Sets%3A%3AGender%3Aboys%20girls%2Cgirls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={385}
                            >
                              Kurta Sets
                            </Link>
                          </li>
                          <li data-reactid={386}>
                            <Link
                              href="/kdsprtywr?f=Gender%3Aboys%20girls%2Cgirls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={387}
                            >
                              Party wear
                            </Link>
                          </li>
                          <li data-reactid={388}>
                            <Link
                              href="/kids?f=Categories%3ADungarees%2CJumpsuit%3A%3AGender%3Aboys%20girls%2Cgirls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={389}
                            >
                              Dungarees &amp; Jumpsuits
                            </Link>
                          </li>
                          <li data-reactid={390}>
                            <Link
                              href="/kids?f=Categories%3AShorts%2CSkirts%3A%3AGender%3Aboys%20girls%2Cgirls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={391}
                            >
                              Skirts &amp; shorts
                            </Link>
                          </li>
                          <li data-reactid={392}>
                            <Link
                              href="/kids?f=Categories%3ALeggings%2CStockings%2CTights%3A%3AGender%3Aboys%20girls%2Cgirls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={393}
                            >
                              Tights &amp; Leggings
                            </Link>
                          </li>
                          <li data-reactid={394}>
                            <Link
                              href="/kids?f=Categories%3ACapris%2CJeans%2CJeggings%2CTrousers%3A%3AGender%3Aboys%20girls%2Cgirls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={395}
                            >
                              Jeans, Trousers &amp; Capris
                            </Link>
                          </li>
                          <li data-reactid={396}>
                            <Link
                              href="/kids?f=Categories%3ACoats%2CJackets%2CSweaters%2CSweatshirts%2CThermal%20Bottoms%2CThermal%20Set%2CThermal%20Tops%3A%3AGender%3Aboys%20girls%2Cgirls"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={397}
                            >
                              Jacket, Sweater &amp; Sweatshirts
                            </Link>
                          </li>
                          <li data-reactid={398}>
                            <Link
                              href="/kids-innerwear?f=Gender%3Aboys%20girls%2Cgirls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={399}
                            >
                              Innerwear &amp; Thermals
                            </Link>
                          </li>
                          <li data-reactid={400}>
                            <Link
                              href="/kids-nightwear?f=Gender%3Aboys%20girls%2Cgirls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={401}
                            >
                              Nightwear &amp; Loungewear
                            </Link>
                          </li>
                          <li data-reactid={402}>
                            <Link
                              href="/kids-packs-?f=Gender%3Aboys%20girls%2Cgirls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={403}
                            >
                              Value Packs
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="desktop-oddColumnContent"
                        data-reactid={404}
                      >
                        <ul className="desktop-navBlock" data-reactid={405}>
                          <li data-reactid={406}>
                            <Link
                              href="/kids-footwear"
                              style={{ color: "#f26a10" }}
                              className="desktop-categoryName"
                              data-reactid={407}
                            >
                              Footwear
                            </Link>
                          </li>
                          <li data-reactid={408}>
                            <Link
                              href="/kids-footwear?f=Categories%3ACasual%20Shoes&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={409}
                            >
                              Casual Shoes
                            </Link>
                          </li>
                          <li data-reactid={410}>
                            <Link
                              href="/kids-footwear?f=Categories%3AFlip%20Flops&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={411}
                            >
                              Flipflops
                            </Link>
                          </li>
                          <li data-reactid={412}>
                            <Link
                              href="/kids-footwear?f=Categories%3ASports%20Shoes&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={413}
                            >
                              Sports Shoes
                            </Link>
                          </li>
                          <li data-reactid={414}>
                            <Link
                              href="/kids-footwear?f=Categories%3AFlats&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={415}
                            >
                              Flats
                            </Link>
                          </li>
                          <li data-reactid={416}>
                            <Link
                              href="/kids-footwear?f=Categories%3ASandals%2CSports%20Sandals&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={417}
                            >
                              Sandals
                            </Link>
                          </li>
                          <li data-reactid={418}>
                            <Link
                              href="/kids-footwear?f=Categories%3AHeels&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={419}
                            >
                              Heels
                            </Link>
                          </li>
                          <li data-reactid={420}>
                            <Link
                              href="/school-shoes?plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={421}
                            >
                              School Shoes
                            </Link>
                          </li>
                          <li data-reactid={422}>
                            <Link
                              href="/kids?f=Categories%3ABooties%2CSocks&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={423}
                            >
                              Socks
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={424} />
                          <li data-reactid={425}>
                            <Link
                              href="/toys-and-games"
                              style={{ color: "#f26a10" }}
                              className="desktop-categoryName"
                              data-reactid={426}
                            >
                              Toys &amp; Games
                            </Link>
                          </li>
                          <li data-reactid={427}>
                            <Link
                              href="/toys-and-games?f=Categories%3ALearning%20and%20Development%20Toys&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={428}
                            >
                              Learning &amp; Development
                            </Link>
                          </li>
                          <li data-reactid={429}>
                            <Link
                              href="/toys-and-games?f=Categories%3AActivity%20Toys%20and%20Games&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={430}
                            >
                              Activity Toys
                            </Link>
                          </li>
                          <li data-reactid={431}>
                            <Link
                              href="/toys-and-games?f=Categories%3ASoft%20Toys%20and%20Dolls&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={432}
                            >
                              Soft Toys
                            </Link>
                          </li>
                          <li data-reactid={433}>
                            <Link
                              href="/toys-and-games?f=Categories%3AAction%20Figures%20and%20Play%20Set&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={434}
                            >
                              Action Figure / Play set
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="desktop-evenColumnContent desktop-oddColumnContent"
                        data-reactid={435}
                      >
                        <ul className="desktop-navBlock" data-reactid={436}>
                          <li data-reactid={437}>
                            <Link
                              href="/inf-tki"
                              style={{ color: "#f26a10" }}
                              className="desktop-categoryName"
                              data-reactid={438}
                            >
                              Infants
                            </Link>
                          </li>
                          <li data-reactid={439}>
                            <Link
                              href="/kids?f=Categories%3ABodysuit&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={440}
                            >
                              Bodysuits
                            </Link>
                          </li>
                          <li data-reactid={441}>
                            <Link
                              href="/kids?f=Categories%3ARompers%2CSleepsuit&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={442}
                            >
                              Rompers &amp; Sleepsuits
                            </Link>
                          </li>
                          <li data-reactid={443}>
                            <Link
                              href="/kids?f=Age%3A0M-3M%2C12M-18M%2C18M-24M%2C3M-6M%2C6M-9M%2C9M-12M%2CNewborn%3A%3ACategories%3AClothing%20Set&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={444}
                            >
                              Clothing Sets
                            </Link>
                          </li>
                          <li data-reactid={445}>
                            <Link
                              href="/kids?f=Age%3A0M-3M%2C12M-18M%2C18M-24M%2C3M-6M%2C6M-9M%2C9M-12M%2CNewborn%3A%3ACategories%3ATops%2CTshirts&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={446}
                            >
                              Tshirts &amp; Tops
                            </Link>
                          </li>
                          <li data-reactid={447}>
                            <Link
                              href="/kids?f=Age%3A0M-3M%2C12M-18M%2C18M-24M%2C3M-6M%2C6M-9M%2C9M-12M%2CNewborn%3A%3ACategories%3ADresses&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={448}
                            >
                              Dresses
                            </Link>
                          </li>
                          <li data-reactid={449}>
                            <Link
                              href="/kids?f=Age%3A0M-3M%2C12M-18M%2C18M-24M%2C3M-6M%2C6M-9M%2C9M-12M%2CNewborn%3A%3ACategories%3ACapris%2CJeans%2CJeggings%2CLeggings%2CLounge%20Pants%2CLounge%20Shorts%2CPyjamas%2CShorts%2CSkirts%2CTights%2CTrack%20Pants%2CTrousers&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={450}
                            >
                              Bottom wear
                            </Link>
                          </li>
                          <li data-reactid={451}>
                            <Link
                              href="/inf-tki?f=Age%3A0M-3M%2C12M-18M%2C18M-24M%2C3M-6M%2C6M-9M%2C9M-12M%2CNewborn%3A%3ACategories%3ABlazers%2CJackets%2CSweaters%2CSweatshirts%2CWaistcoat&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={452}
                            >
                              Winter Wear
                            </Link>
                          </li>
                          <li data-reactid={453}>
                            <Link
                              href="/inf-tki?f=Categories%3ABoxers%2CBriefs%2CCamisoles%2CInnerwear%20Vests%2CNight%20suits%2CPyjamas%2CThermal%20Bottoms%2CThermal%20Set%2CThermal%20Tops%2CTrunk&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={454}
                            >
                              Innerwear &amp; Sleepwear
                            </Link>
                          </li>
                          <li data-reactid={455}>
                            <Link
                              href="/kids?f=Categories%3ABaby%20Apparel%20Gift%20Set%2CBaby%20Care%20Products%2CBaby%20Gear%20%26%20Nursery%2CBibs%2CDiaper%20Bags%2CMittens%2CNapkin%20Set&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={456}
                            >
                              Infant Care
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={457} />
                          <li data-reactid={458}>
                            <Link
                              href="/kids-home-bath"
                              style={{ color: "#f26a10" }}
                              className="desktop-categoryName"
                              data-reactid={459}
                            >
                              Home &amp; Bath
                            </Link>
                          </li>
                          <li data-reactid={460}>
                            <Link
                              href="/kids?f=Categories%3ABaby%20Care%20Products%2CBath%20and%20Body%20Gift%20Set%2CBathroom%20Accessories%2CBody%20Lotion%2CBody%20Oil%2CBody%20Wash%20and%20Scrub%2CDeodorant%2CFace%20Wash%20and%20Cleanser%2CHair%20Brush%20and%20Comb%2CHair%20Oil%2CShampoo%20and%20Conditioner%2CSunscreen%2CTissues%20and%20Wipes%2CToiletry%20Kit&plaEnabled=false"
                              style={{ color: "#f26a10" }}
                              className="desktop-categoryName"
                              data-reactid={461}
                            >
                              Personal Care
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="desktop-oddColumnContent"
                        data-reactid={462}
                      >
                        <ul className="desktop-navBlock" data-reactid={463}>
                          <li data-reactid={464}>
                            <Link
                              href="/kids-accessories"
                              style={{ color: "#f26a10" }}
                              className="desktop-categoryName"
                              data-reactid={465}
                            >
                              Kids Accessories
                            </Link>
                          </li>
                          <li data-reactid={466}>
                            <Link
                              href="/kids?f=Categories%3ABackpacks%2CSchool%20Essentials%2CStationery%2CWater%20Bottle&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={467}
                            >
                              Bags &amp; Backpacks
                            </Link>
                          </li>
                          <li data-reactid={468}>
                            <Link
                              href="/kids?f=Categories%3AWatch%20Gift%20Set%2CWatches&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={469}
                            >
                              Watches
                            </Link>
                          </li>
                          <li data-reactid={470}>
                            <Link
                              href="/kids?f=Categories%3AHair%20Accessory%2CHair%20Brush%20and%20Comb%2CJewellery%20Set%2CNecklace%20and%20Chains&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={471}
                            >
                              Jewellery &amp; Hair accessory
                            </Link>
                          </li>
                          <li data-reactid={472}>
                            <Link
                              href="/kids?f=Categories%3ASunglasses&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={473}
                            >
                              Sunglasses
                            </Link>
                          </li>
                          <li data-reactid={476}>
                            <Link
                              href="/kids?f=Categories%3ACaps%2CHat&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={477}
                            >
                              Caps &amp; Hats
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={478} />
                          <li data-reactid={479}>
                            <Link
                              href="/kids"
                              style={{ color: "#f26a10" }}
                              className="desktop-categoryName"
                              data-reactid={480}
                            >
                              Brands
                            </Link>
                          </li>
                          <li data-reactid={481}>
                            <Link
                              href="/kids?f=Brand%3AH%26M&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={482}
                            >
                              H&amp;M
                            </Link>
                          </li>

                          <li data-reactid={485}>
                            <Link
                              href="/kids?f=Brand%3AAKKRITI%20BY%20PANTALOONS%2CAjile%20by%20Pantaloons%2CCHALK%20by%20Pantaloons%2CChirpie%20Pie%20by%20Pantaloons%2CPOPPERS%20by%20Pantaloons%2CPantaloons%20Baby%2CPantaloons%20Junior%2Cindus%20route%20by%20Pantaloons&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={486}
                            >
                              Pantaloons
                            </Link>
                          </li>
                          <li data-reactid={487}>
                            <Link
                              href="/kids?f=Brand%3AUnited%20Colors%20of%20Benetton&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={488}
                            >
                              United Colors Of Benetton Kids
                            </Link>
                          </li>
                          <li data-reactid={489}>
                            <Link
                              href="/kids?f=Brand%3AYK%2CYK%20Basics%2CYK%20Disney%2CYK%20Justice%20League%2CYK%20Marvel%2CYK%20Organic%2CYK%20Star%20Wars&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={490}
                            >
                              YK
                            </Link>
                          </li>
                          <li data-reactid={491}>
                            <Link
                              href="/kids?f=Brand%3AU.S.%20Polo%20Assn.%2CU.S.%20Polo%20Assn.%20Kids&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={492}
                            >
                              U.S. Polo Assn. Kids
                            </Link>
                          </li>

                          <li data-reactid={495}>
                            <Link
                              href="/kids?f=Brand%3AHRX%20by%20Hrithik%20Roshan&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={496}
                            >
                              HRX
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="desktop-navContent homenav" data-reactid={497}>
              <div className="desktop-navLink" data-reactid={498}>
                <Link
                  data-index={3}
                  data-group="home-&-living"
                  data-color="#f2c210"
                  data-type="navElements"
                  style={{ borderBottomColor: "#f2c210" }}
                  className="desktop-main homedesktop"
                  data-reactid={499}
                >
                  Home &amp; Living
                </Link>
                {/* react-text: 500 */}
                {/* /react-text */}
                <div className="desktop-backdropStyle" data-reactid={501}>
                  <div className="desktop-paneContent" data-reactid={502}>
                    <div
                      className="desktop-categoryContainer"
                      data-index={3}
                      data-group="home-&-living"
                      data-color="#f2c210"
                      data-reactid={503}
                    >
                      <li
                        className="desktop-oddColumnContent"
                        data-reactid={504}
                      >
                        <ul className="desktop-navBlock" data-reactid={505}>
                          <li data-reactid={506}>
                            <Link
                              href="/bedding"
                              style={{ color: "#f2c210" }}
                              className="desktop-categoryName"
                              data-reactid={507}
                            >
                              Bed Linen &amp; Furnishing
                            </Link>
                          </li>
                          <li data-reactid={508}>
                            <Link
                              href="/home-furnishing?f=Categories%3ARunners%3A%3AType%3ABed"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={509}
                            >
                              Bed Runners
                            </Link>
                          </li>
                          <li data-reactid={510}>
                            <Link
                              href="/home-furnishing-menu?f=Categories%3AMattress%20Protector"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={511}
                            >
                              Mattress Protectors
                            </Link>
                          </li>
                          <li data-reactid={512}>
                            <Link
                              href="/bedsheets"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={513}
                            >
                              Bedsheets
                            </Link>
                          </li>
                          <li data-reactid={514}>
                            <Link
                              href="/bedding-sets"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={515}
                            >
                              Bedding Sets
                            </Link>
                          </li>
                          <li data-reactid={516}>
                            <Link
                              href="/blankets-quilts-and-dohars"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={517}
                            >
                              Blankets, Quilts &amp; Dohars
                            </Link>
                          </li>
                          <li data-reactid={518}>
                            <Link
                              href="/pillows"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={519}
                            >
                              Pillows &amp; Pillow Covers
                            </Link>
                          </li>
                          <li data-reactid={520}>
                            <Link
                              href="/bed-covers"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={521}
                            >
                              Bed Covers
                            </Link>
                          </li>
                          <li data-reactid={522}>
                            <Link
                              href="https://www.myntra.com/diwan-set?src=bc"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={523}
                            >
                              Diwan Sets
                            </Link>
                          </li>
                          <li data-reactid={524}>
                            <Link
                              href="https://www.myntra.com/home-furnishing?f=Categories%3AChair%20Cover%2CChair%20Pads"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={525}
                            >
                              Chair Pads &amp; Covers
                            </Link>
                          </li>
                          <li data-reactid={526}>
                            <Link
                              href="https://www.myntra.com/sofa-covers"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={527}
                            >
                              Sofa Covers
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={528} />
                          <li data-reactid={529}>
                            <Link
                              href="/flooring"
                              style={{ color: "#f2c210" }}
                              className="desktop-categoryName"
                              data-reactid={530}
                            >
                              Flooring
                            </Link>
                          </li>

                          <li data-reactid={533}>
                            <Link
                              href="/carpets"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={534}
                            >
                              Carpets
                            </Link>
                          </li>
                          <li data-reactid={535}>
                            <Link
                              href="/floor-mats-dhurries"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={536}
                            >
                              Floor Mats &amp; Dhurries
                            </Link>
                          </li>
                          <li data-reactid={537}>
                            <Link
                              href="/doormats"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={538}
                            >
                              Door Mats
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="desktop-evenColumnContent desktop-oddColumnContent"
                        data-reactid={539}
                      >
                        <ul className="desktop-navBlock" data-reactid={540}>
                          <li data-reactid={541}>
                            <Link
                              href="/home-furnishing-menu?f=Categories%3ABath%20Robe%2CBath%20Rugs%2CBath%20Towels%2CBathroom%20Accessories%2CBeach%20Towels%2CFace%20Towels%2CHand%20Towels%2CShower%20Curtains%2CTowel%20Set"
                              style={{ color: "#f2c210" }}
                              className="desktop-categoryName"
                              data-reactid={542}
                            >
                              Bath
                            </Link>
                          </li>
                          <li data-reactid={543}>
                            <Link
                              href="/towels"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={544}
                            >
                              Bath Towels
                            </Link>
                          </li>
                          <li data-reactid={545}>
                            <Link
                              href="/hand-towels"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={546}
                            >
                              Hand &amp; Face Towels
                            </Link>
                          </li>
                          <li data-reactid={547}>
                            <Link
                              href="/beach-towels"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={548}
                            >
                              Beach Towels
                            </Link>
                          </li>
                          <li data-reactid={549}>
                            <Link
                              href="/towel-set"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={550}
                            >
                              Towels Set
                            </Link>
                          </li>
                          <li data-reactid={551}>
                            <Link
                              href="/bath-rugs"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={552}
                            >
                              Bath Rugs
                            </Link>
                          </li>
                          <li data-reactid={553}>
                            <Link
                              href="/bath-robes"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={554}
                            >
                              Bath Robes
                            </Link>
                          </li>
                          <li data-reactid={555}>
                            <Link
                              href="/bathroom-accessories"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={556}
                            >
                              Bathroom Accessories
                            </Link>
                          </li>
                          <li data-reactid={557}>
                            <Link
                              href="/home-furnishing-menu?f=Categories%3AShower%20Curtains"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={558}
                            >
                              Shower Curtains
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={559} />
                          <li data-reactid={560}>
                            <Link
                              href="/lightsnlamps"
                              style={{ color: "#f2c210" }}
                              className="desktop-categoryName"
                              data-reactid={561}
                            >
                              Lamps &amp; Lighting
                            </Link>
                          </li>
                          <li data-reactid={562}>
                            <Link
                              href="/floorlamp"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={563}
                            >
                              Floor Lamps
                            </Link>
                          </li>
                          <li data-reactid={564}>
                            <Link
                              href="/ceilinglamp"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={565}
                            >
                              Ceiling Lamps
                            </Link>
                          </li>
                          <li data-reactid={566}>
                            <Link
                              href="/tablelamp"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={567}
                            >
                              Table Lamps
                            </Link>
                          </li>

                          <li data-reactid={570}>
                            <Link
                              href="/outdoorlamp"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={571}
                            >
                              Outdoor Lamps
                            </Link>
                          </li>
                          <li data-reactid={572}>
                            <Link
                              href="/stringlight"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={573}
                            >
                              String Lights
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="desktop-oddColumnContent"
                        data-reactid={574}
                      >
                        <ul className="desktop-navBlock" data-reactid={575}>
                          <li data-reactid={576}>
                            <Link
                              href="/home-furnishing?f=Categories%3AAir%20Freshener%2CAroma%20Oils%2CArtificial%20Flowers%20and%20Plants%2CBins%2CCandle%20Holders%2CCandles%2CCeiling%20Lamps%2CClocks%2CDecals%20and%20Stickers%2CDecorative%20Bowls%2CDecorative%20Magnets%2CFestive%20Decor%2CFloor%20Lamps%2CFountains%2CGarden%20Accessories%2CHandheld%20Air%20Fresheners%2CHome%20Fragrance%20Set%2CHome%20Fragrances%2CKey%20Holders%2CLaptop%20Table%2CMirrors%2COutdoor%20Lamps%2CPhoto%20Albums%2CPhoto%20Frames%2CPlanters%2CPooja%20Essentials%2CPotpourri%2CShowpieces%2CString%20Lights%2CVase%20Fillers%2CVases%2CWall%20Art%2CWall%20Decor%2CWall%20Lamps%2CWall%20Shelves%2CWater%20Bottle%2CWindchimes"
                              style={{ color: "#f2c210" }}
                              className="desktop-categoryName"
                              data-reactid={577}
                            >
                              Home Décor
                            </Link>
                          </li>
                          <li data-reactid={578}>
                            <Link
                              href="/home-furnishing?f=Categories%3AArtificial%20Flowers%20and%20Plants%2CGarden%20Accessories%2CPlanters"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={579}
                            >
                              Plants &amp; Planters
                            </Link>
                          </li>
                          <li data-reactid={580}>
                            <Link
                              href="/aroma-oil-diffusers-aroma-oils-air-freshener-handheld-air-fresheners-home-fragrances-home-fragrance-set-candles"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={581}
                            >
                              Aromas &amp; Candles
                            </Link>
                          </li>
                          <li data-reactid={582}>
                            <Link
                              href="/clocks"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={583}
                            >
                              Clocks
                            </Link>
                          </li>
                          <li data-reactid={584}>
                            <Link
                              href="/mirrors"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={585}
                            >
                              Mirrors
                            </Link>
                          </li>
                          <li data-reactid={586}>
                            <Link
                              href="/decorhome?f=Categories%3ADecals%20and%20Stickers%2CKey%20Holders%2CPhoto%20Frames%2CWall%20Art%2CWall%20Decor%2CWindchimes"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={587}
                            >
                              Wall Décor
                            </Link>
                          </li>
                          <li data-reactid={588}>
                            <Link
                              href="/home-furnishing?f=Categories%3AFestive%20Decor"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={589}
                            >
                              Festive Decor
                            </Link>
                          </li>
                          <li data-reactid={590}>
                            <Link
                              href="/home-furnishing?f=Categories%3AFestive%20Decor%2CPooja%20Essentials"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={591}
                            >
                              Pooja Essentials
                            </Link>
                          </li>
                          <li data-reactid={592}>
                            <Link
                              href="/wall-shelves"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={593}
                            >
                              Wall Shelves
                            </Link>
                          </li>
                          <li data-reactid={594}>
                            <Link
                              href="/fountains"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={595}
                            >
                              Fountains
                            </Link>
                          </li>
                          <li data-reactid={596}>
                            <Link
                              href="/home-decor-showpieces-vases"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={597}
                            >
                              Showpieces &amp; Vases
                            </Link>
                          </li>
                          <li data-reactid={598}>
                            <Link
                              href="/ottoman"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={599}
                            >
                              Ottoman
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={600} />
                          <li data-reactid={601}>
                            <Link
                              href="/cushion-and-cushion-covers"
                              style={{ color: "#f2c210" }}
                              className="desktop-categoryName"
                              data-reactid={602}
                            >
                              Cushions &amp; Cushion Covers
                            </Link>
                          </li>
                          <li data-reactid={603}>
                            <Link
                              href="/curtains"
                              style={{ color: "#f2c210" }}
                              className="desktop-categoryName"
                              data-reactid={604}
                            >
                              Curtains
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="desktop-evenColumnContent desktop-oddColumnContent"
                        data-reactid={605}
                      >
                        <ul className="desktop-navBlock" data-reactid={606}>
                          <li data-reactid={607}>
                            <Link
                              href="/homegiftsets"
                              style={{ color: "#f2c210" }}
                              className="desktop-categoryName"
                              data-reactid={608}
                            >
                              Home Gift Sets
                            </Link>
                          </li>
                          <li data-reactid={609}>
                            <Link
                              href="/home-furnishing?f=Categories%3AAppliance%20covers%2CAprons%2CBakeware%2CBar%20Accessories%2CBar%20and%20Drinkware%2CCoasters%2CCookware%2CCups%20and%20Mugs%2CCutlery%2CDining%20Essentials%2CDinnerware%2CKitchen%20Gloves%2CKitchen%20Linen%20Sets%2CKitchen%20Storage%2CKitchen%20Tools%2CKitchen%20Towels%2COven%20Glove%2CServeware%2CTable%20Cloth%2CTable%20Covers%2CTable%20Linen%20Sets%2CTable%20Napkins%2CTable%20Placemats%2CTowel%20Set%2CTrays%2CWater%20Bottle"
                              style={{ color: "#f2c210" }}
                              className="desktop-categoryName"
                              data-reactid={610}
                            >
                              Kitchen &amp; Table
                            </Link>
                          </li>
                          <li data-reactid={611}>
                            <Link
                              href="/home-furnishing?f=Categories%3ARunners%3A%3AType%3ATable"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={612}
                            >
                              Table Runners
                            </Link>
                          </li>

                          <li data-reactid={615}>
                            <Link
                              href="/cups-and-mugs"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={616}
                            >
                              Cups and Mugs
                            </Link>
                          </li>
                          <li data-reactid={617}>
                            <Link
                              href="/bakeware-cookware"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={618}
                            >
                              Bakeware &amp; Cookware
                            </Link>
                          </li>
                          <li data-reactid={619}>
                            <Link
                              href="/kitchen-storage-kitchen-tools"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={620}
                            >
                              Kitchen Storage &amp; Tools
                            </Link>
                          </li>
                          <li data-reactid={621}>
                            <Link
                              href="/bar-and-drinkware-bar-accessories"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={622}
                            >
                              Bar &amp; Drinkware
                            </Link>
                          </li>
                          <li data-reactid={623}>
                            <Link
                              href="/runners-table-placemats-table-cloth-table-covers-table-napkins-table-mat-oven-glove-aprons-kitchen-linen-sets-kitchen-gloves-table-linen-sets-napkin-set"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={624}
                            >
                              Table Covers &amp; Furnishings
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={625} />
                          <li data-reactid={626}>
                            <Link
                              href="/home-furnishing-menu?f=Categories%3ABins%2CHanger%2CHooks%20and%20Holders%2CLaundry%20Bag%2COrganisers"
                              style={{ color: "#f2c210" }}
                              className="desktop-categoryName"
                              data-reactid={627}
                            >
                              Storage
                            </Link>
                          </li>
                          <li data-reactid={628}>
                            <Link
                              href="/home-furnishing?f=Categories%3ABins"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={629}
                            >
                              Bins
                            </Link>
                          </li>
                          <li data-reactid={630}>
                            <Link
                              href="/home-furnishing?f=Categories%3AHanger"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={631}
                            >
                              Hangers
                            </Link>
                          </li>
                          <li data-reactid={632}>
                            <Link
                              href="/organisers"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={633}
                            >
                              Organisers
                            </Link>
                          </li>
                          <li data-reactid={634}>
                            <Link
                              href="/hooks-and-holders"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={635}
                            >
                              Hooks &amp; Holders
                            </Link>
                          </li>
                          <li data-reactid={636}>
                            <Link
                              href="/laundry-bag?src=bc"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={637}
                            >
                              Laundry Bags
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="desktop-oddColumnContent"
                        data-reactid={638}
                      >
                        <ul className="desktop-navBlock" data-reactid={639}>
                          <li data-reactid={640}>
                            <Link
                              href="/home-furnishing"
                              style={{ color: "#f2c210" }}
                              className="desktop-categoryName"
                              data-reactid={641}
                            >
                              Brands
                            </Link>
                          </li>
                          <li data-reactid={642}>
                            <Link
                              href="/home-furnishing?f=Brand%3AH%26M"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={643}
                            >
                              H&amp;M
                            </Link>
                          </li>
                          <li data-reactid={644}>
                            <Link
                              href="/home-furnishing?f=Brand%3AMarks%20%26%20Spencer"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={645}
                            >
                              Marks &amp; Spencer
                            </Link>
                          </li>
                          <li data-reactid={646}>
                            <Link
                              href="/home-centre"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={647}
                            >
                              Home Centre
                            </Link>
                          </li>
                          <li data-reactid={648}>
                            <Link
                              href="/spaces"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={649}
                            >
                              Spaces
                            </Link>
                          </li>
                          <li data-reactid={650}>
                            <Link
                              href="/ddecor"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={651}
                            >
                              D'Decor
                            </Link>
                          </li>
                          <li data-reactid={652}>
                            <Link
                              href="/story-at-home"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={653}
                            >
                              Story@Home
                            </Link>
                          </li>
                          <li data-reactid={654}>
                            <Link
                              href="/pure-home-and-living"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={655}
                            >
                              Pure Home &amp; Living
                            </Link>
                          </li>
                          <li data-reactid={656}>
                            <Link
                              href="/swayam"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={657}
                            >
                              Swayam
                            </Link>
                          </li>
                          <li data-reactid={658}>
                            <Link
                              href="/raymond-home"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={659}
                            >
                              Raymond Home
                            </Link>
                          </li>
                          <li data-reactid={660}>
                            <Link
                              href="/maspar"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={661}
                            >
                              Maspar
                            </Link>
                          </li>
                          <li data-reactid={662}>
                            <Link
                              href="/home-furnishing?f=Brand%3AMYTRIDENT"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={663}
                            >
                              My Trident
                            </Link>
                          </li>
                          <li data-reactid={664}>
                            <Link
                              href="/cortina"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={665}
                            >
                              Cortina
                            </Link>
                          </li>
                          <li data-reactid={666}>
                            <Link
                              href="/random"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={667}
                            >
                              Random
                            </Link>
                          </li>
                          <li data-reactid={668}>
                            <Link
                              href="/home-furnishing-menu?f=Brand%3Aellementry&plaEnabled=false"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={669}
                            >
                              Ellementry
                            </Link>
                          </li>
                          <li data-reactid={670}>
                            <Link
                              href="/romee?sort=popularity"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={671}
                            >
                              ROMEE
                            </Link>
                          </li>
                          <li data-reactid={672}>
                            <Link
                              href="/sej-by-nisha-gupta"
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={673}
                            >
                              SEJ by Nisha Gupta
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="desktop-navContent beautynav" data-reactid={674}>
              <div className="desktop-navLink" data-reactid={675}>
                <Link
                  data-index={4}
                  data-group="beauty"
                  data-color="#0db7af"
                  data-type="navElements"
                  style={{ borderBottomColor: "#0db7af" }}
                  className="desktop-main beautydesktop"
                  data-reactid={676}
                >
                  Beauty
                </Link>
                {/* react-text: 677 */}
                {/* /react-text */}
                <div className="desktop-backdropStyle" data-reactid={678}>
                  <div className="desktop-paneContent" data-reactid={679}>
                    <div
                      className="desktop-categoryContainer"
                      data-index={4}
                      data-group="beauty"
                      data-color="#0db7af"
                      data-reactid={680}
                    >
                      <li
                        className="desktop-oddColumnContent"
                        data-reactid={681}
                      >
                        <ul className="desktop-navBlock" data-reactid={682}>
                          <li data-reactid={683}>
                            <Link
                              style={{ color: "#0db7af" }}
                              className="desktop-categoryName"
                              data-reactid={684}
                            >
                              Makeup
                            </Link>
                          </li>
                          <li data-reactid={685}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={686}
                            >
                              Lipstick
                            </Link>
                          </li>
                          <li data-reactid={687}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={688}
                            >
                              Lip Gloss
                            </Link>
                          </li>
                          <li data-reactid={689}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={690}
                            >
                              Lip Liner
                            </Link>
                          </li>
                          <li data-reactid={691}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={692}
                            >
                              Mascara
                            </Link>
                          </li>
                          <li data-reactid={693}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={694}
                            >
                              Eyeliner
                            </Link>
                          </li>
                          <li data-reactid={695}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={696}
                            >
                              Kajal
                            </Link>
                          </li>
                          <li data-reactid={697}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={698}
                            >
                              Eyeshadow
                            </Link>
                          </li>
                          <li data-reactid={699}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={700}
                            >
                              Foundation
                            </Link>
                          </li>
                          <li data-reactid={701}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={702}
                            >
                              Primer
                            </Link>
                          </li>
                          <li data-reactid={703}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={704}
                            >
                              Concealer
                            </Link>
                          </li>
                          <li data-reactid={705}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={706}
                            >
                              Compact
                            </Link>
                          </li>
                          <li data-reactid={707}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={708}
                            >
                              Nail Polish
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="desktop-evenColumnContent desktop-oddColumnContent"
                        data-reactid={709}
                      >
                        <ul className="desktop-navBlock" data-reactid={710}>
                          <li data-reactid={711}>
                            <Link
                              style={{ color: "#0db7af" }}
                              className="desktop-categoryName"
                              data-reactid={712}
                            >
                              Skincare, Bath &amp; Body
                            </Link>
                          </li>
                          <li data-reactid={713}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={714}
                            >
                              Face Moisturiser
                            </Link>
                          </li>
                          <li data-reactid={715}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={716}
                            >
                              Cleanser
                            </Link>
                          </li>
                          <li data-reactid={717}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={718}
                            >
                              Masks &amp; Peel
                            </Link>
                          </li>
                          <li data-reactid={719}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={720}
                            >
                              Sunscreen
                            </Link>
                          </li>
                          <li data-reactid={721}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={722}
                            >
                              Serum
                            </Link>
                          </li>
                          <li data-reactid={723}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={724}
                            >
                              Face Wash
                            </Link>
                          </li>
                          <li data-reactid={725}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={726}
                            >
                              Eye Cream
                            </Link>
                          </li>
                          <li data-reactid={727}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={728}
                            >
                              Lip Balm
                            </Link>
                          </li>
                          <li data-reactid={729}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={730}
                            >
                              Body Lotion{" "}
                            </Link>
                          </li>
                          <li data-reactid={731}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={732}
                            >
                              Body Wash
                            </Link>
                          </li>
                          <li data-reactid={733}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={734}
                            >
                              {" "}
                              Body Scrub
                            </Link>
                          </li>
                          <li data-reactid={735}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={736}
                            >
                              Hand Cream{" "}
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={737} />
                          <li data-reactid={738}>
                            <Link
                              style={{ color: "#0db7af" }}
                              className="desktop-categoryName"
                              data-reactid={739}
                            >
                              Baby Care
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="desktop-oddColumnContent"
                        data-reactid={742}
                      >
                        <ul className="desktop-navBlock" data-reactid={743}>
                          <li data-reactid={744}>
                            <Link
                              style={{ color: "#0db7af" }}
                              className="desktop-categoryName"
                              data-reactid={745}
                            >
                              Haircare
                            </Link>
                          </li>
                          <li data-reactid={746}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={747}
                            >
                              Shampoo
                            </Link>
                          </li>
                          <li data-reactid={748}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={749}
                            >
                              Conditioner
                            </Link>
                          </li>
                          <li data-reactid={750}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={751}
                            >
                              Hair Cream
                            </Link>
                          </li>
                          <li data-reactid={752}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={753}
                            >
                              Hair Oil
                            </Link>
                          </li>
                          <li data-reactid={754}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={755}
                            >
                              Hair Gel
                            </Link>
                          </li>
                          <li data-reactid={756}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={757}
                            >
                              Hair Color
                            </Link>
                          </li>
                          <li data-reactid={758}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={759}
                            >
                              Hair Serum
                            </Link>
                          </li>
                          <li data-reactid={760}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={761}
                            >
                              Hair Accessory
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={762} />
                          <li data-reactid={763}>
                            <Link
                              style={{ color: "#0db7af" }}
                              className="desktop-categoryName"
                              data-reactid={764}
                            >
                              Fragrances
                            </Link>
                          </li>
                          <li data-reactid={765}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={766}
                            >
                              Perfume
                            </Link>
                          </li>
                          <li data-reactid={767}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={768}
                            >
                              Deodorant
                            </Link>
                          </li>
                          <li data-reactid={769}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={770}
                            >
                              Body Mist
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="desktop-evenColumnContent desktop-oddColumnContent"
                        data-reactid={771}
                      >
                        <ul className="desktop-navBlock" data-reactid={772}>
                          <li data-reactid={773}>
                            <Link
                              style={{ color: "#0db7af" }}
                              className="desktop-categoryName"
                              data-reactid={774}
                            >
                              Appliances
                            </Link>
                          </li>
                          <li data-reactid={775}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={776}
                            >
                              Hair Straightener
                            </Link>
                          </li>
                          <li data-reactid={777}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={778}
                            >
                              Hair Dryer
                            </Link>
                          </li>
                          <li data-reactid={779}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={780}
                            >
                              Epilator
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={781} />
                          <li data-reactid={782}>
                            <Link
                              style={{ color: "#0db7af" }}
                              className="desktop-categoryName"
                              data-reactid={783}
                            >
                              Men's Grooming
                            </Link>
                          </li>
                          <li data-reactid={784}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={785}
                            >
                              Trimmers
                            </Link>
                          </li>
                          <li data-reactid={786}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={787}
                            >
                              Beard Oil
                            </Link>
                          </li>
                          <li data-reactid={788}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={789}
                            >
                              Hair Wax
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={790} />
                          <li data-reactid={791}>
                            <Link
                              style={{ color: "#0db7af" }}
                              className="desktop-categoryName"
                              data-reactid={792}
                            >
                              Beauty Gift &amp; Makeup Set
                            </Link>
                          </li>
                          <li data-reactid={793}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={794}
                            >
                              Beauty Gift
                            </Link>
                          </li>
                          <li data-reactid={795}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={796}
                            >
                              Makeup Kit
                            </Link>
                          </li>
                          <div className="desktop-hrLine" data-reactid={797} />
                          <li data-reactid={798}>
                            <Link
                              style={{ color: "#0db7af" }}
                              className="desktop-categoryName"
                              data-reactid={799}
                            >
                              Premium Beauty
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="desktop-oddColumnContent"
                        data-reactid={802}
                      >
                        <ul className="desktop-navBlock" data-reactid={803}>
                          <li data-reactid={804}>
                            <Link
                              style={{ color: "#0db7af" }}
                              className="desktop-categoryName"
                              data-reactid={805}
                            >
                              Top Brands
                            </Link>
                          </li>
                          <li data-reactid={806}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={807}
                            >
                              Lakme
                            </Link>
                          </li>
                          <li data-reactid={808}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={809}
                            >
                              Maybelline
                            </Link>
                          </li>
                          <li data-reactid={810}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={811}
                            >
                              LOreal
                            </Link>
                          </li>
                          <li data-reactid={812}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={813}
                            >
                              Philips
                            </Link>
                          </li>
                          <li data-reactid={814}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={815}
                            >
                              Bath &amp; Body Works
                            </Link>
                          </li>
                          <li data-reactid={816}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={817}
                            >
                              THE BODY SHOP
                            </Link>
                          </li>
                          <li data-reactid={818}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={819}
                            >
                              Biotique
                            </Link>
                          </li>
                          <li data-reactid={820}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={821}
                            >
                              Mamaearth
                            </Link>
                          </li>
                          <li data-reactid={822}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={823}
                            >
                              MCaffeine
                            </Link>
                          </li>
                          <li data-reactid={824}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={825}
                            >
                              Nivea
                            </Link>
                          </li>
                          <li data-reactid={826}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={827}
                            >
                              Lotus Herbals
                            </Link>
                          </li>
                          <li data-reactid={828}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={829}
                            >
                              LOreal Professionnel
                            </Link>
                          </li>
                          <li data-reactid={830}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={831}
                            >
                              KAMA AYURVEDA
                            </Link>
                          </li>
                          <li data-reactid={832}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={833}
                            >
                              M.A.C
                            </Link>
                          </li>
                          <li data-reactid={834}>
                            <Link
                              style={{ color: "" }}
                              className="desktop-categoryLink"
                              data-reactid={835}
                            >
                              Forest Essentials
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="desktop-navContent studionav" data-reactid={836}>
              <div className="desktop-navLink" data-reactid={837}>
                <Link
                  data-index={0}
                  data-group="studio"
                  data-color="#ff3f6c"
                  data-type="navElements"
                  style={{ borderBottomColor: "#ff3f6c" }}
                  className="desktop-main studio"
                  data-reactid={838}
                >
                  Studio
                </Link>
                <span className="desktop-newNavLink" data-reactid={839}>
                  {/* react-text: 840 */} {/* /react-text */}
                  <sup data-reactid={841}>new</sup>
                  {/* react-text: 842 */} {/* /react-text */}
                </span>
                <div className="desktop-backdropStyle" data-reactid={843}>
                  <div className="desktop-newPaneContent" data-reactid={844}>
                    <div data-reactid={845}>
                      <img
                        draggable="false"
                        className="desktop-studioLogNew"
                        src="https://constant.myntassets.com/web/assets/img/studio-logo-new.svg"
                        data-reactid={846}
                      />
                      <span
                        className="desktop-YourDailyInspiration"
                        data-reactid={847}
                      >
                        Your daily inspiration for everything fashion
                      </span>
                      <img
                        draggable="false"
                        className="desktop-studioNavBanner"
                        src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png"
                        data-reactid={848}
                      />
                      <div
                        className="desktop-exploreStudioBtn"
                        data-reactid={849}
                      >
                        <span
                          className="desktop-exploreStudioLabel"
                          data-reactid={850}
                        >
                          EXPLORE STUDIO
                        </span>
                        <img
                          draggable="false"
                          className="desktop-chevronRight"
                          src="https://constant.myntassets.com/web/assets/img/chevron-right.svg"
                          data-reactid={851}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="desktop-actions" data-reactid={852}>
          <div className="desktop-user" data-reactid={853}>
            <div className="desktop-userIconsContainer" data-reactid={854}>
              <span className="desktop-userTitle" data-reactid={856}>
                <BsPerson className=" desktop-iconUser sprites-headerUser personlogo" />
                Profile
              </span>
            </div>
            <div className="desktop-userActions" data-reactid={857}>
              <div className="desktop-userActionsArrow" data-reactid={858} />
              <div className="desktop-userActionsContent" data-reactid={859}>
                <div className="desktop-contentInfo" data-reactid={860}>
                  <div className="desktop-infoTitle" data-reactid={861}>
                    Welcome
                  </div>
                  <div className="desktop-infoEmail" data-reactid={862}>
                    To access account and manage orders
                  </div>
                </div>
                <div data-reactid={863}>
                  <div
                    className="desktop-getUserInLinks desktop-getInLinks"
                    data-reactid={864}
                  >
                    <Link
                      data-refreshpage="true"
                      data-track="login"
                      className="desktop-linkButton"
                      data-reactid={865}
                    >
                      login / Signup
                    </Link>
                  </div>
                  <div className="desktop-getInLinks" data-reactid={866}>
                    <Link
                      data-track="coupons"
                      className="desktop-info"
                      data-reactid={867}
                    >
                      <div className="desktop-infoSection" data-reactid={868}>
                        {/* react-text: 869 */}Orders{/* /react-text */}
                      </div>
                    </Link>
                    <Link
                      data-track="coupons"
                      className="desktop-info"
                      data-reactid={870}
                    >
                      <div className="desktop-infoSection" data-reactid={871}>
                        {/* react-text: 872 */}Wishlist{/* /react-text */}
                      </div>
                    </Link>
                    <Link
                      data-track="coupons"
                      className="desktop-info"
                      data-reactid={873}
                    >
                      <div className="desktop-infoSection" data-reactid={874}>
                        {/* react-text: 875 */}Gift Cards{/* /react-text */}
                      </div>
                    </Link>
                    <Link
                      data-track="coupons"
                      className="desktop-info"
                      data-reactid={876}
                    >
                      <div className="desktop-infoSection" data-reactid={877}>
                        {/* react-text: 878 */}Contact Us{/* /react-text */}
                      </div>
                    </Link>
                    <Link
                      data-track="coupons"
                      className="desktop-info"
                      data-reactid={879}
                    >
                      <div className="desktop-infoSection" data-reactid={880}>
                        {/* react-text: 881 */}Myntra Insider{/* /react-text */}
                        <span
                          className="desktop-superscriptTag"
                          data-reactid={882}
                        >
                          {" "}
                          New{" "}
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="desktop-getInLinks" data-reactid={883}>
                    <Link
                      data-track="coupons"
                      className="desktop-info"
                      data-reactid={884}
                    >
                      <div className="desktop-infoSection" data-reactid={885}>
                        {/* react-text: 886 */}Myntra Credit{/* /react-text */}
                      </div>
                    </Link>
                    <Link
                      data-track="coupons"
                      className="desktop-info"
                      data-reactid={887}
                    >
                      <div className="desktop-infoSection" data-reactid={888}>
                        {/* react-text: 889 */}Coupons{/* /react-text */}
                      </div>
                    </Link>
                    <Link
                      data-track="coupons"
                      className="desktop-info"
                      data-reactid={890}
                    >
                      <div className="desktop-infoSection" data-reactid={891}>
                        {/* react-text: 892 */}Saved Cards{/* /react-text */}
                      </div>
                    </Link>
                    <Link
                      data-track="coupons"
                      className="desktop-info"
                      data-reactid={893}
                    >
                      <div className="desktop-infoSection" data-reactid={894}>
                        {/* react-text: 895 */}Saved VPA{/* /react-text */}
                      </div>
                    </Link>
                    <Link
                      data-track="coupons"
                      className="desktop-info"
                      data-reactid={896}
                    >
                      <div className="desktop-infoSection" data-reactid={897}>
                        {/* react-text: 898 */}Saved Addresses
                        {/* /react-text */}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/wishlist" className="desktop-wishlist" data-reactid={899}>
            <span className="desktop-userTitle" data-reactid={901}>
              <CiHeart
                className=" desktop-iconWishlist sprites-headerWishlist"
                data-reactid={900}
              />
              Wishlist
            </span>
          </Link>
          <Link to="/bag" className="desktop-cart" data-reactid={902}>
            <HiOutlineShoppingBag className=" desktop-iconBag sprites-headerBag" />

            <span
              className="desktop-badge 
              desktop-melon"
              data-reactid={904}
            >
              {bag.length}
            </span>
            <span className="desktop-userTitle" data-reactid={905}>
              Bag
            </span>
          </Link>
        </div>
        <div className="desktop-query" data-reactid={906}>
          <input
            placeholder="Search for products, brands and more"
            className="desktop-searchBar"
            defaultValue=""
            data-reactid={907}
          />
          <div className="desktop-submit" data-reactid={908}>
            <IoIosSearch
              className=" desktop-iconSearch sprites-search"
              data-reactid={909}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

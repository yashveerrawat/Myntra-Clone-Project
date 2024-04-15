import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import DiscountButton from "../components/floatingBtn";
function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>

      <Footer></Footer>
    </>
  );
}
export default App;

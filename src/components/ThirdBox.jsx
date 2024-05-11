import Banner from "./Banner";
import Follows from "./Follows";
import Footer from "./Footer";

function ThirdBox() {
  return (
    <div className="md:row-start-2 md:col-start-2 lg:col-start-3 lg:row-start-1">
      <Follows />
      <Banner />
      <Footer />
    </div>
  );
}

export default ThirdBox;

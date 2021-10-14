import DesiredIcognito from "../components/DesiredIcognito";
import EscortsCards from "../components/EscortsCards";
import HomeFooter from "../components/HomeFooter";
import HomeProfileDetails from "../components/HomeProfileDetails";
import MainFigure from "../components/MainFigure";
import Navigation from "../components/Navigation";
import Personalize from "../components/Personalize";

function EscortsHomepage() {
  return (
    <div>
      <Navigation />
      <MainFigure />
      {/* <Personalize /> */}
      <DesiredIcognito />
      <EscortsCards />
      <HomeProfileDetails />
      <HomeFooter />
    </div>
  );
}

export default EscortsHomepage;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainFigure() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="container-fluid mainFigure">
        <div className="row px-md-5 py-5 rowPadding">
          <div className="col-md mt-md-4">
            <Slider {...settings}>
              <div>
                <div className="imgHeroWrapper">
                  <img src="/images/sandra.png" className="imgHero" alt="" />
                  <div className="userContent pt-4 pb-5">
                    <h5 className="text-center mb-0">SANDRA, 28</h5>
                    <p className="text-center">Incognito escort team</p>
                    <p className="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Id dui consectetur ut at. hsshhur hgs jahy kkakh ahhy adg
                      ahagd
                    </p>
                    <div>
                      <button className="btn book-anita">Book Sandra</button>
                    </div>
                  </div>
                  <div className="sandra-red-bg"></div>``
                </div>
              </div>

              <div>
                <div className="imgHeroWrapper">
                  <img src="/images/sandra.png" className="imgHero" alt="" />
                  <div className="userContent pt-4 pb-5">
                    <h5 className="text-center mb-0">AMANDA, 20</h5>
                    <p className="text-center">Incognito escort team</p>
                    <p className="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Id dui consectetur ut at. hsshhur hgs jahy kkakh ahhy adg
                      ahagd
                    </p>
                    <div>
                      <button className="btn book-anita">Book Amanda</button>
                    </div>
                  </div>
                  <div className="sandra-red-bg"></div>``
                </div>
              </div>

              <div>
                <div className="imgHeroWrapper">
                  <img src="/images/sandra.png" className="imgHero" alt="" />
                  <div className="userContent pt-4 pb-5">
                    <h5 className="text-center mb-0">LESLIE, 24</h5>
                    <p className="text-center">Incognito escort team</p>
                    <p className="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Id dui consectetur ut at. hsshhur hgs jahy kkakh ahhy adg
                      ahagd
                    </p>
                    <div>
                      <button className="btn book-anita">Book Leslie</button>
                    </div>
                  </div>
                  <div className="sandra-red-bg"></div>``
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainFigure;

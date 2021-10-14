import EscortsFirstCards from "./EscortsFirstCards";

function EscortsCards() {
  const models = [
    {
      name: "VICTORIA",
      age: 24,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui consectetur ut at. hsshhur hgs jahy kkakh ahhy adg  ahagd ",
      image: "/images/victoria-1.png",
      button: "View profile",
    },
    {
      name: "VICTORIA",
      age: 28,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui consectetur ut at. hsshhur hgs jahy kkakh ahhy adg  ahagd ",
      image: "/images/victoria-2.png",
      button: "View profile",
    },
    {
      name: "VANESSA",
      age: 29,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui consectetur ut at. hsshhur hgs jahy kkakh ahhy adg  ahagd ",
      image: "/images/victoria-3.png",
      button: "View profile",
    },
    {
      name: "VICTORIA",
      age: 28,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui consectetur ut at. hsshhur hgs jahy kkakh ahhy adg  ahagd ",
      image: "/images/victoria-4.png",
      button: "View profile",
    },

    {
      name: "VANESSA",
      age: 29,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui consectetur ut at. hsshhur hgs jahy kkakh ahhy adg  ahagd ",
      image: "/images/victoria-3.png",
      button: "View profile",
    },
    {
      name: "VICTORIA",
      age: 28,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui consectetur ut at. hsshhur hgs jahy kkakh ahhy adg  ahagd ",
      image: "/images/victoria-4.png",
      button: "View profile",
    },
    {
      name: "VICTORIA",
      age: 28,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui consectetur ut at. hsshhur hgs jahy kkakh ahhy adg  ahagd ",
      image: "/images/victoria-2.png",
      button: "View profile",
    },

    {
      name: "VICTORIA",
      age: 24,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui consectetur ut at. hsshhur hgs jahy kkakh ahhy adg  ahagd ",
      image: "/images/victoria-1.png",
      button: "View profile",
    },
  ];

  return (
    <div className="container-fluid gray-bg py-5 p-md-5">
      <div className="row justify-content-between mb-md-4 mb-1">
        <div className="col">
          <h4 style={{ fontFamily: "poppins" }}>Escorts</h4>
        </div>
        <div className="col d-flex justify-content-end">
          <a
            href="#"
            style={{
              fontFamily: "Avenir",
              fontWeight: "800",
              fontSize: "24px",
              color: "#000000",
            }}
          >
            View all
          </a>
        </div>
      </div>
      {/* Escorts Card */}
      <EscortsFirstCards className="mb-md-5" models={models} />
    </div>
  );
}

export default EscortsCards;

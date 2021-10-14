function EscortsFirstCards({ models }) {
  return (
    <div className="row">
      {models.map((model) => (
        <div className="col-md-3 mt-2 mb-2">
          <div class="home-profile-cards">
            <div class="card h-100">
              <img src={model.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  {model.name}, {model.age}
                </h5>
                <p class="card-text">{model.bio} </p>
                <button className="btn">{model.button} </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <div class="col home-profile-cards">
        <div class="card h-100">
          <img src={model.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Victoria, 28</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
              consectetur ut at. hsshhur hgs jahy kkakh ahhy adg ahagd
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default EscortsFirstCards;

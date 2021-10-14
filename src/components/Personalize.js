function Personalize() {
  return (
    <div className="container-fluid personalize-content py-md-4 py-3">
      <div className="row">
        <div className="col-md-6">
          <p className="mb-0">
            We and our partners use tracking devices to measure the audience of
            our website, provide you with offers and advertising tailored to
            your interests, and to enable interactive social platform features
            such as share buttons.
          </p>
        </div>
        <div className="col-md-3">
          <button className="btn btn-dark w-100 my-3 my-md-0">
            personalize my choices
          </button>
        </div>
        <div className="col-md-3">
          <button className="btn btn-outline-dark w-100 border-3 text-black">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default Personalize;

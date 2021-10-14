function HomeProfileDetails() {
  return (
    <div>
      <div className="container-fluid p-md-5 py-5 text-white bg-black home-profile-details">
        <div className="row justify-content-center align-items-end p-md-5">
          <div className="col-md-4 py-4 mb-4 mb-md-0 position-relative">
            <img
              src="/images/victoria-benjamin.png"
              width="382"
              className="img-fluid position-relative"
            />
            <div className="red-img-bg"></div>
          </div>
          <div className="col-md-6 ps-md-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
              consectetur ut at. Viverra euismod etiam accumsan nullam viverra.
              Sit maecenas quam velit dui, blandit sed ridiculus urna. Commodo
              egestas ornare maecenas semper est consectetur adipiscing id.
              Cursus venenatis lorem nunc ac urna,
            </p>
            <h4>Victoria Benjamin 28</h4>
            <div className="py-md-5 py-4">
              <button className="btn text-white">&#10094;</button>
              <span className="red-divider mx-3"></span>
              <button className="btn text-white">&#10095;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProfileDetails;

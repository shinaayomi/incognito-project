function HomeFooter() {
  return (
    <div>
      <div className="container-fluid home-footer gray-bg p-md-5 py-5">
        <div className="row pt-md-5 px-md-5">
          <div className="col-md">
            <a href="#" className="nav-link">
              <img src="/icon/footerLogo.svg" alt="" className="img-fluid" />
            </a>
          </div>
          <div className="col-md">
            <div>
              <a href="#" className="nav-link">
                Quick Links
              </a>
              <a href="#" className="nav-link">
                Privacy Policy
              </a>
              <a href="#" className="nav-link">
                Terms and condition
              </a>
            </div>
          </div>
          <div className="col-md d-flex align-items-end">
            <div>
              <a href="#" className="nav-link">
                Information
              </a>
              <a href="#" className="nav-link">
                About Incognito
              </a>
            </div>
          </div>
          <div className="col-md">
            <form className="px-3 py-3 py-md-0">
              <label htmlFor="Subscribe">Subscribe</label>
              {/* input */}
              <div className="row">
                <div className="col-10 pe-0">
                  <input
                    type="text"
                    name="Subscribe"
                    className="form-control"
                    id=""
                  />
                </div>
                <div className="col-2 ps-0">
                  <button type="submit" className="btn btn-danger">
                    <img src="/icon/arrows-down-top-move-1.svg" alt="" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <hr className="mx-md-5 my-md-5 my-4" />

        {/* Copyright */}
        <p className="text-center text-md-start px-md-5">
          © 2020 Incognito. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default HomeFooter;

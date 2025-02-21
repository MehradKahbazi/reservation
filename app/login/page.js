const Login = () =>{
    return(
        <div className="container-fluid">
      <div className="row vh-100 align-items-center">
        <div className="col-lg-4 px-5">
          <div className="card">
            <div className="card-body">
              <form>
                <div class="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-8 h-100 bg-dark"></div>
      </div>
    </div>
    )
}

export default Login;
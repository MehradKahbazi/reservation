"use client";

import { signup } from "@/actions/auth-actions";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  // const [formState, formAction] = useActionState(signup, {});
  const handleSubmit = async (formAction) =>{
    const res = await signup(formAction);
    toast.success(res,
      {
        position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme:'dark' 
      }
    )
  }
  return (
    <section className="bg-light p-3 p-md-4 p-xl-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-11">
            <div className="card border-light-subtle shadow-sm">
              <div className="row g-0">
                <div className="col-12 col-md-6">
                  <img
                    className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                    loading="lazy"
                    src="./login.jpg"
                    alt="Welcome back you've been missed!"
                  />
                </div>
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                  <div className="col-12 col-lg-11 col-xl-10">
                    <div className="card-body p-3 p-md-4 p-xl-5">
                      <div className="row">
                        <div className="col-12">
                          <div className="mb-5">
                            <h4 className="text-center">Add a New Admin</h4>
                          </div>
                        </div>
                      </div>

                      <form action={handleSubmit}>
                        <div className="row gy-3 overflow-hidden">
                          <div className="col-12">
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="name@example.com"
                                required
                              />
                              <label htmlFor="email" className="form-label">
                                Email
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating mb-3">
                              <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                placeholder="Password"
                                required
                              />
                              <label htmlFor="password" className="form-label">
                                Password
                              </label>
                            </div>
                          </div>
                          
                          <div className="form-group row mb-3">
                            <div className="col-sm-3">
                              <label
                                className="control-label"
                                htmlFor="role"
                              >
                                Role:
                              </label>
                            </div>

                            <div className="input-group col-sm-9">
                              <div className="input-group-prepend"></div>

                              <select
                                className="form-select"
                                name="role"
                                id="role"
                              >
                                <option value="admin">Admin</option>
                                <option value="cashier">Cashier</option>
                                <option value="operator">Operator</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-grid">
                              <button
                                className="btn btn-theme btn-lg"
                                type="submit"
                              >
                                Log in now
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="row">
                        <div className="col-12">
                          <div className="d-flex flex-column justify-content-md-center mt-5">
                            {/* {formState.errors &&
                              Object.keys(formState.errors).map((error) => (
                                <small key={error}>
                                  {formState.errors[error]}
                                </small>
                              ))} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Register;

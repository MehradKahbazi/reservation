"use client";

import { signin, signup } from "@/actions/auth-actions";
import { showToast } from "@/lib/toaster";

const AuthForm = ({method}) => {
    const handleAuth = async(formData) =>{
        let res;
        if(method === 'login'){
            res = await signin(formData)
        } else{
            res = await signup(formData);
        }
        showToast(res);
    }
  return (
    <form action={handleAuth}>
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
              User
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

        {method === 'register' && <div className="form-group row mb-3">
          <div className="col-sm-3">
            <label className="control-label" htmlFor="role">
              Role:
            </label>
          </div>

          <div className="input-group col-sm-9">
            <div className="input-group-prepend"></div>

            <select className="form-select" name="role" id="role">
              <option value="admin">Admin</option>
              <option value="cashier">Cashier</option>
              <option value="operator">Operator</option>
            </select>
          </div>
        </div>}
        <div className="col-12">
          <div className="d-grid">
            {method === 'register' &&<button className="btn btn-theme btn-lg" type="submit">
              Create User
            </button>}
            {method === 'login' &&<button className="btn btn-theme btn-lg" type="submit">
              Login
            </button>}
          </div>
        </div>
      </div>
    </form>
  );
};

export default AuthForm;

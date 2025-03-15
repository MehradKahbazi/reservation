
import AuthForm from "@/components/AuthForm";
import Image from "next/image";

const Register = () => {

  return (
    <section className="bg-light p-3 p-md-4 p-xl-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-11">
            <div className="card border-light-subtle shadow-sm">
              <div className="row g-0">
                <div className="col-12 col-md-6">
                <Image
                    className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                    src="/user.jpg"
                    alt="Welcome back you've been missed!"
                    width={600}
                    height={600}
                  />
                </div>
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                  <div className="col-12 col-lg-11 col-xl-10">
                    <div className="card-body p-3 p-md-4 p-xl-5">
                      <div className="row">
                        <div className="col-12">
                          <div className="mb-5">
                            <h4 className="text-center">Add a New User</h4>
                          </div>
                        </div>
                      </div>
                      <AuthForm method={'register'} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

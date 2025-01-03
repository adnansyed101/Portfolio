import bg2 from "../assets/background/bg2.jpg";

const Contact = () => {
  return (
    <section className="mb-10">
      <h1 className="mb-5 text-5xl font-bold text-center">
        Let&apos;s Have a Chat.
      </h1>
      <div className="container mx-auto grid grid-cols-2 gap-4">
        <div
          style={{
            backgroundImage: `url(${bg2})`,
          }}
          className="relative bg-cover bg-center bg-no-repeat h-[600px]"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="relative z-10 flex items-end justify-around h-full pb-10 text-white">
            <div>
              <p className="text-lg">
                Email <br /> sirgeant10@gmail.com
              </p>
              <p className="text-lg">
                Working Hours <br /> 10:00 AM - 6:00 PM
              </p>
            </div>
            <div>
              <p className="text-lg">
                Address <br /> Dhaka, Bangladesh
              </p>
              <p className="text-lg">
                Phone <br /> 01725290448
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-2 font-bold text-center">
            Leave your email and I will get back to you within 24 hours
          </h3>
          <form className="space-y-2 p-5">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered"
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered"
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Subject</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered"
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Message</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Bio"
              ></textarea>
            </label>
            <div>
              <button className="btn btn-primary btn-outline btn-block">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

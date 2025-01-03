import bg1 from "../assets/background/bg1.jpg";
import myImg from "../assets/my.jpg";

const AboutMe = () => {
  return (
    <div
      className="hero mb-20"
      style={{
        backgroundImage: `url(${bg1})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content">
        <div className="text-white">
          <h1 className="mb-5 text-5xl font-bold">My Journey</h1>
          <p className="mb-4 max-w-3xl">
            Starting in June 2021 during the lockdown, I embarked on my journey
            to become a software developer alone, without any teacher or mentor.
            At that time, I had no prior knowledge of programming. I seized the
            opportunity to learn something new during the lockdown, and it
            turned out to be an incredible journey. But later not having any
            roadmap to follow I became lost and found out about Programming
            Hero. Later, They became the best resource for me to learn and grow.
          </p>
          <button className="btn btn-outline btn-primary">Get Started</button>
        </div>
        <figure className="h-full">
          <img src={myImg} alt="" className="rounded-lg w-[350px]" />
        </figure>
      </div>
    </div>
  );
};

export default AboutMe;

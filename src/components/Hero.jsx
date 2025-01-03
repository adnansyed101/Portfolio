import { FaFacebookMessenger, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex justify-center flex-col items-center mb-20">
      <h1 className="mt-20 mb-4 text-8xl font-bold">
        Hi, I&apos;m Adnan, a <br />
        <span className="gradient-text">Web Developer</span>
      </h1>
      <p className="text-4xl mb-4">
        Based in Dhaka, Bangladesh, <br /> Specialized in{" "}
        <span className="gradient-text">React</span> and{" "}
        <span className="gradient-text">Node</span>
      </p>
      <div className="flex gap-2 w-96 mb-4">
        <button className="btn w-1/2 btn-primary btn-outline">Say Hi</button>
        <button className="btn w-1/2 btn-primary btn-outline">
          Download Resume
        </button>
      </div>
      <div className="flex text-3xl gap-4">
        <a href="https://github.com/adnansyed101" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/adnansyed101/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://m.me/adnansyed101" target="_blank">
          <FaFacebookMessenger />
        </a>
      </div>
    </section>
  );
};

export default Hero;

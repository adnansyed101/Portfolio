const Education = () => {
  return (
    <div className="mb-20">
      <h1 className="text-3xl font-semibold text-center mb-10">Education</h1>
      <ul className="timeline timeline-vertical">
        <li>
          <div className="timeline-start timeline-box">
            <h3 className="text-right text-xl font-semibold">
              University of Liberal Arts (ULAB)
            </h3>
            <p className="text-right">2023 - Current</p>
            <p className="text-justify w-64">
              I am currently completing my graduation at ULAB. I study at BBA
              department. I currently hold a CGPA of 3.89. I hope to complete my
              graduation with 2026.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-end timeline-box">
            <h3 className="text-left text-xl font-semibold">
              Programming Hero
            </h3>
            <p className="text-left">2024 - Current</p>
            <p className="text-justify w-64">
              I am currently doing a bootcamp on FullStack Web Development.
              Here, I am being constantly to learn new tools. To cope with this
              course I am also learning to manage my time.
            </p>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Education;

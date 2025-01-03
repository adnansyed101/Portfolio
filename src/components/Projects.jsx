import RandR from "../assets/projects/revive.JPG";
import flux from "../assets/projects/flux.JPG";
import goTravels from "../assets/projects/go-travels.JPG";

const Projects = () => {
  const showcase = [
    {
      id: 1,
      img: RandR,
      title: "Revive & Rewire",
      description:
        "A service repair website. Users can create an account. Also can post for jobs",
      tools: ["React", "Firebase", "Express", "MongoDB"],
      liveLink: "https://reviverewire.web.app/",
    },
    {
      id: 2,
      img: flux,
      title: "Flux",
      description:
        "A Movie Browsing website. Users can create account. They can add favourite movies. The featured movies only shows the highest rated movies.",
      tools: ["React", "Firebase", "Express", "MongoDB"],
      liveLink: "https://flux-86bc5.web.app/",
    },
    {
      id: 3,
      img: goTravels,
      title: "Go Travels",
      description:
        "A travelling website for users to see what travelling options are available.",
      tools: ["React", "Firebase", "Tailwind", "Animate-CSS"],
      liveLink: "https://go-travels-36529.web.app/",
    },
  ];

  return (
    <div className="container mx-auto mb-10">
      <h1 className="mb-5 text-5xl font-bold text-center">
        Small Selection of Recent Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {showcase.map((proj) => (
          <div
            key={proj.id}
            className="card card-compact bg-base-100 w-96 shadow-xl"
          >
            <figure>
              <img src={proj.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{proj.title}</h2>
              <p>{proj.description}</p>
              <p className="space-x-2">
                {proj.tools.map((tool) => (
                  <div
                    key={tool}
                    className="badge badge-secondary badge-outline"
                  >
                    {tool}
                  </div>
                ))}
              </p>
              <div className="card-actions justify-end">
                <a
                  href={proj.liveLink}
                  target="_blank"
                  className="btn btn-primary btn-outline"
                >
                  View Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

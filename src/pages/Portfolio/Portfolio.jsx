import { useEffect, useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      });
  }, []);

  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* filter button */}
      <ul className="filter-list">
        {["All", "Web Design", "Web Application", "Web Development"].map(
          (category) => (
            <li key={category} className="filter-item">
              <button className={category === selectedCategory ? "active" : ""}>
                {category}
              </button>
            </li>
          )
        )}
      </ul>

      {/* show portfolio data */}
      <section className="projects">
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li key={project.id} className="project-item active">
              <a href="#">
                <figure>
                  <img src={project.image} alt="" />
                </figure>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
export default Portfolio;

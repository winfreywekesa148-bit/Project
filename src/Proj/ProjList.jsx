import ProjCard from "./ProjCard";

function ProjList ({ projects }) {
    return (
        <div className="proj-list">
            {projects.map((project, index) => (
                <ProjCard key={index} title={project.title} description={project.description} />
            ))}
        </div>
    );
}

export default ProjList;

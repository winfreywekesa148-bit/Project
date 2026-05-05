function ProjCard ({ title, description }) {
    return (
        <div className="proj-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <button>View Project</button>
        </div>
    );
}

export default ProjCard;

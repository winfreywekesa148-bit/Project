import { useState } from "react";
import ProjCard from "./ProjCard";

function Submit() {
    const [projects, setProjects] = useState([]);
    // 1. Define state for the inputs
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // 2. Wrap the logic in a function to prevent infinite loops
    const handleAddProject = () => {
        if (!title || !description) return; // Basic validation

        const newProject = { title, description };
        setProjects([...projects, newProject]);
        
        // Clear inputs after submission
        setTitle("");
        setDescription("");
    };

    return (
        <div>
            <h1>My Projects</h1>
            {/* 3. Add inputs and a button to trigger the logic */}
            <label htmlFor="title">Title:</label>
            <input 
                placeholder="Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <br />
            <label htmlFor="description">Description:</label>
            <input 
                placeholder="Description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
            />
            <br />
            <button onClick={handleAddProject}>Submit</button>
            
            <div>
                <h1>Submitted Projects</h1>
                {projects.map((project, index) => (
                    <ProjCard key={index} title={project.title} description={project.description} />
                ))}
            </div>
        </div>  
    );
}

export default Submit;

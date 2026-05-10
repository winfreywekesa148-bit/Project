import Search from "./Proj/Search";
import Submit from "./Proj/Submit";
import ProjList from "./Proj/ProjList";
import { useState } from "react";

function App() {
  const projects = [
    { title: "Project 3", description: "Description of Project 3" },
    { title: "Project 2", description: "Description of Project 2" },
    { title: "Project 1", description: "Description of Project 1" },
  ];

  const [projects, setProjects] = useState([]);
  
  return (
    <div className="App"  style= {{backgroundImage: "url('https://www.pinterest.com/pin/1900024838134773/')"}}>
      <h1>My Projects</h1>
      <Search />
      <Submit></Submit>
      <ProjList projects={projects} />
     </div>
  );

}

export default App;

import Search from "./Proj/Search";
import ProjCard from "./Proj/ProjCard";
import ProjList from "./Proj/ProjList";
import Form from "./Proj/Form";

function App() {
  const projects = [
    { title: "Project 1", description: "Description of Project 1" },
    { title: "Project 2", description: "Description of Project 2" },
    { title: "Project 3", description: "Description of Project 3" },
  ];

  return (
    <div className="App">
      <h1>My Projects</h1>
      <Search />
      <ProjList projects={projects} />
      <Form />
    </div>
  );

}

export default App;

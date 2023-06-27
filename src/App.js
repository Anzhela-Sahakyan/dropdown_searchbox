import Select from "react-select";
import globusImage from "./globus.jpg";
import "./App.css";

function App() {
  const options = [
    { value: "Armenia", label: "Armenia" },
    { value: "Argentina", label: "Argentina" },
    { value: "Italy", label: "Italy" },
    { value: "Spain", label: "Spain" },
    { value: "USA", label: "USA" },
    { value: "Mexico", label: "Mexico" },
    { value: "Panama", label: "Panama" },
    { value: "Germany", label: "Germany" },
    { value: "Nepal", label: "Nepal" },
  ];
  return (
    <div className="App">
      <Select
        className="search-box "
        options={options}
        placeholder="Select a country"
        noOptionsMessage={() => "No country found"}
      />
      <img src={globusImage} alt="globus" className="globus"></img>
    </div>
  );
}

export default App;

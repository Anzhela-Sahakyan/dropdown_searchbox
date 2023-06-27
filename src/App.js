import Select from "react-select";

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
        options={options}
        placeholder="Select a country"
        noOptionsMessage={() => "No country found"}
      />
    </div>
  );
}

export default App;

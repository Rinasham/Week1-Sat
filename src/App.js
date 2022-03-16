import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState(false);
  const [swing, setSwing] = useState(0);

  const onChangeYear = (e) => {
    setYear(e.target.value);
    console.log(year);
    console.log("number");
  };

  const onClickButton = () => {
    console.log(year);
    setSwing(2022 - year);
    setResult(true);
  };

  return (
    <div className="App">
      <label>Name of the movie</label>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <label>What year was it released?</label>
      <input value={year} onChange={onChangeYear} />

      <br />
      <button onClick={onClickButton}>How many years ago?</button>
      {result && (
        <p>{`${name} was released in ${year}. It was ${swing} years ago!`}</p>
      )}
    </div>
  );
}

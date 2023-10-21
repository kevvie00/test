import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { ReactNode, useState } from "react";

function App() {
  let cities = ["New York", "San Francisco", "Chicago", "Arizona"];
  let heading = "CITIES!";

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisibility && (
        <Alert
          children={"Alert Text"}
          setAlertVisibility={setAlertVisibility}
        />
      )}

      <Button
        text="HI"
        clickHandler={() => {
          setAlertVisibility(true);
        }}
      />
    </>
  );
}

export default App;

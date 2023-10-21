import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

interface Props {
  cities: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup(props: Props) {
  let [cityHighlight, setCityHighlight] = useState(-1);
  return (
    <>
      <h1> {props.heading} </h1>
      <ul className="list-group">
        {props.cities.map((item, index) => (
          <li
            className={
              index === cityHighlight
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setCityHighlight(index);
              props.onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

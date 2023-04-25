import { useState } from "react";
import DateFilter from "./DateFilter";

function DataDisplay(props) {
  const [currentYear, setCurrentYear] = useState("2019");

  const latestFilterValue = (value) => {
    setCurrentYear(value);
  };

  const nowFilterValue = props.data.filter((value) => {
    return value.date.getFullYear().toString() === currentYear;
  });

  let totalData = <p>No Data Available</p>;
  if (nowFilterValue.length ) {
    totalData = nowFilterValue.map((data) => (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        <h2>Year: {data.date ? data.date.getFullYear() : ""}</h2>
        <h4>Title:{data.title}</h4>
        <h4>Price:{data.amount}</h4>
      </div>
    ));
  }

  return (
    <div>
      <DateFilter latestFilterValue={latestFilterValue} />
      {totalData}
    </div>
  );
}
export default DataDisplay;

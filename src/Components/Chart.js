import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valArr = props.dataPoints.map((e) => e.value);
  const totalMax = Math.max(...valArr);

  return (
    <div className="chart">
      {props.dataPoints.map((e) => {
        return (
          <ChartBar
            key={e.label}
            value={e.value}
            maxValue={totalMax}
            label={e.label}
          />
        )
      })}
    </div>
  );
};

export default Chart;

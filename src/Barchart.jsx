import React from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";
import "./Barchart.css";

const data = [
  { name: "Mon", uv: 10 },
  { name: "Tue", uv: 20 },
  { name: "Wed", uv: 15 },
  { name: "Thu", uv: 13 },
  { name: "Fri", uv: 30 },
  { name: "Sat", uv: 17 },
  { name: "Sun", uv: 25 },
];

const Barchart = () => {
 
  const maxUV = Math.max(...data.map(item => item.uv));

  return (
    <div className="card">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 75, right: 0, left: 0, bottom: 5 }}
        >
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <Bar
            dataKey="uv"
            barSize={18}
            fill="#7367F0"
            className="custom-bar"
            shape={(props) => {
              const { uv, ...rest } = props;
              return <rect {...rest} className={`bar-${uv}`} />;
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;

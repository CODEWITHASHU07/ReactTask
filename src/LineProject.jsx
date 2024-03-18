import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import "./LineChartWithShadow.css"; // Import the CSS file

const data = [
  { name: 'Mon', uv: 10 },
  { name: 'Tue', uv: 14 },
  { name: 'Wed', uv: 16 },
  { name: 'Thu', uv: 12 },
  { name: 'Fri', uv: 22 },
  { name: 'Sat', uv: 18 },
  { name: 'Sun', uv: 28 },
];

const LineChartComponent = () => {
  return (
    <div className="card h-full object-contain">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 0, left: 10, bottom: -80 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#28C76F" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
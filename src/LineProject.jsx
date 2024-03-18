import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', uv: 10 },
  { name: 'Tue', uv: 20 },
  { name: 'Wed', uv: 15 },
  { name: 'Thu', uv: 13 },
  { name: 'Fri', uv: 30 },
  { name: 'Sat', uv: 17 },
  { name: 'Sun', uv: 25 },
];

const LineChartcomponent = () => {
  return (
    <div className=' h-full w-full'>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 35, right: 2, left: 2, bottom: -80 }} 
        >
          <Line type="monotone" dataKey="uv" stroke="#28C76F" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartcomponent;

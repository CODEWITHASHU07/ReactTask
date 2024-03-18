import React, { useEffect, useRef, useState } from 'react';
import Chart from 'react-apexcharts';

const Chart = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [44, 55, 41, 17, 15],
    chart: {
      type: 'donut',
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
      },
    },
    grid: {
      padding: {
        bottom: -80,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  });

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.chart.render();
    }
  }, []);

  return (
    <div id="chart">
      <Chart options={chartOptions} series={chartOptions.series} type="donut" height={350} ref={chartRef} />
    </div>
  );
};

export default Chart;

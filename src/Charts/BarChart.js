import React from 'react';
import { Bar, Line, Pie } from "react-chartjs-2";
const BarChart = ({chartData}) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <div className='w-6/12 mx-auto my-10'>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Students Migrated between 2010-2012"
            },
            legend: {
              display: false
            }
          }
        }}
      />
      </div>
    </div>
  )
}

export default BarChart
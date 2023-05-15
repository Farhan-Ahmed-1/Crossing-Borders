import React, {useEffect, useState} from 'react';
import { Bar, Line, Pie } from "react-chartjs-2";
import { getCountry } from '../API_calls/API';
const BarChart = ({ country}) => {
  const [finalData, setFinalData] = useState({chart:[{year:"",students:"",}],})
  useEffect(() => {
    fetchData();
  }, [])

 async function fetchData() {
    setFinalData (await getCountry(country))
    
  }
  const newChartData = {
    
    labels: finalData.chart.map((data) => data.year), 
    datasets: [
      {
        label: `Students Migrated from ${finalData.name}`,
        data: finalData.chart.map((data) => data.students),
        backgroundColor: [
          "magenta",
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  }
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <div className='w-6/12 mx-auto my-10'>
      <Line
        data={newChartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Students Migrated between 2017-2022"
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
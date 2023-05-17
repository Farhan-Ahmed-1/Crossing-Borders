import React, { useEffect, useState } from 'react';
import { Bar, Line, Pie } from "react-chartjs-2";
import { getCountry } from '../API_calls/API';
import CountryFlags from '../components/CountryFlags';
import './BarChart.css';
const BarChart = ({ country }) => {
  const [finalData, setFinalData] = useState({ chart: [{ year: "", students: "", }], })
  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    setFinalData(await getCountry(country))

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
        borderColor: "white",
        borderWidth: 3
      }
    ]
  }
  let totalStudentCount = 0;
  for (let i = 0; i < finalData.chart.length; i++) {
    totalStudentCount = totalStudentCount + finalData.chart[i].students
  }
  console.log(totalStudentCount);
  return (
    <div className="bar-chart flex flex-wrap justify-between pt-10 px-8">
      <div className='w-6/12'>
        <Line
          data={newChartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Students Migrated between 2017-2022",
                font: {
                  size: "20px",
                },
                color: "white",
              },
              legend: {
                display: true,
                labels:{
                  font: {
                    size: "15px",
                  },
                  color: "white",
                }
              }
            },
            scales: {
              x: {
                grid: {
                  display: false
                },
                beginAtZero: false,
                ticks: {
                  color: "white",
                  font: {
                    size: "20px",
                  },
                  padding: 10,
                }
              },
              y: {
                grid: {
                  display: false,
                },
                beginAtZero: true,
                ticks: {
                  color: "white",
                  font: {
                    size: "20px",
                  },
                  padding: 10,
                }
              }
            }
          }}
        />
      </div>
      <div className='w-4/12'>
        < CountryFlags code={country} />
        <p className='text-white font-black'>Country : <span className='text-pink-500 bg-black p-2 rounded-xl'>{finalData.name}</span></p>
        <p className='pt-4 text-white font-black'>Total Student Migrated : <span className='text-pink-500 bg-black p-2 rounded-xl'>{totalStudentCount}</span></p>
      </div>
    </div>
  )
}

export default BarChart
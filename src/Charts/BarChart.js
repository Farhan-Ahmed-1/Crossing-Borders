import React, {useEffect, useState} from 'react';
import { Bar, Line, Pie } from "react-chartjs-2";
import { getCountry } from '../API_calls/API';
import CountryFlags from '../components/CountryFlags';
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
  let totalStudentCount = 0;
  for(let i=0;i<finalData.chart.length;i++){
    totalStudentCount = totalStudentCount + finalData.chart[i].students
  }
  console.log(totalStudentCount);
  return (
    <div className="flex flex-wrap justify-between mt-10 px-8">
      <div className='w-6/12'>
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
      <div className='w-4/12'>
        < CountryFlags code = {country} />
        <p>Country : <span className=''>{finalData.name}</span></p>
        <p>Total Student Migrated : {totalStudentCount}</p>
      </div>
    </div>
  )
}

export default BarChart
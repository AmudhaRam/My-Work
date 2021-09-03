import React from 'react'
import LineChart from './ChartFunc.js/LineChart'
import BarChart from './ChartFunc.js/BarChart'
import DoughnutChart from './ChartFunc.js/DoughnutChart'
import VerticalBar from './ChartFunc.js/VerticalBar'


const MainChart = () => {
  return (

    <div className="container p-4">
      <div className="row p-4">
        <div className="col-lg-2">
        </div>
        <div className="col-lg-8 text-center"> 
          <VerticalBar />
        </div>
        <div className="col-lg-2">
        </div>
        {/* <div className="col-lg-3">
        </div> */}
      </div>
    </div>

  )
}

export default MainChart

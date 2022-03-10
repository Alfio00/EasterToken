import React from "react"
import { Chart } from 'react-google-charts';


var data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

var options = {
  title: 'Token Supply Distribution',
  pieHole: 0.5,
  legend: {
    position: 'right',
    alignment: 'center',
  },
  pieSliceText: 'none',
  colors: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600'],

}

var options2 = {
  title: 'Buy/Sell Taxes',
  pieHole: 0.5,
  legend: {
    position: 'right',
    alignment: 'center',
  },
  pieSliceText: 'none',
  colors: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600'],
  backgroundColor: {
    fill:'trasparent'
  }
}

const TestimonialSection = () => {
  return( 
    <>
<div className="section__heading text-center" id="tokenomics">
     <h2>Tokenomics</h2>
</div>
  <div className="row">
  <div className="col-6 chart1">
    <Chart
    chartType="PieChart"
    data={data}
    options={options}
    height= '100%'
    width="1000px"
    />
  </div>
  <div className="col-6 chart2">
    <Chart
    chartType="PieChart"
    data={data}
    options={options2}
    height='550px'
    width='800px'/>
  </div>
</div>
</>

  )
}

export default TestimonialSection

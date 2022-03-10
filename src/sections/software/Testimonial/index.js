import React from "react"
import { Chart } from 'react-google-charts';


var data = [
  ["Task", "Hours per Day"],
  ["Liquidity Pool", 10],
  ["Marketing Wallet", 7],
  ["Charity Wallet", 2],
  ["Dev Wallet", 1],
];

var data2 =[
  ["Task", "Hours per Day"],
  ["Liquidity Pool", 8],
  ["Marketing Wallet", 5],
  ["Charity Wallet", 1],
  ["Dev Wallet", 1],
]

var options = {
  title: 'Buy taxes (15%)',
  pieHole: 0.5,
  legend: {
    position: 'right',
    alignment: 'center',
  },
  pieSliceText: 'none',
  colors: ['#003f5c', '#58508d', '#bc5090',  '#ffa600'],
  backgroundColor: {
    fill: 'transparent',
  },
  vAxis: {
    minValue: 1,
    maxValue: 15,
    format: "#.#'%'"
} 

}

var options2 = {
  title: 'Buy/Sell Taxes',
  pieHole: 0.5,
  legend: {
    position: 'right',
    alignment: 'center',
  },
  pieSliceText: 'none',
  colors: ['#003f5c', '#58508d', '#bc5090',  '#ffa600'],
  backgroundColor: {
    fill:'transparent'
  }

}

const TestimonialSection = () => {
  return( 
    <>
<div className="section__heading text-center" >
     <h2 id="Tokenomics">Tokenomics</h2 >
</div>
  <div className="row">
  <div className="col-md-6 col-sm-12 col-xs-12">
    <Chart
    chartType="PieChart"
    data={data2}
    options={options}
    height= '100%'
    width="800px"
    />
  </div>
  <div className="col-md-6 col-sm-12 col-xs-12">
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

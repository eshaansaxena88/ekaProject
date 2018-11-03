import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import Datatable from './Datatable';

const chartstyle={
  height:'50%',
  width:'50%'

}
class Charts extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }
  
  render(){
    console.log(this.state.chartData.labels)
    var chartToDisplay;
    if(this.props.select =='Bar')
    {
    chartToDisplay=<div style={chartstyle}>
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
        </div>
    }
    if(this.props.select =='Line')
    {
    chartToDisplay=<div style={chartstyle}>
        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
</div>
    }
    if(this.props.select =='Pie')
    {
    chartToDisplay=<div style={chartstyle}>
        <Pie
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
        </div>
    }
    return (
      <div className="chart" >
      
        
       {chartToDisplay}
         <Datatable chartDatas={this.state.chartData} contacts={this.props.contacts}/> 

      </div>
    )
  }
}

export default Charts;
import React, { Component } from 'react';
import Charts from './components/Charts';
import Dropdown from 'react-dropdown'


const dropbtn = {
    backgroundcolor: '#4CAF50',
    color: 'white',
    padding: '16px',
    fontsize: '16px',
    border: 'none',
    cursor: 'pointer'
}
var counts={ };
class App extends Component{
   constructor(){
    super();
    this.state = {
      options:['Bar','Line','Pie'],
      contacts:[],
      places :[],
      data:[],
      labels:[],
      chartData:{},
      selected:'Bar'
    }
this.onSelect = this.onSelect.bind(this);
  }

  componentWillMount(){
    this.getContactsData();
    this.setState({data:this.getChartData()});
    console.log(this.state.data);
  }
  getContactsData(){
//  this.state.contacts= [{
//         id:1,
//         name:'sad',
//         place:'india',
//         number:'9234242'
//       },
//        {id:2,
//         name:'sad',
//         place:'india',
//         number:'9234242'
//       },
//        {id:3,
//         name:'sad',
//         place:'iran',
//         number:'9234242'
//       }]
fetch('/contacts').then(contacts => {
      return contacts.json()
    }).then(contacts => {
      this.setState({
        contacts: contacts
      })
    })
      
for(var i in this.state.contacts)
{
    this.state.places.push(this.state.contacts[i].place)
}

this.state.places.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });


console.log(Object.values(counts));
return counts;
  }
  getChartData(){
    console.log(this.state.data);
    // Ajax calls here
    this.setState({
      chartData:{
        labels:Object.keys(counts),
        datasets:[
          {
            label:'count',
            data:Object.values(counts) ,
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }
onSelect(event)
{
  this.setState({selected:event.value})
  console.log(this.state.selected)
}
  render() {
    return (
      <div className="App">
      <h4>Select Dropdown</h4>
      <Dropdown style={dropbtn} options={this.state.options} onChange={this.onSelect} value='Bar' placeholder="Select an option" />
        <Charts chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom" select={this.state.selected} contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
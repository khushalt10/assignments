import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import LineChart from './LineChart';
import AssignmentDashboard from "./AssignmentDashboard";

class DoughnutChart1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['Submitted', 'Completed', 'Pending','NewAssignments'],
        datasets: [
          {
            data: [3, 5, 1, 7],
        backgroundColor: ['lightblue', 'lightgreen', 'pink','yellow'],
        hoverBackgroundColor: ['blue', 'green', 'red','orange']
          }
        ]
      }
    };
  }

  render() {
    return (
        <div>
            <AssignmentDashboard></AssignmentDashboard>
            <div className={'d-flex align-content-center mt-5 px-5 a'}>
                <LineChart></LineChart>
                <Doughnut
                    data={this.state.chartData}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        hoverOffset: 40,
                        animate : true,
                        cutout:'50%'
                    }}
                />
            </div>
        </div>

    );
  }
}

export default DoughnutChart1;

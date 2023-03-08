
import {Line} from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip

} from 'chart.js';


ChartJS.register(

  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip

)

function LineChart() {

   const data = {
      labels : ['week1','week2','week3','week4','week5','week6'],
      datasets : [{

        label : 'Assignment completed',
        data:[6,0,10,5,2,7],
        backgroundColor:'aqua',
        borderColor:'black',
        pointBorderColor:'aqua',
        fill: true,
        tension :0.4,
        beginAtZero: true

      }]

   }

   const options ={

    Plugin:{
      legend:true
    },
    scales:{
      y:{

      }
    }
   }
  
  return (
    
    <div>
     <div>hello LineChart</div> 
     <div style={

      {
        width :'600px',
      height : '300px',
      padding : '20px'
      }
      

     }>
      <Line
      
        data ={data}
        options ={options}

      
      ></Line>
      

    </div>
    </div>
  );
}

export default LineChart;
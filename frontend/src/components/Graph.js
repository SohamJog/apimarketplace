import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
//import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GraphComponent = ({graphData}) => {
    
    const options = {
        responsive: true,
        plugins: {
            legend: {
            position: 'top',
            },
            title: {
            display: false,
            text: '',
            },
        },
        plugins: {
            // background: {
            //   color: 'rgba(0, 0, 0, 0)', // Change this to the desired background color
            // },
            customCanvasBackgroundColor: {
                color: 'lightGreen',
            }
        },
    };
    
    const config = {
        options: {
          plugins: {
            customCanvasBackgroundColor: {
              color: 'lightGreen',
            }
          }
        },
        
    };

    const labels = ['', '', '', '', '', '', ''];
    const data = {
        labels,
        datasets: [
          {
            label: 'Hourly Price in Wei',
            data: graphData,
            borderColor: 'rgb(111, 76, 255)',
            backgroundColor: 'rgba(111, 76, 255, 0.5)',
          },
        ],
      };

    
    return (
        <div>
            <Line options={options} config={config} data={data} />
        </div>
    );
}




export default GraphComponent;

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
            <Line options={options} data={data} />
        </div>
    );
}




export default GraphComponent;

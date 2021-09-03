import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';



const VerticalBar = () => {

    const [details, setDetails] = useState({
        "title": "",
        "labels": [],
        "label": "",
        "data": []
    });

    const getStudMarks = () => {
        fetch("StudPerf.json")
            .then(response => response.json())
            .then(result => setDetails(...result))
    }

    useEffect(() => {
        getStudMarks();
        console.log("I am here")
    }, [])

    const data = {
        labels: [...details.labels],
        datasets: [
            {
                label: details.label,
                data: [...details.data],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
                
            },
        ],
    };

    const options = {
        scales: {
            y: {
                    ticks: {
                        beginAtZero: true,
                        color:"blue"
                    },
                    title: {
                        display: true,
                        text: details.yaxis,
                        color:"blue"
                      },
                },
                x: {
                    ticks: {
                        beginAtZero: true,
                        color:"blue"
                    },
                    title: {
                        display: true,
                        text: details.xaxis,
                        color:"blue"
                      },
                    
                },
            
        },
        plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: details.title
            }
          }
        
    };



    return (
        <>
            {/* <div className='header'>
                <h1 className='title'>{details.title}</h1>

            </div> */}
            <Bar data={data} options={options} />
        </>
    );
}

export default VerticalBar;

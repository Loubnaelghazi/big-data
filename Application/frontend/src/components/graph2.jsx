import React, { useEffect, useRef, useState } from "react";
import { getAllData } from "../api/api";
import Chart from 'chart.js/auto';

export default function Table() {
  const [data, setData] = useState([]);
  const [predictionCounts, setPredictionCounts] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });
  const [tweetsPerMinute, setTweetsPerMinute] = useState([]);
  const [tweetCounts, setTweetCounts] = useState([]); // Track number of tweets over time
  const pollingInterval = 60000; // Polling interval in milliseconds (1 minute)

  const fetchData = async () => {
    try {
      const allData = await getAllData();
      setData(allData.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, pollingInterval);
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const counts = data.reduce((acc, item) => {
        const prediction = item.prediction;
        acc[prediction]++;
        return acc;
      }, { 0: 0, 1: 0, 2: 0, 3: 0 }); // Initialize counts with 0 for each prediction
      setPredictionCounts(counts);

      // Track tweet counts over time
      setTweetCounts((prevCounts) => {
        const newCounts = [...prevCounts, data.length];
        if (newCounts.length > 2) {
          // Calculate tweets per minute
          const tweetsPerMin = newCounts.slice(1).map((count, i) => count - newCounts[i]);
          setTweetsPerMinute(tweetsPerMin);
        }
        return newCounts;
      });
    }
  }, [data]);

  const BarChart = (props) => {
    const chartContainer = useRef(null);
    const chartInstance = useRef(null); // Store Chart instance

    useEffect(() => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy(); // Destroy previous Chart instance
      }

      if (chartContainer && chartContainer.current) {
        const ctx = chartContainer.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: props.labels || [],
            datasets: [{
              label: "Counts",
              data: props.data,
              backgroundColor: props.backgroundColor || ['black', 'red', 'green','blue'],
              borderColor: props.borderColor || 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            },
            plugins: {
              legend: {
                display: false // Hide the legend
              }
            }
          }
        });
      }

      return () => {
        if (chartInstance.current !== null) {
          chartInstance.current.destroy(); // Destroy Chart instance on component unmount
        }
      };
    }, [props]);

    return <canvas ref={chartContainer} />;
  };

  const LineChart = (props) => {
    const chartContainer = useRef(null);
    const chartInstance = useRef(null); // Store Chart instance

    useEffect(() => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy(); // Destroy previous Chart instance
      }

      if (chartContainer && chartContainer.current) {
        const ctx = chartContainer.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: props.labels || [],
            datasets: [{
              label: "Tweets Per Minute",
              data: props.data,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              fill: true
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            },
            plugins: {
              legend: {
                display: true // Show the legend
              }
            }
          }
        });
      }

      return () => {
        if (chartInstance.current !== null) {
          chartInstance.current.destroy(); // Destroy Chart instance on component unmount
        }
      };
    }, [props]);

    return <canvas ref={chartContainer} />;
  };

  const labels = ['Negative', 'Neutral', 'Positive', 'Irrelevant'];

  return (
    <div>
      <div style={{ width: '500px', height: '600px', margin: '50px 0' }}>
        <h2 style={{ textAlign: 'center' }}>Sentiment Distribution</h2>
        <BarChart data={Object.values(predictionCounts)} labels={labels} />
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Pie,
  // Doughnut
} from 'react-chartjs-2';

const labels = ['Apple', 'Orange', 'Banana', 'Grape', 'Pear'];

const PieChart = ({ chartData }) => {
  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    const temp = [
      {
        data: chartData,
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'],
        hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          '#003350',
          '#35014F'
        ]
      }
    ];
    setDatasets(temp);
  }, [chartData]);
  const options = {
    responsive: true,
  };

  return (
    <Pie
      data={{ datasets, labels }}
      options={options}
      height={120}
    />
    // <Doughnut
    //   data={{ datasets, labels }}
    //   options={options}
    //   height={120}
    // />
  );
};

PieChart.propTypes = {
  chartData: PropTypes.array
};

PieChart.defaultProps = {
  chartData: []
};

export default PieChart;

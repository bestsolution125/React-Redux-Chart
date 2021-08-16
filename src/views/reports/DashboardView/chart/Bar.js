import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import {
  useTheme,
  colors
} from '@material-ui/core';

const labels = ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug'];

const chartColor = [colors.indigo[500], colors.green[200]];

const BarChart = ({ chartData }) => {
  const theme = useTheme();

  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    if (chartData.length > 0) {
      const temp = chartData.map((col, ind) => ({
        backgroundColor: chartColor[ind],
        data: col.data,
        label: col.label
      }));
      setDatasets(temp);
    }
  }, [chartData]);

  const options = {
    animation: false,
    cornerRadius: 10,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 20,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          }
        }
      ]
    },
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Bar
      data={{ datasets, labels }}
      options={options}
      height={500}
    />
  );
};
BarChart.propTypes = {
  chartData: PropTypes.array
};

BarChart.defaultProps = {
  chartData: []
};
export default BarChart;

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container,
  Grid,
  Box,
  Card,
  TextField,
  makeStyles,
  CardContent
} from '@material-ui/core';
import Page from 'src/components/Page';
import dashboardActions from 'src/redux/dashboard/actions';

import Bar from './chart/Bar';
import Line from './chart/Line';
import Pie from './chart/Pie';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
}));
const types = ['line', 'bar', 'pie'];

const Dashboard = ({
  pie, line, bar, getBarData, getPieData, getLineData
}) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    chartType: 'line'
  });
  useEffect(() => {
    getLineData();
  }, []);
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    switch (event.target.value) {
      case 'pie':
        getPieData();
        break;
      case 'line':
        getLineData();
        break;
      case 'bar':
        getBarData();
        break;
      default:
        getBarData();
        break;
    }
  };
  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Box mt={3}>
              <Card>
                <CardContent>
                  <Box maxWidth={500}>
                    <TextField
                      fullWidth
                      label="Select Chart Type..."
                      name="chartType"
                      onChange={handleChange}
                      required
                      select
                      SelectProps={{ native: true }}
                      value={values.chartType}
                      variant="outlined"
                    >
                      {types.map((option) => (
                        <option
                          key={option}
                          value={option}
                        >
                          {option}
                        </option>
                      ))}
                    </TextField>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Box>
              <Card>
                <CardContent>
                  {values.chartType === 'bar' && <Bar chartData={bar} />}
                  {values.chartType === 'pie' && <Pie chartData={pie} />}
                  {values.chartType === 'line' && <Line chartData={line} />}
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

const mapStateToProps = (state) => ({
  bar: state.Dashboard.bar,
  line: state.Dashboard.line,
  pie: state.Dashboard.pie
});

const mapDispatchToProps = {
  getBarData: dashboardActions.getBarData,
  getLineData: dashboardActions.getLineData,
  getPieData: dashboardActions.getPieData
};

Dashboard.propTypes = {
  bar: PropTypes.array,
  line: PropTypes.array,
  pie: PropTypes.array,
  getBarData: PropTypes.func,
  getLineData: PropTypes.func,
  getPieData: PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

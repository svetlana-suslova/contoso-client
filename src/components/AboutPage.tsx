import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from '../reducers/rootReducer';
import {isEmpty} from 'lodash';

import {loadStudentsStatistics} from '../actions/studentActions';

function AboutPage() {
  const statistics: Array<StatisticsItem> = useSelector((state: AppState) => state.student.statisticsList);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty(statistics)) dispatch(loadStudentsStatistics());
  }, []);

  function render() {
    let id = 1;
    return (
      <div className="container">
        <h2>Students Statistics</h2>
        <div className="col-md-4">
          <table className="table">
            <thead>
              <tr>
                <th>Enrollment Date</th>
                <th>Students</th>
              </tr>
            </thead>
            <tbody>
              {statistics.map((statisticsItem) => (
                <tr key={id++}>
                  <td>{statisticsItem.enrollmentDate}</td>
                  <td>{statisticsItem.studentCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  return render();
}
export default AboutPage;

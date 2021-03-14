import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from '../reducers/rootReducer';
import {isEmpty} from 'lodash';

import {getRandomUid} from '../helpers/utils';
import {displayDate} from '../helpers/dateFormatter';

import {loadStudentsStatistics} from '../actions/studentActions';
import {Container} from './bootstrap';

function AboutPage() {
  const statistics: Array<StatisticsItem> = useSelector((state: AppState) => state.student.statisticsList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty(statistics)) dispatch(loadStudentsStatistics());
  }, []);

  function render() {
    return (
      <Container>
        <h2>Students statistics</h2>
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
                <tr key={getRandomUid()}>
                  <td>{displayDate(statisticsItem.enrollmentDate)}</td>
                  <td>{statisticsItem.studentCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    );
  }
  return render();
}
export default AboutPage;

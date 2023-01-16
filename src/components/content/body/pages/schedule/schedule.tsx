import React, { Component, useReducer } from 'react';
import classes from './schedule.module.scss';
import { useDispatch, useStore } from 'react-redux';
import { fetchAllContentByType } from '../../../../../store/actions/contentSrc';
import Carusel from '../../../carusel/carusel';
import Coaches from '../coaches/coaches';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  // etc... other react-router-dom v6 hooks

  return (
    <WrappedComponent
      {...props}
      params={params}
      // etc...
    />
  );
};

class Schedule extends Component {
  state = {
    scheduleArr: [],
    sessionArr: [],
    coachesArr: [],
  };

  // Перед отрисовкой интерфейса, инициализация входных данных из Redux
  UNSAFE_componentWillMount() {
    this.props.onFetchAllContentByType('schedule');
    this.props.onFetchAllContentByType('sessions');
    this.props.onFetchAllContentByType('coaches');
  }

  render() {
    let { scheduleArr, sessionArr, coachesArr } = this.props;
    scheduleArr = scheduleArr || [];
    sessionArr = sessionArr || [];
    coachesArr = coachesArr || [];

    let tableHead = [];

    if (
      scheduleArr?.contents &&
      scheduleArr?.contents.length > 0 &&
      scheduleArr?.contents[0]?.contents &&
      scheduleArr?.contents[0]?.contents.length > 0
    ) {
      tableHead = scheduleArr?.contents[0]?.contents?.map(function (
        item,
        index,
        array
      ) {
        return <th>{item?.name}</th>;
      });
    }

    let tableBody = [];

    if (scheduleArr?.contents && scheduleArr?.contents.length > 0) {
      tableBody = scheduleArr?.contents?.map(function (item, index, array) {
        return (
          <tr>
            <td>
              {item?.from} - {item?.to}
            </td>
            {item?.contents?.map(function (item, index, array) {
              let currentSessionArr = sessionArr?.contents?.filter((k) =>
                item?.content?.sessions?.find((x) =>
                  x?.sessionsIds?.includes(k?.id)
                )
              );
              let currentCoacheArr = coachesArr?.contents?.filter((k) =>
                item?.content?.sessions?.find((x) =>
                  x.coachesIds?.includes(k.id)
                )
              );

              return (
                <td>
                  {currentSessionArr?.map((x) => x?.name).join(' / ')}
                  <br />
                  {currentCoacheArr?.map((x) => x?.content?.header).join(' / ')}
                </td>
              );
            })}
          </tr>
        );
      });
    }

    const navClass = [];

    navClass.push('text-center');

    return (
      <div className="row">
        <Carusel />
        <div>
          <h1 className={navClass.join(' ')}>{scheduleArr.header}</h1>
          <div className="row">
            <Table striped bordered hover className={classes.mainTable}>
              <thead>
                <tr>
                  <th>Время</th>
                  {tableHead}
                </tr>
              </thead>
              <tbody>{tableBody}</tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

// Регистрация параметров Redux
function mapStateToProps(state) {
  return {
    scheduleArr: state.content.scheduleArr,
    sessionArr: state.content.sessionArr,
    coachesArr: state.content.coachesArr,
  };
}

// Регистрация функций Redux
function mapDiaspatchToProps(dispatch) {
  return {
    onFetchAllContentByType: (seacrhFilter) =>
      dispatch(fetchAllContentByType(seacrhFilter)),
  };
}

// // Вывод Основного компонента с подключённым к нему Redux
export default withRouter(
  connect(mapStateToProps, mapDiaspatchToProps)(Schedule)
);

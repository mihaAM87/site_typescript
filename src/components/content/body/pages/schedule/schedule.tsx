import React, { Component, useReducer } from 'react';
// import classes from './schedule.module.scss';
import { useDispatch, useStore } from 'react-redux';
import {
  useAllScheduleSourceQuery,
  useAllSessionsSourceQuery,
  useAllCoachesQuery,
} from '../../../../../store/actions/source.api';
import Carusel from '../../../carusel/carusel';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';

export default function Schedule() {
  const {
    isLoading: scheduleIsLoading,
    isError: scheduleIsError,
    data: scheduleData,
  } = useAllScheduleSourceQuery();
  const {
    isLoading: sessionsIsLoading,
    isError: sessionsIError,
    data: sessionsData,
  } = useAllSessionsSourceQuery();
  const {
    isLoading: oachesIsLoading,
    isError: oachesIsError,
    data: coachesData,
  } = useAllCoachesQuery();

  let tableHead;

  if (
    scheduleData?.contents &&
    scheduleData?.contents.length > 0 &&
    scheduleData?.contents[0]?.contents &&
    scheduleData?.contents[0]?.contents.length > 0
  ) {
    tableHead = scheduleData?.contents[0]?.contents?.map(function (
      item,
      index,
      array
    ) {
      return <th>{item?.name}</th>;
    });
  }

  let tableBody;

  if (scheduleData?.contents && scheduleData?.contents.length > 0) {
    tableBody = scheduleData?.contents?.map(function (item, index, array) {
      return (
        <tr>
          <td>
            {item?.from} - {item?.to}
          </td>
          {item?.contents?.map(function (item, index, array) {
            let currentSessionArr = sessionsData?.contents?.filter((k) =>
              item?.content?.sessions?.find((x) =>
                x?.sessionsIds?.includes(k?.id)
              )
            );
            let currentCoacheArr = coachesData?.contents?.filter((k) =>
              item?.content?.sessions?.find((x) => x.coachesIds?.includes(k.id))
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

  // navClass.push('text-center');

  return (
    <div className="row">
      <Carusel />
      <div>
        <h1 className={navClass.join(' ')}>{scheduleData?.header}</h1>
        <div className="row">
          <Table
            striped
            bordered
            hover
            // className={classes.mainTable}
          >
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

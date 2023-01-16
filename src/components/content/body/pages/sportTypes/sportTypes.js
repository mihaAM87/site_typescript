import React, { useReducer, Component, useContext } from 'react';
import PropTypes from 'prop-types';
import classes from './sportTypes.module.scss';
import { useDispatch, useStore } from 'react-redux';
import {
  IMG_DIRECTORY,
  SPORTTYPES_IMGES_DIR,
} from '../../../../../store/actions/content';
import { fetchAllContentByType } from '../../../../../store/actions/contentSrc';
import Carusel from '../../../carusel/carusel';
import Coaches from '../coaches/coaches';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { ModalContext } from '../../../../../context/modal/modalContext';

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const { show } = useContext(ModalContext);
  // etc... other react-router-dom v6 hooks

  return (
    <WrappedComponent
      {...props}
      params={params}
      show={show}
      // etc...
    />
  );
};

class SportTypes extends Component {
  state = {
    sportTypesArr: [],
    header: null,
    name: null,
    show: null,
  };

  // Перед отрисовкой интерфейса, инициализация входных данных из Redux
  UNSAFE_componentWillMount() {
    this.props.onFetchAllContentByType('sportTypes');
  }

  render() {
    let { sportTypesArr, header, show } = this.props;
    const name = this.props?.params?.name;
    sportTypesArr = sportTypesArr || [];

    let sportTypeItem = [];

    if (sportTypesArr.contents && sportTypesArr.contents.length > 0) {
      sportTypeItem = sportTypesArr.contents?.find(
        (item) => item.name?.toLowerCase() === name?.toLowerCase()
      );
    }

    // let sportTypeItem = sportTypesArr;

    const navClass = [];

    // navClass.push('text-white');

    return (
      <div className="row">
        <Carusel />
        {sportTypeItem ? (
          <div className={navClass.join(' ')}>
            <h1 className="text-black">{header}</h1>
            <div className="row">
              <div className="col-8">
                <h2>{sportTypeItem.header}</h2>
                <h3 className={classes.textLeft}>{sportTypeItem.content}</h3>
                <button
                  type="button"
                  className="btn btn-primary btn-lg col-2"
                  variant="primary"
                  onClick={show}
                >
                  Записаться
                </button>
              </div>
              <div
                className={`${classes.mainContent} col-4`}
                style={{
                  backgroundImage:
                    'url(' +
                    IMG_DIRECTORY +
                    SPORTTYPES_IMGES_DIR +
                    sportTypeItem.img +
                    ')',
                }}
              ></div>
            </div>

            <Coaches sportType={sportTypeItem.name} />
          </div>
        ) : (
          <Coaches sportType={''} />
        )}
      </div>
    );
  }
}
// Регистрация параметров Redux
function mapStateToProps(state) {
  return {
    sportTypesArr: state.content.sportTypesArr,
    header: state.content.header,
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
  connect(mapStateToProps, mapDiaspatchToProps)(SportTypes)
);

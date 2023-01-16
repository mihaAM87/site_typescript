import React, { useContext, Component } from 'react';
import {
  IMG_DIRECTORY,
  COACHES_IMGES_DIR,
} from '../../../../../store/actions/content';
import { fetchAllContentByType } from '../../../../../store/actions/contentSrc';
import Card from 'react-bootstrap/Card';
import Carusel from '../../../carusel/carusel';
import classes from './coaches.module.scss';
import { useDispatch, useStore } from 'react-redux';
import { ModalContext } from '../../../../../context/modal/modalContext';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

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

class Coaches extends Component {
  state = {
    coachesArr: [],
    sportType: null,
    show: null,
  };

  // Перед отрисовкой интерфейса, инициализация входных данных из Redux
  UNSAFE_componentWillMount() {
    this.props.onFetchAllContentByType('coaches');
  }

  render() {
    let { coachesArr, sportType, show } = this.props;
    coachesArr = coachesArr || [];

    const header = coachesArr?.header;

    const itemClass = [];
    const mainDiv = [];

    mainDiv.push('container');
    mainDiv.push(classes.mainDiv);

    itemClass.push('col-md-4');

    if (
      sportType &&
      sportType != '' &&
      coachesArr?.contents &&
      coachesArr?.contents.length > 0
    ) {
      coachesArr = coachesArr?.contents?.filter(
        (item) => item.content.type.toLowerCase() === sportType?.toLowerCase()
      );
    } else {
      coachesArr = coachesArr?.contents;
    }

    if (coachesArr && coachesArr.length > 0) {
      coachesArr = coachesArr.map((element) => {
        let elementContent = element.content;
        let itemKey = Math.random();
        return (
          <div className={itemClass.join(' ')} key={itemKey}>
            <Card>
              <Card.Img
                variant="top"
                src={IMG_DIRECTORY + COACHES_IMGES_DIR + elementContent.img}
              />
              <Card.Body>
                <Card.Title>{elementContent.header}</Card.Title>
                <Card.Text>{elementContent.content}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
                <button
                  className="form-control btn btn-primary"
                  variant="primary"
                  onClick={show}
                >
                  Записаться
                </button>
              </Card.Body>
            </Card>
          </div>
        );
      });
    }

    return (
      <div className="row">
        {!sportType || sportType == '' ? <Carusel /> : <br />}

        <div className={mainDiv.join(' ')}>
          <h1>{header}</h1>
          <div className="row">{coachesArr ? coachesArr : <br />}</div>
        </div>
      </div>
    );
  }
}

// Регистрация параметров Redux
function mapStateToProps(state) {
  return {
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
  connect(mapStateToProps, mapDiaspatchToProps)(Coaches)
);

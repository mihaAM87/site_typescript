import React, { Component } from 'react';
import classes from './footer.module.scss';
import { useDispatch, useStore } from 'react-redux';
import { fetchAllContentByType } from '../../../store/actions/contentSrc';
import { useParams } from 'react-router-dom';
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

class Footer extends Component {
  state = {
    contacts: {},
  };

  // Перед отрисовкой интерфейса, инициализация входных данных из Redux
  UNSAFE_componentWillMount() {
    this.props.onFetchAllContentByType('contacts');
  }

  render() {
    let { contacts } = this.props;
    contacts = contacts || {};

    const mainClass = [];

    mainClass.push('container');
    mainClass.push(classes.blackBackground);
    mainClass.push(classes.whiteColor);
    return (
      <div className={mainClass.join(' ')}>
        <h4>{contacts.phones?.join(', ')}</h4>
        <h5>
          <span className={classes.redColor}>Тренировка</span> (с) 2022. Все
          права защищены.
        </h5>
      </div>
    );
  }
}

// Регистрация параметров Redux
function mapStateToProps(state) {
  return {
    contacts: state.content.contacts,
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
  connect(mapStateToProps, mapDiaspatchToProps)(Footer)
);

import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { fetchAllContentByType } from '../../../../store/actions/contentSrc';
import { useDispatch, useStore } from 'react-redux';
import classes from './myMenu.module.scss';
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

class MyMenu extends Component {
  state = {
    sportTypesArr: [],
  };

  // Перед отрисовкой интерфейса, инициализация входных данных из Redux
  UNSAFE_componentWillMount() {
    this.props.onFetchAllContentByType('sportTypes');
  }

  render() {
    let { sportTypesArr } = this.props;
    sportTypesArr = sportTypesArr || [];

    const navClass = [];

    navClass.push('row');

    if (
      sportTypesArr &&
      sportTypesArr.contents &&
      sportTypesArr.contents.length > 0 &&
      Link
    ) {
      sportTypesArr = sportTypesArr.contents.map((element) => {
        return (
          <NavDropdown.Item
            as={NavLink}
            to={'/sportTypes/' + element.name}
            className="bg-danger text-white"
          >
            {element.header}
          </NavDropdown.Item>
        );
      });
    }

    return (
      <Navbar bg="danger" expand="lg" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav
              className={`me-auto justify-content-between nav ${classes.nav} bg-danger text-white`}
              justify="true"
            >
              <NavDropdown title="Виды спорта" id="basic-nav-dropdown">
                {sportTypesArr}
              </NavDropdown>
              <Nav.Link as={NavLink} to="/schedule">
                Расписание
              </Nav.Link>
              <Nav.Link as={NavLink} to="/prices">
                Стоимость
              </Nav.Link>
              <Nav.Link as={NavLink} to="/coaches">
                Тренеры
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contacts">
                Контакты
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

// Регистрация параметров Redux
function mapStateToProps(state) {
  return {
    sportTypesArr: state.content.sportTypesArr,
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
  connect(mapStateToProps, mapDiaspatchToProps)(MyMenu)
);

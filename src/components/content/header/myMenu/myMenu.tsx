import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useAllSportTypesSourceQuery } from '../../../../store/actions/source.api';
import { useDispatch, useStore } from 'react-redux';
import './myMenu.module.scss';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

export default function MyMenu() {
  const {
    isLoading: sportTypesIsLoading,
    isError: sportTypesIsError,
    data: sportTypesData,
  } = useAllSportTypesSourceQuery();

  const navClass: string[] = [];

  navClass.push('row');

  let sportTypesDataElement;

  if (
    sportTypesData &&
    sportTypesData?.contents &&
    sportTypesData?.contents?.length > 0
  ) {
    sportTypesDataElement = sportTypesData?.contents.map((element) => {
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
            className={`me-auto justify-content-between nav bg-danger text-white`}
            // justify="true"
          >
            <NavDropdown title="Виды спорта" id="basic-nav-dropdown">
              {sportTypesDataElement}
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

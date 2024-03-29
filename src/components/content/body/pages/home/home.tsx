import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carusel from '../../../carusel/carusel';
import { useParams } from 'react-router-dom';

export default function home() {
  return (
    <div className="row">
      <Carusel />
      <div>
        <h2>
          <span className="text-danger">Спорт</span> начинается здесь
        </h2>
        <p>
          Спорт (англ. sport, сокращение от первоначального старофранц. desport
          — «игра», «развлечение») — организованная по определённым правилам
          деятельность людей (спортсменов), состоящая в сопоставлении их
          физических и/или интеллектуальных способностей. Спорт представляет
          собой специфический род физической или интеллектуальной активности,
          совершаемой с целью соревнования, а также целенаправленной подготовки
          к ним путём разминки, тренировки. В сочетании с отдыхом, стремлением к
          постепенному улучшению физического здоровья, повышению уровня
          интеллекта, получению морального удовлетворения, к совершенству,
          улучшению личных, групповых и абсолютных рекордов, славе, улучшению
          собственных физических возможностей и навыков спорт предназначен для
          совершенствования физико-психических характеристик человека.
        </p>

        <p>
          Цель спорта высших достижений — это достижение максимально возможных
          спортивных результатов или побед на крупнейших спортивных
          соревнованиях.
        </p>
      </div>
    </div>
  );
}

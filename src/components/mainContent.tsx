import React from 'react';
import './mainContent.module.scss';
import Header from './content/header/header';
import MainImage from './content/mainImage/mainImage';
import Body from './content/body/body';
import Footer from './content/footer/footer';
import { useStore } from 'react-redux';

export default function MainContent() {
  let mainClass: string[] = [];
  let headerClass: string[] = [];

  mainClass.push('row');
  mainClass.push('mainClass');

  headerClass.push('row');
  headerClass.push('headerClass');

  return (
    <div className="row">
      <div className={headerClass.join(' ')}>
        <Header />
      </div>
      <div className={mainClass.join(' ')}>
        <MainImage />

        <Body />

        <Footer />
      </div>
    </div>
  );
}

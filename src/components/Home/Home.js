import React, { useContext } from 'react';
import { images } from '../../assets/images';
import Element from '../Element';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../index';
let cx = classNames.bind(styles);
const Home = () => {
  const navigate = useNavigate();
  const appContext = useContext(AppContext);
  const handleChoose = (e, types) => {
    e.preventDefault();
    appContext.type = types;
    navigate('../action', { replace: false });
  };

  return (
    <div className="p-3 max-w-lg mx-auto flex flex-col justify-center items-center mt-10">
      <div className={cx('line1', 'flex', 'space-x-10')}>
        <Element src={images.iconScissors} scissors onClick={handleChoose}></Element>
        <Element src={images.iconRock} rock onClick={handleChoose}></Element>
      </div>
      <div className={cx('line2', 'p-5')}>
        <Element src={images.iconPaper} paper onClick={handleChoose}></Element>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
const Header = ({ score }) => {
  return (
    <div
      className={cx(
        'wrapper',
        'flex',
        'justify-between',
        'items-center',
        'p-4',
        'bg-transparent',
        'border',
        'border-slate-200',
        'rounded-md',
        'mx-auto',
        'my-8',
        'max-w-[90%]',
        'md:max-w-2xl',
        'select-none',
      )}
    >
      <div className="text-slate-100 text-3xl font-bold text-left leading-7 uppercase ml-2">
        <p>Rock</p>
        <p>Paper</p>
        <p>Scissors</p>
      </div>
      <div className={cx('bg-slate-100', 'p-2', 'text-center', 'rounded-md')}>
        <h5 className="tracking-wider">SCORE</h5>
        <h1 className="text-gray-600 text-4xl leading-10">{score || 0}</h1>
      </div>
    </div>
  );
};

export default Header;

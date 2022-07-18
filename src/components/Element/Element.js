import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Element.module.scss';

let cx = classNames.bind(styles);
const defaultFn = (e) => {
  e.preventDefault();
};
const Element = ({ src, scissors, rock, paper, win, large, onClick = defaultFn }) => {
  const wrapperRef = useRef();
  let defaultClasses = [
    'wrapper',
    'w-28',
    'h-28',
    'rounded-full',
    'flex',
    'justify-center',
    'items-center',
    'select-none',
  ];
  if (scissors) {
    defaultClasses.push('bg-scissors');
  } else if (rock) {
    defaultClasses.push('bg-rock');
  } else if (paper) {
    defaultClasses.push('bg-paper');
  } else {
  }

  if (large) {
    defaultClasses.push('scale-150');
  }

  useEffect(() => {
    if (scissors) {
      wrapperRef.current.style.setProperty('--color', '#C96B19');
    } else if (rock) {
      wrapperRef.current.style.setProperty('--color', '#9D1635');
    } else if (paper) {
      wrapperRef.current.style.setProperty('--color', '#2A45C2');
    } else {
    }

    if (win) {
      wrapperRef.current.classList.add(styles.win);
    } else {
      wrapperRef.current.classList.remove(styles.win);
    }
  });

  return (
    <div className={cx(defaultClasses)} ref={wrapperRef} onClick={(e) => onClick(e, [scissors, rock, paper])}>
      <div className="bg-slate-100 w-20 h-20 flex justify-center items-center rounded-full p-3">
        <img src={src} alt={src} />
      </div>
    </div>
  );
};

export default Element;

import React, { useContext, useEffect, useRef, useState } from 'react';
import Element from '../Element';
import { images } from '../../assets/images';
import classNames from 'classnames/bind';
import { AppContext } from '../../index';
import { useNavigate } from 'react-router-dom';
let cx = classNames.bind();
const Action = () => {
  console.log('render action');
  const navigate = useNavigate();
  const appContext = useContext(AppContext);
  const defaultAnswer = [false, false, true];
  const [computerChoose, setComputerChoose] = useState(defaultAnswer);
  let computerThinkingTimes = useRef(10 + Math.random() * 10);
  useEffect(() => {
    if (appContext.type === null) {
      navigate('/', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(computerThinkingTimes.current);
    computerThinkingTimes.current -= 1;
    if (computerThinkingTimes.current < 0) {
      console.log('end');
      return;
    }
    const quickTimer = setInterval(() => {
      setComputerChoose((pre) => {
        let prev = [...pre];
        if (prev[0] === true) {
          prev[0] = false;
          prev[1] = true;
        } else if (prev[1] === true) {
          prev[1] = false;
          prev[2] = true;
        } else {
          prev[2] = false;
          prev[0] = true;
        }
        return prev;
      });
    }, 50);
    return () => {
      clearInterval(quickTimer);
    };
  }, [computerChoose]);
  const [scissors, rock, paper] = appContext.type || [undefined, undefined, undefined];
  return (
    <div className="p-3 max-w-lg mx-auto flex flex-col justify-center items-center mt-10">
      <div className={cx('line1', 'flex', 'space-x-20')}>
        {/*User element */}
        <div>
          <h1 className="text-slate-100 uppercase text-xl my-5">You pick</h1>
          <Element
            src={(scissors && images.iconScissors) || (rock && images.iconRock) || (paper && images.iconPaper)}
            scissors={scissors}
            rock={rock}
            paper={paper}
          ></Element>
        </div>

        {/*Computer element */}
        <div>
          <h1 className="text-slate-100 uppercase text-xl my-5">Computer pick</h1>
          <Element
            src={
              (computerChoose[0] && images.iconScissors) ||
              (computerChoose[1] && images.iconRock) ||
              (computerChoose[2] && images.iconPaper)
            }
            scissors={computerChoose[0]}
            rock={computerChoose[1]}
            paper={computerChoose[2]}
            win={true}
          ></Element>
        </div>
      </div>
    </div>
  );
};

export default Action;

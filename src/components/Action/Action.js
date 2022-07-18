import React, { useContext, useEffect, useRef, useState } from 'react';
import Element from '../Element';
import { images } from '../../assets/images';
import classNames from 'classnames/bind';
import { AppContext } from '../../index';
import { useNavigate, Link } from 'react-router-dom';
let cx = classNames.bind();
const Action = () => {
  console.log('render action');
  const navigate = useNavigate();
  const appContext = useContext(AppContext);
  const defaultAnswer = [false, false, true];
  const [computerChoose, setComputerChoose] = useState(defaultAnswer);
  const [userWin, setUserWin] = useState(false);
  const [computerWin, setComputerWin] = useState(false);
  const [title, setTitle] = useState('Computer random..');

  let computerThinkingTimes = useRef(10 + Math.random() * 10);
  useEffect(() => {
    if (appContext.type === null) {
      navigate('/', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    computerThinkingTimes.current -= 1;
    if (computerThinkingTimes.current < 0) {
      console.log('Result: ', decision([scissors, rock, paper], computerChoose));
      switch (decision([scissors, rock, paper], computerChoose)) {
        case 'lose':
          appContext.score.setScore(0);
          setTitle('you lose');
          setComputerWin(true);
          break;
        case 'win':
          appContext.score.setScore((prev) => prev + 1);
          setTitle('you won');
          setUserWin(true);
          break;
        default:
          setTitle('you draw');
      }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [computerChoose]);
  const [scissors, rock, paper] = appContext.type || [undefined, undefined, undefined];

  function decision(user, computer) {
    console.log(user, computer);
    let userPick, computerPick;
    user.forEach((item, index) => {
      if (item === true) {
        userPick = index;
      }
    });

    computer.forEach((item, index) => {
      if (item === true) {
        computerPick = index;
      }
    });

    let result = computerPick - userPick;
    if (result === 0) {
      return 'draw';
    } else if (result === 1 || result === -2) {
      return 'lose';
    } else {
      return 'win';
    }
  }

  return (
    <div className="p-3 box-border w-screen md:max-w-lg mx-auto flex flex-col justify-center items-center mb-48">
      <h1 className="text-slate-100 text-3xl relative z-30 my-10 uppercase tracking-wider">{title}</h1>
      <div className={cx('flex', 'md:justify-between', 'md:w-[30rem]', 'w-screen', 'justify-around')}>
        {/*User element */}
        <div>
          <h1 className="text-slate-100 uppercase text-xl my-10 relative z-30">You pick</h1>
          <Element
            src={(scissors && images.iconScissors) || (rock && images.iconRock) || (paper && images.iconPaper)}
            scissors={scissors}
            rock={rock}
            paper={paper}
            win={userWin}
            large
          ></Element>
        </div>

        {/*Computer element */}
        <div>
          <h1 className="text-slate-100 uppercase text-xl my-10 relative z-30">Computer pick</h1>
          <Element
            src={
              (computerChoose[0] && images.iconScissors) ||
              (computerChoose[1] && images.iconRock) ||
              (computerChoose[2] && images.iconPaper)
            }
            scissors={computerChoose[0]}
            rock={computerChoose[1]}
            paper={computerChoose[2]}
            win={computerWin}
            large
          ></Element>
        </div>
      </div>
      {title.includes('you') && (
        <Link to="/">
          <button
            className="bg-transparent border border-slate-100 rounded-md uppercase p-2 
          absolute z-30 md:bottom-32 bottom-20 left-[50%] translate-x-[-50%]
           text-slate-100 mt-20 hover:bg-slate-100 hover:text-slate-800"
          >
            Try again?
          </button>
        </Link>
      )}
    </div>
  );
};

export default Action;

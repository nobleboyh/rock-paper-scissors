import React from 'react';
import { images } from '../../assets/images';
const RuleModal = ({ onExit }) => {
  return (
    <div className="fixed h-screen w-screen bg-black-rbga top-0 left-0 flex justify-center items-center z-40 select-none">
      <div className="max-w-[90%] md:max-w-[60%] bg-slate-100 px-5 pb-5 rounded-md flex flex-col">
        <div className="flex flex-row justify-between items-center leading-9 ">
          <h1 className="uppercase text-2xl">Rules</h1>
          <img
            src={images.iconClose}
            alt="exit"
            onClick={(e) => onExit(e)}
            className="cursor-pointer max-h-6 my-5"
          ></img>
        </div>
        <img src={images.rules} alt="rules" className="mt-5"></img>
      </div>
    </div>
  );
};

export default RuleModal;

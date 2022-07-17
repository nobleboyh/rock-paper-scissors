import React from 'react';

const Rules = ({ onClick }) => {
  return (
    <button
      className="fixed bottom-8 right-8 text-center tracking-widest rounded-md px-6 py-2 
    uppercase bg-transparent text-slate-100 border border-slate-100
    hover:bg-slate-100 hover:text-slate-700 select-none"
      onClick={(e) => onClick(e)}
    >
      Rules
    </button>
  );
};

export default Rules;

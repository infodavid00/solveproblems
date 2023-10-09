import React from 'react';
import '../../assets/stylesheet/Problems.css';
import Highlight from 'react-highlight';
import '../../../node_modules/highlight.js/styles/atom-one-dark-reasonable.css';

const Syntax = ({ code, language }) => {
  return (
    <div className='material-problem-body-code'>
      <Highlight className={language}>
        {code}
      </Highlight>
    </div>
  );
};

export default Syntax;

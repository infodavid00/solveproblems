import React from 'react';
import '../../assets/stylesheet/Problems.css';
import Highlight from 'react-highlight';
import '../../../node_modules/highlight.js/styles/atom-one-dark-reasonable.css';

const Syntaxopt = ({ code, language, submitEvent }) => {
  return (
    <div className='material-problem-container-card' onClick={submitEvent}>
      <Highlight className={language}>
        {code}
      </Highlight>
    </div>
  );
};

export default Syntaxopt;

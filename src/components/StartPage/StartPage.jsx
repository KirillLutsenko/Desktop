import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './StartPage.scss';

export const StartPage = () => {
  const [visAVis, setVisAVis] = useState(true);

  const chooseOpponent = () => {
    setVisAVis(!visAVis);
  };

  return (
    <div className="start-page">
      <div className="start-page__labels">
        <label className="start-page__label" htmlFor="vs-player">
          <span className="start-page__text">First Test Task</span>
          <input
            type="radio"
            id="vs-player"
            name="choice-opponent"
            className="start-page__radio"
            checked={visAVis}
            onChange={chooseOpponent}
          />
        </label>

        <label className="start-page__label" htmlFor="vs-ai">
          <span className="start-page__text">Second Test Task</span>
          <input
            type="radio"
            id="vs-ai"
            name="choice-opponent"
            className="start-page__radio"
            onChange={chooseOpponent}
            checked={!visAVis}
          />
        </label>
      </div>

      {visAVis ? (
        <Link
          to="/first-tt-app"
        >
          <button
            type="button"
            className="start-page__btn"
          >
            Open
          </button>
        </Link>
      ) : (
        <Link
          to="/second-tt-app"
        >
          <button
            type="button"
            className="start-page__btn"
          >
            Open
          </button>
        </Link>
      )}
    </div>
  );
};

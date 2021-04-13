import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getInfo } from '../../api';
import './SortMenu.scss';

export const SortMenu = ({ icons, setIcons }) => {
  const [reset, setReset] = useState(false);

  const sortByName = () => {
    const sortedIconsByName = icons.sort((a, b) => (
      a.name > b.name ? 1 : -1
    ));

    setIcons([...sortedIconsByName]);
    setReset(true);
  };

  const sortBySize = () => {
    const sortedIconsBySize = icons.sort((a, b) => (
      a.size - b.size
    ));

    setIcons([...sortedIconsBySize]);
    setReset(true);
  };

  const sortByDate = () => {
    const sortedIconsByDate = icons.sort((a, b) => (
      a.date - b.date
    ));

    setIcons([...sortedIconsByDate]);
    setReset(true);
  };

  const resetSort = () => {
    getInfo()
      .then(res => setIcons(res));

    setReset(false);
  };

  return (
    <div className="desktop__sort-menu sort-menu">
      <div className="desktop__sort-buttons sort-buttons">
        <button
          className="sort-buttons__button button"
          type="button"
          onClick={sortByName}
        >
          Sort by name
        </button>

        <button
          className="sort-buttons__button button"
          type="button"
          onClick={sortBySize}
        >
          Sort by size
        </button>

        <button
          className="sort-buttons__button button"
          type="button"
          onClick={sortByDate}
        >
          Sort by date
        </button>
      </div>

      {reset ? (
        <button
          className="sort-menu__reset-button button"
          type="button"
          onClick={resetSort}
        >
          Reset
        </button>
      ) : (
        <div className="sort-buttons__no-button" />
      )}
    </div>
  );
};

SortMenu.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
  })).isRequired,
  setIcons: PropTypes.func.isRequired,
};

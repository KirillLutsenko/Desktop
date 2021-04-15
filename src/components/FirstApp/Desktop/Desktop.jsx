import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { Icons } from '../Icons/Icons';
import { SortMenu } from '../SortMenu/SortMenu';
import './Desktop.scss';

export const Desktop = ({ icons, setIcons }) => (
  <div className="first-app__desktop desktop">
    <Icons icons={icons} />

    <SortMenu
      icons={icons}
      setIcons={setIcons}
    />
  </div>
);

Desktop.propTypes = {
  icons: PropTypes.arrayOf(shape).isRequired,
  setIcons: PropTypes.func.isRequired,
};

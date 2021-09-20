import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const FilmInfoContext = createContext({});

export function FilmInfoProvider({ children }) {
  const [filmId, setFilmId] = useState('2baf70d1-42bb-4437-b551-e5fed5a87abe');

  const value = {
    filmId,
    setFilmId,
  };

  return (
    <FilmInfoContext.Provider value={value}>
      {children}
    </FilmInfoContext.Provider>
  );
}

FilmInfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

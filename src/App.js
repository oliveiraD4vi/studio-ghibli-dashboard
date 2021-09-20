import { FilmInfoProvider } from './context/FilmInfoContext';

import PrincipalPage from './components/PrincipalPage';

import './styles/global.scss';

function App() {
  return (
    <div className="App">
      <FilmInfoProvider>
          <PrincipalPage />
      </FilmInfoProvider>
    </div>
  );
}

export default App;

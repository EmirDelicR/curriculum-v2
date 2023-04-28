import MainPage from '@pages/Main';

import '@assets/css/app.scss';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  const onModeClick = () => {
    mainRef.current?.classList.toggle('dark');
  };

  return (
    <div className="app" ref={mainRef}>
      <FontAwesomeIcon icon={faUserSecret} />
      <MainPage />

      {/* <LanguageSwitcher />
      <PwaInstallButton /> */}

      <button className="mode" onClick={onModeClick}>
        Mode
      </button>
    </div>
  );
}

export default App;

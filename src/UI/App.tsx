import { useRef } from 'react';

import MainPage from '@pages/main/Main';
import ToggleMode from '@components/toggleMode/ToggleMode';

import './App.scss';

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  const onToggleModeClick = () => {
    mainRef.current?.classList.toggle('dark');
  };

  return (
    <div className="app" ref={mainRef}>
      <MainPage />

      {/* <LanguageSwitcher />
      <PwaInstallButton /> */}

      <ToggleMode onClick={onToggleModeClick} />
    </div>
  );
}

export default App;

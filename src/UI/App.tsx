import { useRef } from 'react';

import MainPage from '@pages/main/Main';
import ToggleMode from '@components/toggleMode/ToggleMode';
import LanguageSwitcher from '@components/languageSwitcher/LanguageSwitcher';

import './App.scss';

export default function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  const onToggleModeClick = () => {
    mainRef.current?.classList.toggle('dark');
  };

  return (
    <div className="app" ref={mainRef}>
      <MainPage />

      <LanguageSwitcher />
      {/* <PwaInstallButton /> */}

      <ToggleMode onClick={onToggleModeClick} />
    </div>
  );
}

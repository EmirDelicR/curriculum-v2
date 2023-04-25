import MainPage from '@pages/Main';

import '@assets/css/app.scss';
import { useRef } from 'react';

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  const onModeClick = () => {
    mainRef.current?.classList.toggle('dark');
  };

  return (
    <div className="app" ref={mainRef}>
      <MainPage />

      {/* <LanguageSwitcher />
      <PwaInstallButton /> */}

      <button onClick={onModeClick}>Mode</button>
    </div>
  );
}

export default App;

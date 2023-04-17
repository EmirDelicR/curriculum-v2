import LanguageSwitcher from '@components/languageSwitcher/LanguageSwitcher';
import Navigation from '@elements/navigation/Navigation';
import MainPage from '@pages/Main';

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <MainPage />
      <button className="menu-button">
        <span>Menu</span>
      </button> */}
      {/* <Main />
      <MenuButton />
      <LanguageSwitcher />
      <PwaInstallButton /> */}

      <LanguageSwitcher />
    </div>
  );
}

export default App;

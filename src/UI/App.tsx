import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@components/languageSwitcher/LanguageSwitcher';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <p>{t('navBar.skill')}</p>

      <LanguageSwitcher />
    </div>
  );
}

export default App;

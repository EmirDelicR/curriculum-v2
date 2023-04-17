import { useTranslation } from 'react-i18next';

export default function MainPage() {
  const { t } = useTranslation();

  return (
    <div className="pages-stack">
      <div className="page" id="home">
        <span className="page-name">{t('nav-bar.home')}</span>
        {/* <Home v-if="isCurrentPage('home')" /> */}
        Home
      </div>
      <div className="page" id="timeline">
        <span className="page-name">{t('nav-bar.timeline')}</span>
        {/* <Timeline v-if="isCurrentPage('timeline')" /> */}
        Timeline
      </div>
      <div className="page" id="skill">
        <span className="page-name">{t('nav-bar.skill')}</span>
        {/* <Skills v-if="isCurrentPage('skill')" /> */}
        Skills
      </div>
      <div className="page" id="certificate">
        <span className="page-name">{t('nav-bar.certificate')}</span>
        {/* <Certificates v-if="isCurrentPage('certificate')" /> */}
        Certificates
      </div>
      <div className="page" id="portfolio">
        <span className="page-name">{t('nav-bar.portfolio')}</span>
        {/* <Portfolio v-if="isCurrentPage('portfolio')" /> */}
        Portfolio
      </div>
      <div className="page" id="tips">
        <span className="page-name">{t('nav-bar.tips')}</span>
        {/* <Tips v-if="isCurrentPage('tips')" /> */}
        Tips
      </div>
      <div className="page" id="contact">
        <span className="page-name">{t('nav-bar.contact')}</span>
        {/* <Contact v-if="isCurrentPage('contact')" /> */}
        Contact
      </div>
    </div>
  );
}

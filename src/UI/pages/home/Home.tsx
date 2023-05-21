import { Trans, useTranslation } from 'react-i18next';

import TextTyping from '@/UI/components/textTyping/TextTyping';
import WaterMark from '@/UI/components/waterMark/WaterMark';
import DownloadButton from '@/UI/components/downloadButton/DownloadButton';

import './Home.scss';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-wrapper">
      <div className="description">
        <p>{t('my-description.introduce')}</p>
        <TextTyping />
        <WaterMark text="hello" />
        <p className="text">
          <Trans
            i18nKey="my-description.source"
            components={{
              CodeLink: (
                <a
                  className="highlight"
                  href="https://github.com/EmirDelicR/curriculum"
                  target="_blank"
                  rel="noreferrer"
                />
              )
            }}
          />
        </p>
        <p className="text">
          <Trans
            i18nKey="my-description.mail"
            components={{
              MailLink: (
                <a
                  className="highlight"
                  href="mailto:emirdelictbf@gmail.com?subject=Web-site mail"
                />
              )
            }}
          />
        </p>
        <DownloadButton />
      </div>
      <div className="main-img-wrapper"></div>
    </div>
  );
}

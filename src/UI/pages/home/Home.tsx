import { Trans, useTranslation } from 'react-i18next';

import TextTyping from '@/UI/components/textTyping/TextTyping';
import WaterMark from '@/UI/components/waterMark/WaterMark';
import Download from '@/UI/components/buttons/download/Download';
import Hologram from '@/UI/components/hologram/Hologram';

import './Home.scss';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-page">
      <div className="description">
        <WaterMark text="hello" />
        <p className="text">{t('my-description.introduce')}</p>
        <TextTyping />
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
        <Download />
      </div>
      <Hologram />
    </div>
  );
}

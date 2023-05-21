import { Trans, useTranslation } from 'react-i18next';

import TextTyping from '@/UI/components/textTyping/TextTyping';
import WaterMark from '@/UI/components/waterMark/WaterMark';
import DownloadButton from '@/UI/components/downloadButton/DownloadButton';

import './Home.scss';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="home-wrapper">
      <div>
        <WaterMark text="hello" />
        <div className="my-description">
          <p>{t('my-description.introduce')}</p>
          <p>
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
          <p>
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
        </div>
        {/* <TextTyping /> */}
        <br />
        <DownloadButton />
      </div>
      <div>
        <img
          src={`${window.location.origin}/images/assets/me.png`}
          loading="lazy"
          alt="image of me"
          width="400"
          height="400"
        />
      </div>
    </div>
  );
}

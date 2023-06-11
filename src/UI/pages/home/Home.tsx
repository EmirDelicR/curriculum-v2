import { Trans, useTranslation } from 'react-i18next';

import TextTyping from '@/UI/components/textTyping/TextTyping';
import WaterMark from '@/UI/components/waterMark/WaterMark';
import Download from '@/UI/components/buttons/download/Download';
import Hologram from '@/UI/components/hologram/Hologram';
import GeneralLink from '@/UI/components/links/generalLink/GeneralLink';
import AnimatedText from '@/UI/components/animatedText/AnimatedText';

import './Home.scss';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-page">
      <div className="description">
        <WaterMark text="hello" />
        <AnimatedText>{t('my-description.introduce')}</AnimatedText>
        <TextTyping />
        <AnimatedText>
          <Trans
            i18nKey="my-description.source"
            components={{
              CodeLink: (
                <GeneralLink navigateTo="https://github.com/EmirDelicR/curriculum" />
              )
            }}
          />
        </AnimatedText>
        <AnimatedText>
          <Trans
            i18nKey="my-description.mail"
            components={{
              MailLink: (
                <GeneralLink navigateTo="mailto:emirdelictbf@gmail.com?subject=Web-site mail" />
              )
            }}
          />
        </AnimatedText>
        <Download />
      </div>
      <Hologram />
    </div>
  );
}

import { useTranslation } from 'react-i18next';

import './WaterMark.scss';

export default function WaterMark({ text }: { text: string }) {
  const { t } = useTranslation();

  return (
    <div className="water-mark">
      <span className="water-mark-text">{t(`waterMark.${text}`)}</span>
    </div>
  );
}

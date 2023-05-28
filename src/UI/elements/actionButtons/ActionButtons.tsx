import LanguageSwitcher from '@/UI/components/buttons/languageSwitcher/LanguageSwitcher';
import PwaInstall from '@/UI/components/buttons/pwaInstall/PwaInstall';
import ToggleMode from '@/UI/components/buttons/toggleMode/ToggleMode';

import './ActionButtons.scss';

interface Props {
  toggleAction: () => void;
}

export default function ActionButtons({ toggleAction }: Props) {
  return (
    <div className="action-buttons-wrapper">
      <LanguageSwitcher />
      <PwaInstall />
      <ToggleMode onClick={toggleAction} />
    </div>
  );
}

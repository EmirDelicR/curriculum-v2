import LanguageSwitcher from '@/UI/components/buttons/languageSwitcher/LanguageSwitcher';
import PwaInstallButton from '@/UI/components/buttons/pwaInstallButton/PwaInstallButton';
import ToggleMode from '@/UI/components/buttons/toggleMode/ToggleMode';

import './ActionButtons.scss';

interface Props {
  toggleAction: () => void;
}

export default function ActionButtons({ toggleAction }: Props) {
  return (
    <div className="action-buttons-wrapper">
      <LanguageSwitcher />
      <PwaInstallButton />
      <ToggleMode onClick={toggleAction} />
    </div>
  );
}

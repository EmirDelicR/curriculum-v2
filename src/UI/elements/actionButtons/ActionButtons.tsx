import LanguageSwitcher from '@/UI/components/languageSwitcher/LanguageSwitcher';
import PwaInstallButton from '@/UI/components/pwaInstallButton/PwaInstallButton';
import ToggleMode from '@/UI/components/toggleMode/ToggleMode';

import './ActionButtons.scss';

export default function ActionButtons({
  toggleAction
}: {
  toggleAction: () => void;
}) {
  return (
    <div className="action-buttons-wrapper">
      <LanguageSwitcher />
      <PwaInstallButton />
      <ToggleMode onClick={toggleAction} />
    </div>
  );
}

import { useEffect, useState } from 'react';
import { useAddToHomeScreenPrompt } from './useAddToHomeScreenPrompt';

import './PwaInstallButton.scss';

export default function PwaInstallButton() {
  const [prompt, promptToInstall] = useAddToHomeScreenPrompt();
  const [isVisible, setVisibleState] = useState(false);

  const hide = () => setVisibleState(false);

  useEffect(() => {
    if (prompt) {
      setVisibleState(true);
    }
  }, [prompt]);

  if (!isVisible) {
    return <div />;
  }

  return (
    <div className="pwa-install" onClick={hide}>
      <button onClick={hide}>Close</button>
      Hello! Wanna add to home screen?
      <button onClick={promptToInstall}>Add to home screen</button>
    </div>
  );
}

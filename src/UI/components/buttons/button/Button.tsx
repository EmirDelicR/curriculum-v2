import { MouseEventHandler, PropsWithChildren } from 'react';

import './Button.scss';

interface Props extends PropsWithChildren {
  onClickHandler?: MouseEventHandler;
  type?: 'submit' | 'button';
  isDisabled?: boolean;
  isDownloadButton?: boolean;
}

export default function Button({
  children,
  onClickHandler,
  isDisabled = false,
  type = 'button',
  isDownloadButton = false
}: Props) {
  if (isDownloadButton) {
    return (
      <a
        className="button"
        href={`${window.location.origin}/doc/CV.pdf`}
        target="_blank"
        rel="noreferrer"
        download
      >
        Download CV
      </a>
    );
  }

  return (
    <button
      type={type}
      className="button"
      onClick={onClickHandler}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

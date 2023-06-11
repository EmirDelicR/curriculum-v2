import { PropsWithChildren } from 'react';
import './GeneralLink.scss';

interface Props extends PropsWithChildren {
  navigateTo: string;
}

export default function GeneralLink({ navigateTo, children }: Props) {
  return (
    <a
      className="general-link"
      href={navigateTo}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

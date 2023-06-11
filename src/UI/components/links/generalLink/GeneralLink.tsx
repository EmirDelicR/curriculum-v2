import { PropsWithChildren } from 'react';

import { classNameHelper } from '@/utils/generalHelpers';

import './GeneralLink.scss';

interface Props extends PropsWithChildren {
  navigateTo: string;
  linkClass?: string;
}

export default function GeneralLink({
  navigateTo,
  linkClass = '',
  children
}: Props) {
  const itemClass = classNameHelper('general-link', linkClass);

  return (
    <a className={itemClass} href={navigateTo} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

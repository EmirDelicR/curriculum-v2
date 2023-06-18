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
  return (
    <a
      className={classNameHelper(
        'general-link',
        linkClass,
        navigateTo === '#' ? 'invalid' : ''
      )}
      href={navigateTo}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

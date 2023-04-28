import { useTranslation } from 'react-i18next';
import { ForwardedRef, MouseEvent, forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { PAGES, SOCIAL_PAGES } from '@utils/constants';

import './Navigation.scss';

interface NavigationProps {
  onClickHandler: (id: string | null) => void;
}

interface NavLinkProps extends NavigationProps {
  page: string;
}

function NavLink({ page, onClickHandler }: NavLinkProps) {
  const { t } = useTranslation();

  const onClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onClickHandler(page);
  };

  return (
    <div className="nav__item" onClick={onClick}>
      <a className="link link--page" href={page}>
        {t(`navBar.${page}`)}
      </a>
    </div>
  );
}

interface SocialLinkProps {
  item: {
    name: string;
    icon: IconProp;
    link: string;
    download?: string;
  };
}

function SocialLink({ item: { name, icon, link } }: SocialLinkProps) {
  return (
    <a
      className="link link--social link--faded"
      href={link}
      target="_blank"
      rel="noreferrer"
      download="item.download"
    >
      <FontAwesomeIcon icon={icon} />
      <i title={name.toUpperCase()} className={`${icon}`}></i>
    </a>
  );
}

const Navigation = forwardRef(function Navigation(
  { onClickHandler }: NavigationProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <nav className="nav" ref={ref}>
      {PAGES.map((name) => (
        <NavLink page={name} key={name} onClickHandler={onClickHandler} />
      ))}
      <div className="nav__item nav__item--social">
        {SOCIAL_PAGES.map((item) => (
          <SocialLink item={item} key={item.name} />
        ))}
      </div>
    </nav>
  );
});

export default Navigation;

import { useTranslation } from 'react-i18next';
import { ForwardedRef, forwardRef } from 'react';

import { NORMAL_PAGES, SMALL_PAGES, SOCIAL_PAGES } from '@utils/constants';

import './Navigation.scss';

interface NavigationProps {
  onClickHandler: (id: string | null, pages: Element[]) => void;
}

interface NavLinkProps extends NavigationProps {
  item: {
    linkClass: string;
    name: string;
  };
}

function NavLink({ item: { name, linkClass } }: NavLinkProps) {
  const { t } = useTranslation();
  return (
    <div className="nav__item">
      <a className={linkClass} href={name}>
        {t(`navBar.${name}`)}
      </a>
    </div>
  );
}

interface SocialLinkProps {
  item: {
    linkClass: string;
    name: string;
    icon: string;
    link: string;
    social: boolean;
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
      {NORMAL_PAGES.map((item) => (
        <NavLink item={item} key={item.name} onClickHandler={onClickHandler} />
      ))}
      {SMALL_PAGES.map((item) => (
        <NavLink item={item} key={item.name} onClickHandler={onClickHandler} />
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

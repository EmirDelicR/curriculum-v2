import { NORMAL_PAGES, SMALL_PAGES, SOCIAL_PAGES } from '@utils/constants';

import './Navigation.scss';
import { useTranslation } from 'react-i18next';
import { forwardRef } from 'react';

interface NavLinkProps {
  item: {
    divClass: string;
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

interface SocialLinkProps extends NavLinkProps {
  item: {
    divClass: string;
    linkClass: string;
    name: string;
    icon: string;
    link: string;
    social: boolean;
    download?: string;
  };
}

function SocialLink({ item: { name, icon } }: SocialLinkProps) {
  return (
    <a
      className="link link--social link--faded"
      href="item.link"
      target="_blank"
      rel="noreferrer"
      download="item.download"
    >
      <i title={name.toUpperCase()} className={`${icon}`}></i>
    </a>
  );
}

const Navigation = forwardRef(function Navigation(_props, ref: any) {
  return (
    <nav className="nav" ref={ref}>
      {NORMAL_PAGES.map((item) => (
        <NavLink item={item} key={item.name} />
      ))}
      {SMALL_PAGES.map((item) => (
        <NavLink item={item} key={item.name} />
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

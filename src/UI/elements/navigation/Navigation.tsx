import { NORMAL_PAGES, SMALL_PAGES, SOCIAL_PAGES } from '@utils/constants';

import classes from './Navigation.module.scss';
import { useTranslation } from 'react-i18next';
import { forwardRef } from 'react';

interface NavLinkProps {
  item: {
    divClass: string;
    linkClass: string;
    name: string;
  };
}

// TODO pass here
/**
 * 
 * @param param0 const SMALL_PAGES = [
  {
    name: 'contact',
    divClass: `${DIV_CLASS} ${DIV_CLASS}--small`,
    linkClass: `${LINK_PAGE_CLASS} link--faded`
  }
];
 * @returns 
 */

function NavLink({ item: { name } }: NavLinkProps) {
  const { t } = useTranslation();
  return (
    <div className={classes['nav__item']}>
      <a className={`${classes.link} ${classes['link--page']}`} href={name}>
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
      className={`${classes.link} ${classes['link--social']} ${classes['link--faded']}`}
      href="item.link"
      target="_blank"
      rel="noreferrer"
      download="item.download"
    >
      <i title={name.toUpperCase()} className={classes[icon]}></i>
    </a>
  );
}

const Navigation = forwardRef(function Navigation(_props, ref: any) {
  return (
    <nav className={classes.nav} ref={ref}>
      {NORMAL_PAGES.map((item) => (
        <NavLink item={item} key={item.name} />
      ))}
      {SMALL_PAGES.map((item) => (
        <NavLink item={item} key={item.name} />
      ))}
      <div
        className={`${classes['nav__item']} ${classes['nav__item--social']}`}
      >
        {SOCIAL_PAGES.map((item) => (
          <SocialLink item={item} key={item.name} />
        ))}
      </div>
    </nav>
  );
});

export default Navigation;

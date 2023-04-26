import { MouseEvent, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  buildPageStack,
  endTransitionHandler,
  getStackPages
} from '@/utils/menuHelpers';
import Navigation from '@elements/navigation/Navigation';
import Menu from '@/UI/components/menuButton/MenuButton';

export default function MainPage() {
  const { t } = useTranslation();
  const stackRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  // TODO @ed refactor this
  const [allPages, setAllPages] = useState<HTMLElement[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');

  function isCurrentPage(pageName: string) {
    return currentPage === pageName;
  }

  const toggleClasses = () => {
    menuRef.current!.classList.toggle('menu-button--open');
    navRef.current!.classList.toggle('nav--open');
  };

  const openPage = (id: string | null = null) => {
    const pageToOpen = id
      ? document.getElementById(id)
      : allPages[currentPageIndex];
    const newPage = allPages.indexOf(pageToOpen!);
    const stackPages = getStackPages(currentPageIndex, numberOfPages, newPage);

    pageToOpen!.style.transform = 'translate3d(0, 0, 0)';
    pageToOpen!.style.opacity = '1';

    stackPages.forEach((pageIndex) => {
      const page = allPages[pageIndex];
      page.style.transform = 'translate3d(0,100%,0)';
    });

    if (id) {
      setCurrentPageIndex(newPage);
      setCurrentPage(id);
    }

    toggleClasses();

    endTransitionHandler(pageToOpen!, () => {
      stackRef.current!.classList.remove('pages-stack--open');
      buildPageStack(newPage, numberOfPages, allPages);
      setIsMenuOpen(false);
    });
  };

  function openMenu() {
    setIsMenuOpen(true);
    toggleClasses();
    stackRef.current!.classList.add('pages-stack--open');
    const stackPages = getStackPages(currentPageIndex, numberOfPages);
    stackPages.forEach((pageIndex, index) => {
      const page = allPages[pageIndex];
      const translationValue = parseInt(String(-1 * 200 - 50 * index));
      page.style.transform = `translate3d(0, 75%, ${translationValue}px)`;
    });
  }

  useEffect(() => {
    const listOfPages = stackRef.current?.children
      ? [...stackRef.current.children]
      : [];
    setAllPages(listOfPages as HTMLElement[]);
    setNumberOfPages(listOfPages.length);
  }, []);

  useEffect(() => {
    if (allPages.length) {
      buildPageStack(currentPageIndex, numberOfPages, allPages);
    }
  }, [allPages]);

  const onPageClickHandler = (
    event: MouseEvent<HTMLElement>,
    pageId: string
  ) => {
    event.preventDefault();
    openPage(pageId);
  };

  // TODO @ed move this to button menu
  function toggleMenu() {
    isMenuOpen ? openPage() : openMenu();
  }

  return (
    <>
      <Navigation ref={navRef} onClickHandler={openPage} />
      <Menu ref={menuRef} onClickHandler={toggleMenu} />
      <div className="pages-stack" ref={stackRef}>
        <div
          className="page"
          onClick={(event) => onPageClickHandler(event, 'home')}
          id="home"
        >
          <span className="page-name">{t('navBar.home')}</span>
          {isCurrentPage('home') && 'Home'}
        </div>
        <div
          className="page"
          onClick={(event) => onPageClickHandler(event, 'timeline')}
          id="timeline"
        >
          <span className="page-name">{t('navBar.timeline')}</span>
          {isCurrentPage('timeline') && 'timeline'}
        </div>
        <div
          className="page"
          onClick={(event) => onPageClickHandler(event, 'skill')}
          id="skill"
        >
          <span className="page-name">{t('navBar.skill')}</span>
          {isCurrentPage('skill') && 'skill'}
        </div>
        <div
          className="page"
          onClick={(event) => onPageClickHandler(event, 'certificate')}
          id="certificate"
        >
          <span className="page-name">{t('navBar.certificate')}</span>
          {isCurrentPage('certificate') && 'certificate'}
        </div>
        <div
          className="page"
          onClick={(event) => onPageClickHandler(event, 'portfolio')}
          id="portfolio"
        >
          <span className="page-name">{t('navBar.portfolio')}</span>
          {isCurrentPage('portfolio') && 'portfolio'}
        </div>
        <div
          className="page"
          onClick={(event) => onPageClickHandler(event, 'tips')}
          id="tips"
        >
          <span className="page-name">{t('navBar.tips')}</span>
          {isCurrentPage('tips') && 'tips'}
        </div>
        <div
          className="page"
          onClick={(event) => onPageClickHandler(event, 'contact')}
          id="contact"
        >
          <span className="page-name">{t('navBar.contact')}</span>
          {isCurrentPage('contact') && 'contact'}
        </div>
      </div>
    </>
  );
}

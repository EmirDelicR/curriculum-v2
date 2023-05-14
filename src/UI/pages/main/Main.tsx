import { MouseEvent, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  buildPageStack,
  endTransitionHandler,
  getStackOfPages,
  toggleClasses,
  updatePageStack
} from '@/utils/menuHelpers';
import { updateOpeningPage } from '@/utils/generalHelpers';
import Navigation from '@elements/navigation/Navigation';
import Menu from '@/UI/components/menuButton/MenuButton';

import './Main.scss';

export default function MainPage() {
  const { t } = useTranslation();
  const stackRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [allPages, setAllPages] = useState<HTMLElement[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');

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

  const isCurrentPage = (pageName: string) => {
    return currentPage === pageName;
  };

  const openPage = (name: string | null = null) => {
    const pageToOpen = name
      ? allPages.find((page) => page.id === name)
      : allPages[currentPageIndex];
    const newPageIndex = allPages.indexOf(pageToOpen!);
    const stackPages = getStackOfPages(
      currentPageIndex,
      numberOfPages,
      newPageIndex
    );

    updateOpeningPage(pageToOpen!, stackPages, allPages);

    if (name) {
      setCurrentPageIndex(newPageIndex);
      setCurrentPage(name);
    }

    toggleClasses(menuRef, navRef);
    endTransitionHandler(pageToOpen!, () => {
      stackRef.current!.classList.remove('pages-stack--open');
      buildPageStack(newPageIndex, numberOfPages, allPages);
      setIsMenuOpen(false);
    });
  };

  const openMenu = () => {
    setIsMenuOpen(true);
    toggleClasses(menuRef, navRef);
    stackRef.current!.classList.add('pages-stack--open');
    updatePageStack(currentPageIndex, numberOfPages, allPages);
  };

  const onPageClickHandler = (
    event: MouseEvent<HTMLElement>,
    pageId: string
  ) => {
    if (isCurrentPage(pageId)) {
      return;
    }
    event.preventDefault();
    openPage(pageId);
  };

  const toggleMenu = () => {
    isMenuOpen ? openPage() : openMenu();
  };

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

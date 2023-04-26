import {
  buildPageStack,
  endTransitionHandler,
  getStackPages
} from '@/utils/menuHelpers';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from '@elements/navigation/Navigation';
import Menu from '@/UI/components/menuButton/MenuButton';

export default function MainPage() {
  const { t } = useTranslation();
  const stackRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  // TODO @ed refactor this
  const [listOfpages, setListOfpages] = useState<Element[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');

  function isCurrentPage(page: any) {
    return currentPage === page;
  }

  function addRemoveClass(add: boolean) {
    if (add) {
      menuRef.current!.classList.add('menu-button--open');
      navRef.current!.classList.add('nav--open');
    } else {
      menuRef.current!.classList.remove('menu-button--open');
      navRef.current!.classList.remove('nav--open');
    }
  }

  const openPage = (id: string | null = null) => {
    const pageToOpen = id ? document.getElementById(id) : listOfpages[current];
    const newPage = listOfpages.indexOf(pageToOpen!);
    const stackPages = getStackPages(current, numberOfPages, newPage);

    (pageToOpen! as HTMLElement).style.transform = 'translate3d(0, 0, 0)';
    (pageToOpen! as HTMLElement).style.opacity = '1';

    stackPages.forEach((pageIndex) => {
      const page = listOfpages[pageIndex];
      (page as HTMLElement).style.transform = 'translate3d(0,100%,0)';
    });

    if (id) {
      setCurrent(newPage);
      setCurrentPage(id);
    }

    addRemoveClass(false);

    endTransitionHandler(pageToOpen as HTMLElement, () => {
      stackRef.current!.classList.remove('pages-stack--open');
      buildPageStack(newPage, numberOfPages, listOfpages as HTMLElement[]);
      setIsMenuOpen(false);
    });
  };

  function openMenu() {
    setIsMenuOpen(true);
    addRemoveClass(true);
    stackRef.current!.classList.add('pages-stack--open');
    const stackPages = getStackPages(current, numberOfPages);
    stackPages.forEach((pageIndex, index) => {
      const page = listOfpages[pageIndex];
      const translationValue = parseInt(String(-1 * 200 - 50 * index));
      (
        page as HTMLElement
      ).style.transform = `translate3d(0, 75%, ${translationValue}px)`;
    });
  }

  useEffect(() => {
    const listOfPages = stackRef.current?.children
      ? [...stackRef.current.children]
      : [];
    setListOfpages(listOfPages);
    setNumberOfPages(listOfPages.length);
  }, []);

  useEffect(() => {
    if (listOfpages.length) {
      buildPageStack(current, numberOfPages, listOfpages as HTMLElement[]);
    }
  }, [listOfpages]);

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

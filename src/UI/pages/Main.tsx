import {
  buildPageStack,
  endTransitionHandler,
  getStackPages
} from '@/utils/menuHelpers';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from '@elements/navigation/Navigation';
import Menu from '@/UI/components/menuButton/MenuButton';

export default function MainPage() {
  const { t } = useTranslation();
  const stackRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  // TODO @ed refactor this
  const [pages, setPages] = useState<Element[]>([]);
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

  function openPage(id: string | null = null) {
    const pageToOpen = id ? document.getElementById(id) : pages[current];
    console.log('pageToOpen: ', pageToOpen);
    const newPage = pages.indexOf(pageToOpen!);
    const stackPages = getStackPages(current, numberOfPages, newPage);

    (pageToOpen! as HTMLElement).style.transform = 'translate3d(0, 0, 0)';
    (pageToOpen! as HTMLElement).style.opacity = '1';

    stackPages.forEach((pageIndex) => {
      const page = pages[pageIndex];
      (page as HTMLElement).style.transform = 'translate3d(0,100%,0)';
    });

    if (id) {
      setCurrent(newPage);
      setCurrentPage(id);
    }

    addRemoveClass(false);

    endTransitionHandler(pageToOpen as HTMLElement, () => {
      stackRef.current!.classList.remove('pages-stack--open');
      buildPageStack(current, numberOfPages, pages as HTMLElement[]);
      setIsMenuOpen(false);
    });
  }

  function openMenu() {
    setIsMenuOpen(true);
    addRemoveClass(true);
    stackRef.current!.classList.add('pages-stack--open');
    const stackPages = getStackPages(current, numberOfPages);
    stackPages.forEach((pageIndex, index) => {
      const page = pages[pageIndex];
      const translationValue = parseInt(String(-1 * 200 - 50 * index));
      (
        page as HTMLElement
      ).style.transform = `translate3d(0, 75%, ${translationValue}px)`;
    });
  }

  function toggleMenu() {
    isMenuOpen ? openPage() : openMenu();
  }

  function initEvents() {
    const navItems = [...navRef.current!.querySelectorAll('.link--page')];

    // TODO @ed move this to navigation
    navItems.forEach((item) => {
      const pageid = item.getAttribute('href');
      item.addEventListener('click', (ev) => {
        ev.preventDefault();
        openPage(pageid);
      });
    });
    // TODo @ed move this to pages
    pages.forEach((page) => {
      const pageid = page.getAttribute('id');
      page.addEventListener('click', (ev) => {
        if (isMenuOpen) {
          ev.preventDefault();
          openPage(pageid);
        }
      });
    });
  }

  useEffect(() => {
    const listOfPages = stackRef.current?.children
      ? [...stackRef.current.children]
      : [];
    setPages(listOfPages);
    setNumberOfPages(listOfPages.length);
  }, []);

  useEffect(() => {
    buildPageStack(current, numberOfPages, pages as HTMLElement[]);
    initEvents();
  }, [pages]);

  return (
    <>
      <Navigation ref={navRef} />
      <Menu ref={menuRef} onClickHandler={toggleMenu} />
      <div className="pages-stack" ref={stackRef}>
        <div className="page" id="home">
          <span className="page-name">{t('navBar.home')}</span>
          {/* <Home v-if="isCurrentPage('home')" /> */}
          {isCurrentPage('home') && 'Home'}
        </div>
        <div className="page" id="timeline">
          <span className="page-name">{t('navBar.timeline')}</span>
          {/* <Timeline v-if="isCurrentPage('timeline')" /> */}
          {isCurrentPage('timeline') && 'timeline'}
        </div>
        <div className="page" id="skill">
          <span className="page-name">{t('navBar.skill')}</span>
          {/* <Skills v-if="isCurrentPage('skill')" /> */}
          {isCurrentPage('skill') && 'timeskillline'}
        </div>
        <div className="page" id="certificate">
          <span className="page-name">{t('navBar.certificate')}</span>
          {/* <Certificates v-if="isCurrentPage('certificate')" /> */}
          {isCurrentPage('certificate') && 'certificate'}
        </div>
        <div className="page" id="portfolio">
          <span className="page-name">{t('navBar.portfolio')}</span>
          {/* <Portfolio v-if="isCurrentPage('portfolio')" /> */}
          {isCurrentPage('portfolio') && 'portfolio'}
        </div>
        <div className="page" id="tips">
          <span className="page-name">{t('navBar.tips')}</span>
          {/* <Tips v-if="isCurrentPage('tips')" /> */}
          {isCurrentPage('tips') && 'tips'}
        </div>
        <div className="page" id="contact">
          <span className="page-name">{t('navBar.contact')}</span>
          {/* <Contact v-if="isCurrentPage('contact')" /> */}
          {isCurrentPage('contact') && 'contact'}
        </div>
      </div>
      ;
    </>
  );
}

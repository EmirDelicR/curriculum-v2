// const lazyLoadPage = (view: string) => () => import(`@/views/${view}.vue`);

const updateOpeningPage = (
  pageToOpen: HTMLElement,
  stackOfPages: number[],
  allPages: HTMLElement[]
) => {
  pageToOpen.style.transform = 'translate3d(0, 0, 0)';
  pageToOpen.style.opacity = '1';

  stackOfPages.forEach((pageIndex) => {
    const page = allPages[pageIndex];
    page.style.transform = 'translate3d(0,100%,0)';
  });
};

export {
  //lazyLoadPage,
  updateOpeningPage
};

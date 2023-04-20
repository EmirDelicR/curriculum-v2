const lazyLoadPage = (view: string) => () => import(`@/views/${view}.vue`);

const lazyLoadImage = (name: string) => import(`@/assets/images/${name}`);

const capitalize = (value: string) => {
  if (!value) return '';
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const toggleView = (name: string) => {
  const wrapper = document.getElementsByClassName(name)[0];
  wrapper.classList.toggle('transform-active');
};

export { lazyLoadPage, capitalize, lazyLoadImage, toggleView };

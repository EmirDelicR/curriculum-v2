/**
 * Add - remove transition event from HTML element
 * @param {HTMLElement} el
 * @param {Function} callback
 */
const endTransitionHandler = (el: HTMLElement, callback: () => void) => {
  const onEndCallbackFn = (ev: any) => {
    if (ev.target != el) return;
    el.removeEventListener('transitionend', onEndCallbackFn);

    if (callback && typeof callback === 'function') {
      callback();
    }
  };

  el.addEventListener('transitionend', onEndCallbackFn);
};

/**
 *
 * Gets the current stack pages indexes.
 * If any of them is the exclude then this
 * one is not part of the returned array
 *
 * @param {Number} current  Current page index
 * @param {Number} pages Number of pages
 * @param {Number} exclude Page index to exclude
 */

const getStackPages = (
  current: number,
  pages: number,
  exclude: number | null = null
) => {
  const firstPage = current + 1 < pages ? current + 1 : 0;
  const secondPage = current + 2 < pages ? current + 2 : 1;

  const pageIndexes = [];

  if (exclude != current) {
    pageIndexes.push(current);
  }

  if (exclude != firstPage) {
    pageIndexes.push(firstPage);
  }

  if (exclude != secondPage) {
    pageIndexes.push(secondPage);
  }

  return pageIndexes;
};

/**
 * Build page stack when press nav button
 * @param {Number} current Current page index
 * @param {Number} numberOfPages
 * @param {Array} pages Array of HTML elements
 */
const buildPageStack = (
  current: number,
  numberOfPages: number,
  pages: HTMLElement[]
) => {
  const stackPages = getStackPages(current, numberOfPages);
  /**
   * set z-index, opacity, initial transforms to pages
   * and add class page--inactive to all except the current one
   * */
  for (let i = 0; i < numberOfPages; ++i) {
    const page = pages[i];
    const position = stackPages.indexOf(i);

    if (current !== i) {
      page.classList.add('page--inactive');
      page.style.transform = getTransformValue(position);
    } else {
      page.classList.remove('page--inactive');
    }
    const zIndex = i < current ? current - i : numberOfPages + current - i;
    page.style.zIndex = String(zIndex);

    page.style.opacity = String(getOpacityValue(position));
  }
};

export { endTransitionHandler, getStackPages, buildPageStack };

const getTransformValue = (pos: number) => {
  return pos !== -1 ? 'translate3d(0,100%,0)' : 'translate3d(0,75%,-300px)';
};

const getOpacityValue = (pos: number) => {
  return pos !== -1 ? parseFloat(String(1 - 0.1 * pos)) : 0;
};

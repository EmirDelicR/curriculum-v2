import { ForwardedRef, forwardRef } from 'react';

import './MenuButton.scss';

interface Props {
  onClickHandler: () => void;
}

const MenuButton = forwardRef(function MenuButton(
  { onClickHandler }: Props,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      className="menu-button"
      ref={ref}
      onClick={onClickHandler}
      aria-label="mobile-nav-button"
    >
      <span></span>
    </button>
  );
});

export default MenuButton;

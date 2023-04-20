import { forwardRef } from 'react';

interface Props {
  cb: () => void;
}

const Menu = forwardRef(function Menu({ cb }: Props, ref: any) {
  return (
    <button className="menu-button" ref={ref} onClick={cb}>
      <span>Menu</span>
    </button>
  );
});

export default Menu;

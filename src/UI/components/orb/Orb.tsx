import { createDynamicArray } from '@/utils/generalHelpers';

import './Orb.scss';

export default function Orb() {
  return (
    <div className="orb">
      {createDynamicArray(300).map((item) => (
        <div key={`particle-${item}`} className="particle"></div>
      ))}
    </div>
  );
}

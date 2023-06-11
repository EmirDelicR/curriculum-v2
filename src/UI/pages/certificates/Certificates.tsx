import Accordion from '@/UI/components/accordion/Accordion';

import { CERTIFICATIONS } from './data';

import './Certificates.scss';

export default function Certificates() {
  return (
    <div className="certificate-page">
      <Accordion data={CERTIFICATIONS} />
    </div>
  );
}

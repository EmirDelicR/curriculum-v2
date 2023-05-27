import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faMobileRetro,
  faComments,
  faLocationDot,
  faGlobe,
  faTowerCell,
  faPager,
  faPhoneVolume
} from '@fortawesome/free-solid-svg-icons';

import './Contact.scss';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="connect">
        <div className="icon-wrapper">
          <h1>Contact</h1>
          <FontAwesomeIcon className="icon" icon={faEnvelope} size="xl" />
          <FontAwesomeIcon className="icon" icon={faMobileRetro} size="xl" />
          <FontAwesomeIcon className="icon" icon={faComments} size="xl" />
          <FontAwesomeIcon className="icon" icon={faLocationDot} size="xl" />
          <FontAwesomeIcon className="icon" icon={faGlobe} size="xl" />
          <FontAwesomeIcon className="icon" icon={faTowerCell} size="xl" />
          <FontAwesomeIcon className="icon" icon={faPager} size="xl" />
        </div>
        <div className="connect-data">
          <h3>Get in touch</h3>
          <div>
            <FontAwesomeIcon icon={faPhoneVolume} size="xl" /> #xxx xxx xxxx
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} size="xl" />{' '}
            emirdelictbf@gmail.com
          </div>
          <div>
            <FontAwesomeIcon icon={faLocationDot} size="xl" /> Some address that
            you can find me
          </div>
        </div>
        <div>Social icons </div>
      </div>
      <div className="contact-form">xxx</div>
    </div>
  );
}

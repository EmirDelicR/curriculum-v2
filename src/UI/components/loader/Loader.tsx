import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Loader.scss';

export default function Loader() {
  return <FontAwesomeIcon className="loader" icon={faSpinner} size="10x" />;
}

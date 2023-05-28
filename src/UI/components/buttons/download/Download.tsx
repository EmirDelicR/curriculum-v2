import './Download.scss';

export default function Download() {
  return (
    <a
      className="download-button"
      href={`${window.location.origin}/doc/CV.pdf`}
      target="_blank"
      rel="noreferrer"
      download
    >
      Download CV
    </a>
  );
}

import './DownloadButton.scss';

export default function DownloadButton() {
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

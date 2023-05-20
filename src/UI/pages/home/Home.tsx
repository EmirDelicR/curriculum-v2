import TextTyping from '@/UI/components/textTyping/TextTyping';
import WaterMark from '@/UI/components/waterMark/WaterMark';
import DownloadButton from '@/UI/components/downloadButton/DownloadButton';

import './Home.scss';

export default function Home() {
  return (
    <div className="home-wrapper">
      <div>
        <WaterMark text="hello" />
        <h3>Wrting text</h3>
        {/* <TextTyping /> */}
        <br />
        <DownloadButton />
      </div>
      <div>Image</div>
    </div>
  );
}

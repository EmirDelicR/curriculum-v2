import TextTyping from '@/UI/components/textTyping/TextTyping';
import './Home.scss';

export default function Home() {
  return (
    <div className="home-wrapper">
      <div>
        <div>Hello</div>
        <h3>Wrting text</h3>
        <TextTyping />
        <br />
        <button>Download CV</button>
      </div>
      <div>Image</div>
    </div>
  );
}

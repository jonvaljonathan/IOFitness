import Button from '@material-ui/core/Button';
import { Howl } from 'howler';
import sound1 from '../../public/sounds/hero1.mp3';

export default function SoundButton() {
  const sound = new Howl({
    src: [sound1],
    volume: 1,
    onend() {},
  });

  const handleClick = () => {
    sound.play();
  };

  return <Button onClick={handleClick}> Play Sound </Button>;
}

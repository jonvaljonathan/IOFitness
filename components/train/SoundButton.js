import Button from '@material-ui/core/Button';
import sound1 from '../../public/sounds/hero1.mp3';


export default function SoundButton() {
  
  const sound = new Howl({
    src: [sound1],
    volume: 1,
    onend() {},
  });

  const handleClick = () => {
      console.log('playSound!');
      console.log(sound);
      sound.play();
      return;
  }

  return (
      <Button onClick={handleClick}> Play Sound </Button>
  );
}
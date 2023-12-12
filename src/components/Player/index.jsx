import ReactAudioPlayer from 'react-audio-player';
import music from '../../assets/music.mp3';

const MusicPlayer = () => {
  return (
    <>
      <hr className="mt-5 mb-5" />
      <ReactAudioPlayer
        ref={audioRef}
        className="w-full"
        id="audioPlayer"
        src={music}
        controls
      />
    </>
  );
};

export default MusicPlayer;

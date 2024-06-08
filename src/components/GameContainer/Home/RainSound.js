import { useEffect } from "react";
import { Howl } from "howler";

const RainSound = () => {
  useEffect(() => {
    const sound = new Howl({
      src: ["assets/sons/rain.mp3"],
      loop: true,
      volume: 0, // Volume initial à 0 pour commencer le fondu
    });

    sound.play();
    sound.fade(0, 1, 2000); // Fait un fondu de 0 à 1 en 2 secondes (2000 ms)

    return () => {
      sound.stop();
      sound.unload();
    };
  }, []);

  return null;
};

export default RainSound;

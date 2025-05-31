import { MediaPlayer, type MediaPlayerInstance, MediaProvider, Poster } from '@vidstack/react';
import { useRef } from 'react';

export function App() {
  const ref = useRef<MediaPlayerInstance>(null);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <MediaPlayer
        ref={ref}
        controls={true}
        fullscreenOrientation="portrait"
        load="eager"
        src="/test.mov"
        title="Sprite Fight"
      >
        <MediaProvider>
          <Poster
            alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
            className="absolute inset-0 block h-full w-full rounded-md bg-black opacity-0 transition-opacity data-[visible]:opacity-100 [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
            src="https://files.vidstack.io/sprite-fight/poster.webp"
          />
        </MediaProvider>
      </MediaPlayer>
    </div>
  );
}

import { MediaPlayer, type MediaPlayerInstance, MediaProvider, Poster, useMediaState } from '@vidstack/react';
import clsx from 'clsx';
import { useRef } from 'react';

import { ExpandableHint } from '../ExpandableHint';

export function VideoPuzzle() {
  const ref = useRef<MediaPlayerInstance>(null);
  const ended = useMediaState('ended', ref);

  return (
    <main className="mx-auto mb-48 max-w-md">
      <header className="p-4">
        <h1 className="mb-2 inline-block text-3xl leading-8">
          Dobrodošel na svet,
          <br />
          <span className="font-extrabold">Tine 👋</span>
        </h1>
        <p className="text-sm text-gray-700">
          Komaj čakamo, da te spoznamo! Že zdaj pa ti lahko povemo, da te imamo neizmerno radi. Več pa si, skupaj z
          mamico, atijem in Balujem, poglej v videu 👇
        </p>
      </header>

      <MediaPlayer
        ref={ref}
        aspectRatio="16/9"
        controls={true}
        fullscreenOrientation="portrait"
        load="eager"
        src="https://stream.mux.com/CkqEONqFLWWJbBxTKpTx1WcUhuSj6KbXkrj1v6DkhRk.m3u8"
        title="Dobrodošel na svet, Tine"
      >
        <MediaProvider>
          <Poster
            alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
            className="absolute inset-0 block h-full w-full rounded-md bg-black opacity-0 transition-opacity data-[visible]:opacity-100 [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
            src="/tine_voscilo_poster.jpg"
          />
        </MediaProvider>
      </MediaPlayer>

      <div className="relative">
        {!ended && (
          <div className="absolute top-1/2 left-1/2 z-10 -translate-1/2">
            <p className="text-center text-sm leading-tight font-medium">
              Ta vsebina bo na voljo ko do konca pogledate video 😉
            </p>
          </div>
        )}
        <div className={clsx('space-y-3 p-4', { 'blur-md': !ended })}>
          <p className="text-sm text-gray-700">
            No, kot ste mogoče že ugotovili, video skriva več kot samo dobrodošlico Tinetu. V njem se skriva tudi koda,
            ki odklepa ključavnico na darilu 🕵️‍♂️
          </p>
          <p className="text-sm text-gray-700">
            Pretežko? Nič hudega, se zgodi tudi najboljšim 😜 Da vam delo nekoliko olajšamo, smo vam pripravili 4
            namige:
            <p className="text-xs leading-tight text-gray-500">
              <em>Saj vesta, da sva naredila tako, da bova vedela za vsak porabljen namig, ane?</em>
            </p>
          </p>
          <div className="space-y-2">
            <ExpandableHint label="Namig 1">
              V vsakem prostoru, kjer smo se nahajali, se skriva ena številka. Vsaka številka se ponovi samo enkrat.
            </ExpandableHint>
            <ExpandableHint label="Namig 2">
              Gibajo se vztrajno, a nikoli ne hitijo. Vedno skupaj, a le redko kažejo isto. Tokrat, pa kažejo točno
              tisto.
            </ExpandableHint>
            <ExpandableHint label="Namig 3">
              Zrcalce, zrcalce na steni povej, koga moram prešteti da lahko grem naprej?
            </ExpandableHint>
            <ExpandableHint label="Namig 4">
              Raztresene pred teboj, brez besed pripovedujejo zgodbo. Vsaka je okno v svoj čas. Koliko jih tvori celoto?
            </ExpandableHint>
          </div>
        </div>
      </div>
    </main>
  );
}

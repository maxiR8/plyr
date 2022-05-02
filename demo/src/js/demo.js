// ==========================================================================
// Plyr.io demo
// This code is purely for the https://plyr.io website
// Please see README.md in the root or github.com/sampotts/plyr
// ==========================================================================

import './tab-focus';
import 'custom-event-polyfill';
import 'url-polyfill';

import Plyr from '../../../src/js/plyr';

(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const selector = '#player';

    // Setup the player
    const player = new Plyr(selector, {
      debug: true,
      title: 'View From A Blue Moon',
      iconUrl: 'dist/demo.svg',
      controls: [
        'play',
        'progress',
        // 'current-time',
        'mute',
        // 'volume',
        // 'captions',
        // 'settings',
        'pip',
        // 'airplay',
        'fullscreen',
      ],
      keyboard: {
        global: true,
      },
      tooltips: {
        controls: false,
      },
      previewThumbnails: {
        enabled: true,
        src: ['https://cdn.plyr.io/static/demo/thumbs/100p.vtt', 'https://cdn.plyr.io/static/demo/thumbs/240p.vtt'],
      },
      vimeo: {
        // Prevent Vimeo blocking plyr.io demo site
        referrerPolicy: 'no-referrer',
      },
      mediaMetadata: {
        title: 'View From A Blue Moon',
        album: 'Sports',
        artist: 'Brainfarm',
        artwork: [
          {
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
            type: 'image/jpeg',
          },
        ],
      },
      markers: {
        enabled: true,
        points: [
          {
            time: 10,
            tip: 'first marker',
          },
          {
            time: 40,
            tip: 'second marker',
          },
          {
            time: 120,
            tipHTML: '<strong>third</strong> marker',
          },
        ],
      },
    });

    // Expose for tinkering in the console
    window.player = player;
  });
})();

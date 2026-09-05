
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('I LOVE U IAH').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300);
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);

  const lyrics = [
    "Someday I'll buy a pretty ring to match the gold one on your nose",
    "I hope you keep it 'til we're old",
    "Someday I'll buy a family car, a seven-seater to fit nine",
    "Two in the front, four, three behind",
    "I wanna be the melting candle to your flame",
    "Your closest friend, your fiercest love, one and the same",
    "Some things will never ever change",
    "Someday we'll rent a little room until we find a bigger space",
    "Squeeze up in bed if that's the case",
    "Someday we'll never say goodbye, our phones will both be obsolete",
    "By your side I feel complete",
    "I wanna be your stack of books, your latest game",
    "Your constant rock, your warmest hug, your fav'rite name",
    "Some things will never ever change",
    "I wanna be there when the sunlight hits your face",
    "I wanna be there for you every single day",
    "All that to say",
    "All that to say",
    "I wanna be the melting candle to your flame",
    "Your closest friend, your fiercest love, one and the same",
    "Some things will never ever change",
    "I wanna be there when the sunlight hits your face",
    "I wanna be there for you every single day",
    "All that to say",
    "All that to say",
    "Someday my love will stay the same",
    "Someday you'll dig up your old files just to listen to this song",
    "I'll be right there to sing along"
  ];

  const lyricsText = document.getElementById('lyrics-text');

  if (lyricsText) {
    const firstVerseStartMs = 25000;
    const secondVerseStartMs = 65000;
    const thirdVerseStartMs = 120000;
    const audio = document.getElementById('iah-audio');

    const renderLyrics = () => {
      if (!audio || !Number.isFinite(audio.duration) || audio.duration <= 0) {
        return;
      }

      const currentTime = audio.currentTime;
      const firstVerseStartSec = firstVerseStartMs / 1000;
      const secondVerseStartSec = secondVerseStartMs / 1000;
      const thirdVerseStartSec = thirdVerseStartMs / 1000;

      lyricsText.innerHTML = '';

      if (currentTime >= thirdVerseStartSec) {
        const thirdVerse = lyrics.slice(8, 12);
        thirdVerse.forEach((lineText) => {
          const line = document.createElement('div');
          line.className = 'lyric-line visible';
          line.textContent = lineText;
          lyricsText.appendChild(line);
        });
        return;
      }

      if (currentTime >= secondVerseStartSec) {
        const secondVerse = lyrics.slice(4, 8);
        secondVerse.forEach((lineText) => {
          const line = document.createElement('div');
          line.className = 'lyric-line visible';
          line.textContent = lineText;
          lyricsText.appendChild(line);
        });
        return;
      }

      if (currentTime >= firstVerseStartSec) {
        const firstVerse = lyrics.slice(0, 4);
        firstVerse.forEach((lineText) => {
          const line = document.createElement('div');
          line.className = 'lyric-line visible';
          line.textContent = lineText;
          lyricsText.appendChild(line);
        });
      }
    };

    if (audio) {
      audio.addEventListener('timeupdate', renderLyrics);
      audio.addEventListener('play', renderLyrics);
      audio.addEventListener('loadedmetadata', renderLyrics);
    }

    setTimeout(() => {
      if (audio && audio.readyState >= 1) {
        renderLyrics();
      }
    }, thirdVerseStartMs + 250);
  }

  const audio = document.getElementById('iah-audio');
  const musicToggle = document.getElementById('music-toggle');

  if (audio && musicToggle) {
    audio.volume = 0.7;
    audio.play().catch(() => {
      musicToggle.textContent = 'Play';
    });

    musicToggle.addEventListener('click', async () => {
      if (audio.paused) {
        await audio.play();
        musicToggle.textContent = 'Pause';
      } else {
        audio.pause();
        musicToggle.textContent = 'Play';
      }
    });
  }
};
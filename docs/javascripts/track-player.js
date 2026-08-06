(function () {
  function pauseOthers(except) {
    document.querySelectorAll("audio.track-audio").forEach(function (el) {
      if (el !== except && !el.paused) el.pause();
    });
  }

  document.addEventListener(
    "play",
    function (e) {
      const el = e.target;
      if (!(el instanceof HTMLAudioElement)) return;
      if (!el.classList.contains("track-audio")) return;
      pauseOthers(el);
    },
    true
  );
})();

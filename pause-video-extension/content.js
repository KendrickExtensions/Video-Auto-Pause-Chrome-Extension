// Detect when the browser window loses focus (minimized or switched to another app)
window.onblur = function() {
  pauseVideo();  // Pause the video when the browser window loses focus
};

// Detect when the browser window regains focus
window.onfocus = function() {
  playVideo();  // Resume the video when the browser window regains focus
};

// Detect if the page is hidden or visible using the Page Visibility API
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    pauseVideo();  // Pause the video when the page is hidden (e.g., tab switched)
  } else {
    playVideo();  // Resume the video when the page becomes visible
  }
});

function pauseVideo() {
  const video = document.querySelector('video');
  if (video) video.pause();  // Pause the video
}

function playVideo() {
  const video = document.querySelector('video');
  if (video) video.play();  // Play the video
}

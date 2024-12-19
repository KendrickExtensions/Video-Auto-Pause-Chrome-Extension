let youtubeTabId = null;

// Listen for tab activation (when a tab is switched)
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  
  if (tab.url && tab.url.includes("youtube.com")) {
    youtubeTabId = activeInfo.tabId;
    // Send a message to the content script to start playing the video
    chrome.scripting.executeScript({
      target: { tabId: youtubeTabId },
      func: playVideo
    });
  } else {
    if (youtubeTabId) {
      // Send a message to the content script to pause the video
      chrome.scripting.executeScript({
        target: { tabId: youtubeTabId },
        func: pauseVideo
      });
    }
  }
});

function pauseVideo() {
  const video = document.querySelector('video');
  if (video) video.pause();
}

function playVideo() {
  const video = document.querySelector('video');
  if (video) video.play();
}

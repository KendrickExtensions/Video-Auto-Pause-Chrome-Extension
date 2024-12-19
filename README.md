# Video Auto Pause Chrome Extension

## Description
The **Video Auto Pause** Chrome extension automatically pauses YouTube videos when you switch away from the YouTube tab, minimize the browser, or switch to another application. It resumes the video when you return to the YouTube tab or window.

This extension enhances user experience by making video playback more intuitive and ensuring videos don't play when you're not actively watching them.

## Features
- **Pause Video**: Pauses the YouTube video when switching tabs or applications.
- **Resume Video**: Resumes the video when you switch back to the YouTube tab or window.
- **Tab and Window Focus**: Detects tab and window focus changes to handle pausing and resuming.

## Installation
1. Go to `chrome://extensions/` in your Chrome browser.
2. Enable **Developer mode** and click on **Load unpacked**.
3. Select the folder containing the extension files.
4. The extension is now active and will automatically pause videos when switching away from YouTube.

## How it Works
- **Tab Switching**: Pauses the video when switching to other tabs and resumes when returning to YouTube.
- **Window Switching**: Pauses the video when switching windows and resumes when the browser window with YouTube is focused.
- **Visibility Change**: Pauses the video when the tab is hidden (e.g., when minimized) and resumes when the tab is visible again.

## Folder Structure
You can view the extension files in this repository. Click on the file names to see the code:

- [**manifest.json**](https://github.com/KendrickExtensions/Video-Auto-Pause-Chrome-Extension/blob/main/pause-video-extension/manifest.json)
- [**background.js**](https://github.com/KendrickExtensions/Video-Auto-Pause-Chrome-Extension/blob/main/pause-video-extension/background.js)
- [**content.js**](https://github.com/KendrickExtensions/Video-Auto-Pause-Chrome-Extension/blob/main/pause-video-extension/content.js)

## Tutorial To Install
Check out the extension in action:  
[Watch the Tutorial on YouTube](https://youtu.be/0vQKvVIl36A)



## License
This project is open-source and available under the MIT License.

## Made By
KendrickExtensions

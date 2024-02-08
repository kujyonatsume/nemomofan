import Player from 'yt-player'
const YouTubePlayer = (element, options) => new Player(element, options)
window.YouTubePlayer = YouTubePlayer
export default YouTubePlayer;
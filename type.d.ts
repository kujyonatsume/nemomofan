import YouTubePlayer from "yt-player";
global {
    interface IUserMessage {
        name: string;
        text: string;
    }
    interface PostImage {
        name: string
        src: string
    }

    interface PuzzleOption {
        src: string;
        width?: number
        height?: number
        size?: number
        percent?: number
        border?: number
    }
    interface ClipLinked {
        top: number;
        button: number;
        left: number;
        right: number;
    }
}
import { AiFillPlayCircle } from "react-icons/ai";
import styles from "./video.module.scss";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function Video({ src }: { src: string }) {
	const [play, setPlay] = useState(true);
	const videoRef = useRef<HTMLVideoElement>(null);
	useEffect(() => {
		if (!videoRef) return;

		play ? videoRef?.current?.play() : videoRef?.current?.pause();
	}, [play]);

	return (
		<div className={styles.video} onClick={() => setPlay(!play)}>
			{/* <video >
        <source   />
      </video> */}
			<video src={src} autoPlay loop muted ref={videoRef} />
			{play ? (
				""
			) : (
				<>
					<AiFillPlayCircle size={50} /> <Link href="/">Request a call</Link>
				</>
			)}
		</div>
	);
}

export default Video;

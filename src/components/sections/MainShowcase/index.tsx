import ShowcaseContent from "@/components/ShowcaseContent";
import styles from "./styles.module.scss";
import { MainPropType } from "@/shared/types";
import { useState, useEffect } from "react";

type Position = "relative" | "fixed";

function MainShowcase({
	image,
	p,
	children,
}: { image: string; p: string } & MainPropType) {
	const [navSize, setnavSize] = useState<Position>("relative");
	const listenScrollEvent = () => {
		window.scrollY > 450 ? setnavSize("fixed") : setnavSize("relative");
	};

	const divStyle = {
		background: `url(${image})`,
		backgroundAttachment: "fixed",
		backgroundPosition: "70% center",
		backgroundSize: "cover",
		backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${image}")`,
		position: navSize,
	};
	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);
		return () => {
			window.removeEventListener("scroll", listenScrollEvent);
		};
	}, []);
	return (
		<div className={styles.showcase} style={divStyle}>
			<ShowcaseContent title={children} paragraph={p}></ShowcaseContent>
		</div>
	);
}

export default MainShowcase;

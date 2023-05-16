import ShowcaseContent from "@/components/ShowcaseContent";
import styles from "./styles.module.scss";
import { MainPropType } from "@/shared/types";

function MainShowcase({
	image,
	p,
	children,
}: { image: string; p: string } & MainPropType) {
	return (
		<div
			className={styles.showcase}
			style={{
				// background: `url(${image})`,
				backgroundAttachment: "fixed",
				backgroundPosition: "70% center",
				backgroundSize: "cover",
				backgroundImage: `url(${image}), linear-gradient(to bottom,rgba(0, 0, 0, 0.472),rgba(0, 0, 0, 0.468))`,
			}}
		>
			<ShowcaseContent title={children} paragraph={p}></ShowcaseContent>
		</div>
	);
}

export default MainShowcase;

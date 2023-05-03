import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import image1 from "/public/media/m5.jpg";
import image2 from "/public/media/m1.jpg";
import VanillaTilt from "vanilla-tilt";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import Title from "@/components/Title";
import useIntl from "react-intl/src/components/useIntl";

function AboutSection() {
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref = useRef(null);
	const entity = useIntersectionObserver(ref, {});
	useEffect(() => {
		if (!ref1.current || !ref2.current) {
			return;
		}
		const options = {
			max: 20,
			scale: 1.05,

			speed: 1000,
			glare: true,
		};
		VanillaTilt.init(ref1.current, options);
		VanillaTilt.init(ref2.current, options);
	}, [ref1.current, ref2.current]);
	const intl = useIntl();
	const t = (id: string) => {
		return intl?.formatMessage({ id: id });
	};
	return (
		<div
			className={`${entity?.isIntersecting && styles.active} ${styles.about}`}
			ref={ref}
			id="about"
		>
			<div className={styles.images}>
				<img src={image1.src} alt="" ref={ref1} />
				<img src={image2.src} alt="" ref={ref2} />
			</div>
			<div className={styles.description}>
				<Title style={{ marginBottom: "40px", color: "#666" }}>
					{/* {t("about")} */}
					About Us
				</Title>
				{/* <h3>О нас</h3> */}
				<p>
					<span>Buy a used Cazoo car</span>
					<br />
					{/* {t("aboutDesc")} */}
					Complete your purchase all online without leaving home. Choose home
					delivery or collection at a time that suits you, any day of the week.
				</p>
				<p>
					<span>Finance made simple</span>
					<br />
					{/* {t("aboutDesc")} */}
					Apply for finance and sign your agreement all online. Simply choose
					from monthly payment options to suit you and we’ll give you a decision
					within minutes.
				</p>
				<p>
					<span>Sell your car the CarMarket way</span>
					<br />
					{/* {t("aboutDesc")} */}
					We’ll take your car off your hands in as little as 48 hours and give
					you an instant, online valuation that's guaranteed for 7 days. We'll
					even pick it up from your door if you like.
				</p>
			</div>
		</div>
	);
}

export default AboutSection;

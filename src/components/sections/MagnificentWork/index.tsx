import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { AiOutlineLike } from "react-icons/ai";
import image1 from "../../../../public/media/m4.jpg";
import image2 from "../../../../public/media/c3.webp";
import image3 from "../../../../public/media/t2.jpg";
import VanillaTilt from "vanilla-tilt";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import { TiInputCheckedOutline } from "react-icons/ti";
function MagnificentWork() {
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);
	const ref = useRef(null);
	const entity = useIntersectionObserver(ref, { rootMargin: "-20% 0px" });

	useEffect(() => {
		if (!ref1.current || !ref2.current || !ref3.current) return;
		const options = {
			max: 20,
			scale: 1.05,
			speed: 1000,
			glare: true,
			"max-glare": 0.5,
		};
		VanillaTilt.init(ref1.current, options);
		VanillaTilt.init(ref2.current, options);
		VanillaTilt.init(ref3.current, options);
		// clean up function
		return () => {
			// ref.current.vanillaTilt.destroy();
		};
	}, [ref1, ref2, ref3]);
	return (
		<div
			className={`${entity?.isIntersecting && styles.active} ${styles.work}`}
			ref={ref}
		>
			<div className={styles.text}>
				<h1>Fixed monthly finance payments</h1>
				<p>
					<TiInputCheckedOutline /> Competitive APRs available
				</p>
				<p>
					<TiInputCheckedOutline /> Check your eligibility before you apply
				</p>
				<p>
					<TiInputCheckedOutline />
					Budget-friendly financing and a decision within minutes
				</p>
				<div className={styles.static}>
					<AiOutlineLike />
					<div>
						<h1>2835+</h1>
						<p>Listed cars</p>
					</div>
				</div>
				<div className={styles.static}>
					<AiOutlineLike />
					<div>
						<h1>1320</h1>
						<p>Sold cars</p>
					</div>
				</div>
			</div>
			<div className={styles.images}>
				<img
					className={styles.images__img1}
					src={image1.src}
					alt=""
					ref={ref1}
				/>
				<div>
					<img
						className={styles.images__img2}
						src={image3.src}
						alt=""
						ref={ref2}
					/>
					<img
						className={styles.images__img3}
						src={image2.src}
						alt=""
						ref={ref3}
					/>
				</div>
			</div>
		</div>
	);
}

export default MagnificentWork;

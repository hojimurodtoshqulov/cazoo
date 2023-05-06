import { useEffect, useRef } from "react";
import scss from "./filterSection.module.scss";
import image1 from "/public/media/m5.jpg";
import image2 from "/public/media/m1.jpg";
import VanillaTilt from "vanilla-tilt";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import Title from "@/components/Title";
import useIntl from "react-intl/src/components/useIntl";
import MainFilter from "@/components/MainFilter/mainFilter";
import ProductSection from "../ProductSection";

function FilterSection() {
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
		<div className={`${scss.filterSection}`}>
			<div className={`${scss.filterSectionDiv1}`}>
				<MainFilter />
			</div>
			<div className={`${scss.filterSectionDiv2}`}>
				<ProductSection />
			</div>
		</div>
	);
}

export default FilterSection;

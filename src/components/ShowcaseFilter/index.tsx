import { MainPropType } from "@/shared/types";
import React, { useRef } from "react";
import styles from "./showcaseFilter.module.scss";
import { BiSearch } from "react-icons/bi";
import useIntersectionObserver from "@/utils/InterSectionObserver";

function ShowcaseFilter({
	children,
	title,
	paragraph,
}: MainPropType & { title: React.ReactNode; paragraph: string }) {
	const ref = useRef(null);
	const entity = useIntersectionObserver(ref, {});
	const filter = (e: React.ReactNode) => {
		e.preventDefault()
	};
	return (
		<div className={styles.showcaseFilter} ref={ref}>
			<h2>Buy or finance</h2>
			<form action="" onSubmit={filter}>
				<input type="text" placeholder="maker" />
				<input type="text" placeholder="model" />
				<input type="text" placeholder="price" />
				<button>search</button>
			</form>
		</div>
	);
}

export default ShowcaseFilter;

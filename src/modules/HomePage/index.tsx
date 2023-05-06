import ClientsSection from "@/components/sections/ClientsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ProductSection from "@/components/sections/ProductSection";
import Showcase from "@/components/sections/Showcase";
import React from "react";
import Adds from "@/components/Adds";
import MagnificentWork from "@/components/sections/MagnificentWork";
import FormSection from "@/components/sections/FormSection";
import AboutSection from "@/components/sections/AboutSection";
import styles from "./home.module.scss";
import VideoSection from "@/components/sections/VideoSection";

function HomePage() {
	return (
		<div>
			<section className={styles.video}>
				<Showcase />
				<VideoSection />
				<MagnificentWork />
			</section>
			<section className={styles.last}>
				<Adds />
				<div className={styles.productSection}>
					<ProductSection />
				</div>
				<ClientsSection />
				{/* <NewsSection /> */}
				<AboutSection />
				<FormSection />
				<PartnersSection />
			</section>
		</div>
	);
}

export default HomePage;

import React from "react";
import AboutShowcase from "@/components/sections/MainShowcase";
import Adds from "@/components/Adds";
import hero from "../../../public/media/qwqw.png";
import OurProjects from "@/components/sections/OurProjects";
import useIntl from "react-intl/src/components/useIntl";

function ProjectsPage() {
	const intl = useIntl();
	const t = (id: string) => {
		return intl?.formatMessage({ id: id });
	};
	return (
		<div>
			<AboutShowcase
				image={hero.src}
				p={t("projectPageDesc")}
			>
				{t("projectPageTitle")}
			</AboutShowcase>
			<OurProjects />
			<Adds />
		</div>
	);
}

export default ProjectsPage;

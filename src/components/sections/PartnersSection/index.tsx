import Partners from "@/components/Partners";
import Title from "@/components/Title";
import styles from "./styles.module.scss";
import logo1 from "/public/media/daily_express.webp";
import logo2 from "/public/media/the_times.webp";
import logo3 from "/public/media/daily_mail.webp";
import useIntl from "react-intl/src/components/useIntl";

export type PartnerType = {
	id: string | number;
	link: string;
	image: string;
};
const partners: PartnerType[] = [
	{ id: "1", link: "/", image: logo1.src },
	{ id: "2", link: "/", image: logo2.src },
	{ id: "3", link: "/", image: logo3.src },
	{ id: "4", link: "/", image: logo1.src },
	{ id: "5", link: "/", image: logo2.src },
	{ id: "6", link: "/", image: logo3.src },
];
function PartnersSection() {
	const intl = useIntl();
	const t = (id: string) => {
		return intl?.formatMessage({ id: id });
	};
	return (
		<div className={styles.partners}>
			<Title style={{ padding: "0 7% 20px" }}>
				<i> {t("partners")}</i>
			</Title>
			<Partners partners={partners} />
		</div>
	);
}

export default PartnersSection;

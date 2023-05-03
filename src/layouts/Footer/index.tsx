import { MainPropType } from "@/shared/types";
import styles from "./footer.module.scss";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import Link from "next/link";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import { useRef } from "react";
import useIntl from "react-intl/src/components/useIntl";
import { IoCarSportSharp } from "react-icons/io5";

function Footer({ style }: MainPropType) {
	const ref = useRef(null);
	const entity = useIntersectionObserver(ref, {});
	const intl = useIntl();
	const t = (id: string) => {
		return intl?.formatMessage({ id: id });
	};
	return (
		<footer
			style={style}
			className={`${entity?.isIntersecting && styles.active} ${styles.footer}`}
			ref={ref}
		>
			<div className={styles.top}>
				<div className={styles.row}>
					<Link href="/">
						<a className={styles.logo}>
							<IoCarSportSharp />
							<p className={styles.logo_p}>Car market</p>
						</a>
					</Link>
					<p>{t("footerMainDesc")}</p>
					<div className={styles.icons}>
						<BsFacebook />
						<AiFillInstagram />
						<BsTwitter />
					</div>
				</div>
				<div className={styles.row}>
					<h2>{t("footerAdress")}</h2>
					<Link href="/">20, Awesome Road, New York, Usa 4D BS3</Link>
					<Link href="/">+123 456 7890</Link>
					<Link href="/">hello@ulina.com</Link>
				</div>
				<div className={styles.row}>
					<h2>{t("footerLinks")}</h2>
					<Link href="/">Shop Cupon</Link>
					<Link href="/">About Us</Link>
					<Link href="/">Carrer</Link>
					<Link href="/">Supports</Link>
				</div>
				<div className={styles.row}>
					<h2>{t("footerCatalog")}</h2>
					<Link href="/">Lorem</Link>
					<Link href="/">Lorem</Link>
					<Link href="/">Lorem</Link>
					<Link href="/">Lorem</Link>
				</div>
			</div>
			<div className={styles.bottom}>
				<h3>©Ulina Official 2022</h3>
				<Link href={"/"}>
					<a>
						<span>
							<p>Privacy policy</p>
							<p>Cookies</p>
							<p>Terms of service</p>
						</span>
					</a>
				</Link>
			</div>
		</footer>
	);
}

export default Footer;

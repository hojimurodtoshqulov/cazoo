import styles from "./add.module.scss";
import poster1 from "../../../public/media/Vector (1).png";
import poster2 from "../../../public/media/Group 10.png";
import poster3 from "../../../public/media/Vector.png";
import poster4 from "../../../public/media/Group 13.png";
import { MainPropType } from "@/shared/types";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import { useRef } from "react";
import useIntl from "react-intl/src/components/useIntl";
import { MdOutlineStars, MdRestartAlt } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
function Adds({ style }: MainPropType) {
	const ref = useRef(null);
	const entity = useIntersectionObserver(ref, {});
	const intl = useIntl();
	const t = (id: string) => {
		return intl?.formatMessage({ id: id });
	};
	return (
		<div
			className={`${entity?.isIntersecting && styles.active} ${styles.adds}`}
			style={style}
			ref={ref}
		>
			<div className={styles.image}>
				{/* <img src={poster1.src} alt="" /> */}
				<span>
					<MdOutlineStars />
				</span>
				<h1>
					CarMarket Quality Assured
					{/* {t("adds_Categ1")} */}
				</h1>
				<p>
					Every car has been thoroughly inspected, fully reconditioned and has
					had a recent service and MOT, if required.
					{/* {t("adds_Categ1Desc")} */}
				</p>
			</div>
			<div className={styles.stick}></div>
			<div className={styles.image}>
				<span>
					<MdRestartAlt />
				</span>
				{/* <img src={poster2.src} alt="" /> */}
				<h1>
					7 days to decide
					{/* {t("adds_Categ2")} */}
				</h1>
				<p>
					More comprehensive than a typical test drive. If you change your mind,
					you can return it for a full refund.
					{/* {t("adds_Categ2Desc")} */}
				</p>
			</div>
			<div className={`${styles.stick} ${styles.blue}`}></div>
			<div className={styles.image}>
				<span>
					<FaRegCheckCircle />
				</span>
				{/* <img src={poster3.src} alt="" /> */}
				<h1>
					90-day warranty
					{/* {t("adds_Categ3")} */}
				</h1>
				<p>
					At least 90 days of warranty and RAC roadside assistance. We also
					offer extended warranty, servicing and more.
					{/* {t("adds_Categ3Desc")} */}
				</p>
			</div>
			{/* <div className={styles.stick}></div>
			<div className={styles.image}>
				<img src={poster4.src} alt="" />
				<h1>{t("adds_Categ4")}</h1>
				<p>{t("adds_Categ4Desc")}</p>
			</div> */}
		</div>
	);
}

export default Adds;

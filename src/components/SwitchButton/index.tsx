import scss from "./style.module.scss";
import { MainPropType } from "@/shared/types";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
function SwitchButton({
  children,
  style,
  onClick,
}: MainPropType & { onClick?: () => void }) {
  const [isOn, setIsOn] = useState(true);
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const toggleSwitch = () => {
    setIsOn((prev) => {
      changeLocale(prev ? "uz" : "ru");
      return !prev;
    });
  };
  const locale = isOn ? "uz" : "ru";
  console.log(locale);

  const changeLocale = (nextLocale: "uz" | "ru") => {
    // change just the locale and maintain all other route information including href's query
    const toAsPath = asPath.includes("#") ? "/" : asPath;
    router.push({ pathname, query }, toAsPath, {
      locale: nextLocale,
      scroll: false,
    });
  };

  return (
    // <Link
    //   onClick={(e) => e.preventDefault()}
    //   href={asPath}
    //   locale={locale}
    //   className={scss.switchDiv}
    // >
    <div className={scss.switch} data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div className={scss.handle} layout transition={spring} />
    </div>
    // </Link>
  );
}
export default SwitchButton;

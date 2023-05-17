"use client";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../../public/media/logo the doors 1.png";
import logo1 from "../../../public/media/logo the doors.svg";
import logolight from "../../../public/media/Group (1).png";
import { AiFillHeart } from "react-icons/ai";
import {
  BsFillArrowUpLeftCircleFill,
  BsFillTelephoneFill,
  BsPerson,
} from "react-icons/bs";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { MenuRouteType, menuConfig } from "@/modules/menuConfig";
import CustomButton from "@/components/Button";
import { useRouter } from "next/router";
import SwitchButton from "../../components/SwitchButton";
import useIntl from "react-intl/src/components/useIntl";
import Showcase from "@/components/sections/Showcase";
import { IoCarSportSharp } from "react-icons/io5";
import { RiUser3Fill } from "react-icons/ri";
import { Button, Modal } from "antd";
function Navbar() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLHeadElement>(null);
  const route = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const isLight = route.pathname === "/";
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      if (window.pageYOffset === 0) {
        ref.current.style.backdropFilter = "blur(0px)";
        ref.current.style.background = "transparent";
      } else {
        ref.current.style.backdropFilter = "blur(10px)";
        ref.current.style.background =
          route.pathname === "/"
            ? "rgba(255, 255, 255, 0.2)"
            : "rgba(0, 0, 0, 0.2)";
      }
      const currentScrollPos = window.pageYOffset;
      ref.current.style.translate =
        scrollPosition < currentScrollPos ? "0 -100%" : "0";
      setScrollPosition(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);
  const intl = useIntl();
  const t = (id: string) => {
    return intl.formatMessage({ id: id });
  };
  const menuConfig: MenuRouteType[] = [
    {
      id: "5",
      label: t("projects"),
      link: "/projects",
    },
    {
      id: "3",
      label: t("contact"),
      link: "/contact",
    },
  ];
  const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!e.currentTarget.dataset.to) return;
    if (!document.getElementById(e.currentTarget.dataset.to))
      return window.location.replace(`/#${e.currentTarget.dataset.to}`);

    document
      .getElementById(e.currentTarget.dataset.to)
      ?.scrollIntoView({ behavior: "smooth" });
  };
  // const scrollToTop = () => {
  // 	console.log("scrollToTop");
  // 	return window.scrollTo(0, 5350);
  // };
  // console.log(window.pageYOffset); //5500
  return (
    <>
      <nav
        className={`${styles.navbar} ${
          isLight && styles.black
        } container-padding`}
        ref={ref}
      >
        <Link href="/">
          <a className={styles.navbar__logo}>
            <IoCarSportSharp />
            <p>Car market</p>
          </a>
        </Link>
        <div
          className={`${isOpen && styles.x} ${styles.menuBtn}`}
          onClick={() => setIsOpen((pre) => !pre)}
        ></div>
        <div
          className={` ${isOpen && styles.open} ${styles.menu}`}
          onClick={() => setIsOpen((pre) => !pre)}
        >
          {/* <Link href="/" onClick={onClick}> */}
          {/* <span onClick={onClick}>
							<a className={"link"}>{t("about")}</a>
						</span> */}
          {/* </Link> */}
          {/*  <a className={"link"} data-to="about" onClick={onClick}>
            {t("about")}
          </a> */}
          <Link href={"/buy"}>{t("about")}</Link>
          {menuConfig.map((route: MenuRouteType) => (
            <Link href={route.link} key={route.id}>
              <a className={"link"}>{route.label}</a>
            </Link>
          ))}{" "}
          <SwitchButton />
          {/* <a data-to="contact" onClick={onClick}> */}
          {/* </a> */}
          <Link href={"/#contact"}>
            <CustomButton
              style={{
                borderRadius: 10,
                minWidth: 160,
                gap: 10,
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <BsFillTelephoneFill /> {t("navBtn")}
            </CustomButton>
          </Link>
          <div className={styles.user}>
            <span onClick={showModal}>
              <AiFillHeart />
            </span>
            <span onClick={showModal}>
              <RiUser3Fill />
            </span>
          </div>
        </div>
      </nav>
      <Link href={"/"}>
        <a className={styles.homeicon}>	
          <BsFillArrowUpLeftCircleFill />
        </a>
      </Link>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default Navbar;

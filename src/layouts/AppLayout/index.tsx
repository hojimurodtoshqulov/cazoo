import React, { useEffect, useState } from "react";
import styles from "./layout.module.scss";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { MainPropType } from "@/shared/types";

function AppLayout({ children }: MainPropType) {
  const [active, setActive] = useState<boolean>(true);

  useEffect(() => {    
    setTimeout(() => {
      setActive(false);
    }, 6000);
  }, []);
  return (
    <div className={styles.layout}>
      {active ? (
        <>
          <video
            src="/media/showVideo2.mp4"
            autoPlay
            muted
            playsInline
            style={{
              width: "100vw",
              height: "100vh",
              position: "fixed",
              objectFit: "cover",
              backgroundSize: "cover",
              inset: 0,
              background: "white",
              zIndex: 100,
            }}
          ></video>
        </>
      ) : (
        <Navbar />
      )}
      {children} <Footer style={{ marginTop: "auto" }} />{" "}
    </div>
  );
}

export default AppLayout;

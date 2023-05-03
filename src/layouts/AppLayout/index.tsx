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
    }, 5000);
  }, []);

  return (
    <div className={styles.layout}>
      {active ? (
        <>
          <video
            src="/media/Comp 1_1.mp4"
            autoPlay
            muted
            style={{
              width: "100%",
              height: "100vh",
              position: "fixed",
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

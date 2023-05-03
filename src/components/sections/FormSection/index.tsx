import Link from "next/link";
import styles from "./contact.module.scss";
import Button from "../../Button";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import { useRef, useState } from "react";
import { API_URL } from "@/shared/constants";
import axios from "axios";
import { toast } from "react-toastify";
import useIntl from "react-intl/src/components/useIntl";

function FormSection() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const entity = useIntersectionObserver(ref, {});
  const [disable, setDisable] = useState<boolean>(false);
  const intl = useIntl();
  const t = (id: string) => {
    return intl?.formatMessage({ id: id });
  };
  return (
    <div
      className={`${entity?.isIntersecting && styles.active} ${styles.contact}`}
      id="contact"
      ref={ref}
    >
      <form
        action="/"
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          const formdata = new FormData(e.currentTarget);
          const data = Object.fromEntries(formdata.entries());
          setDisable(true);
          console.log(data);

          axios
            .post(`${API_URL}/api/order`, data, {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .finally(() => setDisable(false))
            .then((res) => {
              formRef.current?.reset();
              toast.success("Order sent", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            })
            .catch((e) => {
              toast.error("Cannot send your order", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            });
        }}
      >
        <h1>{t("contactUs")}</h1>
        <div className={styles.line}></div>
        <input
          type="text"
          name="fullName"
          placeholder={t("contactUsFullName")}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder={t("contactUsNumber")}
          required
        />
        <textarea name="message" placeholder={t("contactUsMessage")}></textarea>
        <div className={styles.line}></div>
        <Button
          style={{
            borderRadius: 10,
            ...(disable
              ? {
                  background:
                    "linear-gradient(100.85deg, #0060ba8e -6.27%, #0067d58c 52.36%)",
                }
              : {}),
          }}
          disabled={disable}
        >
          {t("navBtn")}
        </Button>
      </form>
      <div className={styles.map}>
        {/* <div style="position:relative;overflow:hidden;"> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5995.219903621188!2d69.2257882!3d41.2955927!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE3JzQ1LjIiTiA2OcKwMTMnNDMuNyJF!5e0!3m2!1sen!2s!4v1682008430280!5m2!1sen!2s"></iframe>{" "}
        {/* <div>
          <p>20, Awesome Road, New York, Usa 4D BS3</p>

          <Link href="/">
            <a>+123 456 7890</a>
          </Link>
          <Link href="/">
            <a>hello@ulina.com</a>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default FormSection;

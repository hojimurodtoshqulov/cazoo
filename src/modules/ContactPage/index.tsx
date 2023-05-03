import MainShowcase from "@/components/sections/MainShowcase";
import Showcase from "@/components/sections/Showcase";
import React from "react";
import image from "../../../public/media/CONTACTHERO.png";
import Adds from "@/components/Adds";
import SocialSection from "@/components/sections/SocialSection";
import { BsFillTelephoneFill } from "react-icons/bs";
import useIntl from "react-intl/src/components/useIntl";
import FormSection from "@/components/sections/FormSection";

function ContactPage() {
  const intl = useIntl();
  const t = (id: string) => {
    return intl?.formatMessage({ id: id });
  };
  return (
    <div>
      <MainShowcase image={image.src} p={t("contactPageDesc")}>
        <BsFillTelephoneFill />
        <a href="tel:+998999999999" target="_blanck">
          +123 456 7890
        </a>
      </MainShowcase>
      <SocialSection />
      <FormSection />
    </div>
  );
}

export default ContactPage;

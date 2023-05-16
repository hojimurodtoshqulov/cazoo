import AppLayout from "@/layouts/AppLayout";

import {useRouter} from "next/router";
import {IntlProvider} from "react-intl";

import ru from "../../lang/ru.json";
import uz from "../../lang/uz.json";

import "@/shared/scss/globals.scss";
import "@/styles/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import CarDataProvider from "../context/CarContext";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const messages: { [key: string]: { [key: string]: string } } = {
    ru,
    uz,
};
import type {AppProps} from "next/app";
import {ToastContainer} from "react-toastify";
// import {DevSupport} from "@react-buddy/ide-toolbox-next";
// import {ComponentPreviews, useInitial} from "@/components/dev";

export default function App({Component, pageProps}: AppProps) {
    const {locale = "uz"} = useRouter();
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <CarDataProvider>
                <AppLayout>
                    {/*<DevSupport ComponentPreviews={ComponentPreviews}*/}
                    {/*            useInitialHook={useInitial}*/}
                    {/*>*/}
                        <Component {...pageProps} />
                    {/*</DevSupport>*/}
                    <ToastContainer/>
                </AppLayout>
            </CarDataProvider>
        </IntlProvider>
    );
}

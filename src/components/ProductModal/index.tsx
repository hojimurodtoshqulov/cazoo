// @ts-nocheck

import React, {Dispatch, SetStateAction, useState} from "react";
import styles from "./styles.module.scss";
import ModalImages from "../ModalImages";
import {ProductType} from "@/shared/types";
import Button from "../Button";
import {API_URL} from "@/shared/constants";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import useIntl from "react-intl/src/components/useIntl";

function ProductModal({
                          product,
                          setBigImage,
                      }: {
    product: ProductType;
    setBigImage: Dispatch<
        SetStateAction<{
            src: string;
            isActive: boolean;
        }>
    >;
}) {
    const [form, setForm] = useState()
    console.log(product)
    const [disable, setDisable] = useState<boolean>(false);
    // function handleClick() {
    // 	setDisable(true);
    // 	axios
    // 		.post(`${API_URL}/api/order`, form)
    // 		.finally(() => setDisable(false))
    // 		.then((res) => {
    // 			toast.success("Order sent", {
    // 				position: "top-right",
    // 				autoClose: 2000,
    // 				hideProgressBar: false,
    // 				closeOnClick: true,
    // 				pauseOnHover: true,
    // 				draggable: true,
    // 				progress: undefined,
    // 				theme: "light",
    // 			});
    // 			setForm({
    // 				fullName: "",
    // 				phoneNumber: "",
    // 				quantity: 1,
    // 				productId: product.id,
    // 			});
    // 		})
    // 		.catch(() =>
    // 			toast.error("Cannot send your order", {
    // 				position: "top-right",
    // 				autoClose: 2000,
    // 				hideProgressBar: false,
    // 				closeOnClick: true,
    // 				pauseOnHover: true,
    // 				draggable: true,
    // 				progress: undefined,
    // 				theme: "light",
    // 			})
    // 		);
    // }
    const intl = useIntl();
    const t = (id: string) => {
        return intl?.formatMessage({id: id});
    };
    return (
        <div className={styles.content}>
            <ModalImages
                imageId={product?.photosIds[0]}
                setBigImage={setBigImage}
            />
            {/* {JSON.stringify(product)} */}
            <div className={styles.text}>
                <h1>{product.maker.name}</h1>
                <div className={styles.price}>
                    <h2>
                        Price: {new Intl.NumberFormat('ru-Ru', {
                        style: "currency",
                        currency: "uzs"
                    }).format(product?.price)}
                    </h2>

                    {/*<div>*/}
                    {/*	<button*/}
                    {/*		onClick={() =>*/}
                    {/*			setForm((prev) => ({*/}
                    {/*				...prev,*/}
                    {/*				quantity: prev.quantity - 1 ? prev.quantity - 1 : 1,*/}
                    {/*			}))*/}
                    {/*		}*/}
                    {/*	>*/}
                    {/*		-*/}
                    {/*	</button>*/}
                    {/*	<input type="text" value={form.quantity} />*/}
                    {/*	<button*/}
                    {/*		onClick={() =>*/}
                    {/*			setForm((prev) => ({ ...prev, quantity: prev.quantity + 1 }))*/}
                    {/*		}*/}
                    {/*	>*/}
                    {/*		+*/}
                    {/*	</button>*/}
                    {/*</div>*/}
                </div>
                <div className={styles.description}>
                    <div className={styles.infoItem}>
                        <h4>Model: </h4>
                        <p>{product.model.name}</p>
                    </div>
                    <div className={styles.infoItem}>
                        <h4>Body type: </h4>
                        <p>{product.bodyType}</p>
                    </div>
                    <div className={styles.infoItem}>
                        <h4>Engine: </h4>
                        <p>{product.engine}</p>
                    </div>
                    <div className={styles.infoItem}>
                        <h4>Fuel type: </h4>
                        <p>{product.fuelType}</p>
                    </div>
                    <div className={styles.infoItem}>
                        <h4>Gearbox: </h4>
                        <p>{product.gearbox}</p>
                    </div>
                    <div className={styles.infoItem}>
                        <h4>Manufactured year: </h4>
                        <p>{product.manufacturedYear}</p>
                    </div>
                    <div className={styles.infoItem}>
                        <h4>Mileage: </h4>
                        <p>{product.mileage}</p>
                    </div>
                    <div className={styles.infoFeatures}>
                        <h4>Features: </h4>
                       {product.features.map((feature, index) =>  <span key={index}>{feature}</span>)}
                    </div>
                </div>
                <p style={{paddingTop: 15, color: "#ff4c4c"}}>
                    {/*{t("contactPageDesc")}*/}

                    {/* Менеджеры компании ответят на все вопросы по телефону: */}
                </p>
                {/*<div className={styles.form}>
					<input
						type="text"
						placeholder={t("contactUsFullName")}
						value={form.fullName}
						onChange={(e) =>
							setForm((prev) => ({ ...prev, fullName: e.target.value }))
						}
					/>
					<input
						type="text"
						placeholder={t("contactUsNumber")}
						value={form.phoneNumber}
						onChange={(e) =>
							setForm((prev) => ({ ...prev, phoneNumber: e.target.value }))
						}
					/>
				</div>*/}
                <Button
                    // onClick={handleClick}
                    style={{
                        width: "100%",
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
                    {t("order")}
                </Button>
            </div>
        </div>
    );
}

export default ProductModal;

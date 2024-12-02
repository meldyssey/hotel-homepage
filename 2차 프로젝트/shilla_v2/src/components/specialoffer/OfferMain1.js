import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
// import "../../scss/sub01_01_main.scss";
import { Link } from "react-router-dom";
import OfferProd from "./OfferProd";

{
    /* <script src="../../js/sub/sub01_01.js" defer></script> */
}

const OfferMain1 = ({ offer }) => {
    const rec = [
        {
            classname: "rec-section",
        },
        {
            classname: "rec-section",
        },
        {
            classname: "rec-section del",
        },
        {
            classname: "rec-section none",
        },
    ];
    const recId = [77, 73, 69, 78];

    return (
        <>
            {/* <!--추천상품 --> */}
            <div className="rec-wrapper">
                {recId.map(id => {
                    const item = offer.find(
                        offerData => offerData.offer_id === id
                    );
                    return item ? (
                        <OfferProd rec={item} key={item.offer_id} />
                    ) : null;
                })}
            </div>
        </>
    );
};

export default OfferMain1;

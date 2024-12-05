import React from 'react';
import Header from '../common/Header';
import SubTitle from './SubTitle';
import Gallery2 from './Gallery2';
import Introduction from './Introduction';
import Location from './Location';
import Button from './Button';
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"


function walkingTrails() {
    // <!-- 산책로 지도보기 팝업 -->
    <div class="lypop" data-lyOpen="pop-map">
        <div class="lypop-wp mid">
            <div class="lypop-content">
                <div class="lypop-title">
                    <strong>산책로 지도 보기</strong>
                    <a href="javascrip:void();" class="lypop-close" data-lyClose="pop-map"><span class="hide">닫기</span></a>
                </div>
                <div class="lypop-ct">
                    <div class="img-wrap">
                        <img src="../../img/sub/R00000024F3P_KR.jpg" alt=""/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    const galleryImages = "../../img/sub/R00000009MP2_KR.jpg";

    const introData = {
        title: "서울신라호텔만의 고풍스러운 성곽길",
        description: `아름다운 경관과 맑은 공기가 가득한 여유롭고 평온한 휴식 장소로서,<br/>
            4만m<sup>2</sup>의 녹지대를 따라 조성된 산책길을 따라 굽이굽이 펼쳐지는 서울성곽길을 걸어가 보면 옛 숨결도 느끼실 수 있습니다.`,
        tel: "02-2233-3131",
    };

    const locationData = [
        { title: '위치', content: '서울신라호텔 야외' },
        { title: '운영시간', content: '06:00 ~ 22:00' },
    ]

    const btnData = "산책로 지도 보기";

    return (
        <>
        <Header/>
        <div className="container">
            <div className="center">
                <div className="depth3-tab-wrap">
                    <div className="tab-contents">
                        <div className="tab-cont cont1 on">
                            <SubTitle/>
                            <Gallery2 propImages={galleryImages}/>
                            <div className="context">
                                <Introduction {...introData} />
                                <div className="info-wrap mt-0">
                                    <Location propLocation = {locationData} />
                                </div>
                                <Button propBtn={btnData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
    
}

export default walkingTrails
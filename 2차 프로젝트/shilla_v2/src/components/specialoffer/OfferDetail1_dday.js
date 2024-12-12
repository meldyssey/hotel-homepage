import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OfferDetail1_dday = ({ endDate, pID }) => {
    // 마감일 설정
    const [deadline, setdeadline] = useState(null);
    console.log("마감일", endDate);
    useEffect(() => {
        const deadT = new Date(endDate).getTime();
        setdeadline(deadT);
    }, [endDate]); // 로드전 NaN방지
  
    // 현재 및 남은 시간 상태관리
    // const [deadline] = useState(new Date("2024-12-04").getTime());
    const [now, setnow] = useState(Date.now());
    const [remain, setremain] = useState(null);

    // 타이머 업데이트 함수
    const updateTimer = () => {
        const current = Date.now();
        console.log("current", current);
        const timeRemaining = deadline - current;

        if (timeRemaining < 0) {
            setremain(null); // 남은 시간 초기화
            return; // 시간이 만료되면 타이머 업데이트 중단
        }
        // 남은 시간을 일, 시간, 분, 초로 변환
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setremain({ days, hours, minutes, seconds });
    };
    useEffect(() => {
        updateTimer();
        const timerInterval = setInterval(updateTimer, 1000);
        return clearInterval(timerInterval);
    }, [deadline]);

    return (
        <div className="d-day-wrap">
            <div className="d-day">
                {remain ? (
                    <span>
                        마감까지 {remain.days}일 {remain.hours}시간{" "}
                        {remain.minutes}분 {remain.seconds}초 남음
                        <Link to={`/reserve/${pID}`}>
                            <div className="d-day-reservation">
                                지금 바로 예약하기
                            </div>
                        </Link>
                    </span>
                ) : (
                    <div className="Tclear">예약이 마감되었습니다.</div>
                )}
            </div>
        </div>
    );
};

export default OfferDetail1_dday;

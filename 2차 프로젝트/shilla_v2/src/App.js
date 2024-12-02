// setting
import { Route, Routes } from "react-router-dom";

// main
import Main from "./components/main/Main";

// board
import BoardList from "./components/board/BoardList";
import BoardDetail from "./components/board/BoardDetail";
import BoardJoin from "./components/board/BoardJoin";
import BoardModify from "./components/board/BoardModify";
import BoardTemp from "./components/board/Temp";

// info
import Info from "./components/sub/Info";

// /location
import Location from "./components/sub/Location";

// lifestyle
import UrbanIsland from "./components/jaehun/js/UrbanIsland";

// login
import Login from "./components/sub/Login";

// offer
import SpecialOffer from "./components/specialoffer/SpecialOffer";
import OfferMain from "./components/specialoffer/OfferMain";
import OfferDetail from "./components/specialoffer/OfferDetail";
import Event from "./components/specialoffer/Event";
import EventDetail1 from "./components/specialoffer/EventDetail1";

// admin
import Admin from "./components/admin/Admin";

// reservation
import PaymentPage from './components/reservation/PaymentPage';
import Res_search from "./components/reservation/Res_search";
import Res_temp from "./components/reservation/Res_temp";
import Res_detail from "./components/reservation/Res_detail";

// room
import Room from "./components/room/Room";
import Standard from "./components/room/Standard";


function App() {
    return (
        <div>
            <Routes>
                {/* 메인 */}
                <Route index element={<Main></Main>}></Route>
                {/* 관리자페이지 */}
                <Route path="/admin" element={<Admin></Admin>}></Route>
                {/* 로그인 */}
                <Route path="/login" element={<Login></Login>}></Route>
                {/* 연락처 */}
                <Route path="/info" element={<Info></Info>}></Route>
                {/* 오시는길 */}
                <Route path="/location" element={<Location></Location>}></Route>
                {/* 문의하기 */}
                <Route path="/board" element={<BoardTemp />}>
                    <Route path="" element={<BoardList />} />
                    <Route path="detail/:num" element={<BoardDetail />} />
                    <Route path="join" element={<BoardJoin />} />
                    <Route path="modify/:num" element={<BoardModify />} />
                </Route>
            </Routes>

            {/* 스페셜오퍼 */}
            <Routes>
                <Route path="/specialOffer" element={<SpecialOffer />}>
                    <Route path="" element={<OfferMain />} />
                    <Route path="detail/:id" element={<OfferDetail />} />
                    <Route path="event" element={<Event />} />
                    <Route path="event/detail/1" element={<EventDetail1 />} />
                </Route>
            </Routes>

            {/* 예약페이지 */}
            <Routes>
                <Route path="/reserve" element={<Res_temp />}>
                    <Route path="" element={<Res_search />} />
                    <Route path="detail" element={<Res_detail />} />
                    <Route path="detail/payment" element={<PaymentPage />} />
                    {/* <Route path="join" element={<BoardJoin/>} /> */}
                    {/* <Route path="modify/:num" element={<BoardModify/>} /> */}
                </Route>
            </Routes>

            <Routes>
                <Route path="/room" element={<Room />} />
                <Route path="/room/delux" element={<Standard />} />
            </Routes>

            <Routes>
                <Route path="/abc" element={<UrbanIsland />}></Route>
            </Routes>
        </div>
    );
}

export default App;

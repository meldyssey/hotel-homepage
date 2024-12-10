<<<<<<< HEAD
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
=======
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
>>>>>>> parent of edd7108 (게시판 확인 작업 중)
import axios from 'axios';
import '../../scss/reset.css'
import '../../scss/common.scss'
import '../../scss/sub06_03.scss'
import SecretPage from "./SecretPage";

const bkURL = process.env.REACT_APP_BACK_URL;

const BoardList = () => {


    const [text,setText] = useState([])
    const [user,setUser] = useState(null)

    useEffect(() => {

        // 로그인 여부 확인
        const id = sessionStorage.getItem("id");
        const name = sessionStorage.getItem("name");
        const grade = sessionStorage.getItem("grade");
        
        if (id) {
            setUser({ 'id': id, "name": name, "grade": grade });
        } else {
            setUser(null);
        }

        axios.get(`${bkURL}/board`)
            .then(res => {
                setText(res.data);
            })
            .catch(err => {
                console.error('에러발생 : ', err);
            });

    }, []);

<<<<<<< HEAD
    const navigate = useNavigate();

    // user가 없으면 로그인 페이지로 이동
    if (!user) {
        navigate('/login');
    }
=======
>>>>>>> parent of edd7108 (게시판 확인 작업 중)

    return (
        <div className="container">
            <div className="center">
                <h2 className="title">1:1문의</h2>
                <ul className="board-nav">
                    <li className="post-num">번호</li>
                    <li className="post-title">제목</li>
                    <li className="post-writer">작성자</li>
                    <li className="post-date">작성일</li>
                </ul>

<<<<<<< HEAD
                {text.length > 0 ? (
                    text.map((list, idx) => {
                        return (
                            <ul className="post" key={idx}>
                                <li className="post-num">{list.board_id}</li>
                                <SecretPage data={list} user={user} />
                                <li className="post-writer">
                                    {user ? user.name : '알 수 없음'} {/* user가 null일 경우 '알 수 없음' */}
                                </li>
                                <li className="post-date">{list.reg_str || '날짜 없음'}</li> {/* reg_str이 없으면 '날짜 없음' */}
                            </ul>
                        );
=======
                {
                    text.map((list,idx)=>{
                        return <ul className="post" key={idx}>
                                    <li className="post-num">{list.board_id}</li>
                                    <SecretPage  data={list} user={user}/>
                                    <li className="post-writer">{list.author}</li>
                                    <li className="post-date">{list.reg_str}</li>
                                </ul>
>>>>>>> parent of edd7108 (게시판 확인 작업 중)
                    })
                ) : (
                    <div>게시글이 없습니다.</div>  // 텍스트가 비어있을 경우 안내 메시지
                )}

                <div className="search-wrap">
                    <div className="search" role="search">
                        <input type="text" />
                        <button className="search-btn" type="button"><span>검색</span></button>
                    </div>
                    <div className="btn-wrap type4">
                        <div className="align">
                            <Link to="/board/join" className="btn btn-01">문의하기</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoardList;

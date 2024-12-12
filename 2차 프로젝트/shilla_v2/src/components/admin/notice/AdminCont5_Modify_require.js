import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AdminCont5_Modify_require = ({
    modify,
    setmodify,
    category,
    setcategory,
    id,
}) => {
    // console.log("notice_id", id);

    // const fetchData = async () => {
    //     try {
    //         const res = await axios.get(
    //             `http://localhost:5002/bk/notice/detail/${id}`
    //         );
    //         console.log("갔다옴", res.data);
    //         setmodify(res.data);
    //     } catch (error) {
    //         console.error("에러메세지", error);
    //     }
    // };

    // useEffect(() => {
    //     if (!id) {
    //         console.log("id없음");
    //         return;
    //     }
    //     fetchData();
    // }, [id]);

    // if (!modify) {
    //     return <div>id 없음</div>;
    // }
    const modifyChange = (key, data) => {
        // console.log("수정가능", key, data);
        setmodify({ ...modify, [key]: data });
    };

    return (
        <div className="listwrap">
            <table className="r-table">
                <tr className="r-row">
                    <td className="N-title">분류</td>
                    <td className="N-type">
                        <select
                            name="category"
                            value={category}
                            className="category"
                            onChange={e => setcategory(e.target.value)}
                        >
                            <option
                                name="category"
                                className="category"
                                value="공지"
                            >
                                공지
                            </option>
                            <option
                                name="category"
                                className="category"
                                value="안내"
                            >
                                안내
                            </option>
                            <option
                                name="category"
                                className="category"
                                value="이벤트"
                            >
                                이벤트
                            </option>
                        </select>
                    </td>
                </tr>
                <tr className="r-row">
                    <td className="N-title">제목</td>
                    <td className="N-con">
                        {" "}
                        <input
                            type="text"
                            value={modify.title}
                            name="title"
                            className="title"
                            onChange={e =>
                                modifyChange("title", e.target.value)
                            }
                        />
                    </td>
                </tr>
                <tr className="r-row">
                    <td className="N-title">내용</td>
                    <td className="N-con areabox">
                        <textarea
                            className="area"
                            value={modify.context}
                            name="context"
                            onChange={e =>
                                modifyChange("context", e.target.value)
                            }
                        />
                    </td>
                </tr>
                <tr className="r-row">
                    <td className="fileup">첨부파일</td>
                    <td className="N-con">
                        {modify.system_name && (
                            <p className="filename">
                                {" "}
                                현재파일 : {modify.system_name}{" "}
                            </p>
                        )}
                        <input type="file" name="upfile" className="file" />
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default AdminCont5_Modify_require;

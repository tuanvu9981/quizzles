import React, { useEffect, useState } from "react";
import Xarrow from "react-xarrows";
import PairItem from "./PairItem";

// 1. Khi chọn đã đúng hết, cần cho phép chuyển sang slide mới (Số lượng)
// 2. Khi chọn là đúng, cần chuyển toàn bộ trạng thái 2 pairItem sang màu xanh (đỏ nếu sai)
// 3. Cho phép người dùng chọn lại (nhấn vào hình tròn thì tiến hành hủy mũi tên cũ)
// 4. Chức năng thêm: Làm lại ?
// 5. Không cho phép nối 2 pairItem cùng bên trái hoặc phải 
const PairQuizContainer = ({ data }) => {
    const [answers, setAnswers] = useState({
        trueList: [],
        falseList: []
    })
    const [arrows, setArrows] = useState([]);

    const addArrow = ({ start, end }) => {
        setArrows([...arrows, { start, end }]);
    };

    console.log(arrows);

    const filterArrow = (ids, ide) => {

        let index = -1;
        console.log(`ids = ${ids}, ide = ${ide}`);
        const startArr = arrows.map(e => e.start);
        const endArr = arrows.map(e => e.end);

        if (startArr.includes(ids)) {
            // functionize

            for (let i = 0; i < startArr.length; i++) {
                if (arrows[i].start === ids && arrows[i].end !== ide) {
                    index = i;
                }
            }
            console.log(`index = ${index}`);
            if (index !== -1) {
                setAnswers({
                    ...answers,
                    falseList: answers.falseList.filter(e => (e !== ids && e !== arrows[index].end))
                })
                setArrows(arrows => arrows.splice(index, 1));
            }
        }
        // index = -1;
        // if (endArr.includes(ids)) {
        //     // functionize TODO
        //     for (let i = 0; i < endArr.length; i++) {
        //         if (endArr[i].start !== ids && endArr[i].end === ide) {
        //             index = i;
        //             console.log(`end index: ${index}`);
        //         }
        //     }
        //     console.log(`end index (1): ${index}`);
        //     if (index !== -1) {
        //         setArrows(arrows => arrows.splice(index, 1));
        //     }
        // }

        // setAnswers({
        //     ...answers,
        //     falseList: answers.falseList.filter(e => (e !== ids && e !== ide))
        // })

        // update displayed color with trueList[] and falseList[]
        // let index1 = answers.falseList.indexOf(id);
        // if (index1 > -1) {
        //     if (index1 % 2 === 0) {
        //         // start of arrow
        //         answers.falseList.splice(index1, 1);
        //         answers.falseList.splice(index1 + 1, 1);
        //     } else {
        //         // end of arrow
        //         answers.falseList.splice(index1, 1);
        //         answers.falseList.splice(index1 - 1, 1);
        //     }

        // }

        // let index2 = answers.trueList.indexOf(id);
        // if (index2 > -1) {
        //     if (index2 % 2 === 0) {
        //         // start of arrow
        //         answers.falseList.splice(index2, 1);
        //         answers.falseList.splice(index2 + 1, 1);
        //     } else {
        //         // end of arrow
        //         answers.falseList.splice(index2, 1);
        //         answers.falseList.splice(index2 - 1, 1);
        //     }
        // }

    };

    const [leftRandPairs, setLeftRandPairs] = useState([]);
    const [rightRandPairs, setRightRandPairs] = useState([]);

    const shuffleArray = (origin) => {
        return origin.map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
    }

    useEffect(() => {
        const beginList = data.quizParts.map((ele, index) => {
            return {
                left: { ...ele.content, index, boxId: `${data.id}-${index}-left` },
                right: { ...ele.pairQuizParts.pairContent, index, boxId: `${data.id}-${index}-right` }
            }
        });

        const beginLeftArr = beginList.map(ele => ele.left);
        const beginRightArr = beginList.map(ele => ele.right);

        setLeftRandPairs(shuffleArray(beginLeftArr));
        setRightRandPairs(shuffleArray(beginRightArr));
    }, []);

    return (
        <div style={{
            marginTop: '50px',
            display: "flex",
            flexDirection: 'column',
            gap: '50px',
            alignItems: 'center',
        }}>
            {leftRandPairs.map((ele, index) => {
                return (
                    <div style={{ display: "flex", gap: '200px' }} key={index}>
                        <PairItem
                            media={ele}
                            handler="right"
                            {...{
                                addArrow, setArrows, filterArrow,
                                boxId: ele.boxId, answers, setAnswers
                            }}
                        />
                        <PairItem
                            media={rightRandPairs[index]}
                            handler="left"
                            {...{
                                addArrow, setArrows, filterArrow,
                                boxId: rightRandPairs[index].boxId, answers, setAnswers
                            }}
                        />
                    </div>
                )
            })}
            {arrows.map(ar => (
                <Xarrow
                    start={ar.start}
                    end={ar.end}
                    key={`${ar.start}-${ar.end}`}
                    showHead={false}
                    color="black"
                />
            ))}
        </div>
    );
}

export default PairQuizContainer;
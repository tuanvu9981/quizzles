import { Box, Typography } from "@mui/material";
import { ConnectPointBox } from "./index.style";
import React, { useRef, useState } from "react";
import Xarrow from "react-xarrows";
import Draggable from "react-draggable";
import '../styles.css';
import { CONNECT_POINT_COLOR, FLOATING_BOX_COLOR } from "../../../../theme/color";
import { useEffect } from "react";
import AudioButton from "src/components/AudioButton";

const connectPointStyle = {
    position: "absolute",
    width: 25,
    height: 25,
    borderRadius: "50%",
    background: "black",
};

const connectPointOffset = {
    left: { left: 0, top: "50%", transform: "translate(-50%, -50%)" },
    right: { left: "100%", top: "50%", transform: "translate(-50%, -50%)" },
    top: { left: "50%", top: 0, transform: "translate(-50%, -50%)" },
    bottom: { left: "50%", top: "100%", transform: "translate(-50%, -50%)" }
};

const ConnectPointsWrapper = ({ boxId, handler, dragRef, boxRef }) => {
    const ref1 = useRef();

    const [position, setPosition] = useState({});
    const [beingDragged, setBeingDragged] = useState(false);
    return (
        <React.Fragment>
            <div
                className="connectPoint"
                style={{
                    ...connectPointStyle,
                    ...connectPointOffset[handler],
                    ...position
                }}
                draggable
                onMouseDown={e => e.stopPropagation()}
                onDragStart={e => {
                    setBeingDragged(true);
                    e.dataTransfer.setData("arrow", boxId);
                }}
                onDrag={e => {
                    const { offsetTop, offsetLeft } = boxRef.current;
                    const { x, y } = dragRef.current.state;
                    setPosition({
                        position: "fixed",
                        left: e.clientX - x - offsetLeft,
                        top: e.clientY - y - offsetTop,
                        transform: "none",
                        opacity: 0
                    });
                }}
                ref={ref1}
                onDragEnd={e => {
                    setPosition({});
                    setBeingDragged(false);
                }}
            />
            {beingDragged ? <Xarrow start={boxId} end={ref1} showHead={false} color="black" /> : null}
        </React.Fragment>
    );
};

const PairItem = ({
    media, handler, addArrow, filterArrow,
    setArrows, boxId, answers, setAnswers
}) => {
    const dragRef = useRef();
    const boxRef = useRef();
    const [chosen, setChosen] = useState("unchosen");
    const [line, setLine] = useState({});

    useEffect(() => {
        // console.log('answers.falseList');
        // console.log(answers.falseList);
        // console.log('answers.trueList');
        // console.log(answers.trueList);
        // console.log('line');
        // console.log(line);

        if (line.start !== undefined && answers.falseList.includes(line.start)) {
            if (line.start.substring(0, 4) === line.end.substring(0, 4)) {
                filterArrow(line.start, line.end);
            }
        }
        if (answers.trueList.includes(boxId)) {
            setChosen("correct");
        } else if (answers.falseList.includes(boxId)) {
            setChosen("incorrect");
        } else setChosen("unchosen");
    }, [answers]);

    return (
        <Draggable
            ref={dragRef}
            onDrag={e => {
                setArrows(arrows => [...arrows]);
            }}
            disabled={true}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                border: chosen === "unchosen" ?
                    "2px solid black" : chosen === "correct" ? "4px solid green" : "4px solid red",
                position: "relative",
                padding: "20px 10px",
                width: '300px',
                height: '75px',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: FLOATING_BOX_COLOR,
                borderRadius: '10px'
            }}
                id={boxId}
                ref={boxRef}
                onDragOver={e => e.preventDefault()}
                onDrop={e => {
                    if (e.dataTransfer.getData("arrow") !== boxId) {
                        const newLine = { start: e.dataTransfer.getData("arrow"), end: boxId };
                        setLine(newLine);

                        // "left" === "left", "right" === "right"
                        if (newLine.start.split("-")[2] !== newLine.end.split("-")[2]) {
                            addArrow(newLine);

                            if (newLine.start.substring(0, 4) === newLine.end.substring(0, 4)) {
                                setAnswers({ ...answers, trueList: [...answers.trueList, newLine.start, newLine.end] })
                            } else {
                                // setLine(newLine);
                                setAnswers({ ...answers, falseList: [...answers.falseList, newLine.start, newLine.end] })
                            }
                        }
                    }
                }}
            >
                {/* 1. multi-media data  */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    {media.text !== undefined ?
                        <Typography variant='h2'>{media.text}</Typography>
                        :
                        media.imageUrl !== undefined ?
                            <img
                                src={media.imageUrl}
                                alt={`img ${boxId}`}
                                style={{ width: '95px', height: '60px' }}
                            />
                            :
                            media.videoUrl !== undefined ?
                                <video controls style={{ width: '200px', height: '70px' }} controlsList="nodownload">
                                    <source src={media.videoUrl} />
                                </video>
                                :
                                // <audio controls style={{ width: '230px', height: '40px' }} controlsList="nodownload">
                                //     <source src={media.audioUrl} />
                                // </audio>
                                <AudioButton src={media.audioUrl} size={"35px"} />
                    }
                </Box>

                {/* 2. connect-point data */}
                <ConnectPointsWrapper {...{ boxId, handler, dragRef, boxRef }} />
            </Box>
        </Draggable>
    );
}

export default PairItem;
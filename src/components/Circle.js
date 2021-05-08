import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import gif from "../assets/gif.gif";

const Bar = styled.div`
  width: 50%;
  height: 10px;
  background-color: pink;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  color: white;
`;

const Container = styled(motion.img)`
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Circle = () => {
  const [nice, setNice] = useState();
  const [text, setText] = useState("HUHUHU");

  const [dragEndCoor, setDragEndCoor] = useState();

  const circleRef = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    setNice(
      ref.current.getBoundingClientRect().width -
        ref.current.getBoundingClientRect().width * 0.3
    );
  }, []);

  useEffect(() => {
    console.log(dragEndCoor);
  }, [dragEndCoor]);

  useEffect(() => {
    if (
      dragEndCoor >
      ref.current.getBoundingClientRect().left +
        ref.current.getBoundingClientRect().width
    ) {
      setText("Let's go!!!");
    }
  }, [dragEndCoor]);

  return (
    <>
      {" "}
      <Bar ref={ref}>
        <Container
          ref={circleRef}
          src={gif}
          alt=''
          drag='x'
          onDragEnd={(event, info) => setDragEndCoor(info.point.x)}
          dragConstraints={{
            left: 0,
            right: nice,
          }}
        ></Container>
        <h1>{text}</h1>
      </Bar>
    </>
  );
};

export default Circle;

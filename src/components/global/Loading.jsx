// AnimatedComponent.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  padding: 4px;
  border-radius: 10px;
  width: 300px;
  margin-top: 10%;
`;

const Circle = styled(motion.div)`
  width: 99px;
  height: 92px;
  background-color: #4a4a4a;
  border-radius: 10px;
  margin-right: 10px;
`;

const Line = styled(motion.div)`
  height: 10px;
  background-color: #4a4a4a;
`;

const LineOne = styled(Line)`
  width: 150px;
  margin-top: 6px;
  margin-bottom: 10px;
`;

const LineTwo = styled(Line)`
  width: 100px;
`;

const containerVariants = {
  animate: {
    backgroundColor: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const circleVariants = {
  animate: {
    backgroundColor: ["#4a4a4a", "#5a5a5a", "#4a4a4a"],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const lineVariants = {
  animate: {
    backgroundColor: ["#4a4a4a", "#5a5a5a", "#4a4a4a"],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const Loading = () => (
  <>
    <Container variants={containerVariants} animate="animate">
      <Circle variants={circleVariants} animate="animate" />
      <div>
        <LineOne variants={lineVariants} animate="animate" />
        <LineTwo variants={lineVariants} animate="animate" />
      </div>
    </Container>{" "}
    <Container variants={containerVariants} animate="animate">
      <Circle variants={circleVariants} animate="animate" />
      <div>
        <LineOne variants={lineVariants} animate="animate" />
        <LineTwo variants={lineVariants} animate="animate" />
      </div>
    </Container>
  </>
);

export default Loading;

import React, { useContext } from "react";
import { GlobalContext } from "pages/_app";
import styled from "styled-components";
import { motion } from "framer-motion";
import Sun from "svg/Sun";
import Moon from "svg/Moon";

interface ToggleProps {
  $isDarkMode: boolean;
}

const ToggleContainer = styled.div<ToggleProps>`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.header.toggleContainerBgColor};
  width: 72px;
  height: 36px;
  border-radius: 14px;
  position: relative;
  justify-content: ${(props) =>
    props.$isDarkMode ? "flex-end;" : "flex-start;"};
  overflow: hidden;
`;

const _Toggle = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => "layout".includes(prop),
})`
  background-color: ${(props) => props.theme.header.toggleBgColor};
  width: 36px;
  height: 36px;
  z-index: 10;
`;

const ToggleSvg = styled.span<ToggleProps>`
  padding-top: 2px;
  position: absolute;

  ${(props) =>
    props.$isDarkMode
      ? "left: 0px; margin-left: 6px;"
      : "right: 0px; margin-right: 6px;"}
`;

export default function Toggle() {
  const { isDarkMode, setDarkMode } = useContext(GlobalContext);

  return (
    <ToggleContainer
      $isDarkMode={isDarkMode}
      onClick={() => setDarkMode((prev) => !prev)}
    >
      <_Toggle
        layout
        transition={{
          opacity: { ease: "linear" },
          layout: { duration: 0.7 },
        }}
      />
      <ToggleSvg $isDarkMode={isDarkMode}>
        {isDarkMode ? (
          <Moon width={22} height={22} />
        ) : (
          <Sun width={22} height={22} />
        )}
      </ToggleSvg>
    </ToggleContainer>
  );
}

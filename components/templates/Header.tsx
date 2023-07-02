import Toggle from "components/atoms/Toggle";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export default function Header() {
  return (
    <Container>
      <span>Header</span>

      <Toggle />
    </Container>
  );
}

import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 80%;
  margin: 0 auto;

  @media (min-width: 1366px) {
    max-width: 50%;
  }
`;

export default Container;

import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 95%;
  background: var(--black);
  border-radius: 1rem;
  border: 2px solid var(--pink);
  margin: 1rem;
  padding: 1rem;
`

export const VerticalDivider = styled.span`
  border: 1px solid var(--black);
  margin: auto 0.5rem;
`
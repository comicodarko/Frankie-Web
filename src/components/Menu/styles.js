import styled from "styled-components";

export const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  height: 95%;
  width: 15rem;
  background: var(--blueDark);
  border: 2px solid var(--pink);
  border-radius: 1rem;

  h2 {
    font-weight: 400;
    margin-bottom: 1rem;

    span {
      color: var(--pink);
    }
  }

  ul {
    list-style: none;
    
    li {
      margin: 1rem 0;
      cursor: pointer;
      font-weight: 600;
    }
  }
`
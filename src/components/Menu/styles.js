import styled from "styled-components";

export const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  height: 95%;
  width: 15rem;
  background: var(--black);
  border: 2px solid var(--pink);
  border-radius: 1rem;

  h2 {
    font-weight: 400;
    margin: 1rem;

    span {
      color: var(--pink);
    }
  }

  ul {
    list-style: none;
    background-color: var(--blueDark);
  }
`

export const MenuPage = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  font-weight: 600;
  cursor: pointer;
  color: ${props => props.active ? 'var(--blue)' : 'var(--white)'}; 
  transition: 0.5s;

  svg  {
    fill: ${props => props.active ? 'var(--pink)' : 'var(--white)'}; 
    margin-right: 0.5rem;
    transition: 0.5s;
  }

  &:hover {
    background-color: ${props => props.active ? 'none' : 'var(--pink)'};
  }
` 
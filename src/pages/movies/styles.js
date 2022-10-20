import styled from "styled-components";

export const MoviesWrapper = styled.section`
  overflow-y: auto;
  margin-bottom: 1rem;

  div.movie {
    padding: 0.75rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.5s;
    border-left: 2px solid var(--black);

    &:hover {
      background: var(--blueDark);
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      border-color: var(--blue);
    }

    img {
      width: 4rem;
      height: 6rem;
      border-radius: 0.25rem;
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid var(--purple);
      margin-right: 1rem;
    }

    div {
      display: flex;
      flex-direction: column;
    }

    span.rating {
      color: var(--blue);
    }
  }
`

export const EvaluateButton = styled.button`
  margin-right: auto;
  background-color: var(--blue);
  color: var(--black);
  border: 2px solid var(--white);
  padding: 0.3rem 0.5rem;
  border-radius: 0.25rem;
  margin-top: 0.25rem;
  transition: 0.3s;

  &:hover {
    background-color: var(--pink);
  }
`

export const RatingConfirmWrapper = styled.span`
  display: flex;
  align-items: center;

  button.confirm {
    margin-left: 0.5rem;
    padding: 0.4rem;
    border-radius: 0.25rem;
    transition: 0.5s;
    background-color: var(--dark);
    border: 1px solid var(--green);
    
    &:hover {
      background-color: var(--green);
      border-color: var(--white);

      svg {
        fill: var(--black);
      }
    }
    
    svg {
      fill: var(--green);
      transition: 0.5s;
    }
  }
`
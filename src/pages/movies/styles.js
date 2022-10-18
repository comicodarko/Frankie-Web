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
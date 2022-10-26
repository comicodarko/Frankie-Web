import styled from "styled-components";

export const MoviesWrapper = styled.section`
  overflow-y: auto;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;

  div.movie {
    padding: 0.75rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    position: relative;
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

    > div {
      display: flex;
      flex-direction: column;
      
      span.rating {
        color: var(--blue);
      }
      
      div.genres {
        display: flex;
        right: 0.75rem;;
        position: absolute;
        font-size: 0.95rem;
        max-width: 15rem;
        justify-content: right;
        flex-wrap: wrap;
      }
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

export const NoMovies = styled.span`
  display: flex;
  background-color: var(--blueDark);
  margin: auto;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 2rem;
`

export const Genre = styled.button`
  border: 2px solid var(--white);
  margin: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--${props => 
    props.color === 'default' 
      ? 'gray'
      : props.color === 'brown' 
        ? 'green'
        : props.color
    });
  color: var(--black);
  font-weight: 700;
  transition: 0.3s;
  filter: brightness(0.85);
  
  &:hover {
    filter: brightness(1.1);
  }
`
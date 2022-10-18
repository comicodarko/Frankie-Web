import styled from 'styled-components';

export const SearchResultWrapper = styled.div`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  top: -12rem;
  left: 0;
  max-width: 100%;
  position: absolute; 
  border-radius: 1rem;
  background: var(--blueDark);
  border-left: 5px solid var(--blueDark);
  border-right: 5px solid var(--blueDark);
  overflow-x: scroll;
  overflow-y: hidden;
  z-index: 1;

  > div {
    display: flex;
  }
` 

export const Movie = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem;
  margin-right: ${props => props.selected ? '0' : '0.5rem'};
  background-color: var(--purple);
  border-radius: 0.5rem;
  border-bottom-right-radius: ${props => props.selected ? '0' : '0.5rem'};
  border-top-right-radius: ${props => props.selected ? '0' : '0.5rem'};
  transition: 0.5s border-radius;
  cursor: pointer;

  img {
    min-height: 10.3rem;
    width: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--purple);
    border-radius: 0.5rem;
    margin-bottom: 2px;
  }
`

export const SelectedMovie = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 11rem;
  background: var(--purple);
  padding: 0.25rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  margin-right: 0.5rem;

  h2 {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--black);
  }

  label {
    margin-top: auto;
    
    input {
      margin-right: 0.25rem;
    }
  }

  button {
    margin-top: auto;
    width: 100%;
    background-color: var(--pink);
    border: 1px solid var(--black);
    border-radius: 0.5rem;
    padding: 0.5rem;
    color: var(--black);
  }
`
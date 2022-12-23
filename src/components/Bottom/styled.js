import styled from 'styled-components';

export const BottomWrapper = styled.footer`
  width: 100%;
  background-color: var(--blueDark);
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin-top: auto;
  border-radius: 0.5rem;
  position: relative;
`

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
  background-color: var(--blue);
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
    border: 1px solid var(--blue);
    border-radius: 0.5rem;
    /* margin-bottom: 2px; */
  }
`

export const SelectedMovie = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 11rem;
  background: var(--blue);
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
    font-size: 0.9rem;;
    color: var(--black);

    input {
      margin-right: 0.25rem;
    }
  }

  select {
    height: 2rem;
  }

  button {
    margin-top: auto;
    width: 100%;
    background-color: var(--purple);
    border: 1px solid var(--black);
    border-radius: 0.5rem;
    padding: 0.3rem;
    color: var(--black);
  }

  div.providers {
    display: flex;
    overflow-x: auto;

    img {
      width: 1.75rem;
      height: 1.75rem;
      margin-right: 0.25rem;
      border-radius: 0.3rem;
    }
  }
`
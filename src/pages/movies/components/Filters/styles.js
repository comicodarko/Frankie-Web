import styled from "styled-components";
import { ThSmall } from "@styled-icons/typicons"
import { EyeFill, EyeSlash } from "@styled-icons/bootstrap"

export const FiltersWrapper = styled.section`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background-color: var(--blueDark);
  border: 2px solid var(--purple);
  display: flex;

  svg {
    transition: 0.5s;
  }
`

export const IconAll = styled(ThSmall)`
  fill: ${props => props.active === 'all' ? 'var(--blue)' : 'var(--black)'};
`

export const IconWatched = styled(EyeFill)`
  fill: ${props => props.active  === 'watched' ? 'var(--blue)' : 'var(--black)'};
`

export const IconUnwatched = styled(EyeSlash)`
  fill: ${props => props.active  === 'unwatched' ? 'var(--blue)' : 'var(--black)'};
`
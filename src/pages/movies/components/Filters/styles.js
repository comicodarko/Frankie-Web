import styled from "styled-components";
import { ThSmall } from "@styled-icons/typicons"
import { EyeFill, EyeSlash } from "@styled-icons/bootstrap"

export const FiltersWrapper = styled.section`
  margin: 0 1rem;
  border-radius: 0.5rem;

  svg {
    transition: 0.5s;
  }
`

export const IconAll = styled(ThSmall)`
  fill: ${props => props.active ? 'var(--purple)' : 'var(--black)'};
`

export const IconWatched = styled(EyeFill)`
  fill: ${props => props.active ? 'var(--purple)' : 'var(--black)'};
`

export const IconUnwatched = styled(EyeSlash)`
  fill: ${props => props.active ? 'var(--purple)' : 'var(--black)'};
`
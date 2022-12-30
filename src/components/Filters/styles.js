import styled from "styled-components";
import { ThSmall } from "@styled-icons/typicons"
import { BookmarkCheckFill, BookmarkXFill } from "@styled-icons/bootstrap"

export const FiltersWrapper = styled.section`
  padding: 0.3rem 0.5rem;
  border-radius: 0.25rem;
  background-color: var(--blueDark);
  display: flex;

  svg {
    transition: 0.5s;
  }

  select {
    margin: 0 1rem;
  }
`

export const IconAll = styled(ThSmall)`
  fill: ${props => props.active === 'all' ? 'var(--blue)' : 'var(--black)'};
`

export const IconDone = styled(BookmarkCheckFill)`
  fill: ${props => props.active  === 'done' ? 'var(--blue)' : 'var(--black)'};
`

export const IconTodo = styled(BookmarkXFill)`
  fill: ${props => props.active  === 'todo' ? 'var(--blue)' : 'var(--black)'};
`
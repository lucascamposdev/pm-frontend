import { DragOverlay } from "@dnd-kit/core";
import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: start;
    justify-content: start;
    height: 100%;

    width: 100%;

    gap: 1rem;
    padding: 0rem 2rem 1rem 2rem;

    overflow: auto;

`

export const StyledDragOverlay = styled(DragOverlay)`
    div{
        width: 100%;
    }
`


import { DragOverlay } from "@dnd-kit/core";
import styled from "styled-components";

export const Container = styled.section`
    height: 100%;
    width: 100%;

    display: grid;
    align-items: start;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

    gap: 1rem;
    padding: 0rem 2rem 1rem 2rem;

    overflow: hidden;
`

export const StyledDragOverlay = styled(DragOverlay)`
    div{
        width: 100%;
    }
`


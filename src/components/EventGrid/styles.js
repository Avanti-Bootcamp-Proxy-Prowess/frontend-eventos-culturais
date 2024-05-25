import styled from "styled-components";

export const GridContainer = styled.div`
    padding: 20px;
    margin-left: 100px;
    margin-right: 100px;

    display: grid;
    grid-template: 280px 280px 280px / 360px 360px 360px;
    gap: 50px;

    justify-content: center;
`;

export const GridContainerItem = styled.div`
    border-radius: 25px;
    box-shadow: 5px 5px #01131c;

    text-align: center;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
`;

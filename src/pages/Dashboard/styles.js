import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1{
        background-color: red;
    }
`;

export const Wraper = styled.div`
    margin: 56px 100px 0 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    > div:nth-child(2){
        margin-top: 30px;
        border-bottom: 1px solid lightgray;
    }
`;
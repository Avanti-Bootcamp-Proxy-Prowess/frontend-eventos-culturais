import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
`;

export const Wrapper1 = styled.div`    //cabeçalho
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #001621;

    display: flex;
    flex-direction: column;
    gap: 36px; //espaco do pesquisa ao header

    @media (max-width: 600px) {
        gap: 28px
    }
`;

export const Wrapper2 = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;  
    align-items: center;
    gap: 16px;

`;

export const Wrapper3 = styled.div` 
    min-width: 100%;
    display: flex;
    padding: 0 28px 0 28px;

    @media (max-width: 600px) {
        
    }
`;

export const Wrapper4 = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    > select {
        font-weight: bolder;
        font-size: 10px;
        border-radius: 10px;
        color: #000;
        
    }

    
    > input {
        color: #000;
        font-weight: bolder;
        font-size: 10px;
        border-radius: 10px;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    :hover{
        /* background-color: #031131; */
    }
    margin-top: 260px;
    @media (max-width: 600px) {
        
    }
`;

export const EventCard = styled.div`
height: 200px;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;

    cursor: pointer;

    &:hover {
        background-color: $turquoise;
        transform: scale(1.09);
    }
    
`;

// Input, Select, and Option components
export const Input = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    flex: 1;
`;

export const Select = styled.select`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const Option = styled.option``;
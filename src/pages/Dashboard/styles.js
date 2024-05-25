import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
`;

export  const WrapperPesquisar = styled.div`
    margin-bottom: 20px;
    margin-top: 105px;
    /* position: fixed; */
`;

export const WrapperFiltros = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    :hover{
        background-color: red;
    }
`;

export const EventCard = styled.div`
height: 200px;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;

    cursor: pointer;
    
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
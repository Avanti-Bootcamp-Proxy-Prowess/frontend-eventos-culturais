import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: auto 0; 

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    margin: 9px 0 30px 0;
    padding: 15px;
    border-radius: 10px;

    box-shadow: 6px 6px 13px 6px rgba(0,0,0,0.25);
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;

    > div svg:nth-child(1) {
	    color: red;
        margin-right: 8px;
        font-size: 20px;
    }

    > div svg:nth-child(2) {
	    color: red;
        font-size: 20px;
        cursor: pointer;
    }

    @media (max-width: 800px){
        flex-direction: column;
    }
`;

export const Wrapper = styled.div`
    width:100%;
    padding: 0 5%;
    > h2 {
        margin-top: 14px;
    }

    @media (max-width: 480px){

    }
 
`;

export const Button = styled.button`
    border: none;
    background: none;

    > svg {
        font-size: 48px;
        color: #25B919;
    }    
`;

// export const Content = styled.div`
//   grid-area: content;
//   padding: 0 64px;
//   overflow-y: auto;
// `;


export const Section = styled.div`
    margin: 28px 0 30px 0;
    padding: 25px;
    border-radius: 10px;

    box-shadow: 6px 6px 4px 0px rgba(0,0,0,0.25);
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;

    > div svg:nth-child(1) {
        cursor: pointer;
	    color: white;
        margin-right: 8px;
        font-size: 20px;
    }

    > div svg:nth-child(2) {
	    color: red;
        font-size: 20px;
        cursor: pointer;
    }
    /* border: 1px solid red; */
    /* > div:hover {
        background-color: blue;
    } */
`;

export const PopUp = styled.div`
    width: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};;
    padding: 20px;
    border-radius: 8px;
    z-index: 1000;
`;

export const Select = styled.select`
    width: 300px;
`;

export const Option = styled.option`
`;

export const Wrapper1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    > svg{
        color: green;
    }
`;

export const Wrapper2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;
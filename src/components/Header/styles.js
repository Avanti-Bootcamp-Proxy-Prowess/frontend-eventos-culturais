import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.header`
    height: 100px;
    width: 100%;

    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;

    }
    
    span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

    strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
    }

    @media (max-width: 600px) {
        > div {
            display: none;
        }
  }
`;

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        font-size: 28px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }    
`;

export const Wrapper = styled.div`
    align-items: center;
    font-size: 28px;
`;
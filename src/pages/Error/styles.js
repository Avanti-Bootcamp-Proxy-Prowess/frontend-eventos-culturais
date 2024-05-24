import styled from "styled-components";
import { FaArrowLeft as BackIcon } from "react-icons/fa";

export const Back = styled(BackIcon)`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 40px;
    cursor: pointer;
    position: fixed;
    top: 40px;
    left: 8%;

    &:hover {
        color: #21B9CB;
    }

    @media screen and (max-width: 700px) {
        font-size: 24px;
        transition: font-size 2s
    }

    @keyframes fall-and-move {
        0% {
            transform: translateY(0) translateX(0) rotate(0);
        }
        24% {
            transform: translateY(42px) translateX(0) rotate(0);
        }
        90% {
            transform: translateY(42px) translateX(48px) rotate(60deg);
        }

        100% {
            transform: translateY(42px) translateX(44px) rotate(56deg);
        }
    }
`;

export const Heading = styled.h1`
    font-size: 16px;

    span {
        display: block;
    }

    span.page-not-found {
        color: #21B9CB;
        font-size: 1.75em;
        padding-left: 120px;
        margin-left: -120px;
        animation: fall-right 4s 1s ease-in-out forwards
    }

    span.error {
        font-size: 10em;
        font-weight: 900;
        line-height: 100%;
        color: #FE4F6A;
    }

    @media screen and (max-width: 700px) {
        font-size: 12px;
        transition: font-size 2s
    }

    @keyframes fall-left {
        0%{

        }
        25%{
            transform: rotate(-30deg);
        }
        50%{
            transform: rotate(-16deg);
        }
        100%{
            transform: rotate(-24deg);
        }
    }

    @keyframes fall-right {
        0%{

        }
        25%{
            transform: rotate(30deg);
        }
        50%{
            transform: rotate(16deg);
        }
        100%{
            transform: rotate(24deg);
        }
    }
`;

export const Container = styled.div`
    background-color: #031641;
    font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #FCFCFC;
    font-size: 16px;

    .main {
        width: 600px;
        text-align: center;
    }

    span.oops {
        font-size: 2.5em;
        font-weight: 500;
        display: block;
        padding-right: 80px;
        margin-left: 80px;
        animation: fall-left 3s 1s ease-in-out forwards;
    }

    img {
        width: 280px;
        margin-top: 20px;
        border-radius: 50%;
        animation: fall-and-move 3s ease-in 1.2s forwards;
    }

    .shadow {
        width: 160px;
        height: 25px;
        background: hsla(351, 62%, 58%);
        border-radius: 50%;
        margin: 0 auto;
        filter: blur(-10px);
        animation: shadow 1s 1.2s forwards;
    }

    @media screen and (max-width: 700px) {
        font-size: 12px;
        transition: font-size 2s
    }

    @keyframes shadow {
        0%{

        }
        100%{
            transform: scale(0, 0);
        }
    }

    @keyframes fall-and-move {
        0% {
            transform: translateY(0) translateX(0) rotate(0);
        }
        24% {
            transform: translateY(42px) translateX(0) rotate(0);
        }
        90% {
            transform: translateY(42px) translateX(48px) rotate(60deg);
        }

        100% {
            transform: translateY(42px) translateX(44px) rotate(56deg);
        }
    }
`;

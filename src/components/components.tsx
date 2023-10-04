import styled from 'styled-components'

export const Input = styled.input`
    z-index: 999;
    width: 481px;
    height: 48.701px;
    border-radius: 6px;
    background: var(--grey-scale-background-grey, #1E1F2F);
    border: 0px solid #1E1F2F;
    flex-shrink: 0;
    color: white;
    padding-left: 10px;
    font-family: Raleway;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    margin-top: 5px;

    :focus {
        outline-color: #FFF;
    }
`;

export const Logo = styled.img`
    z-index: 99;
    width: 120px;
    height: 22.299px;
    margin-top: 3%;
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));

    @media screen and (max-width: 450px) {
        margin-top: 15%;
    }
`

export const ButtonWhite = styled.button`
    display: flex;
    width: 328px;
    padding: 17px;
    border-radius: 30.5px;
    background: #FFF;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media screen and (max-width: 450px) {
        width: 339px;
    }
`

export const ButtonBlue = styled.button`
    display: flex;
    width: 328px;
    padding: 17px;
    border-radius: 30.5px;
    background: rgba(255, 255, 255, 0.10);
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: var(--grey-scale-white, #FFF);
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-top: 2%;

    @media screen and (max-width: 450px) {
        width: 339px;
        padding: 17px;
    }
`
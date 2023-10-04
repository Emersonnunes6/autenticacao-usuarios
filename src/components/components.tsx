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
        margin-top: 20%;
    }
`
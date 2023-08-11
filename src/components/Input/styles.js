import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;

    background: transparent;
    
    border: none;
    border-radius: .4rem;

    font-size: 1.4rem;
`

export const Label = styled.label`
    font-size: 1.6rem;
    display: block;
    text-align: start;
    margin-bottom: .8rem;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const Input = styled.input`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900};
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    
    border: 0;
    font-size: 1.6rem;
    width: 100%;
    height: 4.8rem;
    padding: 1.6rem 1.4rem;
    border-radius: .4rem;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`
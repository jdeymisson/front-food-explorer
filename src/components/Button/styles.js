import { styled } from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;
    padding: 1.2rem;

    border: none;
    border-radius: .4rem;

    background: ${({ theme }) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-size: 1.4rem;
    
    align-items: center;
    justify-content: center;
    gap: 1.1rem;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`
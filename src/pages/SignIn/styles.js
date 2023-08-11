import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        width: 120rem;
    }
`

export const Brand = styled.div`
    width: 100%;
    padding: 5rem;
    
    display: flex;
    align-items: center;
    justify-content: center; 
    gap: 1rem;   

    h1 {
        font-size: clamp(3.2rem, 1rem + 5vw, 4.2rem);
        color: ${({ theme }) => theme.COLORS.WHITE_100};
    }

    @media (max-width: 768px) {
        width: 100%;
        text-align: center;

        margin-top: 15.8rem;
    }
`


export const Form = styled.form`
    max-width: 78.4rem;
    height: fit-content;
    margin: auto;
    padding: 6.4rem;
    
    border-radius: 1.6rem;
    
    background: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_700};

    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 3.2rem;

> h1 {
    font-size: 3.2rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
}

> a {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-size: 1.4rem;
    text-align: center;
}

@media (min-width: 768px) {
    margin-inline: 0;
    padding: 6.4rem;
}

@media (max-width: 768px) {
    background: transparent;

    > h1 {
        display: none;
    }
}`
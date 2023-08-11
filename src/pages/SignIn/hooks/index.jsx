import { useRef, useEffect } from "react";

export const useSignIn = () => {
    const email = useRef("");
    const password = useRef("");
    const loading = useRef(false);

    const handleSignIn = () => {
        console.log("Função de fazer login");
        console.log(`Email: ${email.current}`);
        console.log(`Password: ${password.current}`)
    };

    return {
        email,
        password,
        loading,
        handleSignIn
    };
};
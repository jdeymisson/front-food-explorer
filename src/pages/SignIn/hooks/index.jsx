import { useRef } from "react";

export const useSignIn = () => {
    const email = useRef("");
    const password = useRef("");
    const loading = useRef(false);

    const handleSignIn = () => {
        console.log("Função de fazer login");
    };

    return {
        email,
        password,
        loading,
        handleSignIn
    };
};
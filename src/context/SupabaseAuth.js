import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../supabaseClient";

const userAuthContext = createContext({});

export const SupabaseAuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    function signIn(username, email, password) {
        return supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    username: username
                }
            }
        })
    }

    function logIn(email, password) {
        return supabase.auth.signInWithPassword({ email, password });
    }

    function googleLogin() {
        return supabase.auth.signInWithOAuth({
            provider: 'google'
        })
    }


    useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN') {
                setUser(session.user)
            }
            if (event === 'SIGNED_OUT') {
                // TODO: Actions to Perform on Logout
            }
        })
        return () => {
            data.subscription.unsubscribe();
        }
    }, []);


    return (
        <userAuthContext.Provider
            value={{ user, signIn, logIn, googleLogin }}
        >
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext);
}
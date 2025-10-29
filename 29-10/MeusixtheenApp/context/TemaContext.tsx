import React, { createContext, ReactNode, useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Ithema {
    temaEscuro: boolean;

    setTemaEscuro: React.Dispatch<React.SetStateAction<boolean>>;
}

const TemaContextDef = createContext<Ithema | undefined>(undefined)

export const TemaProvider = (props: { children: ReactNode }) => {
    const [temaEscuro, setTemaEscuro] = useState(false)

    return (
        <TemaContextDef.Provider value={{ temaEscuro, setTemaEscuro }}>
            {props.children}
        </TemaContextDef.Provider>
    )
}

export const useTema = ():Ithema => {
    
    const contexto= useContext(TemaContextDef)
    if(!contexto){
        throw new Error("UseTema deve ser usado dentro de um TemaProvider")
    } 
    return contexto
}

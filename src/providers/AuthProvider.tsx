import React, { ProviderProps } from "react";

import { isPlatform } from "@ionic/react";
import { PropsWithChildren, createContext } from "react";

const isNative = isPlatform('hybrid');

const options: ProviderProps = {
    clientId: '',
    discoveryUrl: '',
    scope: 'openid offline_access',
    audience: '',
    redirectUri: isNative ? '' : '',
    logoutUrl: isNative ? '' : '',
}

export const AuthContext = createContext<{}>({});

export const AuthProvider: React.FC<PropsWithChildren> = ({children}) => {
    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}

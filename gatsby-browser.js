import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import { navigate } from 'gatsby';
import { Auth0Provider } from "@auth0/auth0-react";

// Callback function is needed for gatsby's routing after login
const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || '/', { replace: true });
};

export const wrapRootElement = ({ element }) => {
    const domain = process.env.GATSBY_AUTH0_DOMAIN;
    const clientId = process.env.GATSBY_AUTH0_CLIENT_ID;

    // Ensure domain and clientId are set
    if (!domain || !clientId) {
        console.error("Auth0 domain or clientId is not set in environment variables.");
        return element; // or handle the error as needed
    }
    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: typeof window !== 'undefined' ? window.location.origin : '',
            }}
            onRedirectCallback={onRedirectCallback} // Gatsby navigate function
    >
        {element}
    </Auth0Provider>
    );
};
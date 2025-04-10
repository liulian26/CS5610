import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";

export default function Auth0ProviderWithHistory({ children }) {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={(appState) => {
        navigate((appState && appState.returnTo) || window.location.pathname);
      }}
    >
      {children}
    </Auth0Provider>
  );
}

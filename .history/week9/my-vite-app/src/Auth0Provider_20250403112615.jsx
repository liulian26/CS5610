import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";

export default function Auth0ProviderWithHistory({ children }) {
  console.log(import.meta.env);
  return (
    <Auth0Provider domain=" " clientId="">
      {children}
    </Auth0Provider>
  );
}

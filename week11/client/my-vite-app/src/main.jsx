import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router'
import './index.css'
import App from './App.jsx'
import Auth0ProviderWithHistory from "./components/Auth0Provider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </StrictMode>
  </BrowserRouter>
);

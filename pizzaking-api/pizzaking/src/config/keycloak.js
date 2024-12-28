import Keycloak from 'keycloak-js';

// Keycloak configuration
const keycloakConfig = {
  url: 'http://localhost:9192/',
  realm: 'pk-dev',
  clientId: 'auth-client',
  pkceMethod:"S256",
  redirectUri: 'http://localhost:5173/',
};
// Initialize Keycloak instance
const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
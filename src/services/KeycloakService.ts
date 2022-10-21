import Keycloak from "keycloak-js";
import axios from "axios";

const keycloak = new Keycloak({
  url:
    process.env.REACT_APP_AUTH_SERVER_URL ||
    "https://auth.dev.hiringhood.com/auth",
  realm: process.env.REACT_APP_REALM || "techsophy-platform",
  clientId: process.env.REACT_APP_CLIENT_ID || "tp-ui-core",
});

const initKeycloak = (onAuthenticatedCallback: any) => {
  keycloak
    .init({
      onLoad: "login-required",
      // silentCheckSsoRedirectUri:
      //   window.location.origin + "/silent-check-sso.html",
      pkceMethod: "S256",
    })
    .then((authenticated) => {
      if (authenticated) {
        sessionStorage.setItem("react-token", keycloak.token || "no");
        onAuthenticatedCallback();
      } else {
        doLogin();
      }
    });
};

const clearAllsessionStorage = () => {
  sessionStorage.removeItem("role");
  sessionStorage.removeItem("isAdmin");
};

const doLogin = keycloak.login;

const doLogout = () => {
  clearAllsessionStorage();
  keycloak.logout();
};

const getToken = () => keycloak.token;

const isLoggedIn = () => !!keycloak.token;

const updateToken = (successCallback?: any) =>
  keycloak.updateToken(5).then(successCallback).catch(doLogin);

keycloak.onTokenExpired = () => {
  updateToken().then(() => {
    if (keycloak?.token) {
      sessionStorage.setItem("react-token", keycloak.token);
    }
  });
};

const getUsername = () => keycloak.tokenParsed?.preferred_username;

const getUserEmail = () => keycloak.tokenParsed?.email;

const hasRole = (roles: string[]) =>
  roles.some((role: string) => keycloak.hasRealmRole(role));

const fetchTokenDifferently = async () => {
  const params = new URLSearchParams();
  params.append("client_id", process.env.REACT_APP_CLIENT_ID || "tp-ui-core");
  params.append("username", process.env.REACT_APP_KC_USERNAME || "919005464397");
  params.append("password", process.env.REACT_APP_KC_PASSWORD || "1234");
  params.append("grant_type", "password");
  const tokenData = await axios.post(
    `${process.env.REACT_APP_AUTH_SERVER_URL}realms/techsophy-platform/protocol/openid-connect/token`,
    params
  );
  return tokenData.data.access_token;
};
const fetchTokenOtherUser = async () => {
  const params = new URLSearchParams();
  params.append("client_id", process.env.REACT_APP_CLIENT_ID || "tp-ui-core");
  params.append("username", "919005464397");
  params.append("password", "1234");
  params.append("grant_type", "password");
  const tokenData = await axios.post(
    `${process.env.REACT_APP_AUTH_SERVER_URL}realms/techsophy-platform/protocol/openid-connect/token`,
    params
  );
  return tokenData.data.access_token;
};

const KeycloakService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  getUserEmail,
  hasRole,
  fetchTokenDifferently,
  fetchTokenOtherUser,
};

export default KeycloakService;

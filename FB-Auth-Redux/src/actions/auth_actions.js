import { Facebook } from "expo";
import { SecureStore } from "react-native";
import { fb_id } from "../keys/index";
import { FACEBOOK_LOGIN_FAIL, FACEBOOK_LOGIN_SUCCESS } from "./types";

// How to use SecureStore:
// SecureStore.setItemAsync('fb_token', token);
// SecureStore.getItemAsync('fb_token');

export const facebookLogin = () => async dispatch => {
  let token = await SecureStore.getItemAsync("fb_token");

  if (token) {
    // Dispatch an action saying FB login is done
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    // Start up FB Login process
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync(fb_id, {
    permissions: ["public_profile"]
  });

  if (type === "cancel") {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

  await SecureStore.setItemAsync("fb_token", token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};

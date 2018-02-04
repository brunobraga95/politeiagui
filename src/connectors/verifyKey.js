import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as act from "../actions";
import * as sel from "../selectors";

const verifyKeyConnector = connect(
  sel.selectorMap({
    email: sel.loggedInAs,
    verifyUserKey: sel.verifyUserKey,
    verifyUserKeyError: sel.verifyUserKeyError
  }),
  dispatch => bindActionCreators({ onVerify: act.onVerifyUserKey, keyMismatch: act.keyMismatch }, dispatch)
);

export default verifyKeyConnector;

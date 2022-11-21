import Button from "../../components/button/Button";
import SignUp from "../../components/sign-up-form/SignUp";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div>
        <h1>Sign in page</h1>
        <Button buttonType={"google"} onClick={logGoogleUser}>Sign in with google popup</Button>
        {/* <button onClick={logGoogleUser}>Sign in with google popup</button> */}
      </div>
      <SignUp />
    </>
  );
};

export default SignIn;

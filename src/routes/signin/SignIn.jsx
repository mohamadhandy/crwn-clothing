import Button from "../../components/button/Button";
import HeaderSigninSignup from "../../components/header-signin-signup/HeaderSigninSignup";
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
        <HeaderSigninSignup
          title={"I already have an account"}
          subTitle={"Sign in with your email and password"}
        />
        <Button buttonType={"google"} onClick={logGoogleUser}>
          Sign in with google popup
        </Button>
      </div>
      <SignUp />
    </>
  );
};

export default SignIn;

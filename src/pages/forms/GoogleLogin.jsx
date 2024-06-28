import { auth, googleProvider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

// import { GoogleLogin } from "react-google-login";

import google from "../../assets/apple.svg";

export default function YourComponent() {
  const [user] = useAuthState(auth);
  console.log(user);

  const onSuccess = (response) => {
    console.log(response);
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  // ... rest of your component code

  return (
    <>
      <div className="text-center register-input rounded-md">
        <img src={google} className=" side-bar-text inline mr-3" />

        <button onClick={signInWithGoogle}>Continue with Google</button>
      </div>

      {user && <p>{user.displayName}</p>}
    </>
  );
}

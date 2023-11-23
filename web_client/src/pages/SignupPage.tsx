import Header from "../components/Header";
import Signup from "../components/Signup";

const SignupPage = () => {
  return(
    <>
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/login"
      />
      <Signup />
    </>
  )
}

export default SignupPage

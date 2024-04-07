"use client";

import useSignupModal from "../auth/hooks/useSignupModal";

type SignupButtonProps = {
  children: React.ReactNode;
};

const SignupButton: React.FC<SignupButtonProps> = ({ children }) => {
  const signupModal = useSignupModal();

  return (
    <>
      <button
        onClick={() => {
          signupModal.onOpen();
        }}
        className="px-16 py-3 shadow font-bold bg-sky-700 text-white hover:bg-white hover:text-black border border-sky-900"
      >
        {children}
      </button>
    </>
  );
};

export default SignupButton;

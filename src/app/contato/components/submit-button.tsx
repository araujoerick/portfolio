import React from "react";

type ButtonState = "idle" | "submitting" | "success" | "error";

interface SubmitResult {
  message?: string;
}

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonState: ButtonState;
  submitResult?: SubmitResult | null;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  buttonState,
  submitResult,
  ...props
}) => {
  const isSubmitting = buttonState === "submitting";
  const isSuccess = buttonState === "success";
  const isError = buttonState === "error";

  const baseClasses =
    "neo-border neo-shadow active:neo-shadow-sm hover:neo-shadow-sm w-full cursor-pointer p-4 font-bold text-black transition-all duration-300 ease-in-out hover:translate-0.5 active:translate-0.5";

  const buttonStateClass = isSubmitting
    ? "cursor-not-allowed bg-gray-300 opacity-50"
    : isSuccess
      ? "bg-lime-400"
      : isError
        ? "bg-red-400"
        : "bg-lime-300";

  const buttonText = isSubmitting
    ? "Enviando..."
    : isSuccess
      ? `✓ ${submitResult?.message}`
      : isError
        ? `✗ ${submitResult?.message}`
        : "Enviar Mensagem";

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`${baseClasses} ${buttonStateClass}`}
      {...props}
    >
      {buttonText}
    </button>
  );
};

export default SubmitButton;

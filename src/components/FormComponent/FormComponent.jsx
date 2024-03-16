import { useForm } from "react-hook-form";
import FormSteps from "./FormSteps.jsx";
import { useState } from "react";

const FormComponent = () => {
  const [question, setQuestion] = useState("Czy te ziemaniaki są dobre?");
  const [currentStep, setCurrentStep] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  return (
    <div className="flex flex-col h-full items-center gap-y-6">
      <FormSteps currentStep={currentStep} />
      <h2>{question}</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-y-4"
      >
        <textarea
          {...register("answer", { required: true })}
          className="textarea textarea-bordered"
          placeholder="Napisz odpowiedź na pytanie..."
        ></textarea>
        {errors.answer && (
          <span className="text-error font-bold">Odpowiedz na pytanie</span>
        )}

        <button className="btn">Następne pytanie</button>
      </form>
    </div>
  );
};

export default FormComponent;

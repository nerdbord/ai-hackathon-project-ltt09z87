import { useForm } from "react-hook-form";
import FormSteps from "./FormSteps.jsx";
import { useState } from "react";
import API_KEY from "../../../API/API.js";

const answers = [];

const FormComponent = () => {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [question, setQuestion] = useState([
    "Czy posiadasz już ten produkt?",
    "Czy zakup tego produktu zagrozi twojemu budżetowi?",
    "Czy jest on niezbędny dla Ciebie?",
    "Czy sprawdziłeś opinie na temat tego produktu w internecie?",
    "W skali od 1 do 10 jak bardzo uważasz ten produkt za niezbedny?",
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const [gptAnswer, setGptAnswer] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      answers.push(data);
    }
    if (currentStep >= 4) {
      fetchGptResponse();
    }
  };

  async function fetchGptResponse() {
    const OPENAI_API_KEY = API_KEY;
    setIsLoading(true);
    setShowForm(false);
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: `Witaj, mam zamiar kupic ${answers[0]}, ten produkt ${answers[1]} mojemu budżetowi. ${question[2]} jest niezbędny dla mnie. ${answers[3]} sprawdziłem opinie w internecie. W skali od 1 do 10 ważność tego produktu dla mnie oceniam na ${answers[4]}, na podstawie tych informacji prosze odpowiedz mi w kilku punktach za i przeciw zakupowi tego produktu.`,
              },
            ],
          }),
        },
      );

      const data = await response.json();
      setGptAnswer(data.choices[0].message.content);
    } catch (error) {
      console.error("Błąd:", error);
    }
    setIsLoading(false);
  }

  return (
    <div className="flex flex-col h-full items-center gap-y-6">
      {isLoading && (
        <span className="loading loading-spinner text-success w-20 h-20"></span>
      )}
      {gptAnswer && <p>{gptAnswer}</p>}
      {showForm && (
        <>
          <FormSteps currentStep={currentStep} />
          <h2>{question[currentStep]}</h2>
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
        </>
      )}
    </div>
  );
};

export default FormComponent;

import { useForm } from 'react-hook-form'
import FormSteps from './FormSteps.jsx'
import { useState } from 'react'
import API_KEY from '../../../API/API.js'
import { Summary } from '../Summary.jsx'

const answers = []

const FormComponent = () => {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false)
  const [showForm, setShowForm] = useState(true)
  // eslint-disable-next-line no-unused-vars
  const [question, setQuestion] = useState([
    'Czy jest Ci to naprawdę potrzebne?',
    'Czy stać Cię na to bez nadszarpnięcia budżetu?',
    'Czy przeprowadziłeś wystarczający research?',
    'Czy produkt jest wysokiej jakości?',
    'Czy mogę znaleźć lepszą ofertę gdzie indziej?',
  ])
  const [currentStep, setCurrentStep] = useState(0)
  const [gptAnswer, setGptAnswer] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [auctionTitle, setAuctionTitle] = useState('Pralka')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm()

  const onSubmit = (data) => {
    if (data.answer === 'Choose') {
      setError('answer', {
        type: 'manual',
        message: 'Musisz wybrać odpowiedź!',
      })
    } else {
      clearErrors('answer')
      reset()
      if (currentStep < 5) {
        setCurrentStep(currentStep + 1)
        answers.push(data)
        console.log(answers)
      }
      if (currentStep >= 4) {
        fetchGptResponse()
      }
    }
  }

  // useEffect(() => {
  //   chrome.runtime.onMessage.addListener((message) => {
  //     if (message.action === 'title') {
  //       setAuctionTitle(message.title)
  //     }
  //   })
  // }, [])

  async function fetchGptResponse() {
    const OPENAI_API_KEY = API_KEY
    setIsLoading(true)
    setShowForm(false)
    try {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'user',
                content: `Oto informacje dotyczące mojej decyzji o zakupie produktu ${auctionTitle}: 'Czy jest Ci to naprawdę potrzebne?'. ${answers[0]}. 'Czy stać Cię na to bez nadszarpnięcia budżetu?'. ${answers[1]}. 'Czy przeprowadziłeś wystarczający research?'  ${answers[2]}. 'Czy produkt jest wysokiej jakości?' ${answers[3]}. 'Czy mogę znaleźć lepszą ofertę gdzie indziej?' ${answers[4]}. Czy, biorąc pod uwagę te informacje, powinienem dokonać zakupu? Zwróć prosze obiekt JSON [
    {
      rating: ...,
      summary: ..., }
  ], gdzie w rating ocenisz ogolnie zakup od 1 do 5 a w summary dasz krotki opis po polsku czy powinienem dokonac zakupu. `,
              },
            ],
          }),
        }
      )

      const data = await response.json()
      const parsedData = JSON.parse(data.choices[0].message.content)
      setGptAnswer(parsedData)
      console.log(gptAnswer)
    } catch (error) {
      console.error('Błąd:', error)
    }
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col h-full items-center gap-y-6">
      {isLoading && (
        <span className="loading loading-spinner text-success w-20 h-20"></span>
      )}
      {gptAnswer && <Summary gptAnswer={gptAnswer} />}
      {showForm && (
        <>
          <FormSteps currentStep={currentStep} />
          <h2>{question[currentStep]}</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-4"
          >
            <select
              {...register('answer', { required: true })}
              onChange={(e) => {
                setCurrentAnswer(e.target.value)
                if (e.target.value !== 'Choose') {
                  clearErrors('answer')
                }
              }}
              className="select select-secondary w-full max-w-xs"
            >
              <option value="Choose">Wybierz odpowiedź</option>
              <option value="Tak">Tak</option>
              <option value="Nie">Nie</option>
            </select>
            {errors.answer && (
              <span className="text-error font-bold">
                {errors.answer.message}
              </span>
            )}
            <button type="submit" className="btn">
              Następne pytanie
            </button>
          </form>
        </>
      )}
    </div>
  )
}

export default FormComponent

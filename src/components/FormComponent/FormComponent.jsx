import { useForm } from 'react-hook-form'
import FormSteps from './FormSteps.jsx'
import { useEffect, useState } from 'react'
import API_KEY from '../../../API/API.js'
import { Summary } from '../Summary.jsx'

const answers = []

const FormComponent = ({ setShowSummary }) => {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false)
  const [showForm, setShowForm] = useState(true)
  // eslint-disable-next-line no-unused-vars
  const [question, setQuestion] = useState([
    'Czy jest to impulsywny zakup?',
    'Czy jest Ci to naprawdę potrzebne?',
    'Czy produkt ma dobre opinie? ',
    'Czy stać Cię na to bez nadszarpnięcia budżetu?',
    'Czy przeprowadziłeś wystarczający research?',
    'Czy produkt jest wysokiej jakości?',
    'Czy mogę znaleźć lepszą ofertę gdzie indziej?',
    'Czy istnieje możliwość zwrotu lub wymiany?',
    'Czy zakup ten wpisuje się w moje długoterminowe cele? ',
  ])
  const [currentStep, setCurrentStep] = useState(0)
  const [gptAnswer, setGptAnswer] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [auctionTitle, setAuctionTitle] = useState('')

  useEffect(() => {
    fetchAuctionTitle()
  }, [])

  const fetchAuctionTitle = async () => {
    try {
      const response = await fetch('https://kamil-banaszek.pl/projekt/pobierz')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setAuctionTitle(data.nazwa)
    } catch (error) {
      console.error('There was a problem fetching the auction title:', error)
    }
  }

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
      if (currentStep < question.length) {
        setCurrentStep(currentStep + 1)
        answers.push(data)
      }
      if (currentStep >= 8) {
        fetchGptResponse()
      }
    }
  }

  useEffect(() => {
    chrome.runtime.onMessage.addListener((message) => {
      console.log(message)
      if (message.action === 'title') {
        setAuctionTitle(message.title)
      }
    })
  }, [])

  async function fetchGptResponse() {
    const OPENAI_API_KEY = API_KEY
    setIsLoading(true)
    setShowForm(false)
    try {
      const response = await fetch(
        'https://training.nerdbord.io/api/v1/openai/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'user',
                content: `Mam zamiar zakupić ${auctionTitle}. Zadałem sobie kilka pytań oto one: '${question[0]}' Odpowiedź ${answers[0]}. '${question[1]}' Odpowiedź: ${answers[1]}. '${question[2]}' Odpowiedź  ${answers[2]}. '${question[3]}' Odpowiedź ${answers[3]}. '${question[4]}' Odpowiedź: ${answers[4]}. '${question[5]}'. Odpowiedź: ${answers[5]}. '${question[6]}'. Odpowiedź: ${answers[6]}. '${question[7]}'. Odpowiedź: ${answers[7]}. '${question[8]}'. Odpowiedź: ${answers[8]}. '${question[9]}'. Odpowiedź: ${answers[9]}. 
                
                Czy, biorąc pod uwagę te informacje, powinienem dokonać zakupu? Zwróć prosze obiekt JSON [
    {
      rating: ...,
      summary: ..., }
  ], gdzie w rating ocenisz ogolnie zakup od 1 do 5 a w summary dasz swoje spostrzezenia odnosnie dokonania zakupu, czy jest sensowny, impuslywny czy powineinem sie wstrzymac czy moge w danej chwili go kupic. Daj ładny opis z nazwą produktu który chce zakupić i z decyzjami na które powinienem zwrócić uwage bazując na moich odpowiedziach`,
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
      alert('Api problem try again')
      setIsLoading(false)
      setGptAnswer('')
      setCurrentAnswer('')
      setShowForm(true)
      setCurrentStep(0)
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

import GPTRED from '../assets/gptred.svg'
import GPTGREEN from '../assets/gptgreen.svg'

export const Summary = () => {
  const gptAnswer = [
    {
      rating: 5,
      pros: [
        'Oszczędność czasu dzięki ograniczeniu dojazdów',
        'Produkt jest nowy i nie posiadasz podobnego',
        'Produkt poprawi Twoje codzienne życie',
      ],
      cons: [
        'Produkt nie jest lokalny',
        'Możesz zdać się na reklamę zamiast opinii innych',
        'Istnieje ryzyko, że potrzebujesz innych akcesoriów, które podniosą koszt',
      ],
    },
  ]

  const mergeProsAndCons = (pros, cons) => {
    const merged = []
    const maxLength = Math.max(pros.length, cons.length)
    for (let i = 0; i < maxLength; i++) {
      if (i < pros.length) {
        merged.push({ type: 'pro', text: pros[i] })
      }
      if (i < cons.length) {
        merged.push({ type: 'con', text: cons[i] })
      }
    }
    return merged
  }

  return (
    <div>
      <div className="max-w-[500px]">
        {gptAnswer.map((item, index) => {
          const points = mergeProsAndCons(item.pros, item.cons)
          return (
            <div key={index}>
              <ul>
                {points.map((point, index) => (
                  <li key={index}>
                    <div
                      className={`chat ${
                        point.type === 'pro' ? 'chat-start ' : 'chat-end'
                      }`}
                    >
                      <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                          <img
                            alt="gpt icon"
                            src={point.type === 'pro' ? GPTGREEN : GPTRED}
                          />
                        </div>
                      </div>
                      <div className="chat-header">
                        {point.type === 'pro' ? 'Za' : 'Przeciw'}
                      </div>
                      <div className="chat-bubble">{point.text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      <p>Ocena zakupu:</p>
      <div className="rating">
        {[1, 2, 3, 4, 5].map((rating) => (
          <input
            key={rating}
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400 cursor-default"
            checked={gptAnswer[0].rating === rating}
            disabled
          />
        ))}
      </div>
    </div>
  )
}

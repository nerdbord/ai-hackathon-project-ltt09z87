import { useState } from 'react'

export const Summary = ({ gptAnswer }) => {
  const [resume, setResume] = useState(gptAnswer)
  console.log(resume)

  return (
    <div>
      <h1 className="m-4">{resume[0].summary}</h1>
      <p>Ocena zakupu:</p>
      <div className="rating">
        {[1, 2, 3, 4, 5].map((rating) => (
          <input
            key={rating}
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400 cursor-default"
            checked={resume[0].rating === rating}
            disabled
          />
        ))}
      </div>
    </div>
  )
}

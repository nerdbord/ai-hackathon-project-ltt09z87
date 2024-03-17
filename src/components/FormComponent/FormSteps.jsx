const FormSteps = ({ currentStep }) => {
  return (
    <ul className="steps ">
      {[...Array(5)].map((_, index) => (
        <li
          key={index}
          className={`step ${index <= currentStep ? 'step-primary' : ''}`}
        ></li>
      ))}
    </ul>
  )
}

export default FormSteps

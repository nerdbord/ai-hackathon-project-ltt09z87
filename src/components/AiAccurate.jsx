const AiAccurate = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 h-full">
      <h1>Czy Ai dobrze wybrało kategorie produktu?</h1>
      <div className="flex gap-x-2">
        <button className="btn btn-success">Tak</button>
        <button className="btn btn-error">Nie</button>
      </div>
    </div>
  );
};

export default AiAccurate;

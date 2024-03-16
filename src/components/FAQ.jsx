// FAQ

const faqs = [
  {
    header: "Często zadawane pytanie 1",
    description: "Odpowiedź na często zadawane pytanie 1 znajduje się tutaj.",
  },
  {
    header: "Często zadawane pytanie 2",
    description: "Odpowiedź na często zadawane pytanie 2 znajduje się tutaj.",
  },
  {
    header: "Często zadawane pytanie 3",
    description: "Odpowiedź na często zadawane pytanie 2 znajduje się tutaj.",
  },
];
export const FAQ = () => {
  return (
    <>
      <label htmlFor="my_modal_7" className="btn">
        open FAQ
      </label>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h1 className="text-slate-400 text-2xl font-bold mb-4">
            Najczęściej zadawane pytania
          </h1>
          {faqs.map((faq, index) => (
            <SingleFAQ
              key={index}
              header={faq.header}
              description={faq.description}
            />
          ))}
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
};
const SingleFAQ = ({ header, description }) => {
  return (
    <>
      <hr className="my-4" />
      <div>
        <h2 className="text-xl font-bold mb-2">{header}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </>
  );
};

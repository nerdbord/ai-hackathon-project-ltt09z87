// FAQ.js
import React from 'react';

const FAQ = ({ isOpen, handleClose }) => {
  const faqs = [
    {
      header: "Często zadawane pytanie 1",
      description: "Odpowiedź na często zadawane pytanie 1 znajduje się tutaj.",
    },
    {
      header: "Często zadawane pytanie 2",
      description: "Odpowiedź na często zadawane pytanie 2 znajduje się tutaj.",
    },
  ];

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50" onClick={handleClose}>
          <div className="bg-gray-800 rounded-lg shadow-lg max-w-md w-full overflow-y-auto max-h-full p-4 text-center" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-0 right-0 p-2" onClick={handleClose}>x</button>
            <h1 className="text-slate-400 text-2xl font-bold mb-4">Najczęściej zadawane pytania</h1>
            {faqs.map((faq, index) => (
              <SingleFAQ key={index} header={faq.header} description={faq.description} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const SingleFAQ = ({ header, description }) => {
  return (
    <>
      <hr className="my-4"/>
      <div>
        <h2 className="text-xl font-bold mb-2">{header}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </>
  );
};

export default FAQ;

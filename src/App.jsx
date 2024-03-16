import "./App.css";
import { MainLayout } from "./components/MainLayout";
import AiAccurate from "./components/AiAccurate.jsx";
import FormComponent from "./components/FormComponent/FormComponent.jsx";
import { useState } from "react";
import { SelectInput } from "./components/SelectInput.jsx";
// import FetchDataComponent from "./components/ApiTest.jsx";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const [showAccurate, setShowAccurate] = useState(true);

  const handleAccurate = (answer) => {
    if (answer) {
      setShowForm(true);
      setShowAccurate(false);
    } else {
      setShowSelect(true);
      setShowAccurate(false);
    }
  };

  assignCategoryViaChat(
    'Ręcznik papierowy z celulozy Słonik Jumbo Maxi 300 listków dwuwarstwowy biały',
  )

  // products.forEach(product=>generateChatCompletion(product))

  return (
    <>
      <MainLayout>
        {showAccurate && <AiAccurate handleAccurate={handleAccurate} />}
        {showForm && <FormComponent />}
        {showSelect && <SelectInput />}
		{/* <FetchDataComponent/> */}
		
      </MainLayout>
    </>
  );
}

export default App;

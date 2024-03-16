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
  const products = [
    'SMACZNY ZIEMNIAK ŻÓŁTY JADALNY KARTOFLE PYRY SORAYA ZIEMNIAKI 15KG POLSKIE',
    'Ręcznik papierowy z celulozy Słonik Jumbo Maxi 300 listków dwuwarstwowy biały',
    // 'Smartwatch Samsung Galaxy Watch',
    'Konsola do gier PlayStation 5',
    'Zestaw garnków Tefal',
    // 'Perfumy Dior Sauvage',
    'Komplet pościeli z bawełny egipskiej',
    'Rower górski Scott Aspect',
    // 'Zestaw kamer bezprzewodowych Arlo',
    // 'Blender kuchenny Philips',
    'Odkurzacz bezworkowy Dyson',
    // 'Smartfon iPhone 12 Pro',
    // 'Kamera GoPro Hero 9 Black',
    // 'Słuchawki douszne JBL',
    // 'Laptop Lenovo ThinkPad',
    'Akumulatorowy wiertarko-wkrętarka Bosch',
    // 'Ekspres do kawy Nespresso',
    // 'Monitor komputerowy LG UltraGear',
    // 'Tablet Samsung Galaxy Tab S7',
    // 'Nawigacja samochodowa Garmin',
    // 'Robot kuchenny KitchenAid',
    'Zestaw piłkarski Adidas Tango',
  ]
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

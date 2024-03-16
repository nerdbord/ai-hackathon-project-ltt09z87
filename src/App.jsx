import "./App.css";
import { MainLayout } from "./components/MainLayout";
import AiAccurate from "./components/AiAccurate.jsx";
import FormComponent from "./components/FormComponent/FormComponent.jsx";

function App() {
  return (
    <>
      <MainLayout>
        {/*<AiAccurate />*/}
        <FormComponent />
      </MainLayout>
    </>
  );
}

export default App;

import './App.css'
import { MainLayout } from './components/MainLayout';
import { SelectInput } from './components/SelectInput';
import FAQ from './components/FAQ';

function App() {
//FAQ	
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
		<>
      <MainLayout>
        <SelectInput/>
	<FAQ isOpen={isOpen} handleClose={handleToggleFAQ} /> {!isOpen && (<button onClick={handleToggleFAQ}>Otwórz FAQ</button>)}
      </MainLayout>
		</>
	);
}

export default App

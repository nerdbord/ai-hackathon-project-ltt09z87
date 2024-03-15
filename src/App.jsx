import './App.css'
import { MainLayout } from './components/MainLayout';
import { SelectInput } from './components/SelectInput';
import {FAQ} from './components/FAQ';
import {Loader} from './components/Loader';
import {useState,useEffect} from "react";
import SearchComponent from './components/SearchComponent';



function App() {
  
const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
  setTimeout(() => {
    setIsLoading(false);
  }, 1);
}, []);

  return (
		<>
     {isLoading ? (
        <Loader />
      ) : (
      <MainLayout>
      <SelectInput/>
	    <FAQ/> 
      <SearchComponent />
      </MainLayout>
       )}
		</>
	);
}

export default App
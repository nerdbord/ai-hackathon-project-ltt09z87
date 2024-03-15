import './App.css'
import { MainLayout } from './components/MainLayout';
import { SelectInput } from './components/SelectInput';
import FAQ from './components/FAQ';
import {useState} from "react";

function App() {
  return (
		<>
      <MainLayout>
      <SelectInput/>
	    <FAQ/> 
      </MainLayout>
		</>
	);
}

export default App

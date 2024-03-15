import './App.css'
import React, { useState } from 'react';
import { MainLayout } from './components/MainLayout';
import { SelectInput } from './components/SelectInput';
import {FAQ} from './components/FAQ';


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
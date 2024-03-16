import './App.css'
import { MainLayout } from './components/MainLayout'
import { SelectInput } from './components/SelectInput'
import { FAQ } from './components/FAQ'
import { generateChatCompletion } from '../API'

function App() {
  generateChatCompletion(
    'SMACZNY ZIEMNIAK ŻÓŁTY JADALNY KARTOFLE PYRY SORAYA ZIEMNIAKI 15KG POLSKIE',
  )

  return (
    <>
      <MainLayout>
        <SelectInput />
        <FAQ />
      </MainLayout>
    </>
  )
}

export default App

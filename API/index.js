import axios from 'axios'
import { categories } from './categories'
export const OPEN_AI_KEY =
  '4bebe73e0e37a06315d78e10c5c8c2f8abfd5e5b7f4112b12fdc7bef19cdc5af47ab1bc43b5300a231b9a1cd05f07ef6b7bd5b59f7fb2df6a098b0ef74cd784c'

const openaiAPI = axios.create({
  baseURL: 'https://training.nerdbord.io/api/v1/openai/chat/completions',
  headers: {
    'Content-Type': 'application/json',
    Authorization: OPEN_AI_KEY,
  },
  timeout: 60000,
})

async function assignCategoryViaChat(content) {
  try {
    const product = await openaiAPI.post('', {
      model: 'gpt-3.5-turbo',
      temperature: 0,
      messages: [
        {
          role: 'system',
          content: `You are a helpful assistant categorizing products from web stores. Return only stringify JSON. Response is a object according the structure: {nameOnWebStores, whatIsIt}. Find inside the auction name what type of product the auction concerns.`,
        },
        {
          role: 'user',
          content,
        },
      ],
    })
    console.log(JSON.parse(product.data.choices[0].message.content).whatIsIt)

    const response = await openaiAPI.post('', {
      model: 'gpt-3.5-turbo',
      temperature: 0,
      messages: [
        {
          role: 'system',
          content: `You are a helpful assistant categorizing products in stores. Return only stringify JSON. Response is a object according the structure: {itemName, category} Categorize the item provided by the user into one of the following categories separated by a comma. Categories: ### ${categories}. ### Put every hand tool into category: hobby`,
        },
        {
          role: 'user',
          content: JSON.parse(product.data.choices[0].message.content).whatIsIt,
        },
      ],
    })

    return JSON.parse(response.data.choices[0].message.content)
  } catch (error) {
    console.log('error', error)
  }
}

//{product: string,
//formdata: ARRAY<{question: string, anserw: string}>}

async function itsWorthToBuy( product, formData ) {
  const systemPrompt = `You are a helpful shooping assistant. You assist users in making informed purchases. Return only stringify JSON. Response is a object according the structure: {rating: number, pros: array of strings, cons: array of strings}. Pros and Cons in Polish. Based on the form submitted by the user assess whether he should buy product. Rate that on a scale of 1 to 5 (use only intigers) and say somthing. List the pros and cons of the purchase (max 3 pros and 3 cons). Short sentences, max 100 characters per point.`

  const userPrompt = `Product: ### ${product} ###,
  User Form: ### ${formData.map(
    (question) => `Question: ${question.question}.
    User Anserw: ${question.anserw}
  `
  )} ###`

  console.log(userPrompt)

  try {
    const response = await openaiAPI.post('', {
      model: 'gpt-3.5-turbo',
      temperature: 1.2,
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content: userPrompt,
        },
      ],
    })

    console.log('DATA', response.data.choices[0].message.content)

    return response.data
  } catch (error) {
    console.log('error', error)
  }
}

export { assignCategoryViaChat, itsWorthToBuy }

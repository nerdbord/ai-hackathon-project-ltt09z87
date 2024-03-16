import axios from 'axios'

export const OPEN_AI_KEY =
  '4bebe73e0e37a06315d78e10c5c8c2f8abfd5e5b7f4112b12fdc7bef19cdc5af47ab1bc43b5300a231b9a1cd05f07ef6b7bd5b59f7fb2df6a098b0ef74cd784c'

const openaiAPI = axios.create({
  baseURL: 'https://training.nerdbord.io/api/v1/openai',
  headers: {
    'Content-Type': 'application/json',
    Authorization: OPEN_AI_KEY,
  },
  timeout: 60000,
})

async function generateChatCompletion(content) {
  try {
    const response = await openaiAPI.post('/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You are a helpful assistant. Answer in polish. Return only stringify JSON. Categorize the item provided by the user into one of the following categories: electronics, clothes, hobbies, food',
        },
        {
          role: 'user',
          content,
        },
      ],
    })
    // return response.data as ChatCompletionResponse
    console.log('RESPONSE', response)
    console.log('DATA', response.data)

    return response.data
  } catch (error) {
    console.log('error', error)
  }
}

export { generateChatCompletion }

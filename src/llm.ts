export function createLLMResponse(message: string): Promise<string> {  
  return getResponse().then(response => {
    console.log('\ndata were getted')
    return response as string
  })
}

async function getResponse() {
  try {
    console.log('\nfetching data...')
    const response = await fetch('http://127.0.0.1:5000/he11')
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`)
    }

    const contentType = response.headers.get('content-type')
    if (contentType && contentType.includes('application/json')) {
      return 'some json)'
      //return await response.json()
    } else {
      return await response.text()
    }

  } catch (error) {
    console.log(`Error fetching data:\n ${error}`)
    return 'Error occured'
  }
}
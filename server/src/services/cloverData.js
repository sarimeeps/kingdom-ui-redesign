import 'dotenv/config'

const CLOVER_BASE_URL = process.env.CLOVER_BASE_URL
const CLOVER_MERCHANT_ID = process.env.CLOVER_MERCHANT_ID
const CLOVER_API_TOKEN = process.env.CLOVER_API_TOKEN

export async function loadInventory(categoryId) {

    const params = new URLSearchParams({
        limit: 100,
        offset: 0,
        expand: 'itemStock'
    })

    const response = await fetch(
        `${CLOVER_BASE_URL}/v3/merchants/${CLOVER_MERCHANT_ID}/categories/${categoryId}/items?${params}`,
        {
            headers: {
                'Authorization': `Bearer ${CLOVER_API_TOKEN}`,
                'User-Agent': 'Kingdom-App/1.0'
            }
        }
    )

    console.log(categoryId)

    if (!response.ok){
        const errorText = await response.text()
        console.error(`Clover API error (${response.status}):`, errorText)
        const error = new Error('Clover API request failed')
        error.status = response.status
        throw error
    }

    console.log('Status:', response.status)
    const data = await response.text()

    if (!data){
        const error = new Error('Empty response from Clover')
        error.status = response.status
        throw error 
    }

    return JSON.parse(data)


}


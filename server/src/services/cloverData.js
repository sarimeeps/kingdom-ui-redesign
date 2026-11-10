import 'dotenv/config'

const CLOVER_BASE_URL = process.env.CLOVER_BASE_URL
const CLOVER_MERCHANT_ID = process.env.CLOVER_MERCHANT_ID
const CLOVER_API_TOKEN = process.env.CLOVER_API_TOKEN

async function fetchPage(categoryId, { limit, offset }) {
    const params = new URLSearchParams({
        limit,
        offset,
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

    if (!response.ok) {
        const errorText = await response.text()
        console.error(`Clover API error (${response.status}):`, errorText)
        const error = new Error('Clover API request failed')
        error.status = response.status
        throw error
    }

    const data = await response.json()
    return data.elements ?? []

}

export async function loadInventory(categoryId, {max = Infinity, pageSize = 100} = {}) {

    const elements = []
    let offset = 0

    while (elements.length < max){
        const limit = Math.min(pageSize, max - elements.length)
        const page = await fetchPage(categoryId, {limit, offset})

        elements.push(...page)

        if(page.length < limit) break
        offset += page.length
    }
    return {elements}
}


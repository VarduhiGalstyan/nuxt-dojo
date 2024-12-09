export default defineEventHandler(async (event) => {

    // const { name } = useQuery(event)

    // const { age } = await useBody(event)

    const { currencyKey } = useRuntimeConfig()

    const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`)

    return data
})
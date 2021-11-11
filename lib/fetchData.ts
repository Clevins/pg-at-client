import handleFetchError from 'lib/handleFetchError'

export default async function fetchData(
  apiUrl: string | undefined,
  endpoint: string,
  errorMsg: string,
) {
  const res = await fetch(`${apiUrl}/${endpoint}`)
  const data = await res.json()
  handleFetchError(data, errorMsg)
  return data
}

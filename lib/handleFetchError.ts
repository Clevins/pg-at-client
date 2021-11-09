export default function handleFetchError(req: any) {
  if (req.error) {
    throw new Error(
      `Error with Homepage Request: ${req.error} \nStatus Code: ${req.statusCode}`,
    )
  }
  return req
}

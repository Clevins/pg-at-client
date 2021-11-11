export default function handleFetchError(req: any, msg: string) {
  if (req.error) {
    throw new Error(`${msg}: ${req.error} \nStatus Code: ${req.statusCode}`)
  }
  return req
}

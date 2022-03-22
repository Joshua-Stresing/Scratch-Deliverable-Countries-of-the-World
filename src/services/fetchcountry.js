import { client, checkError } from './client';

export default async function fetchCountries() {
  const response = await client.from('countries').select('*');
  console.log(response);
  return checkError(response);
}
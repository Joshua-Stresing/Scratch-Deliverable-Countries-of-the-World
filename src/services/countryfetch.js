import { client, checkError } from './client';

export default async function getCountries() {
  const resp = await client.from('countries').select('*');
  return checkError(resp); 
}
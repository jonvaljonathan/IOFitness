import 'isomorphic-unfetch';
import getRootUrl from './getRootUrl';

export default async function sendRequest(path, options = {}) {
  const headers = {
    ...(options.headers || {}),
    'Content-type': 'application/json; charset=UTF-8',
  };
  console.log('ROOT URL sendRequest');
  console.log(getRootUrl());
  console.log('path - sendRequest');
  console.log(path);
  const response = await fetch(`${getRootUrl()}${path}`, {
    method: 'POST',
    credentials: 'include',
    ...options,
    headers,
  });

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error);
  }

  return data;
}

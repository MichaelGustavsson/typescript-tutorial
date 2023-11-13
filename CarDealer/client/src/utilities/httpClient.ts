async function get<T>(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Det gick inte att hämta data');
  }
  const jsonResult = (await response.json()) as unknown;
  return jsonResult as T;
}

async function post<T, R>(url: string, body: T) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (response.status !== 201) {
    throw new Error('Ett fel inträffade när data skulle sparas');
  }

  const jsonResult = (await response.json()) as unknown;
  return jsonResult as R;
}

export { get, post };

export const fetchData = async function http<BackendResponse>(
  request: RequestInfo
): Promise<BackendResponse> {
  const response = await fetch(request);
  return await response.json();
};

import { fetchData } from '../../redux/home/home';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
}));

beforeEach(() => {
  fetch.mockClear();
});

it('Fetch function works correctly', async () => {
  const response = await fetchData();
  expect(response).toEqual({ rates: { CAD: 1.42 } });
  expect(fetch).toHaveBeenCalledTimes(1);
});

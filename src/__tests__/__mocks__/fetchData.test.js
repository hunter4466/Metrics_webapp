import { fetchData } from '../../redux/home/home';

beforeEach(() => {
  fetch.resetMocks();
});

describe('Home component', () => {
  it('Fetch function works correctly', async () => {
    fetch.mockResponseOnce(JSON.stringify({ Mock: 'MockedData' }));
    const response = await fetchData();
    expect(response).toEqual({ Mock: 'MockedData' });
  });
});

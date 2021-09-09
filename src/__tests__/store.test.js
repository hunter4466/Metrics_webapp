import { storeFetchedData, detailDataReducer } from '../redux/home/home';

describe('Home component', () => {
  test('Fetched data stores correctly', () => {
    const previousState = [];
    expect(detailDataReducer(previousState, storeFetchedData({ test: 'Run the tests' }))).toEqual(
      { test: 'Run the tests' },
    );
  });

  test('Function replaces previous state correctly', () => {
    const previousState = {
      state: 'Previous State',
      content: 'previous content',
    };
    const newState = {
      state: 'New State',
      content: 'New content',
    };
    expect(detailDataReducer(previousState, storeFetchedData(newState))).toEqual(newState);
  });
});

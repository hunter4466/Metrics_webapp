import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Home from '../components/home';
import store from '../redux/configureStore';

it('Renders correctly', () => {
  const tree = renderer.create(<Provider store={store}><Home /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Home component', () => {
  test("Rendererd component contains 'STATS BY COMPANY'", () => {
    render(<Provider store={store}><Home /></Provider>);
    expect(screen.getByText(/STATS BY COMPANY/i)).toBeInTheDocument();
  });
  test("Rendererd component contains 'Cripto Up to date'", () => {
    render(<Provider store={store}><Home /></Provider>);
    expect(screen.getByText(/Cripto Up to date/i)).toBeInTheDocument();
  });
});

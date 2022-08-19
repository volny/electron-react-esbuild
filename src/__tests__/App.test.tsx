import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import { App } from '../App';

beforeAll(() => {
  window.myAPI = {
    updateTitle: jest.fn(),
  };
});

test('render App component', async () => {
  render(<App />);

  const spy = jest.spyOn(window.myAPI, 'updateTitle');
  await userEvent.click(screen.getByRole('button', { name: 'Count' }));

  expect(spy).toHaveBeenCalled();
  expect(screen.getByRole('heading')).toHaveTextContent('1');
});

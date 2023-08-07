import { render, screen } from '@testing-library/react';
import AppLayout from '../../layouts/AppLayout';

describe('App layout tests', () => {
  test('test example', () => {
    render(<AppLayout />);

    expect(screen.getByText('hello')).toBeTruthy();
  });
});

// import necessary react testing library helpers here
import { render, screen , fireEvent} from '@testing-library/react';
// import the Counter component here
import App from '../components/App';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'



beforeEach(() => {
  // Render the Counter component here
  render(<App />)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const counterMessage = screen.getByText(/0/i);
  expect(counterMessage).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  userEvent.click(screen.getByText('+'))
  expect(screen.getByText('1')).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  userEvent.click(screen.getByText('-'))
  expect(screen.getByText('-1')).toHaveTextContent('-1');
});

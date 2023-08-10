import AppLayout from './layouts/AppLayout';
import './styles/global.scss';

// Add the event listener to capture CSP violation reports
window.addEventListener('securitypolicyviolation', (event) => {
  const { blockedURI, violatedDirective } = event;
  console.log('CSP Violation Report:');
  console.log('Blocked URI:', blockedURI);
  console.log('Violated Directive:', violatedDirective);
});

function App() {
  return <AppLayout />;
}

export default App;

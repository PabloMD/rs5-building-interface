
import './App.css';
import { DialogExample } from './pages';
import Section from './components/Layout';
import SnackbarExample from './pages/SnackbarExample';

function App() {
  return (
    <div className="App">
      <Section title="2. Snackbar">
        <SnackbarExample />
      </Section>
      <Section title="1. Dialog window">
        <DialogExample />
      </Section>
    </div>
  );
}

export default App;

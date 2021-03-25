
import './App.css';
import { DialogExample } from './components/Dialog';
import Section from './components/Layout';

function App() {
  return (
    <div className="App">
      <Section title="1. Dialog window">
        <DialogExample />
      </Section>
    </div>
  );
}

export default App;

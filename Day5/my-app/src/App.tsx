import ToggleButton from './components/ToggleButton';
import Counter from './components/Counter';
import InputDisplay from './components/InputDisplay';
import ColorPicker from './components/ColorPicker';
import Form from './components/Form';
import CheckBoxList from './components/CheckBoxList';
import HoverBox from './components/HoverBox';
import SearchFilter from './components/SearchFilter';

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-8 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. ToggleButton</h2>
        <ToggleButton />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Counter</h2>
        <Counter />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. InputDisplay</h2>
        <InputDisplay />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. ColorPicker</h2>
        <ColorPicker />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Form</h2>
        <Form />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">6. CheckBoxList</h2>
        <CheckBoxList />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">7. HoverBox</h2>
        <HoverBox />
      </section>

      <section className="space-y-4 pb-10">
        <h2 className="text-2xl font-semibold">8. SearchFilter</h2>
        <SearchFilter />
      </section>
    </main>
  );
}
import './index.css'; // Ensure Tailwind CSS is imported
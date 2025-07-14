import { useState, type FormEvent } from 'react';

export default function Form() {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert(`Submitted:\n${JSON.stringify(form, null, 2)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 w-80 p-4 border rounded bg-gray-50"
    >
      <input
        name="name"
        className="w-full px-2 py-1 border rounded"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        type="email"
        className="w-full px-2 py-1 border rounded"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <button
        className="w-full px-4 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700"
      >
        Submit
      </button>
    </form>
  );
}

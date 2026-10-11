import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';

export default function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    setItems([...items, { id: Date.now(), text: value }]);
    setText('');
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <main className="container">
      <h1>Schedule Tracker</h1>

      <form className="add-form" onSubmit={handleAdd}>
        <Input
          id="schedule"
          label="일정"
          placeholder="일정을 입력하세요"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit">추가</Button>
      </form>

      {items.length === 0 ? (
        <p className="empty">아직 일정이 없어요.</p>
      ) : (
        <ul className="list">
          {items.map((item) => (
            <li key={item.id}>
              <span>{item.text}</span>
              <Button variant="danger" onClick={() => handleDelete(item.id)}>
                삭제
              </Button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

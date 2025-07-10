import React, { useState } from 'react';
import UserProfile from './UserProfile';
import Button from './Button';
import Alert from './Alert';
import PostList from './PostList';
import DataLoader from './DataLoader';
import AuthPanel from './AuthPanel';
import LikeButton from './LikeButton';
import FeedbackForm from './FeedbackForm';
import SettingsPanel from './SettingsPanel';
import BookList from './BookList';
import ProductCard from './ProductCard';
import TaskList from './TaskList';
import ShoppingCart from './ShoppingCart';
import ListContainer from './ListContainer';
import Card from './Card';
import ThemeSwitcher from './ThemeSwitcher';

function App() {
  const [theme, setTheme] = useState('light');
  const posts = [
    {
      id: 1,
      title: 'Getting Started with React Components',
      content: 'Learn how to build reusable React components from scratch...',
      thumbnail: 'https://via.placeholder.com/300x180?text=React',
      author: 'Alice'
    },
    {
      id: 2,
      title: 'Modern CSS Techniques for Web Development',
      content: 'Explore the latest CSS features and techniques...',
      thumbnail: 'https://via.placeholder.com/300x180?text=CSS',
      author: 'Bob'
    },
    {
      id: 3,
      title: 'JavaScript ES6+ Features You Should Know',
      content: 'Master the essential ES6+ features like arrow functions, async/await...',
      thumbnail: 'https://via.placeholder.com/300x180?text=JS',
      author: 'Charlie'
    }
  ];
    const books = [
    { id: 1, title: 'Book A', author: 'Author X', year: 2020 },
    { id: 2, title: 'React Programming', author: 'John Smith', year: 2023 },
    { id: 3, title: 'Advanced JavaScript', author: 'Jane Doe', year: 2022 },
    { id: 4, title: 'UI/UX Design', author: 'Mike Johnson', year: 2021 },
    { id: 5, title: 'Database Systems', author: 'Sarah Wilson', year: 2024 },
    { id: 6, title: 'Computer Networks', author: 'David Brown', year: 2019 }
  ];
  const products = [
    { id: 1, name: 'Wireless Headphones', price: 99.99, isInStock: true },
    { id: 2, name: 'Smart Watch', price: 249.99, isInStock: false },
    { id: 3, name: 'Bluetooth Speaker', price: 79.99, isInStock: true },
    { id: 4, name: 'Gaming Mouse', price: 59.99, isInStock: true }
  ];
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Complete project documentation', completed: false },
    { id: 2, text: 'Review code changes', completed: true },
    { id: 3, text: 'Update dependencies', completed: false },
    { id: 4, text: 'Write unit tests', completed: false },
    { id: 5, text: 'Deploy to staging', completed: true },
    { id: 6, text: 'Conduct team meeting', completed: false },
    { id: 7, text: 'Fix reported bugs', completed: false },
    { id: 8, text: 'Optimize database queries', completed: true }
  ]);
  const handleToggle = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      text: '',
      completed: false,
      isEditing: true, // 👈 New task starts in editing mode
    };
    setTasks(prev => [...prev, newTask]);
  };

  const handleUpdateTaskText = (id: number, newText: any) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const handleBlurOrEnter = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, isEditing: false } : task
      )
    );
  };

  const handleClearCompleted = () => {
    setTasks(prev => prev.filter(task => !task.completed));
  };

  const [showList, setShowList] = useState(true);
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <div style={{ padding: '2rem' }}>
      <UserProfile
        name="Alice"
        age={25}
        bio="I'm a frontend developer who loves building clean UIs."
      />
      <UserProfile
        name="Bob"
        age={30}
        bio="I'm a backend engineer specializing in Node.js and databases."
      />
      <UserProfile
        name="Charlie"
        age={22}
        bio="I'm a student learning full-stack development and React."
      />
      <h3>Button Types:</h3>
      <Button text="Primary" type="primary" onClick={undefined} />
      <Button text="Outline" type="outline" onClick={undefined} />
      <Button text="Default" type="default" onClick={undefined} />
      <Button text="Text" type="text" onClick={undefined} />
      <Button text="Link" type="link" onClick={undefined} />
      <Alert type="success" message="Your message has been sent successfully." />
      <Alert type="error" message="A problem has occurred while submitting your data." />
      <Alert type="warning" message="There was a problem with your network connection." />
      <Alert type="info" message="Please read the comments carefully." />
      <Alert type="success" message="" /> {/* This will not render */}
      <div>
        <h2 style={{ textAlign: 'center' }}>Recent Posts</h2>
        <PostList posts={posts} />
      </div>
      <div>
        <h2 style={{ textAlign: 'center' }}>Data Loading Status</h2>
        <DataLoader />
      </div>
      <div>
        <h2 style={{ textAlign: 'center' }}>Authentication Panel</h2>
        <AuthPanel />
      </div>
      <div>
        <h2 style={{ textAlign: 'center' }}>Like Counter</h2>
        <LikeButton />
      </div>
      <div>
        <h2 style={{ textAlign: 'center' }}>User Feedback</h2>
        <FeedbackForm />
      </div>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Prop Drilling Example</h2>

        <div style={{ marginBottom: '1rem' }}>
          <button onClick={() => setTheme('light')}>Light Theme</button>{' '}
          <button onClick={() => setTheme('dark')}>Dark Theme</button>
        </div>
        <SettingsPanel theme={theme} />
      </div>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <BookList books={books} />
      </div>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>🛒 Product List</h2>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {products.map((p) => (
            <ProductCard
              key={p.id}
              name={p.name}
              price={p.price}
              isInStock={p.isInStock}
            />
          ))}
        </div>
      </div>
      <TaskList
        tasks={tasks}
        onTaskToggle={handleToggle}
        onAddTask={handleAddTask}
        onClearCompleted={handleClearCompleted}
        onUpdateTaskText={handleUpdateTaskText}
        onFinishEditing={handleBlurOrEnter}
      />
      <div>
        <ShoppingCart />
      </div>
      <div>
        <ListContainer items={items} />
      </div>
      <div>
        <Card>
          <UserProfile name="Alice" age={25} bio={undefined} />
        </Card>

        <Card>
          <Button text="Click Me" type="primary" onClick={() => alert('Hello!')} />
        </Card>
      </div>
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default App;

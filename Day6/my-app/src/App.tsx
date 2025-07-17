import { useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import ColorSplash from './components/ColorSplash';
import MountNotice from './components/MountNotice';
import PageTitle from './components/PageTitle';
import CountDisplay from './components/CountDisplay';
import ThemeBox from './components/ThemeBox';
import MirrorInputs from './components/MirrorInputs';
import Farewell from './components/Farewell';
import UnmountTracker from './components/UnmountTracker';
import SessionEnd from './components/SessionEnd';
import Stopwatch from './components/Stopwatch';
import MousePosition from './components/MousePosition';
import WindowDimensions from './components/WindowDimensions';
import KeyDisplay from './components/KeyDisplay';
import ColorFlasher from './components/ColorFlasher';

export default function App() {
  const [visible, setVisible] = useState({
    welcome: false,
    splash: false,
    mountNotice: false,
    title: false,
    counter: false,
    theme: false,
    mirror: false,
    farewell: false,
    unmount: false,
    session: false,
    stopwatch: false,
    mouse: false,
    window: false,
    key: false,
    flasher: false,
  });

  const toggle = (key: keyof typeof visible) => {
    setVisible((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">🔁 useEffect Practice Playground</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.keys(visible).map((key) => (
          <button
            key={key}
            className={`px-4 py-2 rounded text-white transition ${
              visible[key as keyof typeof visible] ? 'bg-red-500' : 'bg-blue-500'
            }`}
            onClick={() => toggle(key as keyof typeof visible)}
          >
            {visible[key as keyof typeof visible] ? 'Hide' : 'Show'} {key}
          </button>
        ))}
      </div>

      <div className="space-y-6 mt-6">
        {visible.welcome && <WelcomeMessage />}
        {visible.splash && <ColorSplash />}
        {visible.mountNotice && <MountNotice />}
        {visible.title && <PageTitle />}
        {visible.counter && <CountDisplay />}
        {visible.theme && <ThemeBox />}
        {visible.mirror && <MirrorInputs />}
        {visible.farewell && <Farewell />}
        {visible.unmount && <UnmountTracker />}
        {visible.session && <SessionEnd />}
        {visible.stopwatch && <Stopwatch />}
        {visible.mouse && <MousePosition />}
        {visible.window && <WindowDimensions />}
        {visible.key && <KeyDisplay />}
        {visible.flasher && <ColorFlasher />}
      </div>
    </div>
  );
}

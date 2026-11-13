import ReactDOM from 'react-dom/client';
import En from '../pages/En';
import '../index.css';

const container = document.getElementById('root')!;

const hydrate = () => {
  if (container.hasChildNodes()) {
    ReactDOM.hydrateRoot(container, <En />);
  } else {
    ReactDOM.createRoot(container).render(<En />);
  }
};

if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(hydrate);
  } else {
    setTimeout(hydrate, 50);
  }
}


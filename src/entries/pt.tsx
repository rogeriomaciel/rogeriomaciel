import ReactDOM from 'react-dom/client';
import Pt from '../pages/Pt';
import '../index.css';

const container = document.getElementById('root')!;

const hydrate = () => {
  if (container.hasChildNodes()) {
    ReactDOM.hydrateRoot(container, <Pt />);
  } else {
    ReactDOM.createRoot(container).render(<Pt />);
  }
};

if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(hydrate);
  } else {
    setTimeout(hydrate, 50);
  }
}

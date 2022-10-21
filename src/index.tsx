import ReactDOM from 'react-dom';
import { App } from './App';
ReactDOM.render(<App />, document.getElementById('react_root'));

if (import.meta.hot) {
  import.meta.hot.accept();
}

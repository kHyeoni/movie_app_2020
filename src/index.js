import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// React 18부터는 ReactDOM.render() 대신 createRoot()를 사용하여 렌더링합니다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// 기존 방식
// ReactDOM.render(<App />, document.getElementById('root'));
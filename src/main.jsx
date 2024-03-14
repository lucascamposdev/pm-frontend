import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Redux
import { Provider } from 'react-redux'
import store from './store.js'
import StyledToastContainer from '@styles/Toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>, 
)

ReactDOM.createRoot(document.getElementById('toast-root')).render(
      <StyledToastContainer 
      position="bottom-left" 
      newestOnTop 
      autoClose={2000} 
      hideProgressBar 
      closeOnClick
      limit={3}
      icon={false}
      closeButton={false}/>
,
)

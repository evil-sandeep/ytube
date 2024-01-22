import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from '../src/utils/store'
import MainComponent from './components/MainComponent'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchVedio from './components/WatchVedio';

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element: <MainComponent/>
      },
      {
        path:'watch',
        element: <WatchVedio/>
      }
    ]
  }
]) 

function App() {

  return (
    <Provider store={store}>
      <div >

        <Header />
        <RouterProvider  router={appRouter}/>

      </div>
    </Provider> 
  );
}

export default App;

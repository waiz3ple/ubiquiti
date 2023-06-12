import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import GridList from './components/DataViews/GridList';
import TableList from './components/DataViews/TableList';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index element={<TableList />} />
      <Route path="grid" element={<GridList />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;

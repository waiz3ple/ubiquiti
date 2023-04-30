import axios from 'axios';
import { useQuery } from 'react-query';

import GlobalStyle from "./GlobalStyles";
import Header from "./components/Header";
import Toolbar from './components/Toolbar';

function App() {
   const { data, isLoading, isError } = useQuery('ubquiti-api', ()=> {
     return axios.get('https://static.ui.com/fingerprint/ui/public.json')
    })
console.log(data)
  return (
        <div>
          <GlobalStyle/>
          <Header user='John Smith'/>
          <Toolbar/>
        </div>
  );
}

export default App;

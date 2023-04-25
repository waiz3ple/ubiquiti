import axios from 'axios';
import { useQuery } from 'react-query';

import GlobalStyle from "./GlobalStyles";
import PageHeader from "./components/PageHeader";

function App() {
   const { data, isLoading, isError } = useQuery('ubquiti-api-data', ()=> {
     return axios.get('https://static.ui.com/fingerprint/ui/public.json')
    })
console.log(data)
  return (
        <div>
          <GlobalStyle/>
          <PageHeader user='John Smith'/>
        </div>
  );
}

export default App;

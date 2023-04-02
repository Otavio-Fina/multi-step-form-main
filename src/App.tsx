import { useSelector } from 'react-redux'; 
import { RootState } from './app/store';

import Background from './components/Background'
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import Form3 from './components/Form3'
import Form4 from './components/Form4'
import Form5 from './components/Form5'

function App() {


  const pagination = useSelector((state:RootState) => state.infoData.pagination)

  function Page() {
    switch (pagination) {
      case 1:
        return <Form1 />
      case 2:
        return <Form2 />
      case 3:
        return <Form3 />
      case 4:
        return <Form4 />
      case 5:
        return <Form5 />
      default:
        return <Form1 />
    }
  }

  return (
    <div className="App"> 
      <Background />
      <Page></Page>
    </div>
  )
}

export default App

import Card from '../components/Card'
import './App.css'

function App() {
    const items = ['React','Javascript','Vite','Hecho Jt'];


  return (
    <section>
      <h1>Hola</h1>
      <Card title="My Card one" description="The Card of course top"/>
      <Card title="My Card two" description="The Card of course favorite"/>
      <Card title="My Card three" description="The Card of course number one"/>


      <ul>
        {
          items.map((item,index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </section>
  );
}

export default App

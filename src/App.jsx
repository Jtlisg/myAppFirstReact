import ToggleButton  from '../components/ToggleButton';
import Counter from '../components/Counter';
import Card from '../components/Card';
import './App.css';

function App() {
    const items = ['React','Javascript','Vite','Hecho Jt'];


  return (
    <section>

      {/* component ToggleButton  */}
      <ToggleButton/>

      {/* component Counter */}
      <Counter/>
      
      
      <h1>Hola</h1>

      {/* component Cards */}
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

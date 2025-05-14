import UserListWithLoanding from '../components/UserListWithLoanding';
import UserList from '../components/UserList';
import StaticComponent from '../components/StaticComponent';
import Button  from '../components/Button';
import CounterWithEffect from '../components/CounterWithEffect';
import NameForm from '../components/NameForm';
import ToggleButton  from '../components/ToggleButton';
import Counter from '../components/Counter';
import Card from '../components/Card';
import './App.css';

function App() {
    const items = ['React','Javascript','Vite','Hecho Jt'];


  return (
    <section>
      
      <UserListWithLoanding></UserListWithLoanding>

      {/* usando el componente userList */}
      {/* <UserList></UserList> */}
      

      {/* usando el componente estatico */}
      <StaticComponent></StaticComponent>

      {/* usando el button con styled */}
      <Button gray>Gray</Button>
      <Button blue>Blue</Button>

      <h2>Counter with effect</h2>
      {/* component CounterWithEffect */}
      <CounterWithEffect/>

      <h2>Name Form</h2>
      {/* component NameForm  */}
      <NameForm/>

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

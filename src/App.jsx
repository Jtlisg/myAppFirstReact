
import './App.css'

function App() {
    const items = ['React','Javascript','Vite','Hecho Jt'];


  return (
    <section>
      <h1>Hola</h1>
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

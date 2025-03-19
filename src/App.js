import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <input id=''/>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Folio</th>
            <th scope="col">fecha</th>
            <th scope="col">cliente</th>
            <th scope="col">telefono</th>
            <th scope="col">cargador</th>
            <th scope="col">precio</th>
            <th scope="col">status</th>
            <th scope="col">equipo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;

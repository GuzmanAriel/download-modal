import logo from './logo.svg';
import './App.css';
import MaterialItem from './components/MaterialItem/MaterialItem';

function App() {
  return (
    <div className="App">
      <div className="gv__container">
        <div className="gv__header">
          <h1>Download Modal</h1>
          <p>This is a download modal. Once you click the icon, the modal will appear. 
            It will take the user through a series of steps dependant on what is present in the JSON. The JSON is set through what authors input through Sitecore.</p>
        </div>
        <MaterialItem />
      </div>   
    </div>
  );
}

export default App;

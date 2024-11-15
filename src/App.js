import logo from './logo.svg';
import './App.css';
import MaterialItem from './js/components/MaterialItem/MaterialItem';
import Container from './js/components/Container/Container';

function App() {
  return (
    <div className="App">
      <div className="gv__container">
        <div className="gv__header">
          <h1>Download Modal</h1>
          <p>This is a download modal. Once you click the icon, the modal will appear. 
            It will take the user through a series of steps dependant on what is present in the JSON. The JSON is set through what authors have input through Sitecore. 
            Although this example is not set through Sitecore, the JSON is set up the same way.</p>
        </div>
        <Container/>
      </div>   
    </div>
  );
}

export default App;

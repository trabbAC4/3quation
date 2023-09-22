import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div class="container">
      <form> 
        <h1 class = "text-primary"> Average </h1> 
      <div class = "row">
        <div class = "col-4">
          <label class= "form-label"></label>
        </div>
        <div class = "col-4"></div>
        <div class = "col-4"></div> 
      </div>
      <div class = "row">
        <div class = "col-4">2</div>
        <div class = "col-4"></div>
        <div class = "col-4"></div> 
      </div>
      <div class = "row">
        <div class = "col-4">3</div>
        <div class = "col-4"></div>
        <div class = "col-4"></div> 
      </div>
      </form>
    </div>
  );
}

export default App;

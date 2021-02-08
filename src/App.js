import Header from "./components/Header";
import  SearchItem from "./components/SearchItem"
import Category from "./components/Category";
import 'semantic-ui-css/semantic.min.css';
import './base.css';
const App=()=> {
  return (
    <div>
     <Header/>
     <SearchItem/>
     <Category/>
    </div>
  );
}

export default App;

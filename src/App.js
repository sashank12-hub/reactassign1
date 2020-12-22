import logo from './logo.svg';
import './App.css';
import {Card} from './cards'
function App() {
  return (
    <div className="App">
    <header>
    <div>
    <div className="head1 head2">
    <a class="logo" href="#">
    <div>
    <div class="logod logol">EDYODA</div>
    <p class="stories">Stories</p></div></a>

    <p className="explore">Explore Categories <span><img className="imgs" alt="Dropdown Icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg=="/></span></p>
    <p className="text"> EdYoda is free learning and knowledge<br/>

                        sharing platform for techies  </p>
      <button className="t">Go To Main Website</button>
    
    </div></div>
    </header>

    <div className="rest">
    <h1 className="resth1">Latest Posts</h1>
    <h3 class="resth3">Filter by Category</h3>
    
    <div className="categories_container">
        <p  className="categories  all">All</p>
        <p class="categories">Artificial Intelligence</p>
        <p class="categories">Cloud Computing</p>
        <p class="categories">DevOps</p>
        <p class="categories">Programming Languages</p>
        <p class="categories">Mobile Application Development</p>
        <p class="categories">Technology and Tools</p>
        </div>
        <div className="categories_container2">
        <p class="categories">Get a job in a Tech company</p>
        <p class="categories">Others</p>
    </div>
    </div>

   


     <Card/>

     <div className="footer"></div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import mountain from './static/mountain.png'
import ManComputer from './static/man-computer.png'
function App() {
  return (
    <div className="App">
      <NavBar />
      <img className="bg-mountain" src={mountain} alt='mountain' />
      <div className="content">
        <span className="NewPeakTitle"><strong>New Peak Computing</strong></span>
        <div className='Blue-block'>
          <div className='Block-flex'>
            <div className="Summary">
              <div className='Text-content'>
                New Peak Computing is a Website development firm with over 20 years of experience in blockchain, manufacturing, and other industries.<br />
                We provide Web development services to small business, startups and enterprises across a range of industries.
              </div>
              <button className="Contact-button">Start your project</button>
            </div>
            <img src={ManComputer} alt="laptop with man" />

          </div>

        </div>
        <div className='Light-block'>
          <div className='Services'>
          <div className="Text-content">
            <h2>Our Services</h2>
            
          </div>
            <div className='Block-flex'>
              <div className="Service-card">
                <h2>Custom Web Development</h2>
                <p>Create your website with our expert crew</p>
              </div>
              <div className="Service-card">
                <h2>UI/UX Design</h2>
                <p>Our Senior React dev @TrissisWaifu will make your website nice and easy to use</p>
              </div>
              <div className="Service-card">
                <h2>Web App Creation and Testing</h2>
                <p>Not just Testing but also Making!</p>
              </div>
              <div className="Service-card">
                <h2>Maintenance &amp; Updates</h2>
                <p>We'll make sure your code is nice and clean</p>
              </div>
            </div>
          </div>
          <div className="Blue-block">
            
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;

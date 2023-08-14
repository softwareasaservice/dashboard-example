import {Dashboard} from '@softwareasaservice/dashboard';
import pico from '@softwareasaservice/dashboard/dist/index.css';

function App() {
  return (
    <div>
      <Dashboard
        brand={<>Acme</>}
        home={<CustomTour></CustomTour>}
        settings={<>Used for billing.</>}>
      </Dashboard>
    </div>
  );
}

function CustomTour() {
  return (<>  
      <div>
        <details open>
            <summary>
            Intro
            </summary>
            <p>
              <h1>Welcome to the Acme Tour</h1>
              <p>
                Your journey is broken down into learning modules. If you would like your progress tracked as well as API credits, please sign in.
              </p>
              <p>
                Please select the default language.
                &nbsp;<i><b>NOTE:</b>&nbsp; You can change it anytime</i>
              </p>
              
              <p>
                <span role="button" className={pico.outline}>Python</span>&nbsp;
                <span role="button" className={pico.outline}>Javascript</span>
              </p>
            </p>
          </details>

          <details>
            <summary>Downloading the model</summary>
            <ul>
              <li>…</li>
              <li>…</li>
            </ul>
          </details>

          <details>
            <summary>Fine tuning the model</summary>
            <ul>
              <li>…</li>
              <li>…</li>
            </ul>
          </details>

          <details>
            <summary>Creating an API Key</summary>
            <ul>
              <li>…</li>
              <li>…</li>
            </ul>
          </details>

          <details>
            <summary>Inviting your team</summary>
            <ul>
              <li>…</li>
              <li>…</li>
            </ul>
          </details>
      </div>
    
  </>)
}

export default App;

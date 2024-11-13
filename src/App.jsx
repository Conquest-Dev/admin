
import Home from './components/Home';
import GlobalContextsProvider from './components/plasmic/website_starter/PlasmicGlobalContextsProvider'

function App() {
  return (<GlobalContextsProvider><Home /></GlobalContextsProvider>);
}

export default App;
  
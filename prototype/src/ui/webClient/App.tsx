import { Container } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from './store';
import Toolbox from './toolbox/Toolbox';

function App() {
  return (
    <Provider store={store}>
      <Container className="App">
          <Toolbox/>
      </Container>
    </Provider>
  );
}

export default App;

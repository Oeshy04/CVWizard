import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css"
import { Button, Space } from 'antd';
function App() {
  return (
    <div className="App">
      <h1>CVWizard</h1>
      <h5>Create professional CV</h5>
      <Button type='primary'>Create CV</Button>
    </div>
  );
}

export default App;

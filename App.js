import React from 'react';

import Pages from './components/firstPages';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import State from './components/State';
import Folder from './components/easyProject/folder';
import File from './components/easyProject/file';
import Lifecycle from './components/LifecycleA';
import Fragment from './components/FragmentDemo';
import Table from './components/Table';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
     {/* <Pages name="Bruce" heroname="batman">
        <p>This is children</p>
      </Pages>

      <Pages name="Clark" heroname="superman">
        <button>Action</button>
      </Pages>

      <Pages name="Diana" heroname="wonder woman">
        <h2>this is hero</h2>
      </Pages>

      <Welcome  name="Bruce" heroname="batman"/>
      <Welcome  name="Clark" heroname="superman"/>
      <Welcome  name="Diana" heroname="wonder woman"/>

      <Hello />

      <State />
*/}
      {/*<Folder name='Desktop' isOpen={true}>

        <Folder name='Music'>
          <File name="all.start.mp4"/>
          <File name="express.start.mp4"/>
        </Folder>
        <File name="dog"/>
        <File name="cat"/>

      </Folder>

      <Folder name='Application'/>*/}

        {/* <Lifecycle />
        <Fragment />
        <Table /> */}
        <ParentComponent />
    </div>
  );
}

export default App;

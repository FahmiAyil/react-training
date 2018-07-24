import React from 'react';
import './App.css';

const App = props => {
  return (
    <div>
      <div className="App-leftbar">
        <Menu />
      </div>
      <div className="App-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis varius odio a aliquet. Morbi mattis ac nibh non venenatis. Ut eleifend ipsum sit amet orci aliquam lobortis. Suspendisse felis risus, auctor id ante vel, semper interdum sapien. Sed sed dolor nisi. Phasellus placerat vulputate justo non molestie. Suspendisse sagittis felis lectus, id euismod lorem ornare a. Integer pulvinar ligula eget orci accumsan, sit amet commodo nisi suscipit. Cras sed lacus feugiat, accumsan felis vel, tempor turpis. Aenean bibendum eu neque sed accumsan. Nulla quis sem ut urna semper venenatis.

Mauris vulputate ullamcorper commodo. Nam porta tincidunt pharetra. Duis fringilla ligula eleifend leo vulputate, vitae tincidunt elit commodo. Donec non mi varius, gravida nisl ut, porta magna. Nunc varius euismod velit sed mollis. Nunc lacinia consectetur urna, ac consectetur neque facilisis eu. Nunc sagittis rutrum ligula, nec condimentum nisi venenatis vitae. Aenean dapibus lobortis tellus, nec varius purus ornare in. Sed quis mauris massa.

Nam felis nibh, faucibus sit amet maximus nec, facilisis quis quam. Duis et nulla nisi. Curabitur id cursus lectus. Duis euismod vel metus vitae dignissim. Proin quis lacus ullamcorper, lacinia ipsum nec, venenatis mauris. Sed convallis lobortis dignissim. Fusce placerat id nisl vitae imperdiet. Pellentesque sit amet interdum elit. Ut ex mi, dignissim sit amet ligula nec, aliquam volutpat ex.

Nunc egestas hendrerit nulla non congue. Curabitur elementum sem sapien, id aliquam tortor suscipit nec. Suspendisse pharetra, dui id eleifend elementum, quam lacus porta felis, vitae sagittis massa ipsum quis nunc. Proin at semper augue. Duis sit amet auctor quam, eu tempus orci. Nullam sed augue sit amet enim faucibus interdum. Cras nunc nunc, cursus at quam id, dapibus varius diam. Sed vel viverra tortor. Maecenas varius ligula in enim vulputate eleifend. Quisque purus mauris, sagittis quis leo sit amet, ornare consectetur massa. Proin id gravida sapien. Vestibulum ac mi vestibulum, dictum orci id, ullamcorper elit. Duis mi libero, viverra ut rhoncus non, finibus a dui.

Ut porta massa ut lobortis convallis. Maecenas sodales leo in dolor dapibus aliquam. In metus mauris, commodo nec pulvinar mattis, pulvinar aliquet diam. Integer bibendum orci libero, nec rutrum nunc pellentesque id. Pellentesque nec ipsum quis nisi tincidunt aliquet. Fusce eleifend porttitor diam, in faucibus nulla vehicula at. Mauris eget sollicitudin magna.</p>
      </div>
    </div>
  )
}

const Menu = props => {
  return (
    <ul className="App-menu">
      <a href=""><li>Homey</li></a>
      <a href="http://dnet.net.id"><li>Dnet</li></a>
      <a href="http://garasilabs.org"><li>Garasilabs</li></a>
      <a href="http://tt2.dev.njoo.org"><li>Timetrack</li></a>
      <a href="http://appety.dev.njoo.org"><li>Appety</li></a>
    </ul>
  )
}

export default App;

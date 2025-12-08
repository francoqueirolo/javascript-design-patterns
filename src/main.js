import './style.css'
import { hello } from './patterns.js'

document.querySelector('#app').innerHTML = `
  <div>
    <p>Open console and run:</p>
    <pre>example: windows.run('adapter')</pre>
  </div>
`

hello();
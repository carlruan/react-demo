// js entrance

import ReactDom from 'react-dom/client'

const App = <div className='logs'>
    <div className='item'>
        <div className='date'>
            <div className='month'>
                August
            </div>
            <div className='day'>
                4
            </div>
        </div>
        <div className='content'>
            <h2 className='desc'>Study React</h2>
            <div className='time'>40 min</div>
        </div>
    </div>
    
</div>

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(App);
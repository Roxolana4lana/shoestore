import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <div className='Main'>
      <div className='image'>
                <img src='https://media.yoox.biz/items/49/49286245jt_14_f.jpg' alt='man'
                    style={{ height: '100vh',width:'50vw' }}/>
      </div>
            <div className='image'>
                <img src='https://cdn.elisabettafranchi.com/media/catalog/product/cache/a5cf4c82dcfc719a6b64f8a45bb31a99/A/B/AB68191E2_D89_1_DB.jpg'
                    alt='woman' style={{ height: '100vh', backgroundSize: 'cover', width: '50vw'}}/>
      </div>
        
      </div>
    )
  }
}

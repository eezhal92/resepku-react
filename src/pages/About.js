import React from 'react'
import GeneralLayout from './layouts/GeneralLayout'

export default function () {
  return (
    <GeneralLayout>
      <div class="container">
        <div class="row content-head">
          <div class="col-md-10 col-md-offset-1">
            <h1 class="content-title">
              About
            </h1>
            <div class="content-sub-title">
              Lorem ipsum
            </div>
            <p>Lorem ipsum sit amte</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-md-offset-2 text-center">
            <img src="https://avatars1.githubusercontent.com/u/3829182?v=3&s=220" class="img img-circle"/>
            <h3>appai</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem et in quisquam. Ad alias aperiam assumenda aut deserunt dolores earum fugiat, labore laudantium maiores minus, numquam omnis pariatur soluta vel.</p>
          </div>
          <div class="col-md-3 col-offset-2 text-center">
            <img src="https://avatars2.githubusercontent.com/u/7058456?v=3&s=220" class="img img-circle"/>
            <h3>eezhal92</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem et in quisquam. Ad alias aperiam assumenda aut deserunt dolores earum fugiat, labore laudantium maiores minus, numquam omnis pariatur soluta vel.</p>
          </div>
        </div>
      </div>
    </GeneralLayout>
  )
}

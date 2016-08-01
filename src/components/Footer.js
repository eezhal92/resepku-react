import React from 'react'

export default function() {
  return (
    <footer>
      <div class="container">
        <form class="row form-message">
          <div class="col-lg-3 pl0">
            <div class="fwb fz20 form-message-title ttu">Send Us Message</div>
          </div>
          <div class="col-lg-4">
            <input type="text" class="form-control fwb" placeholder="EMAIL" />
          </div>
          <div class="col-lg-4">
            <input type="text" class="form-control fwb" placeholder="Message" />
          </div>
          <div class="col-lg-1 pr0">
            <button class="btn btn-red">
              <i class="fa fa-long-arrow-right"></i>
            </button>
          </div>
        </form>
        <div class="row fz12 copyright">
          <div class="col-md-3 tal copyright-border">
            <div class="fwb ttu">
              &copy; 2016 RESEPKU <br />
              ALL RIGHTS RESERVED
            </div>
          </div>
          <div class="col-md-6 tac copyright-border">
            <div class="fwb ttu">
              DHARMAHUSADA SELATAN 7A / 41 <br />
              SURABAYA, JAWA TIMUR 60116
            </div>
          </div>
          <div class="col-md-3 tar copyright-border">
            <div class="fwb ttu">
              FOLLOW US <br />
              <a href="page.html">FACEBOOK</a> | <a href="page.html">TWITTER</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


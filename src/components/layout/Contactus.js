import React, { Component } from 'react'
 class Contactus extends Component {
 
 
  render() {
    return (
<div className= "modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="  bg-dark modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalCenterTitle">Food Lover</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <img src={require('../../img/Foodloverlogo.png')} alt=""/>
           <div className='Contact Information'>
                 <ul className='phone'>
                   <li className='contact'></li>
      </ul>
         <p className='tex-justify'>
      <span> Customer service</span> <br/>
      <span> Telephone</span> <br/>
          <i class='fas fa-phone-volume'></i>
                  <span> Monday to friday 8.30 am to 6:00 pm (EST) </span> <br/>
                  <span> Saturday 10:00 am to 4:00 pm (EST) </span> <br/>
                  <span> Email Address:</span> <br/>  
                      msimbo2018@gmail.com
          </p>
         </div>
       </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal" aria-label ='close' onClick={this.close}>Close</button>
      </div>
    </div>
  </div>
</div>
    );
  }
}
export default  Contactus;


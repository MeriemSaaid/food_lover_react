import React, { Component } from 'react'

 class About extends Component {
  render() {
    return (
       
        <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className=" bg-dark modal-content">
              <div class="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">About Us</h5>  
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              <img src={require('../../img/Foodloverlogo.png')} alt=""/>
              <h3>About Us</h3>
                            <p className='tex-justify'>
                             Whether you are dinning at home or out in a restaurant, those who<br/> enjoy a well prepared dish would be delighted to choose from a much<br/> wider range of food types recipes and made dieteray decisions for <br/> environmental and easthetic or medical reasons. Foodlover recipes <br/>bring  this blend of international food recipes come to light. As you <br/> dine in family or friends, take a seat back and enjoy the exquisite<br/> recipe dishes.
                             
                            </p>
              </div>
              <div class="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" aria-label='close' onClick={this.close}>Close</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default About;

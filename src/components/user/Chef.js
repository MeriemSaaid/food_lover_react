import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

export default class Chef extends Component {
  state = {
    chefs: []
    
  };

  
 
  //Get chefs
  getChefs = async () => {
    // const type = this.props.match.params.type;
    const res = await axios.get(`/api/users`);
    // this.setState({
    //   chefs: res.data
    // });
    this.setState({
        chefs: res.data.filter(chef => {
          return (
            chef.chef &&
            chef.chef === true
          );
        })
      });

  };
  
 

componentDidMount() {
  this.getChefs();
        
  }

 


  render() {
    const { chefs } = this.state;
    console.log(chefs);
    return (
        <div className="container padding_div intro-single">
      <div className="row">
        <div className="col-md-12 col-lg-8">
          <div className="title-single-box">
            <h1 className="title-single">Our Amazing Agents</h1>
            
          </div>
        </div>
        </div><br/><br/>
        <div id="products" className="row view-group">
          {chefs.map((chef, i) => {
            // console.log(recipe);
            return (
              <div className="item col-md-3 col-sm-4 col-xs-12 single_portfolio_text" key={chef._id}>
                <div className="thumbnail card">
                  <div className="img-event">
                    <img
                      className="group list-group-image img-fluid fixed_width_heigth cursor_pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/768px-Crystal_Clear_kdm_user_female.svg.png"
                      alt={chef.firstname}
                    />
                    <div className="portfolio_images_overlay text-center">
								<h6 className="clrd-font">Chef {chef.firstname+" "+chef.lastname}</h6>
								
								<Link to={`/chefdetail/${chef._id}`} className="btn btn-primary">Click here</Link>
							</div>
							
                  </div>
                  
                </div>
                
              </div>
            );
          })}
          
        </div>
        
      </div>
    );
  }
}

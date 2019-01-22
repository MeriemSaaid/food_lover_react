import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

export default class ChefDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { follower: "",
        chef :[],
        followers :[]
    }}

 
  getChef = async id => {
    const res = await axios.get(`/api/user/${id}`);
    this.setState({
        chef:res.data

      
    });
  };
  async componentDidMount() {
    const res = await this.props.loggedIn();
    // console.log(res.data);
    if (res.data === 0) {
      // console.log("not connected");
      this.props.history.push("/login");
    } else {
        
      this.setState({
        follower: res.data._id
      });
      const id =this.props.match.params.id ;
      this.getChef(id);
     this. getFollowers(id);
    }
  }
 async getFollowers(id){
    const res = await axios.get(`/api/followers/${id}`);
    this.setState({
        followers :res.data
    });
    const idFollower =this.props.match.params.id ;
    var data = res.data.filter(item => item.followerId === idFollower);
    // this.state.followers.filter(follower => {
    //     return (
    //         follower.followerId &&
    //         follower.followerId === idFollower
    // }));
      
    console.log(data);

    }
  async addfollow(followerId,followedId) {
    const follow = {
        followerId:followerId,
        followedId:followedId,
     }; 
     const res = await axios.post(`/api/follow`, follow);
     this.setState({
        followers: [...this.state.followers, res.data]
        
      });

  }
  render() {
   
   const {chef,follower,followers} =this.state;
   console.log(chef.username);
    return (
        <div className="container padding_div">
        <div className="detail">
			
				<div className="wrapper row">
					<div className="preview col-md-6">
						<div className="tab-pane active" id="pic-1">
                        <img src="http://placekitten.com/400/252" />
                        </div>
					</div>
					<div className="details col-md-6">
						<h4 className="price">First name: <span>{chef.firstname}</span></h4>
                        <h4 className="price">Last name: <span>{chef.lastname}</span></h4>
                        <h4 className="price">Email: <span>{chef.email}</span></h4>
						<h4 className="price">Publications: <span>50</span></h4>
                        <h4 className="price">Followers: <span>{followers.length}</span></h4>
						<div className="action">
							<button className="add-to-cart btn btn-default" type="button" onClick={this.addfollow.bind(this,follower,chef._id)}>Follow</button>&nbsp;
                            <button className="add-to-cart btn btn-default" type="button">UnFollow</button>
							
						</div>
					</div>
				
			</div>
		</div>
    </div>
    );
}
}
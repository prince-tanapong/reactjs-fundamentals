var React = require("react");
var ReactDom = require("react-dom");

var USER_DATA = {
  name: "tanapong",
  username: "prince-tanapong",
  imageUrl: "https://avatars3.githubusercontent.com/u/8855366?v=3&s=460"
}


var Hello = React.createClass({
  render: function(){
    return(
       <div>Hello ReactJS!</div>
    )
  }
})

var ProfilePic = React.createClass({
  render:function(){
    return (<img src={this.props.imageUrl} style={{height:100, width:100}}></img>)
  }
})

var ProfileLink = React.createClass({
  render:function(){
    return(
      <div>
        <a href={ "https://www.github.com/" + this.props.username}>
          { this.props.username }
        </a>
      </div>
      )
  }
})

var ProfileName = React.createClass({
  render:function(){
    return(
      <div>
        {this.props.name}
      </div>
    )
  }
})

var Avatar = React.createClass({
  render:function(){
    return(
      <div>
        <ProfilePic imageUrl={ this.props.user.imageUrl } />
        <ProfileName name={ this.props.user.name } />
        <ProfileLink username={ this.props.user.username } />
      </div>
    )
  }
})

ReactDom.render(<Avatar user={USER_DATA} />, document.getElementById('app'))




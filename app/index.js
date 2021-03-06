var React = require("react");
var ReactDom = require("react-dom");
var routes = require('./config/routes')

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

var Link = React.createClass({
  changeUrl: function(){
    window.location.replace( this.props.href )
  },
  render:function(){
    return (
      <span style={{color: "blue", cursor: "pointer"}} onClick={ this.changeUrl }>
        { this.props.children }
      </span>
    )
  }
})

var ProfileLink = React.createClass({
  render:function(){
    return(
      <div>
        <Link href={ "https://www.github.com/" + this.props.username}>
          { this.props.username }
        </Link>
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

ReactDom.render(routes, document.getElementById('app'))




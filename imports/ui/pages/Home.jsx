import React from 'react';
import classNames from 'classnames';

function Home() {
	$(document).ready(function(){
      $('.parallax').parallax();
    });

    var parallaxStyle = {
    	textAlign: "center",
    	height: "400px",
    	color: "#eeeeee",
    };
    var blackmailStyle = {
    	fontWeight: "575",
    	fontSize: "125px",
    	marginBottom: "-30px",
    	marginTop: "-5px",
    };
    var othertaglineStyle = {
    	fontWeight: "300",
    	fontSize: "40px",
    	textAlign: "right",
    	marginRight: "135px",
    };

  return (
	<div>
		<div className="parallax-container" style={parallaxStyle}>
			<div className="parallax"><img src="img/pupp_dark.jpg"/></div>
			<h1 style={blackmailStyle}>Blackmail yourself</h1>
			<h3 style={othertaglineStyle}>...into productivity</h3>
		</div>
		<div className="section white">
			<div className="row container">
				<p className="grey-text text-darken-3 lighten-3">Never miss another workout again…or else.</p>
			</div>
		</div>
		<div className="parallax-container">
			<div className="parallax"><img src="img/pupp.jpg"/></div>
		</div>
	</div>
  );
}

export default Home;
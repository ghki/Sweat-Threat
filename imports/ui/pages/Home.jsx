import React from 'react';
import classNames from 'classnames';

function Home() {
	$(document).ready(function(){
      $('.parallax').parallax();
    });
  return (

<div>
<div className="parallax-container">
	<div className="parallax"><img src="img/pupp.jpg"/></div>
</div>
<div className="section white">
	<div className="row container">
		<h2 className="header">BLACKMAIL YOURSELF INTO SHAPE</h2>
		<p className="grey-text text-darken-3 lighten-3">Never miss another workout again…or else.</p>
	</div>
</div>
<div className="parallax-container">
	<div className="parallax"><img src="img/background1.jpg"/></div>
</div>
</div>
  );
}

export default Home;
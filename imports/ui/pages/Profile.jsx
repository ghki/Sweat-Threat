import React from 'react';

function Profile() {
  return (
    <div className='Profile'>
      <h1>User's profile</h1>
	      <ul class="collection with-header">
	        <li class="collection-header"><h4>Accountability Buddy</h4></li>
	        <li class="collection-item">Haemi</li>
	        <li class="collection-item">Bob</li>
	        <li class="collection-item">Joe</li>
	        <li class="collection-item">Alvin</li>
	      </ul>
	      <ul class="collection with-header">
	        <li class="collection-header"><h4>Your schedule</h4></li>
	      </ul>
    </div>
  );
}

export default Profile;

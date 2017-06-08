import React from 'react';
import router from '../../router';
import freezer from '../../freezer';
import Header from '../tags/header';

export default class App extends React.Component {
	constructor( props ){
		super( props );

		// store the current location to refresh the app in case of change
		var location = router.location;
    this.currentLocation = location.pathname + location.search;

		// listen to changes
		router.onChange( location => this.onLocation( location ) );

		// The current component will be stored in state.screen
    this.state = { screen: location.matches[0] };
	}

	render(){
    var Component = this.state.screen;

		return (
			<div id="app">
				<Header />
				<main id="content">
					<Component store={ freezer.get() } />
				</main>
			</div>
		);
	}

  onLocation( l ){
    var next = l.pathname + l.search,
      store = freezer.get()
    ;


    if( next !== this.currentLocation ){
      if( this.checkIntercept() ) return;
      this.currentLocation = next;
      this.setState({screen: l.matches[0]});
      freezer.emit('app:urlUpdated', next);
    }
  }

	checkIntercept(){
		// If the location is forbidden we just use
		// router.push('/forbidden') hear to intercept the request
		// before the app renders the forbidden screen returning true;
		//
		// return true;
	}
}

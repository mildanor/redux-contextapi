import React from 'react';
import Food from './foods';

//https://auth0.com/blog/react-context-api-managing-state-with-ease/
//https://auth0.com/blog/redux-practical-tutorial/
//https://egghead.io/courses/getting-started-with-redux
//https://hackernoon.com/react-authentication-in-depth-part-2-bbf90d42efc9
//https://hackernoon.com/react-authentication-in-depth-4deebda9aa45

const DEFAULT_STATE = { allFood: Food, searchTerm: '' };

export const ThemeContext = React.createContext(DEFAULT_STATE);

export default class Provider extends React.Component {
  state = DEFAULT_STATE;
  searchTermChanged = searchTerm => {
    this.setState({searchTerm});
  };

  render() {
    return (
      <ThemeContext.Provider value={{
        ...this.state,
        searchTermChanged: this.searchTermChanged,
      }}> {this.props.children} </ThemeContext.Provider>);
  }
}
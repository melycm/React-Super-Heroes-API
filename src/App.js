import React, { Component } from 'react';
import {connect} from 'react-redux'
import Movie from './components/Movie'
import './App.css';
import Cart from './components/Cart'
import apiData from './actions/apiData'
import addMovie from './actions/addMovie'
import deleteMovie from './actions/deleteMovie'

function mapStateToProps(state){
  return{
    totalCost: state.totalCost,
    movieName: state.movieName,
    movieData: state.apiInfo
  }
}

function mapDispatchToProps(dispatch){
  return {
    onAddMovie: (movieData) => dispatch(addMovie(movieData)),
    onDeleteMovie: (movieData) => dispatch(deleteMovie(movieData)),
    onFetch: (response) => dispatch(apiData(response))
  }
}

var connectComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie)

export default connectComponent;

import React, { Component } from 'react';
import {connect} from 'react-redux'
import Movie from './components/Movie'
import './App.css';
import Cart from './components/Cart'
import apiData from './actions/apiData'

function mapStateToProps(state){
  return{
    movieData: state.apiInfo
  }
}

function mapDispatchToProps(dispatch){
  return {
    onFetch: (response) => dispatch(apiData(response))
  }
}

var connectComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie)

export default connectComponent;

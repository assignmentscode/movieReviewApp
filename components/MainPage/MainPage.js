import React, { Component } from 'react';
import {
  ScrollView, SafeAreaView, Text, View, Linking,
} from 'react-native';
import MovieReview from '../MovieReview/MovieReview';
import styles from './MainPage.css';

const getData = require('./../../UtilityFunctions/getData');

class MainPage extends Component {
  state = {
    movies: [{
      display_title: '',
      multimedia: { src: '', width: '', height: '' },
      headline: '',
      summary_short: '',
      link: { url: '' },
    }],
  }

  componentDidMount() {
    const url = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=5oDuo7M2cDAoMrff1GOVfCVMX2sIzsmo';
    getData(url).then((res) => {
      this.setMovieReview(res.data.results);
    });
  }

  onPressHandler = (url) => {
    Linking.openURL(url);
  }

  setMovieReview = (movieReviews) => {
    this.setState({ movies: movieReviews });
  }

  render() {
    const { movies } = this.state;
    const movieCards = movies
      .map(movie => (<MovieReview movie={movie} onPressHandler={this.onPressHandler} />));
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topNav}>
          <Text style={styles.header}>Movie Reviews</Text>
        </View>
        <ScrollView>
          {movieCards}
        </ScrollView>
      </SafeAreaView>

    );
  }
}

export default MainPage;

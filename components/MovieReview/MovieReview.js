import React, { Component } from 'react';
import {
  Text, View, Button, ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';

class MovieReview extends Component {
  render() {
    const { movie, onPressHandler } = this.props;
    const {
      // eslint-disable-next-line camelcase
      headline, multimedia, display_title, summary_short, link,
    } = movie;
    return (
      <View style={{
        backgroundColor: '#f2f4f7', borderWidth: 5, borderColor: '#d6d7d8', padding: 15,
      }}
      >
        <Text style={{ alignSelf: 'center', fontWeight: 'bold', color: 'green' }}>{headline}</Text>
        <ImageBackground
          source={{ uri: multimedia.src }}
          resizeMode="contain"
          style={{ width: 210, height: 140, alignSelf: 'center' }}
        />
        {/* eslint-disable-next-line camelcase */}
        <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>{display_title}</Text>
        {/* eslint-disable-next-line camelcase */}
        <Text style={{ alignSelf: 'center' }}>{summary_short}</Text>
        <Button
          title="Read More..."
          style={{ backgroundColor: 'gray', alignSelf: 'flex-start' }}
          onPress={() => onPressHandler(link.url)}
        />
      </View>
    );
  }
}
MovieReview.propTypes = {
  movie: PropTypes.shape({
    headline: PropTypes.string,
    multimedia: PropTypes.object,
    display_title: PropTypes.string,
    summary_short: PropTypes.string,
    link: PropTypes.object,
  }),
  onPressHandler: PropTypes.func.isRequired,
};
MovieReview.defaultProps = {
  movie: {
    headline: 'The Competition’ Review: Vying for a Slot in an Elite Film School',
    multimedia: {
      type: 'mediumThreeByTwo210',
      src: 'https://static01.nyt.com/images/2019/02/22/arts/22competition/22competition-mediumThreeByTwo210.jpg',
      width: 210,
      height: 140,
    },
    display_title: 'The Competition',
    summary_short: 'In Claire Simon’s engaging, provocative documentary, future filmmakers go through a grueling process.',
    link: {
      type: 'article',
      url: 'http://www.nytimes.com/2019/02/21/movies/the-competition-review.html',
      suggested_link_text: 'Read the New York Times Review of The Competition',
    },
  },

};
export default MovieReview;

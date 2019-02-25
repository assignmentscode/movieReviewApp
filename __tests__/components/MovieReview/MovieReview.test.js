import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import MovieReview from '../../../components/MovieReview/MovieReview';

const movie = {
  display_title: 'The Competition',
  headline: '‘The Competition’ Review: Vying for a Slot in an Elite Film School',
  summary_short: 'In Claire Simon’s engaging, provocative documentary, future filmmakers go through a grueling process.',
  link: {
    url: 'http://www.nytimes.com/2019/02/21/movies/the-competition-review.html',
  },
  multimedia: {
    src: 'https://static01.nyt.com/images/2019/02/22/arts/22competition/22competition-mediumThreeByTwo210.jpg',
  },
};

describe('MovieReview', () => {
  it('snapshot should match the previous snapshot', () => {
    const tree = renderer.create(<MovieReview movie={}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

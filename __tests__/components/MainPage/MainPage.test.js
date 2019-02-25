import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Mainpage from '../../../components/MainPage/MainPage';

describe('MainPage', () => {
  it('snapshot should match the previous snapshot', () => {
    const tree = renderer.create(<Mainpage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

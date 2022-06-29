import 'react-native';
import React from 'react';
import AboutUs from 'app/screens/AboutUs';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<AboutUs />).toJSON();
  expect(tree).toMatchSnapshot();
});

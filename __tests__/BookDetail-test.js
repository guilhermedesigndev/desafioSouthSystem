import React from 'react';
import renderer from 'react-test-renderer';
import BookDetail from '../app/screens/BookDetail';

test('renders correctly', () => {
  const tree = renderer.create(<BookDetail />).toJSON();
  expect(tree).toMatchSnapshot();
});

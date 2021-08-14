import React from 'react';
import { render } from '@testing-library/react-native';
import Card from '../index';
describe('Card component', () => {
  it('should match snapshot', () => {
    const item = { isOpen: true, text: 'text' };
    const tree = render(<Card item={item} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

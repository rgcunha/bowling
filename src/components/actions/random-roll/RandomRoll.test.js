import React from 'react';
import { shallow } from 'enzyme';
import RandomRoll from './RandomRoll';
import { Button } from 'react-bootstrap';

const mockOnRoll = jest.fn();
const mockDisabled = false;

describe('<RandomRoll />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<RandomRoll onRoll={mockOnRoll} disabled={mockDisabled} />);
  });

  test('renders 1 <Button />', () => {
    expect(wrapper.find(Button).length).toEqual(1);
  });

  test('simulate click events', () => {
    wrapper.find(Button).simulate('click');
    expect(mockOnRoll.mock.calls.length).toEqual(1);
  });
});

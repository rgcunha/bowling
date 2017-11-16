import React from 'react';
import { shallow } from 'enzyme';
import ManualRoll from './ManualRoll';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const mockOnRoll = jest.fn();
const mockPinsLeft = Array(10).fill().map((pin, index) => index + 1);
const mockDisabled = false;

describe('<ManualRoll />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<ManualRoll onRoll={mockOnRoll} pinsLeft={mockPinsLeft} disabled={mockDisabled} />);
  });

  test('renders 1 <DropdownButton /> and 11 <MenuItem />', () => {
    expect(wrapper.find(DropdownButton).length).toEqual(1);
    expect(wrapper.find(MenuItem).length).toEqual(11);
  });

  test('simulate click events', () => {
    wrapper.find(MenuItem).first().simulate('click');
    expect(mockOnRoll.mock.calls.length).toEqual(1);
  });
});

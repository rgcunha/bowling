import React from 'react';
import { shallow } from 'enzyme';
import FrameScoring from './FrameScoring';
import FrameScoringModel from '../../../../test/factories/frame-scoring';

describe('<FrameScoring />', () => {
  let wrapper;
  let mockFrameScoring = FrameScoringModel.build({
    rolls: [4,0],
    total: 999
  });

  beforeAll(() => {
    wrapper = shallow(<FrameScoring scoring={mockFrameScoring} />);
  });

  test('renders rolls scores', () => {
    expect(wrapper.find('.frame-scoring__rolls').length).toEqual(1);

    expect(wrapper.find('.roll-scoring').first().text()).toEqual('4');
    expect(wrapper.find('.roll-scoring').last().text()).toEqual('0');
  });

  test('renders total', () => {
    expect(wrapper.find('.frame-scoring__total').length).toEqual(1);
    expect(wrapper.find('.frame-scoring__total span').text()).toEqual("Total: 999");
  });

  describe('when frame has a Spare', () => {
    beforeAll(() => {
      mockFrameScoring = FrameScoringModel.build({ rolls: [3,7] });
      wrapper = shallow(<FrameScoring scoring={mockFrameScoring} />);
    });

    test('renders rolls scores with a Spare (/) symbol', () => {
      expect(wrapper.find('.roll-scoring').first().text()).toEqual('3');
      expect(wrapper.find('.roll-scoring').last().text()).toEqual('/');
    });
  });

  describe('when frame has a Strike', () => {
    beforeAll(() => {
      mockFrameScoring = FrameScoringModel.build({ rolls: [10,null] });
      wrapper = shallow(<FrameScoring scoring={mockFrameScoring} />);
    });

    test('renders rolls scores with a Strike (X) symbol', () => {
      expect(wrapper.find('.roll-scoring').first().text()).toEqual('X');
      expect(wrapper.find('.roll-scoring').last().text()).toEqual('-');
    });
  });
});

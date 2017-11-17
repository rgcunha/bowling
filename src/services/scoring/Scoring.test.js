import { score } from '../scoring';
import FrameScoringModel from '../../../test/factories/frame-scoring';

describe('#score', () => {
  let scoring = [
    FrameScoringModel.build({id: 1, rolls: [null, null], total: null }),
    FrameScoringModel.build({id: 2, rolls: [null, null], total: null }),
    FrameScoringModel.build({id: 3, rolls: [null, null], total: null }),
    FrameScoringModel.build({id: 4, rolls: [null, null], total: null }),
    FrameScoringModel.build({id: 5, rolls: [null, null], total: null }),
    FrameScoringModel.build({id: 6, rolls: [null, null], total: null }),
    FrameScoringModel.build({id: 7, rolls: [null, null], total: null }),
    FrameScoringModel.build({id: 8, rolls: [null, null], total: null }),
    FrameScoringModel.build({id: 9, rolls: [null, null], total: null }),
    FrameScoringModel.build({id: 10, rolls: [null, null, null], total: null }),
  ];

  let turn = {
    frame: 1,
    roll: 1,
    pinsLeft: [1,2,5]
  };

  let result;

  beforeAll(() => {
    result = score(scoring, turn);
  });

  test('returns an updated bowling scoring', () => {
    const expectedScoring = [
      FrameScoringModel.build({id: 1, rolls: [7, null], total: null }),
      FrameScoringModel.build({id: 2, rolls: [null, null], total: null }),
      FrameScoringModel.build({id: 3, rolls: [null, null], total: null }),
      FrameScoringModel.build({id: 4, rolls: [null, null], total: null }),
      FrameScoringModel.build({id: 5, rolls: [null, null], total: null }),
      FrameScoringModel.build({id: 6, rolls: [null, null], total: null }),
      FrameScoringModel.build({id: 7, rolls: [null, null], total: null }),
      FrameScoringModel.build({id: 8, rolls: [null, null], total: null }),
      FrameScoringModel.build({id: 9, rolls: [null, null], total: null }),
      FrameScoringModel.build({id: 10, rolls: [null, null, null], total: null }),
    ]

    expect(result).toEqual(expectedScoring);
  });

  describe('when there is a Spare waiting to be scored', () => {
    beforeAll(() => {
      scoring = [
        FrameScoringModel.build({id: 1, rolls: [1, 3], total: 4 }),
        FrameScoringModel.build({id: 2, rolls: [4, 6], total: null }),
        FrameScoringModel.build({id: 3, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 4, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 5, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 6, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 7, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 8, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 9, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 10, rolls: [null, null, null], total: null }),
      ];

      turn = {
        frame: 3,
        roll: 1,
        pinsLeft: [1,2,5]
      };

      result = score(scoring, turn);
    });

    test('updates Spare with bonus points from next roll', () => {
      const expectedScoring = [
        FrameScoringModel.build({id: 1, rolls: [1, 3], total: 4 }),
        FrameScoringModel.build({id: 2, rolls: [4, 6], total: 17 }),
        FrameScoringModel.build({id: 3, rolls: [7, null], total: null }),
        FrameScoringModel.build({id: 4, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 5, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 6, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 7, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 8, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 9, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 10, rolls: [null, null, null], total: null }),
      ]

      expect(result).toEqual(expectedScoring);
    });
  });

  describe('when there is a Strike waiting to be scored', () => {
    beforeAll(() => {
      scoring = [
        FrameScoringModel.build({id: 1, rolls: [1, 3], total: 4 }),
        FrameScoringModel.build({id: 2, rolls: [10, null], total: null }),
        FrameScoringModel.build({id: 3, rolls: [10, null], total: null }),
        FrameScoringModel.build({id: 4, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 5, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 6, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 7, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 8, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 9, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 10, rolls: [null, null, null], total: null }),
      ];

      turn = {
        frame: 4,
        roll: 1,
        pinsLeft: [1,2,5]
      };

      result = score(scoring, turn);
    });

    test('updates Strike with bonus points from next 2 rolls', () => {
      const expectedScoring = [
        FrameScoringModel.build({id: 1, rolls: [1, 3], total: 4 }),
        FrameScoringModel.build({id: 2, rolls: [10, null], total: 27 }),
        FrameScoringModel.build({id: 3, rolls: [10, null], total: null }),
        FrameScoringModel.build({id: 4, rolls: [7, null], total: null }),
        FrameScoringModel.build({id: 5, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 6, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 7, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 8, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 9, rolls: [null, null], total: null }),
        FrameScoringModel.build({id: 10, rolls: [null, null, null], total: null }),
      ]

      expect(result).toEqual(expectedScoring);
    });
  });
});

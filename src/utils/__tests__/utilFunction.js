import { updateCardObjectArray } from '../utilFunctions';
import mockData from '../../mockData/initialState.json';
const newCardObject = [
  {
    isOpen: false,
    text: 60,
  },
  {
    isOpen: false,
    text: 60,
  },
  {
    isOpen: false,
    text: 74,
  },
  {
    isOpen: true,
    text: 56,
  },
  {
    isOpen: true,
    text: 56,
  },
  {
    isOpen: false,
    text: 74,
  },
];

describe('updateCardObjectArray functions', () => {
  it('updateCardObjectArray should return newCardObjectArray with isOpen false if text do not match', () => {
    expect(updateCardObjectArray(mockData.cardObjectArray, [1, 2])).toEqual(
      newCardObject,
    );
  });
  it('updateCardObjectArray should return newCardObject with isOpen true if text match', () => {
    expect(updateCardObjectArray(mockData.cardObjectArray, [3, 4])).toEqual(
      newCardObject,
    );
  });
  it('updateCardObjectArray should return newCardObject with isOpen false if only 1 card opened', () => {
    expect(updateCardObjectArray(mockData.cardObjectArray, [5])).toEqual(
      newCardObject,
    );
  });
});

export const getCardObjectArray = () => {
  let cardObjectArray = [];
  for (let i = 0; i < 6; i++) {
    const randomNumber = parseInt(Math.random() * 100, 10);
    cardObjectArray.push(cardObject(false, randomNumber));
    cardObjectArray.push(cardObject(false, randomNumber));
  }
  return shuffle(cardObjectArray);
};

export const cardObject = (isOpen, text) => {
  return {
    isOpen,
    text,
  };
};

const shuffle = (cardObjectArray) => {
  for (let i = cardObjectArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = cardObjectArray[i];
    cardObjectArray[i] = cardObjectArray[j];
    cardObjectArray[j] = temp;
  }
  return cardObjectArray;
};

export const updateCardObjectArray = (cardObjectArray, clickedIndexArray) => {
  if (clickedIndexArray.length === 2) {
    if (
      cardObjectArray[clickedIndexArray[0]].text ===
      cardObjectArray[clickedIndexArray[1]].text
    ) {
      cardObjectArray[clickedIndexArray[0]].isOpen = true;
      cardObjectArray[clickedIndexArray[1]].isOpen = true;
    } else {
      cardObjectArray[clickedIndexArray[0]].isOpen = false;
      cardObjectArray[clickedIndexArray[1]].isOpen = false;
    }
  }
  return cardObjectArray;
};

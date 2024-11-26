// code your solution here

function saturdayFun(todo = 'roller-skate'){
  return `This Saturday, I want to ${todo}!`;
}

function mondayWork(blues = 'go to the office'){
  return  `This Monday, I will ${blues}.`;
}

function wrapAdjective(a = '*'){
  return function innerFun(adj = 'special'){
    return  `You are ${a}${adj}${a}!`;
  }

}

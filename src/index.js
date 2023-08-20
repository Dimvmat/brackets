module.exports = function check(str, bracketsConfig) {

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let curElement = str[i];

    if (bracketsConfig.find(elem => elem[1] === curElement) && stack.length !== 0) {
      if (stack.length === 0) {
        return false;
      }

      let lastElement = stack[stack.length - 1];

      bracketsConfig.forEach((elem) => {
        if (elem[1] === curElement) {
          if (lastElement === elem[0]) {
            stack.pop();
          } else {
              if (elem[1] === elem[0]) {
                stack.push(elem[1])
              }
            return false;
          }
        }
      })
    } else {
      stack.push(curElement);
    }
  }
  return stack.length === 0
}

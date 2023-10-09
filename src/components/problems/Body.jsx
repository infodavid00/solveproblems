import '../../assets/stylesheet/Problems.css'

const code = `var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;var x = 10;const x = 10;
const x = 10;
const addNum = (num) => {
  return num + x;
}
const minusNum = (num) => {
  return num + y
}
if(minusNum() === addNum(1)) {
  console.log('code valid')
}else {
  console.log('code invalid');
}
console.log(x);
`;

const language = 'javascript'

const options = [
  {id:'A' , option:'A', code:`a const cannot be reassigned`
},
  {id:'B' , option:'B', code:`123rroruncaugtherror123rroruncaugtherro123rcaugtherror123rroruncaugtherro123rcaugtherror123rroruncaugtherro123rcaugtherror123rroruncaugtherro123rcaugtherror123rroruncaugtherro123rroruncaucontainer-material-container-subhero
123rroruncaugtherro123rroruncau
123rroruncaugtherro
`
},
  {id:'C' , option:'C', code:`code valid`
},
  {id:'D' , option:'D', code:`uncaugtherror`
}
]

export {code, language , options}

//note this is for testing and not for production
//would remove from wherever its imported  on production mode
//do not use on production mode
//dummy data for testing
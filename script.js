const example = 
"В предложнии одинарные'кавычки' нужно заменить двойные 'кавычки' кроме don't isn't doesn't didn't. "

console.log(example.replace(/(^|\W)'|'($|\W)/g, '$1"$2'))

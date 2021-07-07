const assert = require('assert')
const Employee = require('./employee')

const GENDER = {
  male: 'male',
  female: 'female'
}

{
  const employee = new Employee({
    name: 'Vismoke Sanji',
    gender: GENDER.male
  })

  assert.throws(() => employee.birthYear, {
    message: 'You must define age first.'
  })
}

const CURRENT_YEAR = 2021
Date.prototype.getFullYear = () => CURRENT_YEAR
{
  const employee = new Employee({
    name:'Nico Robin',
    age: 28,
    gender: GENDER.female
  })

  assert.deepStrictEqual(employee.name, 'Ms. Nico Robin')
}

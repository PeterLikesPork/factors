const getFactors = (number) => {
    var factorsCount = 0
    var factors = []
    for(let i = 1; i <= number; i++){
        let dividend = number / i
        if (checkRounded(dividend)) {
            factorsCount++
            factors.push(i)
        }
    }
    return [factorsCount, factors] // Returning more than 1 value
}

const getInteger = (ask) => Math.abs(parseInt(prompt(ask))) 

const checkRounded = (num) => {
    return (num === Math.round(num))
} 

const checkPrime = () => {
    let newNumber = getInteger('Enter a new number to check whether it\'s prime or not!')
    let factorProperties = getFactors(newNumber)
    console.log(`Check Prime:
    The number ${newNumber} is ${(factorProperties[0] === 2) ? '' : 'not '}a prime number
    because the number ${newNumber} has ${factorProperties[0]} factor${(factorProperties[0] > 1) ? 's' : ''}, which is
    ${factorProperties[1].join(', ')}`)
}

const listFactors = () => {
    let newNumber = getInteger('Enter a new number to get a list of it\'s factors!')
    let factorProperties = getFactors(newNumber)
    console.log(`List Factors:
    Your number ${newNumber} has ${factorProperties[0]} factors, that is:
    ${factorProperties[1].join(', ')}.`)
}

const countLCM = () => {
    let promptNum1 = getInteger('Enter the first number!')
    let promptNum2 = getInteger('Enter the second number!')
    let factorProperties1 = getFactors(promptNum1)
    let factorProperties2 = getFactors(promptNum2)
    let HCF = countHCFWithoutLog(promptNum1, promptNum2)
    console.log(`The LCM of ${promptNum1} and ${promptNum2} is ${promptNum1 * promptNum2 / HCF[0]}. :)`)
}

const countHCFWithoutLog = (num1 = getInteger('Enter the first number!'), num2 = getInteger('Enter the first number!')) => {
    let biggerValue = Math.max(num1, num2)
    let HCF;
    var dividend1;
    var dividend2;
    for (let i = 1; i <= biggerValue; i++) {
        dividend1 = num1 / i
        dividend2 = num2 / i
        if ((checkRounded(dividend1)) && (checkRounded(dividend2))) {
            HCF = i
        }
    }
    return [HCF, num1, num2]
}

const countHCF = () => {
    const HCFData = countHCFWithoutLog()
    console.log(`The HCF of ${HCFData[1]} and ${HCFData[2]} is ${HCFData[0]}. :)`)
}
const modelCalc = require ('../models/calculadora')

const soma = (req, res) => {
    const {a, b} = req.query;
    const result = modelCalc.soma(parseInt(a), parseInt(b))
    res.send (`soma: ${result}`)
}

const sub = (req, res) => {
    const {a, b} = req.query;
    const result = modelCalc.sub(parseInt(a), parseInt(b))
    res.send (`sub: ${result}`)
}

const mul = (req, res) => {
    const {a, b} = req.params;
    const result = modelCalc.mul(parseInt(a), parseInt(b))
    res.send (`mul: ${result}`)
}

const div = (req, res) => {
    const {a, b} = req.params;
    const result = modelCalc.div(parseInt(a), parseInt(b))
    res.send (`div: ${result}`)
}

module.exports = {
    soma,
    sub,
    mul,
    div
}
const colorsHex = [
    '#9E6CFF',
    '#00D384',
    '#25AAE1',
    '#0cb2c0',
    '#d27dff',
    // '#000'
]

export const getRandomColor = () => {
    return colorsHex[Math.floor(Math.random()*colorsHex.length)]
}

export const getRandomColorMinusBlack = () => {
    return colorsHex[Math.floor(Math.random()*(colorsHex.length-1))]
}


export default colorsHex
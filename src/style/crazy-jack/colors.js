const colorsHex = [
    '#672394',
    '#f725a0',
    '#fad141',
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
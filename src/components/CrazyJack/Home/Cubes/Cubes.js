
import * as React from "react"
// import anime from 'animejs/lib/anime.es'


import Cube from './Cube'
const Cubes = () => {
    const texts = [['Input', 'Output'],['Idea','Product'], ['Info', 'Tech'], ['Data', 'Action'], ['Art', 'Code'], ['Fake', 'News']]
    const cube1Texts = texts.map((t)=> t[0])
    const cube2Texts = texts.map((t)=> t[1])



return (
    <div className='cubes-containers'>
<div className='cube-container top'>
    <Cube texts={cube1Texts} position='top'/>
</div>
<div className='cube-container bottom '>
    <Cube texts={cube2Texts} position='bottom'/>
</div>
</div>
)

}


export default Cubes

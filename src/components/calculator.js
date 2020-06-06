import React from 'react';

let Calculator = ({ handleClick, principalDisplay, secondaryDisplay }) => {


    return (
        <section className='calculadora'>
            <article className='screen'>
                <div className='formulaScreen'>{secondaryDisplay}</div>
                <div id='display' className='entradaScreen'>{principalDisplay}</div>
            </article>
            <article id='drum' className='conteBotones'>
                <button onClick={handleClick} id='clear' className='btn btn-danger boton'>AC</button>
                <button onClick={handleClick} id='add' className='btn btn-light boton'>+</button>
                <button onClick={handleClick} id='subtract' className='btn btn-light boton'>-</button>
                <button onClick={handleClick} id='one' className='btn btn-light boton'>1</button>
                <button onClick={handleClick} id='two' className='btn btn-light boton'>2</button>
                <button onClick={handleClick} id='three' className='btn btn-light boton'>3</button>
                <button onClick={handleClick} id='multiply' className='btn btn-light boton'>*</button>
                <button onClick={handleClick} id='four' className='btn btn-light boton'>4</button>
                <button onClick={handleClick} id='five' className='btn btn-light boton'>5</button>
                <button onClick={handleClick} id='six' className='btn btn-light boton'>6</button>
                <button onClick={handleClick} id='divide' className='btn btn-light boton'>/</button>
                <button onClick={handleClick} id='seven' className='btn btn-light boton'>7</button>
                <button onClick={handleClick} id='eight' className='btn btn-light boton'>8</button>
                <button onClick={handleClick} id='nine' className='btn btn-light boton'>9</button>
                <button onClick={handleClick} id='decimal' className='btn btn-light boton'>.</button>
                <button onClick={handleClick} id='zero' className='btn btn-secondary boton'>0</button>
                <button onClick={handleClick} id='equals' className='btn btn-info boton'>=</button>
            </article>
        </section>
    )
}

export default Calculator;
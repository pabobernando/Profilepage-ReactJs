import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';



const Header = () => {
    return (
        <div className='gpt__header section__padding' id='home'>
            <div className='gpt3__header-content'>
                <h1 className='gradient__text'>Let's Build Something with GPT-3 OpenAI</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusamus accusantium deleniti recusandae dolore, necessitatibus tenetur aut minima sit aspernatur non exercitationem, facilis quas, perspiciatis voluptates consequatur eius atque totam.</p>
            <div className='gpt3__header-content__input'>
                <input type="email" placeholder='Your Email Address' />
                <button type='button'>Get Started</button>
            </div>
            <div className='gpt3__header-content__people'>
                <img src={people} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.odio aspernatur eius et quod voluptatem eum optio voluptatum sint!</p>
            </div>
            <div className='gpt3__header-image'>
                <img src={ai} />
            </div>
            </div>
        </div>
    )
}

export default Header

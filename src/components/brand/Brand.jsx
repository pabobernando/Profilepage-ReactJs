import React from 'react';
import { google, slack, atlassian, dropbox,shopify } from './imports';
import './brand.css';

const Brand = () => {
    return (
        <div className='gpt3__brand section__padding'>
            <div>
                <img src={google} alt="google" srcset="" />
            </div>
            <div>
                <img src={slack} alt='slack' srcset="" />
            </div>
            <div>
                <img src={atlassian} alt='atlasian' srcSet='' />
            </div>
            <div>
                <img src={dropbox} alt='dropbox' srcSet='' />
            </div>
            <div>
                <img src={shopify} alt='shopify' srcSet='' />
            </div>
            </div>
    )
}

export default Brand

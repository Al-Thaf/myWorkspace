import { useEffect, useState } from 'react';
import './styles.css'
import { CardProps } from './types'


function Card({ content, onClick, logo }: CardProps) {
    const [image, setImage] = useState()

    useEffect(() => {
        if (logo) {
            import(logo)
                .then((module) => setImage(module.default))
                .catch((error) => console.error('Error loading image:', error));
        }

    }, [image]);
    return (
        <div className='card' onClick={onClick}>
            <div className='logo'>
                <img src={image} height={80} width={80} />
            </div>
            <div className='content'>
                {content}
            </div>

        </div>
    )
}

export default Card
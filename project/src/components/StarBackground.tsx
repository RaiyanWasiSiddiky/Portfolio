import { useEffect, useState } from 'react';

// id, size, x, y, opacity, animationDuration

export const StarBackground = () => {
    const [stars, setStars] = useState<Star[]>([]);
    const [meteors, setMeteors] = useState<Meteor[]>([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
            generateMeteors();
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, []);

    type Star = {
        id: number,
        size: number, // Size of the star
        x: number, // X position in percentage
        y: number, // Y position in percentage
        opacity: number, // Opacity of the star
        animationDuration: number, // Duration of the animation
    }

    type Meteor = {
        id: number,
        size: number, // Size of the meteor
        x: number, // X position in percentage
        y: number, // Y position in percentage
        delay: number, // Delay before the animation starts
        animationDuration: number, // Duration of the animation
    }

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 9999);

        const newStars: Star[] = []

        for (let i=0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, // Random size between 1 and 4
                x: Math.random() * 100, // Random x position in percentage
                y: Math.random() * 100, // Random y position in percentage
                opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0.5 and 1
                animationDuration: Math.random() * 4 + 2, // Random duration between 2 and 6 seconds
            });

        }

        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 4;

        const newMeteors: Meteor[] = []

        for (let i=0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1, // Random size between 1 and 3
                x: Math.random() * 100, // Random x position in percentage
                y: Math.random() * 50, // Random y position in percentage
                delay: Math.random() * 5, // Random delay between 0 and 5 seconds 
                animationDuration: Math.random() * 3 + 3, // Random duration between 3 and 6 seconds
            });

        }

        setMeteors(newMeteors);
    };



    return (
        <>
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
            {stars.map((star) => (
                <div 
                key={star.id} 
                className='star animate-pulse-subtle' 
                style={{
                    width: star.size + 'px',
                    height: star.size + 'px',
                    left:  star.x + '%',
                    top: star.y + '%',
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + 's',
                }}
                />
            ))
            }


            {meteors.map((meteor) => (
                <div 
                key={meteor.id} 
                className='meteor animate-meteor' 
                style={{
                    width: meteor.size * 50 + 'px',
                    height: meteor.size * 2 + 'px',
                    left:  meteor.x + '%',
                    top: meteor.y + '%',
                    animationDelay: meteor.delay + 's',
                    animationDuration: meteor.animationDuration + 's',
                    transform: 'rotate(215deg)', // Important!
                }}
                />
            ))
            }
        </div>
        </>
    )
}
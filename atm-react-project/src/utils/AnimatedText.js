import AnimatedText from 'react-animated-text-content';

const Animated = (props) => {

    return (
        <>
            <AnimatedText
                type={props.type}
                animation={{
                    x: '200px',
                    y: '-20px',
                    scale: 1.1,
                    ease: 'ease-in-out',
                }}
                animationType={props.animationType}
                interval={0.06}
                duration={0.8}
                tag="p"
                className="animated-paragraph mb-0"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
            >
                {props.text}
            </AnimatedText>
        </>
    )
}

export default Animated;


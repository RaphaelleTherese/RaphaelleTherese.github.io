
import anime from 'animejs';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Main from '../layouts/Main';

const BackgroundAnime = () => {
    const [shapes, setShapes] = useState([]);
    const nameSplit = 'Raphaelle Guinanao'.split('');
    const SHAPE_CLASSES = ["triangle", "circle", "square"];
    
    const isMobile = () => {  
        return window.innerWidth < 700;
    }
    
    const animationRef = React.useRef(null);
    React.useEffect(() => {
        animationRef.current = anime({
            targets: ".name-letter",
            opacity: [0, 1],
            scale: [0,1],
            translateY: [100, 0],
            delay: anime.stagger(50)
        })

        animationRef.current = anime({
            targets: ".subtitle",
            opacity: [0, 1],
            translateY: [100, 0],
            delay: 500,
        })
        
        shapeMake();

        let finishedShapes = 0;
        const mainCallout = ReactDOM.findDOMNode(document.getElementById("main-callout"));
        shapes.map((shape, i) => {
            animationRef.current = anime({
                targets: shape,
                translateX: shape.props['data-x'],
                translateY: shape.props['data-y'],
                rotateY: anime.random(-60, 60),
                rotateX: anime.random(-60, 60),
                rotateZ: shape.props['data-rotation'],
                opacity: 1,
                delay: 200,
                duration: anime.random(750, 1500)
            }).finished.then(function() {
                finishedShapes++;
                if(finishedShapes === shapes.length) {
                    mainCallout.addEventListener("mousemove", function(event) {
                        const width = mainCallout.offsetWidth;
                        const height = mainCallout.offsetHeight;

                        const xMult = (event.clientX - width / 2) / width;
                        const yMult = (event.clientY - height / 2) / width;

                        function handleParallax(xArg, yArg, shapeElems) {
                            const allShapes = [...shapeElems, document.querySelector(".my-name"), document.querySelector(".subtitle")];

                            for(let shape of allShapes){
                                const x = (shape.props == undefined ? 
                                    0 : Number(shape.props['data-x']) );
                                const y = (shape.props == undefined ? 
                                    0 : Number(shape.props['data-y']) );;
                                const multiplier = (shape.props == undefined ? 
                                    40 : Number(shape.props['data-parallax-multiplier']) );

                                const newX = x + multiplier * xArg;
                                const newY = y + multiplier * yArg;
                                
                                animationRef.current = anime({
                                    targets: shape,
                                    translateX: newX,
                                    translateY: newY,
                                    easing: 'easeOutExpo'
                                })
                            }
                        }
                        
                        function rateLimit(func, quantum) {
                            var args = null;
                            setInterval(function() {
                                if(args) {
                                    func.apply(null, args);
                                    args = null;
                                }
                            }, quantum);
                          
                            return function() {
                              args = arguments;
                            }
                        }

                        rateLimit(handleParallax(xMult, yMult, shapes), 50)
                    });
                }
            });
        });
    }, []);

    const shapeMake = () => {
        for(let i = 0; i < 50; i++){
            let name = SHAPE_CLASSES[Math.floor(Math.random() * 3)];
            let data = {
                multiplier: Math.random() * 200 - 50
            }
            shapes[i] = React.createElement('div', { 
                key: i, 
                className: name,
                'data-parallax-multiplier':  data.multiplier,
            });
        }
        setShapes([...shapes]);

        shapesDisplay();
    }
        
    const shapesDisplay = () => {
        const nextShapes = shapes.map((shape, i) => {
            const theta = i / shapes.length * Math.PI * 2;
            const rotation = Math.random() * 360;
            const r = Math.random() * 290 + 200;
            const multiplier = isMobile()? 0.66: 1;
            const x = r * Math.cos(theta) * 1.5 * multiplier;
            const y = r * Math.sin(theta) * multiplier;
            
            const newShape = React.cloneElement(
                shape, {
                    'data-x': x,
                    'data-y': y,
                    'data-rotation': rotation,
                }
            );

            shapes[i] = newShape;
            return newShape;
        });
        setShapes(nextShapes);
    }

    return (
        <div className="main-callout" id="main-callout">
            {/* {shapeMake()} */}
            {shapes.map((shape) => {
                return <React.Fragment>{shape}</React.Fragment>
            })}
            {/* {shapesDisplay()} */}

            <div className="my-name">
                <noscript> Raphaelle Guinanao</noscript>
                <h2>{
                    nameSplit.map((stringPart, index) => {
                        return <span className='name-letter' key={index}>{stringPart}</span> 
                    })
                }</h2>
            </div>
            <div className="subtitle">
                <p>Software Engineer | 2023</p>
            </div>
        </div>
    );
}

const Index = () => {
    return (
        <Main
          description={"Raphaelle Guinanao's personal website"}
        >
          {/* <article className="post" id="index"> */}
            <BackgroundAnime />
            {/* <header>
                <div className="title">
                    <h2 data-testid="heading">About Me</h2>
                    <p>
                    SOFTWARE ENGINEER | {new Date().getFullYear()}
                    </p>
                </div>
            </header>
            <p> Welcome to my website! Please feel free to read more <Link to="/about">about me</Link>,
            or you can check out my {' '}
            <Link to="/resume">resume</Link>, {' '}
            <Link to="/projects">projects</Link>, {' '}
            or <Link to="/contact">contact</Link> me.
            </p>
            <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p> */}
          {/* </article> */}
        </Main>
    );
}

export default Index;
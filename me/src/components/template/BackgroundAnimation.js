
import anime from 'animejs';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import backdrop from '../../media/brush-stroke-bkgd.png';
import meme from '../../media/drawn.png';

const BackgroundAnimation = () => {
    const [shapes, setShapes] = useState([]);
    const nameSplit = 'Raphaelle Guinanao'.split('');
    const NUM_ICONS_AVAILABLE = 14;
    const NUM_SHAPES_MAKE = 100;
    
    const isMobile = () => {  
        return window.innerWidth < 700;
    }

    // Create all shapes into object
    const shapeMake = () => {
        for(let i = 0; i < NUM_SHAPES_MAKE; i++){
            let name = "s" + (Math.floor(Math.random() * NUM_ICONS_AVAILABLE) + 1);
            let multiplier = Math.random() * 100 - 50;
            shapes[i] = React.createElement('div', { 
                key: name + "_" + i, 
                id: name + "_" + i,
                className: name,
                'data-parallax-multiplier':  multiplier,
            });
        }
        setShapes(shapes);
    }

    // Add animations of all shapes
    const animateShapes = () => {
        let finishedShapes = 0;
        const mainCallout = ReactDOM.findDOMNode(document.getElementById("main-callout"));
        const nextShapes = shapes.map((shape, i) => {
            const theta = i / shapes.length * Math.PI * 2;
            const rotation = Math.random() * 360;
            const r = Math.random() * 250 + 150;
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

            animationRef.current = anime({
                targets: document.getElementById(shape.props['id']),
                translateX: x,
                translateY: y,
                rotateY: anime.random(-60, 60),
                rotateX: anime.random(-60, 60),
                rotateZ: rotation,
                opacity: 1,
                delay: 200,
                duration: anime.random(750, 1500),
            }).finished.then(function() {
                finishedShapes++;
                if(finishedShapes === shapes.length) {
                    mainCallout.addEventListener("mousemove", function(event) {
                        const width = mainCallout.offsetWidth;
                        const height = mainCallout.offsetHeight;

                        const xMult = (event.clientX - width / 2) / width;
                        const yMult = (event.clientY - height / 2) / width;

                        function handleParallax(xArg, yArg, shapeElems) {
                            const allShapes = [document.querySelector(".my-name"), document.querySelector(".subtitle"), document.querySelector(".meme"), document.querySelector(".backdrop"), ...shapeElems];

                            for(let shape of allShapes){
                                let multiplier = 40;
                                if (shape.props === undefined) {
                                    animationRef.current = anime({
                                        targets: shape,
                                        translateX: multiplier * xArg,
                                        translateY:  multiplier * yArg,
                                        easing: 'easeOutExpo'
                                    })
                                    continue;
                                }

                                const x = Number(shape.props['data-x']);
                                const y = Number(shape.props['data-y']);
                                multiplier = Number(shape.props['data-parallax-multiplier']);

                                const newX = x + multiplier * xArg;
                                const newY = y + multiplier * yArg;

                                animationRef.current = anime({
                                    targets: document.getElementById(shape.props['id']),
                                    translateX: newX,
                                    translateY: newY,
                                    opacity: 0.9,
                                    rotateZ: Number(shape.props['data-rotation']),
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
            
            return newShape;
        });
        
        setShapes(nextShapes);
    }

    const animationRef = React.useRef(null);
    React.useEffect(() => {
        shapeMake();
        animateShapes();

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
        
        animationRef.current = anime({
            targets: ".backdrop",
            opacity: [0, 1],
            translateY: [-50, 0],
        })
        
        animationRef.current = anime({
            targets: ".meme",
            opacity: [0, 1],
            translateY: [-45, 0],
        })
    }, []);

    let finish = 0;
    return (
        <div className="main-callout" id="main-callout">
            {shapes.map((shape) => {
                return <React.Fragment key={shape.props['key']}>{shape}</React.Fragment>
            })}

            <img className = 'backdrop' src={backdrop} />
            <img className = 'meme' src={meme} />
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

export default BackgroundAnimation;
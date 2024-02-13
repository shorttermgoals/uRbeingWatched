import { useState,useEffect } from "react"



function Poster() {

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);


    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const calculateRotation = () => {
        const dx = cursorPosition.x - window.innerWidth / 2;
        const dy = cursorPosition.y - window.innerHeight / 2;
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);


        setRotation(angle);
        };

        calculateRotation();
    }, [cursorPosition]);


return (
    <>
    <div className='background'>
        <div className='poster'>
          <div className='content'>
            <img 
              className='other' 
              src='images/Base.png'
            />
            <img
              className='camera'
              style={{
                transform: `rotate(${rotation-40}deg)`
              }}
              src='images/Camera.png'
            />
            <img
              className='other'
              src='images/Hanger.png'
            />
          </div>
        </div>
      </div>
    </>
)


}

export default Poster
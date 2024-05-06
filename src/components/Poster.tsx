import { useState,useEffect } from "react"



function Poster() {

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const [cameraMarginTop, setCameraMarginTop] = useState(32);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
        setCursorPosition({ x: event.clientX, y: event.clientY - cameraMarginTop});
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [cameraMarginTop]);

    useEffect(() => {
        const calculateRotation = () => {
        const dx = cursorPosition.x - window.innerWidth / 2;
        const dy = cursorPosition.y - window.innerHeight / 2;
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);


        setRotation(angle);
        };

        calculateRotation();
    }, [cursorPosition]);

    useEffect(() => {
      // Comprobar el ancho del viewport y establecer cameraMarginTop en consecuencia
      const handleViewportResize = () => {
          const viewportWidth = window.innerWidth;
          if (viewportWidth >= 524) {
              setCameraMarginTop(32);
              
          } else {
              // Otro valor para cameraMarginTop cuando el viewport es menor de 600px
              setCameraMarginTop(15);
           
          }
      };

      // Llamar a la función al inicio para establecer el valor inicial
      handleViewportResize();

      // Escuchar eventos de cambio de tamaño de la ventana para ajustar el valor de cameraMarginTop
      window.addEventListener("resize", handleViewportResize);

      // Limpiar el listener cuando el componente se desmonta
      return () => {
          window.removeEventListener("resize", handleViewportResize);
      };
  }, []);

  useEffect(() => {
    console.log(cameraMarginTop); // Loguear el valor actualizado de cameraMarginTop
  }, [cameraMarginTop]);


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
                transform: `rotate(${rotation}deg)`
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
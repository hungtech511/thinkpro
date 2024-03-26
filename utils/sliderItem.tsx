interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLElement>;
    disabled?: boolean; // Added disabled prop
  }
  
  
  const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick, disabled }) => (
    <div
      className={className}
      style={{
        ...style,
        color: disabled ? "gray" : "red", // Change color based on disabled state
        cursor: disabled ? "default" : "pointer" ,// Change cursor based on disabled state
        display: "inline-block",
        background: "rgb(0, 101, 238)", width:40, height:40,
        borderRadius:50
      }}
      onClick={disabled ? undefined : onClick} // Disable click event if disabled
    >
      { !disabled && <i style={{color: "#fff", width:20, height:20, transform: 'translate(50%,50%)'}} className="i-ui-chevron-right"></i> } {/* Render icon only if not disabled */}
    </div>
  );
  
  // Arrow component for previous button
  const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick, disabled }) => (
    <div
      className={className}
      style={{
        ...style,
        color: disabled ? "gray" : "red", // Change color based on disabled state
        cursor: disabled ? "default" : "pointer" ,// Change cursor based on disabled state
        display: "inline-block",
        background: "rgb(0, 101, 238)", width:40, height:40,
        borderRadius:50,
        zIndex:5
      }}
      onClick={disabled ? undefined : onClick} // Disable click event if disabled
    >
      { !disabled && <i style={{color: "#fff", width:20, height:20, transform: 'translate(50%,50%)'}} className="i-ui-chevron-left"></i> } {/* Render icon only if not disabled */}
    </div>
  );
  
  // Settings for the slider
  export  const settings: {
    dots: boolean;
    infinite: boolean;
    speed: number;
    variableWidth: boolean;
    slidesToScroll: number;
    nextArrow: JSX.Element;
    prevArrow: JSX.Element;
  } = {
    dots: false,
    infinite: false,
    speed: 500,
    variableWidth: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };


  export  const navigationSettings: {
    dots: boolean;
    infinite: boolean;
    speed: number;
    variableWidth: boolean;
    slidesToScroll: number;
  } = {
    dots: false,
    infinite: false,
    speed: 500,
    variableWidth: true,
    slidesToScroll: 5,
  };
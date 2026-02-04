const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Primary orb - top right */}
      <div 
        className="floating-orb w-[500px] h-[500px] bg-primary/20 top-[-100px] right-[-100px]"
        style={{ animationDelay: '0s' }}
      />
      
      {/* Accent orb - bottom left */}
      <div 
        className="floating-orb w-[400px] h-[400px] bg-accent/20 bottom-[-50px] left-[-100px]"
        style={{ animationDelay: '-5s' }}
      />
      
      {/* Small orb - center */}
      <div 
        className="floating-orb w-[300px] h-[300px] bg-primary/10 top-[40%] left-[30%]"
        style={{ animationDelay: '-10s' }}
      />
      
      {/* Extra small orb */}
      <div 
        className="floating-orb w-[200px] h-[200px] bg-accent/10 top-[20%] right-[20%]"
        style={{ animationDelay: '-15s' }}
      />
    </div>
  );
};

export default FloatingOrbs;

const TypingAnimation = () => {
  return (
    <div className="flex items-center justify-center space-x-2 shadow-lg bg-[#f9fafb] p-10 rounded-lg relative z-20">
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#e0edc5] to-[#92aa83] animate-bounce	"></div>
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#e0edc5] to-[#92aa83] animate-bounce	 delay-300"></div>
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#e0edc5] to-[#92aa83] animate-bounce	 delay-600"></div>
    </div>
  );
};

export default TypingAnimation;

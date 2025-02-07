const Button = ({ children, onClick, className }) => (
    <button onClick={onClick} className={`px-6 py-3 text-lg rounded-lg ${className}`}>
      {children}
    </button>
  );
  
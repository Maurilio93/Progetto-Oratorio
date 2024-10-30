import PropTypes from 'prop-types';

export function Button({ type, text, onClick }) {
  return (
    <button
      className="
          bg-blue-400
          rounded-lg
          px-2
          py-1
          text-white
          text-lg
          hover: border-blue-400
          hover: border-2
          cursor-pointer
          hover:bg-white
          hover:text-black
          focus:outline-none
        "
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func,
};

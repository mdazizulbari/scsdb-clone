const Dropdown = ({ title, options, func }) => {
  return (
    <div className="select">
      <select
        // className="px-4 py-1 text-gray-400 rounded-full bg-gray-800 border-0 hover:bg-[#6556CD] hover:text-white"
        onChange={func}
        defaultValue="0"
        name="format"
        id="format"
      >
        <option value="0" disabled>
          {title}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;

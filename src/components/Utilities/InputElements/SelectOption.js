function SelectOption({ value, children }) {
  return (
    children && (
      <option className="selectOption" value={value}>
        {children}
      </option>
    )
  );
}

export default SelectOption;

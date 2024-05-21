import ISelectOptionProps from "./Interfaces/ISelectOptionProps";

function SelectOption({ value, children }: ISelectOptionProps) {
  return (
    children && (
      <option className="selectOption" value={value}>
        {children}
      </option>
    )
  );
}

export default SelectOption;

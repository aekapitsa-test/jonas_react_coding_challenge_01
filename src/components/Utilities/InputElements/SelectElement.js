import SelectOption from "./SelectOption";

function SelectElement() {
  return (
    <select className="selectElement" name="selectElement" id="selectElement">
      <SelectOption />
      <SelectOption />
    </select>
  );
}

export default SelectElement;

import React from "react";

const BasicDropdown = ({ showDropdown, setShowDropdown, items }) => {
  return (
    <div class="dropdown-wrapper">
      <button onClick={setShowDropdown} className="trigger-button text-black">
        Items
      </button>
      <ul className={showDropdown ? "active" : ""}>
        {items && items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default BasicDropdown;

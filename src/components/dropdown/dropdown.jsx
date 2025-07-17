import "./dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";




function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="dropdown">
      <div className="visiblePart" onClick={toggleDropdown}>
        <h3 className="title">{title}</h3>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="chevron-icon"
        />
      </div>
      {isOpen && <div className="divContent">{content}</div>}
    </div>
  );
}

export default Dropdown;
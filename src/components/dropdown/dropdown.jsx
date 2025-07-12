import "./dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {DropdownTitle,DropdownContent} from "../../data/variables";



function Dropdown({i, title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const  finalTitle = title || (typeof i === "number" ? DropdownTitle[i] : "");
  const finalContent = content || (typeof i === "number" ? DropdownContent[i] : "");

  return (
    <div className="dropdown">
      <div className="visiblePart" onClick={toggleDropdown}>
        <h3 className="title">{finalTitle}</h3>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="chevron-icon"
        />
      </div>
      {isOpen && <div className="divContent">{finalContent}</div>}
    </div>
  );
}

export default Dropdown;

import "./a-propos.css";
import Dropdown from "../../components/dropdown/dropdown";
import Banner from "../../components/banner/banner";
import Paysage2 from "../../assets/paysage2.png"
import {DropdownTitle,DropdownContent} from "../../data/variables";



function Apropos() {

  

  return (
    
    <div className="a-propos">
        <Banner showText={false} image={Paysage2} customClass="no-shadow"/>
      {DropdownTitle.map((title, index) => (
        <Dropdown key={index} title={title} content={DropdownContent[index]} />
      ))}
    </div>
  );
}

export default Apropos;

import "./a-propos.css";
import Dropdown from "../../components/dropdown/dropdown";
import Banner from "../../components/banner/banner";
import Paysage2 from "../../assets/paysage2.png"




function Apropos() {
  return (
    
    <div className="a-propos">
        <Banner showText={false} image={Paysage2} customClass="no-shadow"/>
      {[0, 1, 2, 3].map((i) => (
        <Dropdown key={i} i={i} />
      ))}
    </div>
  );
}

export default Apropos;

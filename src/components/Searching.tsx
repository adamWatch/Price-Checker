import { ChangeEvent} from "react";
type Props ={
    value:string;
    setValue: (e:ChangeEvent<HTMLInputElement>) => void;
    handleBtn: () =>void;
}
import "../styles/Searching.css"
const Searching = (props:Props) =>{

    const {value,setValue,handleBtn} = props;
    console.log(setValue);

    return(
        <div className="searching container">
            <input type="text" className="search_input" placeholder="Name of your product" value={value} onChange={setValue} />
            <button className="btn search_btn" onClick={handleBtn}>Search</button>
        </div>
    )
}

export {Searching};
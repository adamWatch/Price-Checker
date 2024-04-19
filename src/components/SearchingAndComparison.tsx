import { ChangeEvent, useState } from "react";
import { Comparison } from "./Comparison";
import { Searching } from "./Searching";

const SearchingAndComparison = ()=>{

    const [searchingProduct,setSearchingProduct] = useState('');

    const handleSearchingProduct = (e:ChangeEvent<HTMLInputElement>)=>{
        const newValue = e.target.value;
        setSearchingProduct(newValue);
        
    }

    const handleSearch = ()=>{
        console.log(`You looking ${searchingProduct}`)
        // Fetching from Api
    }

    return(
        <>
            <Searching value={searchingProduct} setValue={handleSearchingProduct} handleBtn={handleSearch} />
            <Comparison/>
            
        </>
    )
}

export {SearchingAndComparison};
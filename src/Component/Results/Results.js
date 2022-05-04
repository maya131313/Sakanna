import React from "react";
import SearchBar from '../SearchBar/SearchBar'



const Results = () => {
    return (
        <>
            <div className="resulty">
                <div className="result">
                    <SearchBar />
                </div>
                <div className="comta">
                    <div className="title">
                        <div className="sup">
                            <p className="sup-tit">CHECK</p>
                            <hr className="gr"></hr>
                        </div>
                        <p className="main-tit">Results</p>
                    </div>
                    <div className="result-box">
                        
                    </div>
                    <div className="result-box">

                    </div>
                    <div className="result-box">

                    </div>
                </div>
            </div>
        </>
    )

}
export default Results;
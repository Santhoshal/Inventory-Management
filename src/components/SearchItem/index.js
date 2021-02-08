import React from "react";

const SearchItem=(props)=> {
  return (
    <div className="ui-container mt-40 mb-30">
      
        <div className="ui seven column grid ">
          <div className="column">
            <div className="ui fluid category mini search">
              <div className="ui icon input">
                <input
                  className="bg-grey"
                  type="text"
                  placeholder="Search By Items..."
                />
              </div>
            </div>
          </div>
          <div className="column ml-20">
            <button className="ui button mini circular">Search</button>
          </div>
        </div>

    </div>
  );
}

export default SearchItem;




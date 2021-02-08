import React from "react";

const SearchItem=()=> {
  return (
    <div className="ui-container mt-40 mb-30">
      <form>
        <div className="ui seven column grid">
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
          <div className="column">
            <button className="ui button mini circular">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchItem;
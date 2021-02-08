import React, { useState } from "react";

const Item=(props)=> {
  const [data, setdata] = useState(props.list);
  // const [isError, setError] = useState("please enter a value");

  const handleUpdate = (e) => {
    const updateData = props.list.map((element) => {
      if (element.id === parseInt(e.target.id)) {
        element.stocks = e.target.value;
      }
      return element;
    });
    setdata(updateData);
  };
  const handleInputSave = (e) => {
    handleCheck(e, "isEdit");
  };
  const handleCheck = (e, value) => {
    let datanode = value;
    let id = e.target.id;
    const updateData = data.map((element) => {
      if (element.id === parseInt(id)) {
        element[datanode] = !element[datanode];
      }
      return element;
    });
    setdata(updateData);
  };
 
  

  const isNumberKey = (event) => {
    if (
        ["e", "E", "+"].includes(event.key) ||
        (event.key === "." && event.target.value.split(".").length > 1) ||
        (event.key === "-" && event.target.value.split("-").length > 1)
    ) {
        event.preventDefault();
    }
}
  
//   const doValidate=() =>{
//    
//     let isError
//     if (!stocks && stocks !== 0) {
//       isError = "Value cannot be empty";
//     } else if (stocks >= 0) {
//       setError(  isError= "")
//     }
//     let checkerror
//     if (!this.state.checked) {
//         checkerror = "plz check the field";
//     } else {
//         setError(
//             checkerror: "",
//         );
//     }
//    
//     return true;
// }
//  const onBlurCheck = (e) => {
//     return doValidate();
// };
  return data.map(
    ({ id, name, color, options, skuid, stocks, isEdit, isUnlimited }) => {
      return (
        <div className="ui grid ind-item" key={id}>
          <div className="six column row ui segment">
            <div className="column">{name}</div>
            <div className="column">{color}</div>
            <div className="column">{options}</div>
            <div className="column">{skuid}</div>
            <div className="column">
              {isEdit && (
                <div className="ui two column grid">
                  <div
                    className={
                      "column ui mini icon input w-65 " +
                      (stocks || isUnlimited ? "" : "error")
                    }
                  >
                    <input
                      id={id}
                      type="number"
                      className="bg-grey"
                      placeholder="Enter value"
                      value={stocks}
                      onChange={(e) => handleUpdate(e)}
                      onKeyDown={(event) => isNumberKey(event)}
                      // onBlur={(evt) => onBlurCheck(evt)}
                     
                    />
                  </div>
                  <div className="column pt-20 fs-12">
                    <div className="ui checkbox">
                      <input
                        id={id}
                        type="checkbox"

                        checked={isUnlimited}
                        onChange={(e) => handleCheck(e, "isUnlimited")}
                      />
                      <label>Unlimited</label>
                    </div>
                  </div>
                </div>
              )}
              {!isEdit && <span> {isUnlimited ? "Unlimited" : stocks}</span>}
            </div>
            <div className="right aligned floated column">
              <button
                id={id}
                style={{ display: isEdit ? "block" : "none" }}
                className={
                  "ui  primary button mini  circular f-right " +
                  (stocks || isUnlimited ? "" : "disabled")
                }
                onClick={(e) => handleInputSave(e, stocks)}
              >
                Save
              </button>
              <button
                id={id}
                style={{ display: !isEdit ? "block" : "none" }}
                className={`ui button mini circular f-right mr-20`}
                onClick={(e) => handleCheck(e, "isEdit")}
              >Edit</button>
            </div>
          </div>
        </div>
      );
    }
  );
}


export default Item;
import React, { useState } from "react";
import Item from "../Item/index";
const SubCategory = (props) => {
  const [data, setdata] = useState(props.list);

  const handleToggleClicks = (evt, value) => {
    let datanode = value;
    let id = evt.target.id;
    const newData = data.map((element) => {
      if (element.id === parseInt(id)) {
        element[datanode] = !element[datanode];
      }
      return element;
    });
    setdata(newData);
  };

  return data.map(({ id, name, isAvailability, isShow, items }) => {
    return (
      <div className="sub-category" key={props.id + '-' + id}>
        <div className="ui grid segment bg-header">
          <div className="two column row">
            <div className="left floated column fs-13">{name}</div>
            <div className="right aligned floated column">
              <label className="mr-20">Availability</label>
              <div className="ui toggle checkbox">
                <input
                  id={id}
                  type="checkbox"
                  checked={isAvailability}
                  onChange={(e) => handleToggleClicks(e, "isAvailability")}
                />
                <label>
                  <i
                    id={id}
                    onClick={(e) => handleToggleClicks(e, "isShow")}
                    className={
                      "icon " + (isAvailability && isShow ? "minus blue" : "plus")
                    }
                  ></i>
                </label>
              </div>
            </div>
          </div>
        </div>
        {isAvailability && isShow && <Item list={items} />}
      </div>
    );
  });
}
export default SubCategory;

import React, { useState, useEffect } from "react";
import SubCategoryList from "../SubCategory";
import "./styles.css"
const CategoryList=() =>{
  const [inventoryItemData, setInventoryItemData] = useState(
    JSON.parse(localStorage.getItem("categories")) || []
  );

  useEffect(() => {
    let editData = JSON.parse(localStorage.getItem("categories"));
    if (editData) {
      setInventoryItemData(editData);
    } else {
      fetch("./data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setInventoryItemData(data));
    }
    return () => {};
  }, []);

  const handleToggleCheck = (evt, value) => {
    let datanode = value;
    let id = evt.target.id;
    let data = inventoryItemData;
    const updateData = data.map((element) => {
      if (element.id === parseInt(id)) {
        element[datanode] = !element[datanode];
      }
      return element;
    });
    setInventoryItemData(updateData);
    localStorage.setItem("categories", JSON.stringify(inventoryItemData));
  };

  return (
    <div className="inventory-wrapper pb-20">
        <ul>
          <li>ITEM NAME</li>
          <li>COLOR</li>
          <li>OPTIONS</li>
          <li>SKUID</li>
          <li>STOCKS</li>
          <li>ACTIONS</li>
        </ul>
      {inventoryItemData.map(({ id, name, availability, isShow, subcategory }) => {
        return (
          <div className="main-category mb-20" key={id}>
            <div className="ui grid segment bg-header border-none">
              <div className="three column row">
                <div className="left floated column">{name}</div>
                <div className="right aligned floated column">
                  <label className="mr-20">Availability</label>
                  <div className="ui toggle checkbox">
                    <input
                      id={id}
                      type="checkbox"
                      checked={availability}
                      onChange={(evt) => handleToggleCheck(evt, "availability")}
                    
                    />
                    <label>
                      <i
                        id={id}
                        onClick={(evt) => handleToggleCheck(evt, "isShow")}
                        className={
                          "icon " +
                          (availability && isShow ? "minus blue" : "plus")
                        }
                      ></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {availability && isShow && <SubCategoryList list={subcategory} />}
          </div>
        );
      })}
    </div>
  );
}


export default CategoryList;
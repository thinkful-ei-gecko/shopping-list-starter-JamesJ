'use strict';
/* global cuid, Item */

// eslint-disable-next-line no-unused-vars
const store = (function() {

  // items array
  let items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];

  let hideCheckedItems = false;        // hide checked items boolean
  let searchTerm = '';                 // search term string

  let findByID = function(id) {
    return this.items.find(item => id === item.id);
  };

  let addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch(e) {
      console.log(`${e.message}`);
    }
  };

  let findAndToggleChecked = function(id) {
    const checkedItem = this.findByID(id);
    checkedItem.checked = !checkedItem.checked;
  };

  let findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(newName);
      this.findByID(id).name = newName;
    } catch(e) {
      console.log(`Cannot update name: ${e.message}`);
    }
  };

  let findAndDelete = function(id) {
    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index,1);
  };



  return {
    items,
    hideCheckedItems,
    searchTerm,
    findByID,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };
  
}() );
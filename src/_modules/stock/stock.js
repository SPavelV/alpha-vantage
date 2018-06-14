'use strict';

export default class Stock {
  constructor(name) {
    this._name_ = name;
  }

  printName() {
    console.log("Stock name: " + this.name);
  }

  get name() {
    return this._name_;
  }

  set name(name) {
    this._name_ = name;
  }
}

class SmartCalculator {
  
  constructor(initialValue) {
    this.value = initialValue;
  }

  add(number) {
    this.value =this.value.toString() + "+" + number.toString();
    return this;
  }
    
  subtract(number) {
    this.value =this.value.toString() + "-" + number.toString();
    return this;
  }

  multiply(number) {
    this.value =this.value.toString() + "*" + number.toString();
    return this;
  }

  devide(number) {
    this.value =this.value.toString() + "/" + number.toString();
    return this;
  }

  pow(number) {
    this.value =this.value.toString() + "**" + number.toString();
    return this;
  }
  
  toString(){
    let result = eval(this.value);
    return result;
  }
}

module.exports = SmartCalculator;

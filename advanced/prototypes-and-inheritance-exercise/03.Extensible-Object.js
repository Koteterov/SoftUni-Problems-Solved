function extensibleObject() {
    let proto = {};
    let obj = Object.create(proto);
  
    obj.extend = function (template) {
      Object.entries(template).forEach(([key, value]) => {
        if (typeof value == "function") {
          proto[key] = value;
        } else {
          obj[key] = value;
        }
      });
    };
    return obj;
  }





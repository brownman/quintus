

QStorage = {};

(function(c) {


  c.set = function(name,val) {
    $.Storage.set(name,JSON.stringify(val));
  }

  c.get = function(name) {
    var obj =  JSON.parse($.Storage.get(name) || "{}");
    return obj ? obj : null;
  }


  c.saveObject = function(name,data,code) {
    var objs = c.get('Objects');


    var savedObj = [];
    $.each(data,function() {
      savedObj.push({
        x: this.x,
        y: this.y,
        z: this.z,
        material: this.material,
        code: this.code
      });
    });

    var object = { code: code, objects: savedObj };

    objs[name] = object;
    c.set('Objects',objs);
  }

  c.listObjects = function() {
    var objects = c.get('Objects');
    var objList = [];

    for(var k in objects) { objList.push(k); }
    objList.sort();
    return objList;
  }


  c.loadObject = function(name) {
    var objs = c.get("Objects");

    return objs[name] || {};
  }

  c.removeObject = function(name){
	var objs = c.get("Objects");
	
	delete objs[name];
	
	c.set('Objects',objs);
}

  return c;
  })(QStorage);




// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var out = "";
  var stringify = function(node){
    if (node == null){
      out += "null";
      return;
    } else if (node.constructor === Number){
      out += node.toString();
    } else if (node.constructor === String){
      out += '"' + node + '"';
    } else if (node.constructor === Boolean){
      console.log(node);
      if (node === true){
        out += "true";
      } else {
        out += "false";
      }
    } else if (node.constructor === Array){
      out += "[";
      for (var i = 0; i < node.length;i++){
        stringify(node[i]);
        if (i < node.length -1){
          out += ",";
        }
      }
      out += "]";
    } else if (node.constructor === Object){
      var needsComma = false;
      out += "{";
      for (var i in node){
        if (node[i] == undefined || node !== null && node.constructor === Function){}
        if (needsComma){
          out += ",";
        }
        needsComma = true;
        out += '"' + i + '":';
        stringify(node[i]);
      }
      out += "}";
    } else if (node.constructor === Function){
    } else if (node == undefined){
    }
  }
  stringify(obj);
  console.log(out);
  return out;
};

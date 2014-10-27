// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here

  var stringify = function(node){
    if (node === null){
      out += "null";
    }
  else if (node.constructor === Number){
      out += node.toString();
    }
  else if (node.constructor === String){
      out += '"' + node + '"';
    }
  else if (node.constructor === Boolean){
      if (node === true){
        out += "true";
      } else {
        out += "false";
      }
    }
  else if (node.constructor === Array){
      out += "[";
      for (var i = 0; i < node.length;i++){
    if ( node[i] === undefined )
      continue;
        stringify(node[i]);
        if (i < node.length -1){
          out += ",";
        }
      }
      out += "]";
    }
  else if (node.constructor === Object){

      var needsComma = false;
      out += "{";
    for (var i in node) {
      if (node[i] !== null){
        if ( node[i] === undefined || node[i].constructor === Function )
          continue;

            if (needsComma){
                out += ",";
            }
            needsComma = true;
            out += '"' + i + '":';
            stringify(node[i]);
        }
      else {
         if (needsComma){
                out += ",";
            }
        out += '"' + i + '":';
        stringify(node[i]);
      }
    }
    out += "}";
  }
  else if (node.constructor === Function){
    }
  else if (node === undefined){
    }
  }

  var out = "";
  stringify(obj);
  console.log(out);
  return out;
};



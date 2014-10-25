// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  // console.log(this.document);
  var nodeScan = function(node, name){
    console.log(node);
    if (node.childElementCount === 0){
      if (node.classList.contains(name)){
        results.push(node);
      }
    } else {
      for (var child in node.childNodes) {
        nodeScan(child,className);
      }
    }
  };
  var results = [];
  nodeScan(this.document,className);
  return results;
};



// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  // console.log(this.document);
  var results = [];
  var nodeScan = function(node, name){
    if (node.classList.contains(name)){
        results.push(node);
    }
    if (node.children.length > 0){
      for (var i = 0; i<node.children.length;i++) {
        results.push(nodeScan(child,className));
      }
    }
  };
  nodeScan(this.document,className);
  console.log(results);
  return results;
};



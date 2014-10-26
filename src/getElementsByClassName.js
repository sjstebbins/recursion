// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  // console.log(this.document);
  var nodeScan = function(node, className){
    var results = [];
    if (node.classList.contains(className)){
        results.push(node);
    }
    if (node.children.length > 0){
      for (var i = 0; i<node.children.length;i++) {
        results = results.concat(nodeScan(node.children[i],className));
      }
    }
    return results;
  };
  return nodeScan(this.document.body,className);
};



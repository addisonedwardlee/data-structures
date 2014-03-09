var Graph = function(){
	this._graphNodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){
	var noddle = {};
	noddle.edges = [];
	this._graphNodes[newNode] = noddle;
	if(this._graphNodes.length === 1){
		this.addEdge(newNode, this._graphNodes[0])
	}
	if(toNode){
		this.addEdge(newNode, toNode);
	}
};

Graph.prototype.contains = function(node){
	for(var key in this._graphNodes){
		if(key === node){
			return true
		}
	}
	return false;
};

Graph.prototype.removeNode = function(node){
	for(var key in this._graphNodes){
		if(key === node){
			delete this._graphNodes[key];
		}
	}
	return undefined;
};

Graph.prototype.getEdge = function(fromNode, toNode){
	for(var i = 0; i < this._graphNodes[fromNode].edges.length; i++){
		if(this._graphNodes[fromNode].edges[i] === toNode){
			return true;
		}
	}
	return false
};

Graph.prototype.addEdge = function(fromNode, toNode){
	this._graphNodes[fromNode].edges.push(toNode);
	this._graphNodes[toNode].edges.push(fromNode)
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

'use strict';

module.exports =  function({types: t}) {
	return {
		visitor: {
			CallExpression(path){
				const node = path.node;
				if(node.arguments[0] && node.arguments[0].type === "FunctionExpression") {
					if(node.callee.property && node.callee.property.name == "map"){
						
						const object = node.callee.object;
						const property = node.callee.property;

						if(object.type === "CallExpression")return;

						let parentPath;
						if(path.parent.type === "VariableDeclarator"){
							parentPath = path.parentPath.parentPath;
						}else if(path.parent.type === "ExpressionStatement"){
							parentPath = path.parentPath;
						}else if(path.parent.type === "ReturnStatement"){
							parentPath = path.parentPath;
						}


						parentPath.insertBefore(
							t.expressionStatement(
								t.assignmentExpression(
									"=",
									object,
									t.conditionalExpression(
										t.BinaryExpression("===", object, t.NullLiteral()),
										t.arrayExpression([]),
										object
									)
								)
							)
						);

					}
				}
			}
		}
	};
};

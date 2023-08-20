
module.exports = function traverse(tree, visitors) {

    function iterateNode(syntaxTree, parent) {
        const method = visitors[syntaxTree.type];
        if (method) method(node, parent);
        if (node.type === 'Program') iterateTrees(node.body, node);
        else if (node.type === 'CallExpression') iterateTrees(node.parms, parent);
    }

    function iterateTrees(nodes, parent) {
        nodes.forEach(node => iterateNode(node, parent));
    }

    iterateNode(tree, null);

}
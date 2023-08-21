
module.exports = function traverse(tree, visitors) {

    function iterateNode(syntaxTree, parent) {
        const method = visitors[syntaxTree.type];
        if (method) method(node, parent);
        if (node.type === 'Program') iterateNodes(node.body, node);
        else if (node.type === 'CallExpression') iterateNodes(node.parms, parent);
    }

    function iterateNodes(nodes, parent) {
        nodes.forEach(node => iterateNode(node, parent));
    }

    iterateNode(tree, null);

}
const nodeSize = 24;
const distanceH = 65;
const distanceV = 50;
const lineWidth = 2;
const lineTextSize = 28;
const hiddenRenderFrames = 10;

let renderScale = 1;
let initialWidth = 1000;
let initialHeight = 1000;

let root;
let treeDepth;
let nodes = [];
let treeRenderFrame = 0;
let treeVisible = false;
let treeAllowInput = true;

let col_edge;
let col_node;
let col_node_border;
let col_edge_text;

function setup() {
    col_edge = color(255, 255, 255);
    col_node = color(255, 255, 255);
    col_node_border = color(0, 0, 0);
    col_edge_text = color(0, 0, 0);

    const canvas = createCanvas(initialWidth * renderScale, initialHeight * renderScale);

    // frameRate(2);
    canvas.elt.oncontextmenu = () => false;
    canvas.parent("tree-container");

    root = new TreeNode(null);
    nodes.push(root);

    treeDepth = 20;
    root.calcTree(0, 0);
}

function draw() {
    resizeCanvas(initialWidth * renderScale, initialHeight * renderScale);
    textAlign(LEFT);
    scale(renderScale);
    background(color(0, 0, 0, 0));
    if (treeVisible) {
        root.drawTree(treeDepth);
        treeRenderFrame++;
    }
}

function setRenderScale(scale) {
    renderScale = scale;
}

function setTreeVisible(visible) {
    treeVisible = visible;
}

function setTreeAllowInput(allow) {
    treeAllowInput = allow;
}

function resetToRoot() {
    root = new TreeNode(null);
    nodes = [];
    nodes.push(root);
    treeRenderFrame = 0;
    root.calcTree(0, 0);
}

function mouseReleased() {
    if (treeAllowInput) {
        if (mouseButton === LEFT) {
            for (let i = 0; i < nodes.length; i++) {
                if (nodes[i].isMouseOver()) {
                    // console.log("Parent Node: " + nodes[i].lineText);
                    let newText = document.getElementById("input_text").innerText;
                    // console.log("New Text: " + newText);
                    let newNode = nodes[i].addChild(newText);
                    if (newNode.depth > treeDepth) {
                        treeDepth = newNode.depth;
                    }

                    root.calcTree(0, 0);
                    treeRenderFrame = 0;
                    return false;
                }
            }
            return false;

        } else {
            for (let i = 0; i < nodes.length; i++) {
                if (nodes[i].isMouseOver()) {
                    if (nodes[i].parent != null && nodes[i].children.length === 0) {
                        // console.log("Removing Node: " + nodes[i].lineText);
                        nodes[i].parent.children.splice(nodes[i].parent.getChildIndex(nodes[i]), 1);
                        nodes.splice(i, 1);

                        root.calcTree(0, 0);
                        treeRenderFrame = 0;
                        break;
                    } else {
                        // console.log("Can't remove Node: " + nodes[i].lineText);
                    }

                }
            }
            return false;
        }
    }
}

function keyReleased() {
    if ("abcdefghijklmnopqrstuvwxyzäöü".includes(key.toLowerCase()) && treeAllowInput) {
        document.getElementById("input_text").innerText = key.toUpperCase();
    }
}


// noinspection PointlessBooleanExpressionJS
class TreeNode {
    constructor(parentNode, lineText) {
        this.children = []
        this.parent = parentNode;
        if (parentNode === null) {
            this.depth = 0;
        } else {
            this.depth = parentNode.depth + 1;
        }
        if (lineText !== undefined) {
            this.lineText = lineText;
        }

        this.x = 0;
        this.y = 0;
    }

    getTreeString() {
        let tempString = "";

        if (this.parent !== null) {
            if (this.lineText === "" || this.lineText === null || this.lineText === undefined) {
                tempString = "!"  + this.depth.toString();
            } else {
                tempString = this.lineText + this.depth.toString();
            }
        }

        for (let i = 0; i < this.children.length; i++) {
            tempString += this.children[i].getTreeString();
        }
        return(tempString);
    }

    drawTree(treeDepth) {
        if (treeRenderFrame > hiddenRenderFrames) {
            this.drawEdges();
            this.drawNodes();
            this.drawEdgeText();
        }

        for (let i = 1; i < treeDepth; i++) {
            this.centerNodes();
        }
        this.recalcOffsets();
    }

    addChild(lineText) {
        let child = new TreeNode(this, lineText);
        this.children.push(child);
        nodes.push(child);
        root.calcTree(0, 0);
        return(child);
    }

    isMouseOver() {
        return (sqrt(pow((mouseX/renderScale) - this.x, 2) + pow((mouseY/renderScale) - this.y, 2)) < nodeSize / 2);
    }

    calcHorizontalOffset(index) {
        return(distanceH + nodeSize / 2 + index * (nodeSize + distanceH));
    }

    calcVerticalOffset() {
        let offset = distanceV + nodeSize / 2 + this.depth * (nodeSize + distanceV);
        return(offset);
    }

    childrenCount() {
        return(this.children.length);
    }

    getChildIndex(child) {
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i] === child) {
                return(i);
            }
        }
        return(-1);
    }

    getIndex() {
        if (this.parent === null) {
            return(-1);
        }
        return(this.parent.getChildIndex(this));
    }

    lastChild() {
        if (this.children.length === 0) {
            return(null);
        }
        return(this.children[this.children.length - 1]);
    }

    prevSibling() {
        if (this.parent === null) {
            return(null);
        }

        let index = this.getIndex();
        if (index < 0) {
            return(null);
        } else if (index === 0) {
            if (this.parent.parent !== null && this.parent.getIndex() > 0) {
                return(this.parent.parent.getChild(this.parent.getIndex() - 1).lastChild());
            } else {
                return(null);
            }
        } else {
            return(this.parent.getChild(index - 1));
        }
    }

    childrenWidth() {
        return(this.children.length * (nodeSize + distanceH));
    }

    childrenCenter() {
        let center = 0;
        for (let i = 0; i < this.children.length; i++) {
            center += this.children[i].x;
        }
        return(center / this.children.length);
    }

    calcTree(index, offset) {
        this.x = this.calcHorizontalOffset(index + offset);
        this.y = this.calcVerticalOffset();

        this.offset = 0;
        for (let i = 0; i < index; i++) {
            this.offset += this.parent.getChild(i).childrenCount();
        }

        for (let i = 0; i < this.children.length; i++) {
            if (!nodes.includes(this.children[i])) {
                nodes.push(this.children[i]);
            }
            this.children[i].calcTree(i, this.offset);
        }
    }

    centerNodes() {
        if (this.x < this.childrenCenter()) {
            this.x = this.childrenCenter();
        } else {
            let childrenOffset = this.x - this.childrenCenter();
            for (let i = 0; i < this.children.length; i++) {
                this.children[i].x += childrenOffset;
            }
        }

        for (let i = 0; i < this.children.length; i++) {
            this.children[i].centerNodes();
        }
    }

    recalcOffsets() {
        if (this.parent !== null && this.childrenCount() > 0) {
            if (this.prevSibling() !== null && this.prevSibling().lastChild() !== null) {
                let prevSibling = this.prevSibling();
                let distanceToPrevSibling = this.getChild(0).x - prevSibling.lastChild().x - nodeSize;

                if (distanceToPrevSibling < distanceH) {
                    for (let i = 0; i < this.children.length; i++) {
                        this.children[i].x += distanceH - distanceToPrevSibling;
                    }
                }
            }
        } else if (this.parent !== null && this.childrenCount() === 0) {
            if (this.prevSibling() !== null) {
                let prevSibling = this.prevSibling();
                let distanceToPrevSibling = this.x - prevSibling.x - nodeSize;

                if (distanceToPrevSibling < distanceH) {
                    this.x += distanceH - distanceToPrevSibling;
                }
            }
        }

        for (let i = 0; i < this.children.length; i++) {
            this.children[i].recalcOffsets();
        }
    }

    drawEdges() {
        stroke(col_edge);
        if (this.parent !== null) {
            strokeWeight(3);
            line(this.x, this.y, this.parent.x, this.parent.y);
        }

        for (let i = 0; i < this.children.length; i++) {
            this.children[i].drawEdges(i, this.offset);
        }
    }

    drawEdgeText() {
        textSize(lineTextSize);
        textFont('Vollkorn');
        textStyle(BOLD)
        textAlign(CENTER, CENTER);

        if (this.parent !== null) {
            strokeWeight(0);
            text(this.lineText, (this.x + this.parent.x) / 2, (this.y + this.parent.y) / 2);
        }

        for (let i = 0; i < this.children.length; i++) {
            this.children[i].drawEdgeText(i, this.offset);
        }
    }

    drawNodes() {
        stroke(col_node_border);
        strokeWeight(lineWidth);
        circle(this.x, this.y, nodeSize);

        for (let i = 0; i < this.children.length; i++) {
            this.children[i].drawNodes(i, this.offset);
        }
    }

    getChild(index) {
        return(this.children[index]);
    }

    getParent() {
        return(this.parent);
    }

    getDepth() {
        return(this.depth);
    }
}
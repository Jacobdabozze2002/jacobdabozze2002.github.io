const nodeSize = 30;
const distanceH = 40;
const distanceV = 80;
const lineWidth = 2;
const lineTextSize = 20;
const hiddenRenderFrames = 10;

let renderScale = 0.5;
let initialWidth = 1000;
let initialHeight = 1000;

let root;
let treeDepth;
let nodes = [];
let treeRenderFrame = 0;

function setup() {
    const canvas = createCanvas(initialWidth * renderScale, initialHeight * renderScale);

    // frameRate(2);
    canvas.elt.oncontextmenu = () => false;
    root = new TreeNode(null);
    nodes.push(root);

    // BEISPIEL 1
    root.addChild("A");
    root.getChild(0).addChild("a");
    root.getChild(0).getChild(0).addChild("a0");
    root.getChild(0).addChild("b");
    root.getChild(0).getChild(1).addChild("b0")
    root.getChild(0).getChild(1).addChild("b1")
    root.getChild(0).addChild("c");
    root.getChild(0).getChild(2).addChild("c0")
    root.getChild(0).getChild(2).addChild("c1")
    root.getChild(0).addChild("d");
    root.getChild(0).getChild(3).addChild("d0")
    root.getChild(0).getChild(3).addChild("d1")
    root.getChild(0).getChild(3).addChild("d2")
    root.addChild("B");
    root.getChild(1).addChild("e");
    root.getChild(1).getChild(0).addChild("e0");
    root.getChild(1).getChild(0).addChild("e1");
    root.getChild(1).getChild(0).addChild("e2");
    root.getChild(1).addChild("f");
    root.getChild(1).getChild(1).addChild("f0");

    // BEISPIEL banana\0 komprimiert
    /*root.addChild("banana\\0");
    root.addChild("a");
    root.getChild(1).addChild("na");
    root.getChild(1).getChild(0).addChild("na\\0");
    root.getChild(1).getChild(0).addChild("\\0");
    root.getChild(1).addChild("\\0");
    root.addChild("na");
    root.getChild(2).addChild("na\\0");
    root.getChild(2).addChild("\\0");
    root.addChild("\\0");*/

    // BEISPIEL banana\0
    /*root.addChild("b");
    root.getChild(0).addChild("a");
    root.getChild(0).getChild(0).addChild("n");
    root.getChild(0).getChild(0).getChild(0).addChild("a");
    root.getChild(0).getChild(0).getChild(0).getChild(0).addChild("n");
    root.getChild(0).getChild(0).getChild(0).getChild(0).getChild(0).addChild("a");
    root.getChild(0).getChild(0).getChild(0).getChild(0).getChild(0).getChild(0).addChild("\\0");
    root.addChild("a");
    root.getChild(1).addChild("n");
    root.getChild(1).getChild(0).addChild("a");
    root.getChild(1).getChild(0).getChild(0).addChild("n");
    root.getChild(1).getChild(0).getChild(0).getChild(0).addChild("a");
    root.getChild(1).getChild(0).getChild(0).getChild(0).getChild(0).addChild("\\0");
    root.getChild(1).getChild(0).getChild(0).addChild("\\0");
    root.getChild(1).addChild("\\0");
    root.addChild("n");
    root.getChild(2).addChild("a");
    root.getChild(2).getChild(0).addChild("n");
    root.getChild(2).getChild(0).getChild(0).addChild("a");
    root.getChild(2).getChild(0).getChild(0).getChild(0).addChild("\\0");
    root.getChild(2).getChild(0).addChild("\\0");
    root.addChild("\\0");*/

    // TODO: Depth automatisch berechnen
    treeDepth = 3;
    root.calcTree(0, 0);
}

function draw() {
    resizeCanvas(initialWidth * renderScale, initialHeight * renderScale);
    scale(renderScale);
    background(220);
    root.drawTree(treeDepth);
    treeRenderFrame++;
}

function mouseClicked() {
    if (mouseButton === LEFT) {
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].isMouseOver()) {
                console.log("Node: " + nodes[i].lineText);
                let newText = document.getElementById("input").value;
                let newNode = nodes[i].addChild(newText);
                if (newNode.depth > treeDepth) {
                    treeDepth = newNode.depth;
                }
                root.calcTree(0, 0);
                treeRenderFrame = 0;
                break;
            }
        }
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

    drawTree(treeDepth) {
        if (treeRenderFrame > hiddenRenderFrames) {
            this.drawEdges();
            this.drawNodes();
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
        return(child);
    }

    isMouseOver() {
        return (sqrt(pow(mouseX - this.x, 2) + pow(mouseY - this.y, 2)) < nodeSize / 2);
    }

    calcHorizontalOffsetBroken() {
        if (this.children.length === 0) {
            return(0);
        }

        let offset = 0;

        for (let i = 0; i < this.children.length; i++) {
            offset += nodeSize + distanceH + this.children[i].calcHorizontalOffset();
        }
        return(offset);
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
            nodes.push(this.children[i]);
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
        textSize(lineTextSize);
        textFont('Courier New');
        textStyle(BOLD)
        textAlign(CENTER, CENTER);
        stroke(180);
        if (this.parent !== null) {
            strokeWeight(3);
            line(this.x, this.y, this.parent.x, this.parent.y);
            strokeWeight(0);
            text(this.lineText, (this.x + this.parent.x) / 2, (this.y + this.parent.y) / 2);
        }

        for (let i = 0; i < this.children.length; i++) {
            this.children[i].drawEdges(i, this.offset);
        }
    }

    drawNodes() {
        stroke(0);
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
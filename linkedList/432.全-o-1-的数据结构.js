/*
 * @lc app=leetcode.cn id=432 lang=javascript
 *
 * [432] 全 O(1) 的数据结构
 */

// @lc code=start
// https://leetcode-cn.com/problems/all-oone-data-structure/solution/quan-o1-de-shu-ju-jie-gou-by-leetcode-so-7gdv/
var AllOne = function () {
    this.root = new Node();
    this.root.prev = this.root;
    this.root.next = this.root;
    this.nodes = new Map();// nodes 维护每个字符串当前所处的链表节点
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
    if (this.nodes.has(key)) {
        const cur = this.nodes.get(key);
        const nxt = cur.next;
        if (nxt === this.root || nxt.count > cur.count + 1) {
            this.nodes.set(key, cur.insert(new Node(key, cur.count + 1)));
        } else {
            nxt.keys.add(key);
            this.nodes.set(key, nxt);
        }
        cur.keys.delete(key);
        if (cur.keys.size === 0) {
            cur.remove();
        }
    } else {
        if (this.root.next === this.root || this.root.next.count > 1) {
            this.nodes.set(key, this.root.insert(new Node(key, 1)));
        } else {
            this.root.next.keys.add(key);
            this.nodes.set(key, this.root.next);
        }
    }
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
    const cur = this.nodes.get(key);
    if (cur.count === 1) {
        this.nodes.delete(key);
    } else {
        const pre = cur.prev;
        if (pre === this.root || pre.count < cur.count - 1) {
            this.nodes.set(key, cur.prev.insert(new Node(key, cur.count - 1)));
        } else {
            pre.keys.add(key);
            this.nodes.set(key, pre);
        }
    }
    cur.keys.delete(key);
    if (cur.keys.size === 0) {
        cur.remove();
    }
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
    if (!this.root.prev) {
        return "";
    }
    let maxKey = "";
    for (const key of this.root.prev.keys) {
        maxKey = key;
        break;
    }
    return maxKey;
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
    if (!this.root.next) {
        return "";
    }
    let minKey = "";
    for (const key of this.root.next.keys) {
        minKey = key;
        break;
    }
    return minKey;
};

class Node {
    constructor(key, count) {
        count ? this.count = count : 0;
        this.keys = new Set();
        key ? this.keys.add(key) : this.keys.add("");
    }
    insert(node) {
        node.prev = this;
        node.next = this.next;
        node.prev.next = node;
        node.next.prev = node;
        return node;
    }
    remove() {
        this.prev.next = this.next;
        this.next.prev = this.prev;
    }
}
/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
// @lc code=end


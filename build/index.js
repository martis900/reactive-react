"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var withSynapse_1 = __importDefault(require("./withSynapse"));
var components = [];
var Dep = /** @class */ (function () {
    function Dep() {
    }
    Dep.prototype.notify = function () {
        // this.subscribers.forEach((sub: Function) => sub())
        components.forEach(function (component) {
            component.forceUpdate();
        });
    };
    return Dep;
}());
function watchComponent(comp) {
    if (!components.includes(comp)) {
        components.push(comp);
    }
}
exports.watchComponent = watchComponent;
var Synapse = /** @class */ (function () {
    function Synapse(root) {
        this.config = root.framework;
        Object.assign(this, root.data);
        console.log(this);
        this.withSynapse = withSynapse_1.default;
        this.initData(root);
        window.framework = root.framework;
        window.synapse = this;
    }
    Synapse.prototype.initData = function (root) {
        Object.keys(root.data).forEach(function (collection) {
            Object.keys(root.data[collection]).forEach(function (key) {
                var internalValue = root.data[collection][key];
                var dep = new Dep();
                Object.defineProperty(root.data[collection], key, {
                    get: function () {
                        return internalValue;
                    },
                    set: function (newVal) {
                        internalValue = newVal;
                        dep.notify();
                    }
                });
            });
        });
    };
    return Synapse;
}());
exports.default = Synapse;

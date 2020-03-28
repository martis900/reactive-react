"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var withSynapse_1 = __importDefault(require("./withSynapse"));
var Subscriptions_1 = __importDefault(require("./Subscriptions"));
var components = [];
var Dep = /** @class */ (function () {
    function Dep(Synapse) {
    }
    Dep.prototype.notify = function () {
        Object.keys(globalThis.Synapse.subs.componentStore).forEach(function (key) {
            globalThis.Synapse.subs.componentStore[key].instance.forceUpdate(); /// @ts-ignore
        });
    };
    return Dep;
}());
var Synapse = /** @class */ (function () {
    function Synapse(root) {
        this.config = root.framework;
        Object.assign(this, root.data);
        console.log(this);
        this.withSynapse = withSynapse_1.default;
        this.subs = new Subscriptions_1.default(Synapse);
        this.initData(root);
        globalThis.framework = root.framework;
        globalThis.Synapse = this;
    }
    Synapse.prototype.initData = function (root) {
        var _this = this;
        Object.keys(root.data).forEach(function (collection) {
            Object.keys(root.data[collection]).forEach(function (key) {
                var internalValue = root.data[collection][key];
                var dep = new Dep(_this);
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

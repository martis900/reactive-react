"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function genId() {
    return (Math.random()
        .toString()
        .split('.')[1] + Date.now());
}
var ComponentContainer = /** @class */ (function () {
    function ComponentContainer(instance) {
        this.instance = instance;
        this.uuid = genId();
        this.ready = true;
        this.deps = new Set();
        instance.__uniqueIdentifier = this.uuid;
    }
    return ComponentContainer;
}());
exports.ComponentContainer = ComponentContainer;
var SubController = /** @class */ (function () {
    function SubController(synapse) {
        this.synapse = synapse;
        this.componentStore = {};
    }
    SubController.prototype.registerComponent = function (instance) {
        var componentContainer = new ComponentContainer(instance);
        this.componentStore[componentContainer.uuid] = componentContainer;
        return componentContainer.uuid;
    };
    SubController.prototype.get = function (id) {
        return this.componentStore[id] || false;
    };
    SubController.prototype.untrack = function (instance) {
        var uuid = instance.__uniqueIdentifier;
        if (!uuid)
            return;
        var component = this.componentStore[instance.__uniqueIdentifier];
        // clean up deps to avoid memory leaks
        component.deps.forEach(function (dep) { return dep.subscribers.delete(component); });
        // delete reference to this component instance from store
        delete this.componentStore[instance.__uniqueIdentifier];
    };
    SubController.prototype.mount = function (instance) {
        console.log(instance.__uniqueIdentifier);
        var component = this.componentStore[instance.__uniqueIdentifier];
        if (component) {
            component.instance = instance;
            component.ready = true;
        }
        else {
            console.error('you did something wrong');
        }
    };
    return SubController;
}());
exports.default = SubController;

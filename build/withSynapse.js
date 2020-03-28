"use strict";
// @ts-nocheck
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
function withSynapse(ReactComponent) {
    var React = globalThis.framework; // @ts-ignore
    var Synapse = globalThis.Synapse; // @ts-ignore
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1(props) {
            var _this = _super.call(this, props) || this;
            Synapse.subs.registerComponent(_this);
            return _this;
        }
        class_1.prototype.componentDidMount = function () {
            Synapse.subs.mount(this);
        };
        // componentWillUnmount(): void {
        //     Synapse.subs.untrack(this)
        // }
        class_1.prototype.render = function () {
            return React.createElement(ReactComponent);
        };
        return class_1;
    }(React.Component));
}
exports.default = withSynapse;

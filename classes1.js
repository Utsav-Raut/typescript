var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NewPerson = /** @class */ (function () {
    function NewPerson() {
    }
    NewPerson.prototype.greet = function () {
        console.log("Hey there");
    };
    return NewPerson;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        console.log('Hello World');
    };
    Programmer.prototype.greetLikeNormalPeopel = function () {
        _super.prototype.greet.call(this);
    };
    return Programmer;
}(NewPerson));
var aProgrammer = new Programmer();
aProgrammer.greet();
aProgrammer.greetLikeNormalPeopel();

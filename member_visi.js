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
var Mem_Person = /** @class */ (function () {
    function Mem_Person() {
    }
    Mem_Person.prototype.greet = function () {
        console.log("Hey there!");
    };
    Mem_Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Mem_Person;
}());
var Mem_Programmer = /** @class */ (function (_super) {
    __extends(Mem_Programmer, _super);
    function Mem_Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mem_Programmer.prototype.greet = function () {
        console.log("Hello world");
    };
    Mem_Programmer.prototype.greetLikeNormalPeople = function () {
        _super.prototype.greet.call(this);
    };
    return Mem_Programmer;
}(Mem_Person));
var memProgr = new Mem_Programmer();
memProgr.getFullName;

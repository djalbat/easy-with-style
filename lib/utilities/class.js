'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isClass = isClass;
var _easy = require("easy");
function isClass(argument) {
    return isSubclassOf(argument, _easy.Element);
} ///
function isSubclassOf(argument, Class) {
    var subclass = false;
    if (argument.name === Class.name) {
        subclass = true;
    } else {
        argument = Object.getPrototypeOf(argument); ///
        if (argument !== null) {
            subclass = isSubclassOf(argument, Class);
        }
    }
    return subclass;
}

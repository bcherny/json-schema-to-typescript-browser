"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = {
    "title": "Enum",
    "type": "object",
    "properties": {
        "bar": {
            "type": "integer",
            "enum": [1, 2, 3],
            "tsEnumNames": ["One", 2, "Three"]
        }
    },
    "required": ["bar"],
    "additionalProperties": false
};
exports.error = true;
//# sourceMappingURL=enumValidation.2.js.map
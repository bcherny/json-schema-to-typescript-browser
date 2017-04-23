export declare const input: {
    "title": string;
    "type": string;
    "properties": {
        "foo": {
            "type": string;
            "oneOf": {
                "$ref": string;
            }[];
        };
    };
    "definitions": {
        "foo": {
            "properties": {
                "a": {
                    "type": string;
                };
                "b": {
                    "type": string;
                };
            };
            "additionalProperties": boolean;
            "required": string[];
        };
        "bar": {
            "properties": {
                "a": {
                    "enum": string[];
                };
            };
        };
        "baz": {
            "properties": {
                "baz": {
                    "$ref": string;
                };
            };
        };
    };
    "required": string[];
    "additionalProperties": boolean;
};
export declare const output: string;

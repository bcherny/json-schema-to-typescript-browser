export declare const input: {
    "title": string;
    "anyOf": {
        "$ref": string;
    }[];
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
};
export declare const output: string;

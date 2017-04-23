export declare const input: {
    "title": string;
    "properties": {
        "firstName": {
            "type": string;
        };
        "friend": {
            "properties": {
                "knowsFrom": {
                    "enum": string[];
                };
            };
            "required": string[];
        };
        "coworker": {
            "properties": {
                "company": {
                    "properties": {
                        "name": {
                            "type": string;
                        };
                    };
                    "required": string[];
                    "additionalProperties": boolean;
                };
            };
            "additionalProperties": {
                "enum": number[];
                "tsEnumNames": string[];
            };
        };
    };
    "required": string[];
};
export declare const output: string;

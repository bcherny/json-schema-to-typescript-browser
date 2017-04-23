export declare const input: {
    title: string;
    type: string;
    properties: {
        foo: {
            type: string;
            allOf: {
                $ref: string;
            }[];
        };
    };
    definitions: {
        foo: {
            properties: {
                a: {
                    type: string;
                };
                b: {
                    type: string;
                };
            };
            additionalProperties: boolean;
            required: string[];
        };
        bar: {
            properties: {
                a: {
                    type: string;
                };
            };
            additionalProperties: boolean;
            required: string[];
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export declare const output: string;

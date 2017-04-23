/**
 * @see https://github.com/bcherny/json-schema-to-typescript/issues/56
 */
export declare const input: {
    $schema: string;
    title: string;
    type: string;
    definitions: {
        firstDefinition: {
            title: string;
            description: string;
            type: string;
            properties: {
                name: {
                    type: string;
                };
            };
        };
        secondDefinition: {
            title: string;
            description: string;
            type: string;
            properties: {
                name: {
                    type: string;
                };
            };
        };
        thirdDefinition: {
            description: string;
            type: string;
            properties: {
                name: {
                    type: string;
                };
            };
        };
        fourthDefinition: {
            title: string;
            description: string;
            type: string;
        };
        fifthDefinition: {
            title: string;
            description: string;
            type: string;
            enum: string[];
        };
    };
    properties: {
        firstContainer: {
            description: string;
            type: string;
            properties: {
                first: {
                    $ref: string;
                };
            };
        };
        second: {
            $ref: string;
        };
        third: {
            $ref: string;
        };
        fourth: {
            $ref: string;
        };
        fifth: {
            $ref: string;
        };
    };
};
export declare let output: string;

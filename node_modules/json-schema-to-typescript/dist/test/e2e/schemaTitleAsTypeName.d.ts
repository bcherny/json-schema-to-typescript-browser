export declare const input: {
    $schema: string;
    id: string;
    title: string;
    type: string;
    properties: {
        ref: {
            $ref: string;
        };
    };
    required: string[];
    additionalProperties: boolean;
};
/**
 * Verify that both generated types names are derived from the schema.title
 */
export declare const output: string;

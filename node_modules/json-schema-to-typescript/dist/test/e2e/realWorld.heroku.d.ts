export declare let exclude: boolean;
/**
 * @see https://api.heroku.com/schema
 *      (Accept=application/vnd.heroku+json; version=3)
 */
export declare const input: {
    "$schema": string;
    "type": string[];
    "definitions": {
        "account-feature": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "description": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "doc_url": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "enabled": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "state": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "display_name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "feedback_email": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "enabled": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            })[];
            "properties": {
                "created_at": {
                    "$ref": string;
                };
                "description": {
                    "$ref": string;
                };
                "doc_url": {
                    "$ref": string;
                };
                "enabled": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "name": {
                    "$ref": string;
                };
                "state": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
                "display_name": {
                    "$ref": string;
                };
                "feedback_email": {
                    "$ref": string;
                };
            };
        };
        "account": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "allow_tracking": {
                    "default": boolean;
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "beta": {
                    "default": boolean;
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "email": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "federated": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "last_login": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "password": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "self": {
                    "description": string;
                    "enum": string[];
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "sms_number": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "suspended_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "delinquent_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "two_factor_authentication": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "verified": {
                    "default": boolean;
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "allow_tracking": {
                            "$ref": string;
                        };
                        "beta": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            })[];
            "properties": {
                "allow_tracking": {
                    "$ref": string;
                };
                "beta": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "email": {
                    "$ref": string;
                };
                "federated": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "identity_provider": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "organization": {
                            "type": string[];
                            "properties": {
                                "name": {
                                    "$ref": string;
                                };
                            };
                        };
                    };
                    "type": string[];
                };
                "last_login": {
                    "$ref": string;
                };
                "name": {
                    "$ref": string;
                };
                "sms_number": {
                    "$ref": string;
                };
                "suspended_at": {
                    "$ref": string;
                };
                "delinquent_at": {
                    "$ref": string;
                };
                "two_factor_authentication": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
                "verified": {
                    "$ref": string;
                };
                "default_organization": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
            };
        };
        "add-on-action": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {};
            "links": {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            }[];
            "properties": {};
        };
        "add-on-attachment": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "force": {
                    "default": boolean;
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "scopedIdentity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "namespace": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "web_url": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "addon": {
                            "$ref": string;
                        };
                        "app": {
                            "$ref": string;
                        };
                        "force": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                        "namespace": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "addon": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                        "app": {
                            "description": string;
                            "type": string[];
                            "properties": {
                                "id": {
                                    "$ref": string;
                                };
                                "name": {
                                    "$ref": string;
                                };
                            };
                            "strictProperties": boolean;
                        };
                        "plan": {
                            "description": string;
                            "properties": {
                                "id": {
                                    "$ref": string;
                                };
                                "name": {
                                    "$ref": string;
                                };
                            };
                            "strictProperties": boolean;
                            "type": string[];
                        };
                    };
                    "additionalProperties": boolean;
                    "required": string[];
                    "type": string[];
                };
                "app": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "created_at": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "name": {
                    "$ref": string;
                };
                "namespace": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
                "web_url": {
                    "$ref": string;
                };
            };
        };
        "add-on-config": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "type": string[];
                };
                "value": {
                    "description": string;
                    "example": string;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "config": {
                            "items": {
                                "$ref": string;
                            };
                            "type": string[];
                        };
                    };
                    "type": string[];
                };
                "targetSchema": {
                    "type": string[];
                    "items": {
                        "$ref": string;
                    };
                };
                "title": string;
            })[];
            "properties": {
                "name": {
                    "$ref": string;
                };
                "value": {
                    "$ref": string;
                };
            };
        };
        "add-on-plan-action": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "$ref": string;
                };
                "label": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "action": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "url": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "requires_owner": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "properties": {
                "id": {
                    "$ref": string;
                };
                "label": {
                    "$ref": string;
                };
                "action": {
                    "$ref": string;
                };
                "url": {
                    "$ref": string;
                };
                "requires_owner": {
                    "$ref": string;
                };
            };
        };
        "add-on-region-capability": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "supports_private_networking": {
                    "description": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "$ref": string;
                };
            };
            "links": {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            }[];
            "properties": {
                "id": {
                    "$ref": string;
                };
                "supports_private_networking": {
                    "$ref": string;
                };
                "addon_service": {
                    "$ref": string;
                };
                "region": {
                    "$ref": string;
                };
            };
        };
        "add-on-service": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "cli_plugin_name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "human_name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "state": {
                    "description": string;
                    "enum": string[];
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "supports_multiple_installations": {
                    "default": boolean;
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "supports_sharing": {
                    "default": boolean;
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "cli_plugin_name": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "human_name": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "name": {
                    "$ref": string;
                };
                "state": {
                    "$ref": string;
                };
                "supports_multiple_installations": {
                    "$ref": string;
                };
                "supports_sharing": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
            };
        };
        "add-on": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "actions": {
                    "description": string;
                    "type": string[];
                    "items": {
                        "type": string[];
                    };
                    "readOnly": boolean;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "label": {
                            "$ref": string;
                        };
                        "action": {
                            "$ref": string;
                        };
                        "url": {
                            "$ref": string;
                        };
                        "requires_owner": {
                            "$ref": string;
                        };
                    };
                };
                "config_vars": {
                    "description": string;
                    "example": string[];
                    "items": {
                        "type": string[];
                    };
                    "readOnly": boolean;
                    "type": string[];
                };
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "pattern": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "provider_id": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "state": {
                    "description": string;
                    "enum": string[];
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "web_url": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "attachment": {
                            "description": string;
                            "example": {
                                "name": string;
                            };
                            "name": {
                                "$ref": string;
                            };
                            "type": string[];
                        };
                        "config": {
                            "additionalProperties": boolean;
                            "description": string;
                            "example": {
                                "db-version": string;
                            };
                            "patternProperties": {
                                "^\\w+$": {
                                    "type": string[];
                                };
                            };
                            "type": string[];
                        };
                        "plan": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "plan": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "actions": {
                    "$ref": string;
                };
                "addon_service": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "app": {
                    "description": string;
                    "type": string[];
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                };
                "config_vars": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "name": {
                    "$ref": string;
                };
                "plan": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "provider_id": {
                    "$ref": string;
                };
                "state": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
                "web_url": {
                    "$ref": string;
                };
            };
        };
        "app-feature": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "description": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "doc_url": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "enabled": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "state": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "display_name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "feedback_email": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "enabled": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            })[];
            "properties": {
                "created_at": {
                    "$ref": string;
                };
                "description": {
                    "$ref": string;
                };
                "doc_url": {
                    "$ref": string;
                };
                "enabled": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "name": {
                    "$ref": string;
                };
                "state": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
                "display_name": {
                    "$ref": string;
                };
                "feedback_email": {
                    "$ref": string;
                };
            };
        };
        "app-formation-set": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "properties": {
                "description": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "process_tier": {
                    "description": string;
                    "enum": string[];
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "app": {
                    "description": string;
                    "properties": {
                        "name": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
        };
        "app-setup": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "id": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                    "format": string;
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "buildpack_override": {
                    "description": string;
                    "properties": {
                        "url": {
                            "description": string;
                            "example": string;
                            "type": string[];
                        };
                    };
                    "type": string[];
                };
                "created_at": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                    "format": string;
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                    "format": string;
                };
                "status": {
                    "description": string;
                    "example": string;
                    "enum": string[];
                    "readOnly": boolean;
                    "type": string[];
                };
                "resolved_success_url": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "failure_message": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "manifest_errors": {
                    "description": string;
                    "example": string[];
                    "readOnly": boolean;
                    "items": {
                        "type": string[];
                    };
                    "type": string[];
                };
                "overrides": {
                    "description": string;
                    "example": {
                        "buildpacks": {
                            "url": string;
                        }[];
                        "env": {
                            "FOO": string;
                            "BAZ": string;
                        };
                    };
                    "properties": {
                        "buildpacks": {
                            "description": string;
                            "example": {
                                "url": string;
                            }[];
                            "items": {
                                "$ref": string;
                            };
                            "type": string[];
                        };
                        "env": {
                            "description": string;
                            "example": {
                                "FOO": string;
                                "BAZ": string;
                            };
                            "readOnly": boolean;
                            "additionalProperties": boolean;
                            "patternProperties": {
                                "^\\w+$": {
                                    "type": string[];
                                };
                            };
                            "type": string[];
                        };
                    };
                    "type": string[];
                };
                "postdeploy": {
                    "description": string;
                    "type": string[];
                    "properties": {
                        "output": {
                            "description": string;
                            "example": string;
                            "readOnly": boolean;
                            "type": string[];
                        };
                        "exit_code": {
                            "description": string;
                            "example": number;
                            "readOnly": boolean;
                            "type": string[];
                        };
                    };
                    "readOnly": boolean;
                };
            };
            "properties": {
                "id": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
                "status": {
                    "$ref": string;
                };
                "failure_message": {
                    "$ref": string;
                };
                "app": {
                    "description": string;
                    "strictProperties": boolean;
                    "type": string[];
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                };
                "build": {
                    "description": string;
                    "strictProperties": boolean;
                    "type": string[];
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "status": {
                            "$ref": string;
                        };
                        "output_stream_url": {
                            "$ref": string;
                        };
                    };
                };
                "manifest_errors": {
                    "$ref": string;
                };
                "postdeploy": {
                    "$ref": string;
                };
                "resolved_success_url": {
                    "$ref": string;
                };
            };
            "links": ({
                "description": string;
                "title": string;
                "rel": string;
                "method": string;
                "href": string;
                "schema": {
                    "required": string[];
                    "type": string[];
                    "properties": {
                        "app": {
                            "description": string;
                            "properties": {
                                "locked": {
                                    "$ref": string;
                                };
                                "name": {
                                    "$ref": string;
                                };
                                "organization": {
                                    "$ref": string;
                                };
                                "personal": {
                                    "$ref": string;
                                };
                                "region": {
                                    "$ref": string;
                                };
                                "space": {
                                    "$ref": string;
                                };
                                "stack": {
                                    "$ref": string;
                                };
                            };
                            "type": string[];
                        };
                        "source_blob": {
                            "description": string;
                            "properties": {
                                "checksum": {
                                    "description": string;
                                    "example": string;
                                    "readOnly": boolean;
                                    "type": string[];
                                };
                                "url": {
                                    "description": string;
                                    "example": string;
                                    "readOnly": boolean;
                                    "type": string[];
                                };
                                "version": {
                                    "description": string;
                                    "example": string;
                                    "readOnly": boolean;
                                    "type": string[];
                                };
                            };
                            "type": string[];
                        };
                        "overrides": {
                            "$ref": string;
                        };
                    };
                };
                "targetSchema": {
                    "$ref": string;
                };
            } | {
                "description": string;
                "title": string;
                "rel": string;
                "method": string;
                "href": string;
                "targetSchema": {
                    "$ref": string;
                };
            })[];
        };
        "app-transfer": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "silent": {
                    "default": boolean;
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "state": {
                    "description": string;
                    "enum": string[];
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "app": {
                            "$ref": string;
                        };
                        "recipient": {
                            "$ref": string;
                        };
                        "silent": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "state": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            })[];
            "properties": {
                "app": {
                    "description": string;
                    "properties": {
                        "name": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "created_at": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "owner": {
                    "description": string;
                    "properties": {
                        "email": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "recipient": {
                    "description": string;
                    "properties": {
                        "email": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "state": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
            };
        };
        "app": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "archived_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "buildpack_provided_description": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "git_url": {
                    "description": string;
                    "example": string;
                    "pattern": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "maintenance": {
                    "default": boolean;
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "pattern": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "released_at": {
                    "default": null;
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "repo_size": {
                    "default": null;
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "slug_size": {
                    "default": null;
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "web_url": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "pattern": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "acm": {
                    "description": string;
                    "default": boolean;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "name": {
                            "$ref": string;
                        };
                        "region": {
                            "$ref": string;
                        };
                        "stack": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "ranges": string[];
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "build_stack": {
                            "$ref": string;
                        };
                        "maintenance": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            })[];
            "properties": {
                "archived_at": {
                    "$ref": string;
                };
                "buildpack_provided_description": {
                    "$ref": string;
                };
                "build_stack": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "created_at": {
                    "$ref": string;
                };
                "git_url": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "maintenance": {
                    "$ref": string;
                };
                "name": {
                    "$ref": string;
                };
                "owner": {
                    "description": string;
                    "properties": {
                        "email": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "organization": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "region": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "released_at": {
                    "$ref": string;
                };
                "repo_size": {
                    "$ref": string;
                };
                "slug_size": {
                    "$ref": string;
                };
                "space": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                        "shield": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "stack": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "$ref": string;
                };
                "web_url": {
                    "$ref": string;
                };
            };
        };
        "build-result": {
            "$schema": string;
            "deactivate_on": string;
            "description": string;
            "title": string;
            "stability": string;
            "strictProperties": boolean;
            "type": string[];
            "definitions": {
                "identity": {};
                "exit_code": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "line": {
                    "description": string;
                    "strictProperties": boolean;
                    "type": string[];
                    "example": {
                        "stream": string;
                        "line": string;
                    };
                    "readOnly": boolean;
                    "definitions": {
                        "stream": {
                            "type": string[];
                            "enum": string[];
                            "description": string;
                            "example": string;
                            "readOnly": boolean;
                        };
                        "line": {
                            "type": string[];
                            "example": string;
                            "readOnly": boolean;
                            "description": string;
                        };
                    };
                    "properties": {
                        "stream": {
                            "$ref": string;
                        };
                        "line": {
                            "$ref": string;
                        };
                    };
                };
            };
            "links": {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            }[];
            "properties": {
                "build": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "status": {
                            "$ref": string;
                        };
                        "output_stream_url": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "exit_code": {
                    "$ref": string;
                };
                "lines": {
                    "type": string[];
                    "items": {
                        "$ref": string;
                    };
                    "description": string;
                    "example": {
                        "line": string;
                        "stream": string;
                    }[];
                };
            };
        };
        "build": {
            "$schema": string;
            "description": string;
            "title": string;
            "stability": string;
            "strictProperties": boolean;
            "type": string[];
            "definitions": {
                "buildpacks": {
                    "description": string;
                    "type": string[];
                    "items": {
                        "description": string;
                        "type": string[];
                        "properties": {
                            "url": {
                                "$ref": string;
                            };
                        };
                    };
                };
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "output_stream_url": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "release": {
                    "description": string;
                    "strictProperties": boolean;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                    };
                    "example": {
                        "id": string;
                    };
                    "readOnly": boolean;
                    "type": string[];
                    "definitions": {
                        "id": {
                            "description": string;
                            "example": string;
                            "type": string[];
                        };
                    };
                };
                "source_blob": {
                    "description": string;
                    "properties": {
                        "checksum": {
                            "description": string;
                            "example": string;
                            "readOnly": boolean;
                            "type": string[];
                        };
                        "url": {
                            "description": string;
                            "example": string;
                            "readOnly": boolean;
                            "type": string[];
                        };
                        "version": {
                            "description": string;
                            "example": string;
                            "readOnly": boolean;
                            "type": string[];
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "status": {
                    "description": string;
                    "enum": string[];
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "type": string[];
                    "properties": {
                        "buildpacks": {
                            "$ref": string;
                        };
                        "source_blob": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "ranges": string[];
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "app": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "buildpacks": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "output_stream_url": {
                    "$ref": string;
                };
                "source_blob": {
                    "$ref": string;
                };
                "release": {
                    "$ref": string;
                };
                "slug": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "status": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
                "user": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "email": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
            };
        };
        "buildpack-installation": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "ordinal": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "update": {
                    "additionalProperties": boolean;
                    "description": string;
                    "properties": {
                        "buildpack": {
                            "$ref": string;
                        };
                    };
                    "readOnly": boolean;
                    "required": string[];
                    "type": string[];
                };
                "url": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "updates": {
                            "description": string;
                            "items": {
                                "$ref": string;
                            };
                            "type": string[];
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "ordinal": {
                    "$ref": string;
                };
                "buildpack": {
                    "description": string;
                    "properties": {
                        "url": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
            };
        };
        "collaborator": {
            "description": string;
            "$schema": string;
            "additionalProperties": boolean;
            "required": string[];
            "stability": string;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "email": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "silent": {
                    "default": boolean;
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "silent": {
                            "$ref": string;
                        };
                        "user": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "app": {
                    "description": string;
                    "properties": {
                        "name": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "created_at": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "permissions": {
                    "type": string[];
                    "items": {
                        "$ref": string;
                    };
                };
                "role": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
                "user": {
                    "description": string;
                    "properties": {
                        "email": {
                            "$ref": string;
                        };
                        "federated": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
            };
        };
        "config-var": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "config_vars": {
                    "additionalProperties": boolean;
                    "description": string;
                    "example": {
                        "FOO": string;
                        "BAZ": string;
                    };
                    "patternProperties": {
                        "^\\w+$": {
                            "type": string[];
                        };
                    };
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "additionalProperties": boolean;
                    "description": string;
                    "example": {
                        "FOO": string;
                        "BAZ": string;
                    };
                    "patternProperties": {
                        "^\\w+$": {
                            "type": string[];
                        };
                    };
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            })[];
            "example": {
                "FOO": string;
                "BAZ": string;
            };
            "patternProperties": {
                "^\\w+$": {
                    "type": string[];
                };
            };
        };
        "credit": {
            "$schema": string;
            "description": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "amount": {
                    "description": string;
                    "example": number;
                    "type": string[];
                };
                "balance": {
                    "description": string;
                    "example": number;
                    "type": string[];
                };
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "type": string[];
                };
                "expires_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "title": {
                    "description": string;
                    "example": string;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "code1": {
                            "description": string;
                            "example": string;
                            "type": string[];
                        };
                        "code2": {
                            "description": string;
                            "example": string;
                            "type": string[];
                        };
                    };
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "amount": {
                    "$ref": string;
                };
                "balance": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "expires_at": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "title": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
            };
        };
        "domain": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "cname": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "status": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "hostname": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "kind": {
                    "description": string;
                    "enum": string[];
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "hostname": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "app": {
                    "description": string;
                    "properties": {
                        "name": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "cname": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "hostname": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "kind": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
                "status": {
                    "$ref": string;
                };
            };
        };
        "dyno-size": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "compute": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "dedicated": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "memory": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "cost": {
                    "description": string;
                    "readOnly": boolean;
                    "type": string[];
                    "definitions": {
                        "cents": {
                            "description": string;
                            "example": number;
                            "readOnly": boolean;
                            "type": string[];
                        };
                        "unit": {
                            "description": string;
                            "readOnly": boolean;
                            "example": string;
                            "type": string[];
                        };
                    };
                };
                "dyno_units": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "private_space_only": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "compute": {
                    "$ref": string;
                };
                "cost": {
                    "$ref": string;
                };
                "dedicated": {
                    "$ref": string;
                };
                "dyno_units": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "memory": {
                    "$ref": string;
                };
                "name": {
                    "$ref": string;
                };
                "private_space_only": {
                    "$ref": string;
                };
            };
        };
        "dyno": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "attach": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "attach_url": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "command": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "env": {
                    "additionalProperties": boolean;
                    "description": string;
                    "example": {
                        "COLUMNS": string;
                        "LINES": string;
                    };
                    "patternProperties": {
                        "^\\w+$": {
                            "type": string[];
                        };
                    };
                    "readOnly": boolean;
                    "strictProperties": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "force_no_tty": {
                    "description": string;
                    "example": null;
                    "readOnly": boolean;
                    "type": string[];
                };
                "size": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "state": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "type": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "time_to_live": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "attach": {
                            "$ref": string;
                        };
                        "command": {
                            "$ref": string;
                        };
                        "env": {
                            "$ref": string;
                        };
                        "force_no_tty": {
                            "$ref": string;
                        };
                        "size": {
                            "$ref": string;
                        };
                        "type": {
                            "$ref": string;
                        };
                        "time_to_live": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "additionalPoperties": boolean;
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "attach_url": {
                    "$ref": string;
                };
                "command": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "name": {
                    "$ref": string;
                };
                "release": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "version": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "app": {
                    "description": string;
                    "properties": {
                        "name": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "size": {
                    "$ref": string;
                };
                "state": {
                    "$ref": string;
                };
                "type": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
            };
        };
        "event": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "action": {
                    "description": string;
                    "enum": string[];
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "data": {
                    "description": string;
                    "example": {};
                    "anyOf": {
                        "$ref": string;
                    }[];
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "published_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "resource": {
                    "description": string;
                    "enum": string[];
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "sequence": {
                    "description": string;
                    "example": string;
                    "pattern": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "version": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": never[];
            "properties": {
                "action": {
                    "$ref": string;
                };
                "actor": {
                    "description": string;
                    "properties": {
                        "email": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "created_at": {
                    "$ref": string;
                };
                "data": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "previous_data": {
                    "description": string;
                    "type": string[];
                };
                "published_at": {
                    "$ref": string;
                };
                "resource": {
                    "$ref": string;
                };
                "sequence": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
                "version": {
                    "$ref": string;
                };
            };
        };
        "failed-event": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "action": {
                    "description": string;
                    "enum": string[];
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "error_id": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "message": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "method": {
                    "description": string;
                    "enum": string[];
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "code": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "path": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "resource_id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": never[];
            "properties": {
                "action": {
                    "$ref": string;
                };
                "code": {
                    "$ref": string;
                };
                "error_id": {
                    "$ref": string;
                };
                "message": {
                    "$ref": string;
                };
                "method": {
                    "$ref": string;
                };
                "path": {
                    "$ref": string;
                };
                "resource": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
            };
        };
        "filter-apps": {
            "description": string;
            "$schema": string;
            "stability": string;
            "title": string;
            "type": string[];
            "definitions": {
                "filter": {
                    "type": string[];
                    "properties": {
                        "in": {
                            "$ref": string;
                        };
                    };
                };
                "in": {
                    "type": string[];
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                    };
                };
                "id": {
                    "type": string[];
                    "items": {
                        "$ref": string;
                    };
                };
            };
            "links": {
                "description": string;
                "title": string;
                "href": string;
                "method": string;
                "ranges": string[];
                "rel": string;
                "schema": {
                    "$ref": string;
                };
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
            }[];
        };
        "formation": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "command": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "quantity": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "size": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "type": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "pattern": string;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "update": {
                    "additionalProperties": boolean;
                    "description": string;
                    "properties": {
                        "quantity": {
                            "$ref": string;
                        };
                        "size": {
                            "$ref": string;
                        };
                        "type": {
                            "$ref": string;
                        };
                    };
                    "readOnly": boolean;
                    "required": string[];
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "updates": {
                            "type": string[];
                            "items": {
                                "$ref": string;
                            };
                            "description": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "quantity": {
                            "$ref": string;
                        };
                        "size": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
                "type": string[];
            })[];
            "properties": {
                "app": {
                    "description": string;
                    "properties": {
                        "name": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "command": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "quantity": {
                    "$ref": string;
                };
                "size": {
                    "$ref": string;
                };
                "type": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
            };
        };
        "identity-provider": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "certificate": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "entity_id": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "slo_target_url": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "sso_target_url": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "certificate": {
                            "$ref": string;
                        };
                        "entity_id": {
                            "$ref": string;
                        };
                        "slo_target_url": {
                            "$ref": string;
                        };
                        "sso_target_url": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "certificate": {
                            "$ref": string;
                        };
                        "entity_id": {
                            "$ref": string;
                        };
                        "slo_target_url": {
                            "$ref": string;
                        };
                        "sso_target_url": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            })[];
            "properties": {
                "certificate": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "entity_id": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "slo_target_url": {
                    "$ref": string;
                };
                "sso_target_url": {
                    "$ref": string;
                };
                "organization": {
                    "description": string;
                    "properties": {
                        "name": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "updated_at": {
                    "$ref": string;
                };
            };
        };
        "inbound-ruleset": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "action": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                    "enum": string[];
                };
                "source": {
                    "description": string;
                    "example": string;
                    "pattern": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "rule": {
                    "description": string;
                    "type": string[];
                    "properties": {
                        "action": {
                            "$ref": string;
                        };
                        "source": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "type": string[];
                    "properties": {
                        "rules": {
                            "type": string[];
                            "items": {
                                "$ref": string;
                            };
                        };
                    };
                };
                "title": string;
            })[];
            "properties": {
                "id": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "rules": {
                    "type": string[];
                    "items": {
                        "$ref": string;
                    };
                };
                "created_by": {
                    "$ref": string;
                };
            };
        };
        "invitation": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "receive_newsletter": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "verification_required": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "token": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "phone_number": {
                    "description": string;
                    "example": string;
                    "type": string[];
                };
                "method": {
                    "description": string;
                    "example": string;
                    "default": string;
                    "type": string[];
                    "enum": string[];
                };
                "verification_code": {
                    "description": string;
                    "example": string;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "email": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "phone_number": {
                            "$ref": string;
                        };
                        "method": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "verification_code": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "password": {
                            "$ref": string;
                        };
                        "password_confirmation": {
                            "$ref": string;
                        };
                        "receive_newsletter": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "verification_required": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "user": {
                    "properties": {
                        "email": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
            };
        };
        "invoice-address": {
            "$schema": string;
            "description": string;
            "title": string;
            "stability": string;
            "type": string[];
            "definitions": {
                "address_1": {
                    "type": string[];
                    "description": string;
                    "example": string;
                };
                "address_2": {
                    "type": string[];
                    "description": string;
                    "example": string;
                };
                "city": {
                    "type": string[];
                    "description": string;
                    "example": string;
                };
                "country": {
                    "type": string[];
                    "description": string;
                    "example": string;
                };
                "heroku_id": {
                    "type": string[];
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "other": {
                    "type": string[];
                    "description": string;
                    "example": string;
                };
                "postal_code": {
                    "type": string[];
                    "description": string;
                    "example": string;
                };
                "state": {
                    "type": string[];
                    "description": string;
                    "example": string;
                };
                "use_invoice_address": {
                    "type": string[];
                    "description": string;
                    "example": boolean;
                    "default": boolean;
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "title": string;
                "schema": {
                    "properties": {
                        "address_1": {
                            "$ref": string;
                        };
                        "address_2": {
                            "$ref": string;
                        };
                        "city": {
                            "$ref": string;
                        };
                        "country": {
                            "$ref": string;
                        };
                        "other": {
                            "$ref": string;
                        };
                        "postal_code": {
                            "$ref": string;
                        };
                        "state": {
                            "$ref": string;
                        };
                        "use_invoice_address": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
            })[];
            "properties": {
                "address_1": {
                    "$ref": string;
                };
                "address_2": {
                    "$ref": string;
                };
                "city": {
                    "$ref": string;
                };
                "country": {
                    "$ref": string;
                };
                "heroku_id": {
                    "$ref": string;
                };
                "other": {
                    "$ref": string;
                };
                "postal_code": {
                    "$ref": string;
                };
                "state": {
                    "$ref": string;
                };
                "use_invoice_address": {
                    "$ref": string;
                };
            };
        };
        "invoice": {
            "$schema": string;
            "description": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "charges_total": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "credits_total": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "number": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "period_end": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "period_start": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "state": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "total": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "charges_total": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "credits_total": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "number": {
                    "$ref": string;
                };
                "period_end": {
                    "$ref": string;
                };
                "period_start": {
                    "$ref": string;
                };
                "state": {
                    "$ref": string;
                };
                "total": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
            };
        };
        "key": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "comment": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "email": {
                    "deprecated": boolean;
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "fingerprint": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "public_key": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "comment": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "email": {
                    "$ref": string;
                };
                "fingerprint": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "public_key": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
            };
        };
        "log-drain": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "addon": {
                    "description": string;
                    "example": {
                        "id": string;
                        "name": string;
                    };
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "readOnly": boolean;
                    "type": string[];
                };
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "query_identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "token": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "url": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "url": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "addon": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "token": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
                "url": {
                    "$ref": string;
                };
            };
        };
        "log-session": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "dyno": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "lines": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "logplex_url": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "source": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "tail": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "dyno": {
                            "$ref": string;
                        };
                        "lines": {
                            "$ref": string;
                        };
                        "source": {
                            "$ref": string;
                        };
                        "tail": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            }[];
            "properties": {
                "created_at": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "logplex_url": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
            };
        };
        "oauth-authorization": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "description": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "scope": {
                    "description": string;
                    "example": string[];
                    "readOnly": boolean;
                    "type": string[];
                    "items": {
                        "type": string[];
                    };
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "client": {
                            "$ref": string;
                        };
                        "description": {
                            "$ref": string;
                        };
                        "expires_in": {
                            "$ref": string;
                        };
                        "scope": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "access_token": {
                    "description": string;
                    "properties": {
                        "expires_in": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                        "token": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "client": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                        "redirect_uri": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "created_at": {
                    "$ref": string;
                };
                "grant": {
                    "description": string;
                    "properties": {
                        "code": {
                            "$ref": string;
                        };
                        "expires_in": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "id": {
                    "$ref": string;
                };
                "refresh_token": {
                    "description": string;
                    "properties": {
                        "expires_in": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                        "token": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "scope": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
                "user": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "email": {
                            "$ref": string;
                        };
                        "full_name": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
            };
        };
        "oauth-client": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "ignores_delinquent": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "redirect_uri": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "secret": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "name": {
                            "$ref": string;
                        };
                        "redirect_uri": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "name": {
                            "$ref": string;
                        };
                        "redirect_uri": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            })[];
            "properties": {
                "created_at": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "ignores_delinquent": {
                    "$ref": string;
                };
                "name": {
                    "$ref": string;
                };
                "redirect_uri": {
                    "$ref": string;
                };
                "secret": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
            };
        };
        "oauth-grant": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "code": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "expires_in": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "type": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": never[];
            "properties": {};
        };
        "oauth-token": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "expires_in": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "token": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "client": {
                            "type": string[];
                            "properties": {
                                "secret": {
                                    "$ref": string;
                                };
                            };
                        };
                        "grant": {
                            "type": string[];
                            "properties": {
                                "code": {
                                    "$ref": string;
                                };
                                "type": {
                                    "$ref": string;
                                };
                            };
                        };
                        "refresh_token": {
                            "type": string[];
                            "properties": {
                                "token": {
                                    "$ref": string;
                                };
                            };
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            })[];
            "properties": {
                "access_token": {
                    "description": string;
                    "properties": {
                        "expires_in": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                        "token": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "authorization": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "client": {
                    "description": string;
                    "properties": {
                        "secret": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "created_at": {
                    "$ref": string;
                };
                "grant": {
                    "description": string;
                    "properties": {
                        "code": {
                            "$ref": string;
                        };
                        "type": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "id": {
                    "$ref": string;
                };
                "refresh_token": {
                    "description": string;
                    "properties": {
                        "expires_in": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                        "token": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "session": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "$ref": string;
                };
                "user": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
            };
        };
        "organization-add-on": {
            "$schema": string;
            "description": string;
            "stability": string;
            "title": string;
            "type": string[];
            "links": {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            }[];
        };
        "organization-app-collaborator": {
            "description": string;
            "$schema": string;
            "stability": string;
            "title": string;
            "type": string[];
            "definitions": {
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "permissions": {
                            "type": string[];
                            "items": {
                                "$ref": string;
                            };
                            "description": string;
                        };
                        "silent": {
                            "$ref": string;
                        };
                        "user": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "permissions": {
                            "type": string[];
                            "items": {
                                "$ref": string;
                            };
                            "description": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "app": {
                    "description": string;
                    "properties": {
                        "name": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "created_at": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "role": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
                "user": {
                    "description": string;
                    "properties": {
                        "email": {
                            "$ref": string;
                        };
                        "federated": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
            };
        };
        "organization-app": {
            "$schema": string;
            "description": string;
            "stability": string;
            "title": string;
            "type": string[];
            "definitions": {
                "locked": {
                    "default": boolean;
                    "description": string;
                    "example": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "joined": {
                    "default": boolean;
                    "description": string;
                    "example": boolean;
                    "type": string[];
                };
                "personal": {
                    "default": boolean;
                    "description": string;
                    "example": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "locked": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                        "organization": {
                            "$ref": string;
                        };
                        "personal": {
                            "$ref": string;
                        };
                        "region": {
                            "$ref": string;
                        };
                        "space": {
                            "$ref": string;
                        };
                        "stack": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "locked": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "owner": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "owner": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            })[];
            "properties": {
                "archived_at": {
                    "$ref": string;
                };
                "buildpack_provided_description": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "git_url": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "joined": {
                    "$ref": string;
                };
                "locked": {
                    "$ref": string;
                };
                "maintenance": {
                    "$ref": string;
                };
                "name": {
                    "$ref": string;
                };
                "organization": {
                    "description": string;
                    "properties": {
                        "name": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "owner": {
                    "description": string;
                    "properties": {
                        "email": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "region": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "released_at": {
                    "$ref": string;
                };
                "repo_size": {
                    "$ref": string;
                };
                "slug_size": {
                    "$ref": string;
                };
                "space": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "stack": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "updated_at": {
                    "$ref": string;
                };
                "web_url": {
                    "$ref": string;
                };
            };
        };
        "organization-feature": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "description": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "doc_url": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "enabled": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "state": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "display_name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "feedback_email": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "enabled": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            })[];
            "properties": {
                "created_at": {
                    "$ref": string;
                };
                "description": {
                    "$ref": string;
                };
                "doc_url": {
                    "$ref": string;
                };
                "enabled": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "name": {
                    "$ref": string;
                };
                "state": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
                "display_name": {
                    "$ref": string;
                };
                "feedback_email": {
                    "$ref": string;
                };
            };
        };
        "organization-invitation": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "token": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "title": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
            } | {
                "description": string;
                "title": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "email": {
                            "$ref": string;
                        };
                        "role": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
            } | {
                "description": string;
                "title": string;
                "href": string;
                "method": string;
                "rel": string;
            } | {
                "description": string;
                "title": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
            })[];
            "properties": {
                "created_at": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "invited_by": {
                    "properties": {
                        "email": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "organization": {
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "role": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
                "user": {
                    "properties": {
                        "email": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
            };
        };
        "organization-invoice": {
            "$schema": string;
            "description": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "addons_total": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "database_total": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "charges_total": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "credits_total": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "dyno_units": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "number": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "payment_status": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "platform_total": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "period_end": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "period_start": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "state": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "total": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "weighted_dyno_hours": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "addons_total": {
                    "$ref": string;
                };
                "database_total": {
                    "$ref": string;
                };
                "charges_total": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "credits_total": {
                    "$ref": string;
                };
                "dyno_units": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "number": {
                    "$ref": string;
                };
                "payment_status": {
                    "$ref": string;
                };
                "period_end": {
                    "$ref": string;
                };
                "period_start": {
                    "$ref": string;
                };
                "platform_total": {
                    "$ref": string;
                };
                "state": {
                    "$ref": string;
                };
                "total": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
                "weighted_dyno_hours": {
                    "$ref": string;
                };
            };
        };
        "organization-member": {
            "$schema": string;
            "description": string;
            "stability": string;
            "additionalProperties": boolean;
            "required": string[];
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "email": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "federated": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "two_factor_authentication": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "email": {
                            "$ref": string;
                        };
                        "federated": {
                            "$ref": string;
                        };
                        "role": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "ranges": string[];
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "created_at": {
                    "$ref": string;
                };
                "email": {
                    "$ref": string;
                };
                "federated": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "role": {
                    "$ref": string;
                };
                "two_factor_authentication": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
                "user": {
                    "description": string;
                    "properties": {
                        "email": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
            };
        };
        "organization-preferences": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "default-permission": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "enum": (string | null)[];
                    "type": string[];
                };
                "identity": {
                    "$ref": string;
                };
                "whitelisting-enabled": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "type": string[];
                    "properties": {
                        "whitelisting-enabled": {
                            "$ref": string;
                        };
                    };
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            })[];
            "properties": {
                "default-permission": {
                    "$ref": string;
                };
                "whitelisting-enabled": {
                    "$ref": string;
                };
            };
        };
        "organization": {
            "$schema": string;
            "description": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "credit_card_collections": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "default": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "address_1": {
                    "type": string[];
                    "description": string;
                    "example": string;
                };
                "address_2": {
                    "type": string[];
                    "description": string;
                    "example": string;
                };
                "card_number": {
                    "type": string[];
                    "description": string;
                    "example": string;
                };
                "city": {
                    "type": string[];
                    "description": string;
                    "example": string;
                };
                "country": {
                    "type": string[];
                    "description": string;
                    "example": string;
                };
                "cvv": {
                    "type": string[];
                    "description": string;
                    "example": string;
                };
                "expiration_month": {
                    "type": string[];
                    "description": string;
                    "example": string;
                };
                "expiration_year": {
                    "type": string[];
                    "description": string;
                    "example": string;
                };
                "first_name": {
                    "type": string[];
                    "description": string;
                    "example": string;
                };
                "last_name": {
                    "type": string[];
                    "description": string;
                    "example": string;
                };
                "other": {
                    "type": string[];
                    "description": string;
                    "example": string;
                };
                "postal_code": {
                    "type": string[];
                    "description": string;
                    "example": string;
                };
                "state": {
                    "type": string[];
                    "description": string;
                    "example": string;
                };
                "membership_limit": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "provisioned_licenses": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "role": {
                    "description": string;
                    "enum": (string | null)[];
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "type": {
                    "description": string;
                    "example": string;
                    "enum": string[];
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "default": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "name": {
                            "$ref": string;
                        };
                        "address_1": {
                            "$ref": string;
                        };
                        "address_2": {
                            "$ref": string;
                        };
                        "card_number": {
                            "$ref": string;
                        };
                        "city": {
                            "$ref": string;
                        };
                        "country": {
                            "$ref": string;
                        };
                        "cvv": {
                            "$ref": string;
                        };
                        "expiration_month": {
                            "$ref": string;
                        };
                        "expiration_year": {
                            "$ref": string;
                        };
                        "first_name": {
                            "$ref": string;
                        };
                        "last_name": {
                            "$ref": string;
                        };
                        "other": {
                            "$ref": string;
                        };
                        "postal_code": {
                            "$ref": string;
                        };
                        "state": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            })[];
            "properties": {
                "id": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "credit_card_collections": {
                    "$ref": string;
                };
                "default": {
                    "$ref": string;
                };
                "membership_limit": {
                    "$ref": string;
                };
                "name": {
                    "$ref": string;
                };
                "provisioned_licenses": {
                    "$ref": string;
                };
                "role": {
                    "$ref": string;
                };
                "type": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
            };
        };
        "outbound-ruleset": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "target": {
                    "description": string;
                    "example": string;
                    "pattern": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "port": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "protocol": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "rule": {
                    "description": string;
                    "type": string[];
                    "properties": {
                        "target": {
                            "$ref": string;
                        };
                        "from_port": {
                            "$ref": string;
                        };
                        "to_port": {
                            "$ref": string;
                        };
                        "protocol": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "type": string[];
                    "properties": {
                        "rules": {
                            "type": string[];
                            "items": {
                                "$ref": string;
                            };
                        };
                    };
                };
                "title": string;
            })[];
            "properties": {
                "id": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "rules": {
                    "type": string[];
                    "items": {
                        "$ref": string;
                    };
                };
                "created_by": {
                    "$ref": string;
                };
            };
        };
        "password-reset": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "password_confirmation": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "reset_password_token": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "email": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "password": {
                            "$ref": string;
                        };
                        "password_confirmation": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "created_at": {
                    "$ref": string;
                };
                "user": {
                    "properties": {
                        "email": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
            };
        };
        "organization-app-permission": {
            "$schema": string;
            "description": string;
            "stability": string;
            "title": string;
            "type": string[];
            "definitions": {
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "description": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            }[];
            "properties": {
                "name": {
                    "$ref": string;
                };
                "description": {
                    "$ref": string;
                };
            };
        };
        "pipeline-coupling": {
            "description": string;
            "$schema": string;
            "stability": string;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "stage": {
                    "description": string;
                    "example": string;
                    "enum": string[];
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "app": {
                            "$ref": string;
                        };
                        "pipeline": {
                            "$ref": string;
                        };
                        "stage": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "stage": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            })[];
            "properties": {
                "app": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "created_at": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "pipeline": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "stage": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
            };
        };
        "pipeline-promotion-target": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "error_message": {
                    "description": string;
                    "example": string;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "format": string;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "status": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "enum": string[];
                    "type": string[];
                };
            };
            "links": {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            }[];
            "properties": {
                "app": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "error_message": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "pipeline_promotion": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "release": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "status": {
                    "$ref": string;
                };
            };
        };
        "pipeline-promotion": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "format": string;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "status": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "enum": string[];
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "pipeline": {
                            "description": string;
                            "properties": {
                                "id": {
                                    "$ref": string;
                                };
                            };
                            "required": string[];
                            "type": string[];
                        };
                        "source": {
                            "description": string;
                            "type": string[];
                            "properties": {
                                "app": {
                                    "description": string;
                                    "properties": {
                                        "id": {
                                            "$ref": string;
                                        };
                                    };
                                    "strictProperties": boolean;
                                    "type": string[];
                                };
                            };
                        };
                        "targets": {
                            "type": string[];
                            "items": {
                                "type": string[];
                                "properties": {
                                    "app": {
                                        "description": string;
                                        "properties": {
                                            "id": {
                                                "$ref": string;
                                            };
                                        };
                                        "strictProperties": boolean;
                                        "type": string[];
                                    };
                                };
                            };
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            })[];
            "properties": {
                "created_at": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "pipeline": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "source": {
                    "description": string;
                    "properties": {
                        "app": {
                            "description": string;
                            "properties": {
                                "id": {
                                    "$ref": string;
                                };
                            };
                            "strictProperties": boolean;
                            "type": string[];
                        };
                        "release": {
                            "description": string;
                            "properties": {
                                "id": {
                                    "$ref": string;
                                };
                            };
                            "type": string[];
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "status": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
            };
        };
        "pipeline": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "pattern": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "name": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "name": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "type": string[];
                    "items": {
                        "$ref": string;
                    };
                };
                "title": string;
            })[];
            "properties": {
                "created_at": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "name": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
            };
        };
        "plan": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "compliance": {
                    "description": string;
                    "example": string[];
                    "readOnly": boolean;
                    "type": string[];
                    "items": {
                        "$ref": string;
                    };
                };
                "default": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "description": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "human_name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "installable_inside_private_network": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "installable_outside_private_network": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "regime": {
                    "description": string;
                    "readOnly": boolean;
                    "example": string;
                    "type": string[];
                    "enum": string[];
                };
                "cents": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "unit": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "space_default": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "state": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "visible": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "addon_service": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "created_at": {
                    "$ref": string;
                };
                "compliance": {
                    "$ref": string;
                };
                "default": {
                    "$ref": string;
                };
                "description": {
                    "$ref": string;
                };
                "human_name": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "installable_inside_private_network": {
                    "$ref": string;
                };
                "installable_outside_private_network": {
                    "$ref": string;
                };
                "name": {
                    "$ref": string;
                };
                "price": {
                    "description": string;
                    "properties": {
                        "cents": {
                            "$ref": string;
                        };
                        "unit": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "space_default": {
                    "$ref": string;
                };
                "state": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
                "visible": {
                    "$ref": string;
                };
            };
        };
        "rate-limit": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "identity": {};
                "remaining": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            }[];
            "properties": {
                "remaining": {
                    "$ref": string;
                };
            };
        };
        "region": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "country": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "description": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "locale": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "private_capable": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "provider": {
                    "description": string;
                    "type": string[];
                    "properties": {
                        "name": {
                            "description": string;
                            "example": string;
                            "readOnly": boolean;
                            "type": string[];
                        };
                        "region": {
                            "description": string;
                            "example": string;
                            "readOnly": boolean;
                            "type": string[];
                        };
                    };
                    "readOnly": boolean;
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "country": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "description": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "locale": {
                    "$ref": string;
                };
                "name": {
                    "$ref": string;
                };
                "private_capable": {
                    "$ref": string;
                };
                "provider": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
            };
        };
        "release": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "description": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "status": {
                    "description": string;
                    "enum": string[];
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "version": {
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "current": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "description": {
                            "$ref": string;
                        };
                        "slug": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "release": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            })[];
            "properties": {
                "addon_plan_names": {
                    "description": string;
                    "type": string[];
                    "items": {
                        "$ref": string;
                    };
                };
                "app": {
                    "description": string;
                    "properties": {
                        "name": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "created_at": {
                    "$ref": string;
                };
                "description": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
                "slug": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "status": {
                    "$ref": string;
                };
                "user": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "email": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "version": {
                    "$ref": string;
                };
                "current": {
                    "$ref": string;
                };
            };
        };
        "slug": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "buildpack_provided_description": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "checksum": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "commit": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "commit_description": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "method": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "process_types": {
                    "additionalProperties": boolean;
                    "description": string;
                    "example": {
                        "web": string;
                    };
                    "patternProperties": {
                        "^[-\\w]{1,128}$": {
                            "type": string[];
                        };
                    };
                    "readOnly": boolean;
                    "type": string[];
                };
                "size": {
                    "default": null;
                    "description": string;
                    "example": number;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "url": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "buildpack_provided_description": {
                            "$ref": string;
                        };
                        "checksum": {
                            "$ref": string;
                        };
                        "commit": {
                            "$ref": string;
                        };
                        "commit_description": {
                            "$ref": string;
                        };
                        "process_types": {
                            "$ref": string;
                        };
                        "stack": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                    "example": {
                        "blob": {
                            "method": string;
                            "url": string;
                        };
                        "buildpack_provided_description": string;
                        "checksum": string;
                        "commit": string;
                        "commit_description": string;
                        "created_at": string;
                        "id": string;
                        "process_types": {
                            "web": string;
                        };
                        "size": number;
                        "stack": {
                            "id": string;
                            "name": string;
                        };
                        "updated_at": string;
                    };
                };
                "title": string;
            })[];
            "properties": {
                "blob": {
                    "description": string;
                    "properties": {
                        "method": {
                            "$ref": string;
                        };
                        "url": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "buildpack_provided_description": {
                    "$ref": string;
                };
                "checksum": {
                    "$ref": string;
                };
                "commit": {
                    "$ref": string;
                };
                "commit_description": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "process_types": {
                    "$ref": string;
                };
                "size": {
                    "$ref": string;
                };
                "stack": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "$ref": string;
                };
            };
        };
        "sms-number": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "sms_number": {
                    "$ref": string;
                };
            };
            "links": {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            }[];
            "properties": {
                "sms_number": {
                    "$ref": string;
                };
            };
        };
        "sni-endpoint": {
            "description": string;
            "$schema": string;
            "title": string;
            "stability": string;
            "strictProperties": boolean;
            "type": string[];
            "definitions": {
                "certificate_chain": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "cname": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "pattern": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "private_key": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "certificate_chain": {
                            "$ref": string;
                        };
                        "private_key": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "certificate_chain": {
                    "$ref": string;
                };
                "cname": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "name": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
            };
        };
        "source": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "get_url": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "put_url": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "deactivate_on": string;
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            })[];
            "properties": {
                "source_blob": {
                    "description": string;
                    "properties": {
                        "get_url": {
                            "$ref": string;
                        };
                        "put_url": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
            };
        };
        "space-app-access": {
            "description": string;
            "$schema": string;
            "stability": string;
            "title": string;
            "type": string[];
            "definitions": {
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "type": string[];
                    "properties": {
                        "permissions": {
                            "type": string[];
                            "items": {
                                "type": string[];
                                "properties": {
                                    "name": {
                                        "type": string[];
                                    };
                                };
                            };
                        };
                    };
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "space": {
                    "description": string;
                    "properties": {
                        "name": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "created_at": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "permissions": {
                    "description": string;
                    "type": string[];
                    "items": {
                        "type": string[];
                        "properties": {
                            "description": {
                                "type": string[];
                            };
                            "name": {
                                "type": string[];
                            };
                        };
                    };
                };
                "updated_at": {
                    "$ref": string;
                };
                "user": {
                    "description": string;
                    "properties": {
                        "email": {
                            "$ref": string;
                        };
                        "id": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
            };
        };
        "space-nat": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "ip_v4_address": {
                    "example": string;
                    "format": string;
                    "pattern": string;
                    "type": string[];
                };
                "sources": {
                    "description": string;
                    "readOnly": boolean;
                    "type": string[];
                    "items": {
                        "$ref": string;
                    };
                };
                "state": {
                    "description": string;
                    "enum": string[];
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            }[];
            "properties": {
                "created_at": {
                    "$ref": string;
                };
                "sources": {
                    "$ref": string;
                };
                "state": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
            };
        };
        "space": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "pattern": string;
                    "type": string[];
                };
                "shield": {
                    "description": string;
                    "readOnly": boolean;
                    "example": boolean;
                    "type": string[];
                };
                "state": {
                    "description": string;
                    "enum": string[];
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "name": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "name": {
                            "$ref": string;
                        };
                        "organization": {
                            "$ref": string;
                        };
                        "region": {
                            "$ref": string;
                        };
                        "shield": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            })[];
            "properties": {
                "created_at": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "name": {
                    "$ref": string;
                };
                "organization": {
                    "description": string;
                    "properties": {
                        "name": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "region": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                    "type": string[];
                };
                "shield": {
                    "$ref": string;
                };
                "state": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
            };
        };
        "ssl-endpoint": {
            "description": string;
            "$schema": string;
            "title": string;
            "stability": string;
            "strictProperties": boolean;
            "type": string[];
            "definitions": {
                "certificate_chain": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "cname": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "pattern": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "preprocess": {
                    "default": boolean;
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "private_key": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "rollback": {
                    "default": boolean;
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "certificate_chain": {
                            "$ref": string;
                        };
                        "preprocess": {
                            "$ref": string;
                        };
                        "private_key": {
                            "$ref": string;
                        };
                    };
                    "required": string[];
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "properties": {
                        "certificate_chain": {
                            "$ref": string;
                        };
                        "preprocess": {
                            "$ref": string;
                        };
                        "private_key": {
                            "$ref": string;
                        };
                        "rollback": {
                            "$ref": string;
                        };
                    };
                    "type": string[];
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            })[];
            "properties": {
                "app": {
                    "description": string;
                    "type": string[];
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                    };
                    "strictProperties": boolean;
                };
                "certificate_chain": {
                    "$ref": string;
                };
                "cname": {
                    "$ref": string;
                };
                "created_at": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "name": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
            };
        };
        "stack": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "created_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "name": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "state": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "updated_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            })[];
            "properties": {
                "created_at": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
                "name": {
                    "$ref": string;
                };
                "state": {
                    "$ref": string;
                };
                "updated_at": {
                    "$ref": string;
                };
            };
        };
        "user-preferences": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
                "self": {
                    "description": string;
                    "enum": string[];
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "timezone": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "default-organization": {
                    "description": string;
                    "example": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "dismissed-github-banner": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "dismissed-getting-started": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "dismissed-org-access-controls": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "dismissed-org-wizard-notification": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "dismissed-pipelines-banner": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "dismissed-pipelines-github-banner": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
                "dismissed-pipelines-github-banners": {
                    "description": string;
                    "example": string[];
                    "readOnly": boolean;
                    "type": string[];
                    "items": {
                        "$ref": string;
                    };
                };
                "dismissed-sms-banner": {
                    "description": string;
                    "example": boolean;
                    "readOnly": boolean;
                    "type": string[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "type": string[];
                    "properties": {
                        "timezone": {
                            "$ref": string;
                        };
                        "default-organization": {
                            "$ref": string;
                        };
                        "dismissed-github-banner": {
                            "$ref": string;
                        };
                        "dismissed-getting-started": {
                            "$ref": string;
                        };
                        "dismissed-org-access-controls": {
                            "$ref": string;
                        };
                        "dismissed-org-wizard-notification": {
                            "$ref": string;
                        };
                        "dismissed-pipelines-banner": {
                            "$ref": string;
                        };
                        "dismissed-pipelines-github-banner": {
                            "$ref": string;
                        };
                        "dismissed-pipelines-github-banners": {
                            "$ref": string;
                        };
                        "dismissed-sms-banner": {
                            "$ref": string;
                        };
                    };
                };
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            })[];
            "properties": {
                "timezone": {
                    "$ref": string;
                };
                "default-organization": {
                    "$ref": string;
                };
                "dismissed-github-banner": {
                    "$ref": string;
                };
                "dismissed-getting-started": {
                    "$ref": string;
                };
                "dismissed-org-access-controls": {
                    "$ref": string;
                };
                "dismissed-org-wizard-notification": {
                    "$ref": string;
                };
                "dismissed-pipelines-banner": {
                    "$ref": string;
                };
                "dismissed-pipelines-github-banner": {
                    "$ref": string;
                };
                "dismissed-pipelines-github-banners": {
                    "$ref": string;
                };
                "dismissed-sms-banner": {
                    "$ref": string;
                };
            };
        };
        "whitelisted-add-on-service": {
            "description": string;
            "$schema": string;
            "stability": string;
            "strictProperties": boolean;
            "title": string;
            "type": string[];
            "definitions": {
                "added_at": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "added_by": {
                    "description": string;
                    "properties": {
                        "email": {
                            "$ref": string;
                            "type": string[];
                        };
                        "id": {
                            "$ref": string;
                            "type": string[];
                        };
                    };
                    "readOnly": boolean;
                    "type": string[];
                };
                "addon_service": {
                    "description": string;
                    "properties": {
                        "id": {
                            "$ref": string;
                        };
                        "name": {
                            "$ref": string;
                        };
                        "human_name": {
                            "$ref": string;
                        };
                    };
                    "readOnly": boolean;
                    "type": string[];
                };
                "id": {
                    "description": string;
                    "example": string;
                    "format": string;
                    "readOnly": boolean;
                    "type": string[];
                };
                "identity": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
            };
            "links": ({
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "schema": {
                    "type": string[];
                    "properties": {
                        "addon_service": {
                            "description": string;
                            "example": string;
                            "type": string[];
                        };
                    };
                };
                "targetSchema": {
                    "items": {
                        "$ref": string;
                    };
                    "type": string[];
                };
                "title": string;
            } | {
                "description": string;
                "href": string;
                "method": string;
                "rel": string;
                "targetSchema": {
                    "$ref": string;
                };
                "title": string;
            })[];
            "properties": {
                "added_at": {
                    "$ref": string;
                };
                "added_by": {
                    "$ref": string;
                };
                "addon_service": {
                    "$ref": string;
                };
                "id": {
                    "$ref": string;
                };
            };
        };
    };
    "properties": {
        "account-feature": {
            "$ref": string;
        };
        "account": {
            "$ref": string;
        };
        "add-on-action": {
            "$ref": string;
        };
        "add-on-attachment": {
            "$ref": string;
        };
        "add-on-config": {
            "$ref": string;
        };
        "add-on-plan-action": {
            "$ref": string;
        };
        "add-on-region-capability": {
            "$ref": string;
        };
        "add-on-service": {
            "$ref": string;
        };
        "add-on": {
            "$ref": string;
        };
        "app-feature": {
            "$ref": string;
        };
        "app-formation-set": {
            "$ref": string;
        };
        "app-setup": {
            "$ref": string;
        };
        "app-transfer": {
            "$ref": string;
        };
        "app": {
            "$ref": string;
        };
        "build-result": {
            "$ref": string;
        };
        "build": {
            "$ref": string;
        };
        "buildpack-installation": {
            "$ref": string;
        };
        "collaborator": {
            "$ref": string;
        };
        "config-var": {
            "$ref": string;
        };
        "credit": {
            "$ref": string;
        };
        "domain": {
            "$ref": string;
        };
        "dyno-size": {
            "$ref": string;
        };
        "dyno": {
            "$ref": string;
        };
        "event": {
            "$ref": string;
        };
        "failed-event": {
            "$ref": string;
        };
        "filter-apps": {
            "$ref": string;
        };
        "formation": {
            "$ref": string;
        };
        "identity-provider": {
            "$ref": string;
        };
        "inbound-ruleset": {
            "$ref": string;
        };
        "invitation": {
            "$ref": string;
        };
        "invoice-address": {
            "$ref": string;
        };
        "invoice": {
            "$ref": string;
        };
        "key": {
            "$ref": string;
        };
        "log-drain": {
            "$ref": string;
        };
        "log-session": {
            "$ref": string;
        };
        "oauth-authorization": {
            "$ref": string;
        };
        "oauth-client": {
            "$ref": string;
        };
        "oauth-grant": {
            "$ref": string;
        };
        "oauth-token": {
            "$ref": string;
        };
        "organization-add-on": {
            "$ref": string;
        };
        "organization-app-collaborator": {
            "$ref": string;
        };
        "organization-app": {
            "$ref": string;
        };
        "organization-feature": {
            "$ref": string;
        };
        "organization-invitation": {
            "$ref": string;
        };
        "organization-invoice": {
            "$ref": string;
        };
        "organization-member": {
            "$ref": string;
        };
        "organization-preferences": {
            "$ref": string;
        };
        "organization": {
            "$ref": string;
        };
        "outbound-ruleset": {
            "$ref": string;
        };
        "password-reset": {
            "$ref": string;
        };
        "organization-app-permission": {
            "$ref": string;
        };
        "pipeline-coupling": {
            "$ref": string;
        };
        "pipeline-promotion-target": {
            "$ref": string;
        };
        "pipeline-promotion": {
            "$ref": string;
        };
        "pipeline": {
            "$ref": string;
        };
        "plan": {
            "$ref": string;
        };
        "rate-limit": {
            "$ref": string;
        };
        "region": {
            "$ref": string;
        };
        "release": {
            "$ref": string;
        };
        "slug": {
            "$ref": string;
        };
        "sms-number": {
            "$ref": string;
        };
        "sni-endpoint": {
            "$ref": string;
        };
        "source": {
            "$ref": string;
        };
        "space-app-access": {
            "$ref": string;
        };
        "space-nat": {
            "$ref": string;
        };
        "space": {
            "$ref": string;
        };
        "ssl-endpoint": {
            "$ref": string;
        };
        "stack": {
            "$ref": string;
        };
        "user-preferences": {
            "$ref": string;
        };
        "whitelisted-add-on-service": {
            "$ref": string;
        };
    };
    "description": string;
    "id": string;
    "links": ({
        "href": string;
        "rel": string;
    } | {
        "href": string;
        "method": string;
        "rel": string;
        "targetSchema": {
            "additionalProperties": boolean;
        };
    })[];
    "title": string;
};
export declare const output: string;

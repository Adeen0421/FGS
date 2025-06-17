declare module 'sanity' {
  export function defineConfig(config: any): any;
  
  interface ValidationBuilder {
    required(): ValidationBuilder;
    min(length: number): ValidationBuilder;
    max(length: number): ValidationBuilder;
    length(length: number): ValidationBuilder;
    greaterThan(value: number): ValidationBuilder;
    lessThan(value: number): ValidationBuilder;
    unique(): ValidationBuilder;
    custom(fn: (value: any) => boolean | string): ValidationBuilder;
  }

  export type Rule = ValidationBuilder;

  interface FieldDefinition {
    name: string;
    title?: string;
    type: string;
    validation?: (rule: Rule) => ValidationBuilder;
    options?: {
      hotspot?: boolean;
      source?: string;
      maxLength?: number;
      list?: Array<{title: string; value: string}>;
    };
    fields?: Array<FieldDefinition>;
    of?: Array<{
      type: string;
      options?: {
        hotspot?: boolean;
      };
      fields?: Array<FieldDefinition>;
    }>;
  }

  interface TypeDefinition extends FieldDefinition {
    preview?: {
      select: {
        [key: string]: string;
      };
    };
  }

  export function defineField(field: FieldDefinition): FieldDefinition;
  export function defineType(type: TypeDefinition): TypeDefinition;
}

declare module 'sanity/desk' {
  export function deskTool(): any;
}

declare module '@sanity/vision' {
  export function visionTool(): any;
} 
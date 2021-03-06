import { CompletionItemKind, MarkdownString } from 'vscode';

export const scopes = ['source.firebase',
    'comment.line',
    'meta.root.fs',
    'meta.matcher.fs',
    'string.unquoted.fs',
    'meta.function.fs',
    'meta.function.expression.fs',
    'meta.allow.fs',
    'meta.allow.head.fs',
    'meta.allow.scope.fs',
    'meta.allow.body.fs',
    'meta.allow.body.if.fs',
    'meta.functioncall.fs',
    'string.quoted.firestorerules'] as const;
export type Scope = typeof scopes[number];

export type FlatDoc = { [name: string]: string | MarkdownString };

export interface DocumentationValue {
    header?: string;
    doc: string | MarkdownString;
    kind?: CompletionItemKind;
    childs?: Documentation;
    scopes?: Scope[];
}

export type Documentation = { [name: string]: DocumentationValue };
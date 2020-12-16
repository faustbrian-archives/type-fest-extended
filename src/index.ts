/* eslint-disable @typescript-eslint/no-explicit-any */

import { Primitive } from "type-fest";

export * from "type-fest";

// Dictionaries
export type Dictionary<T> = Record<string, T>;
export type AnyDictionary = Dictionary<any>;
export type BigIntDictionary = Dictionary<bigint>;
export type BooleanDictionary = Dictionary<boolean>;
export type NullDictionary = Dictionary<null>;
export type NumberDictionary = Dictionary<number>;
export type PrimitiveDictionary = Dictionary<Primitive>;
export type StringDictionary = Dictionary<string>;
export type SymbolDictionary = Dictionary<symbol>;
export type UnknownDictionary = Dictionary<unknown>;

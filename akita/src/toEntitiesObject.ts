import { DEFAULT_ID_KEY } from './defaultIDKey';

// @internal
export function toEntitiesObject<E>(entities: E[], idKey = DEFAULT_ID_KEY) {
  const acc = {};

  for (const entity of entities) {
    acc[entity[idKey]] = entity;
  }

  return acc;
}

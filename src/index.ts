function identity<T>(arg: T): T {
  return arg
}

interface GenericIdentityFn<T> {
  (arg: T): T
}

const myIdentity: GenericIdentityFn<number> = identity

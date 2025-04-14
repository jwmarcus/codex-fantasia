
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model PlayabilityInfo
 * 
 */
export type PlayabilityInfo = $Result.DefaultSelection<Prisma.$PlayabilityInfoPayload>
/**
 * Model ResourceLink
 * 
 */
export type ResourceLink = $Result.DefaultSelection<Prisma.$ResourceLinkPayload>
/**
 * Model UserGameEntry
 * 
 */
export type UserGameEntry = $Result.DefaultSelection<Prisma.$UserGameEntryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GameStatus: {
  PLAYED: 'PLAYED',
  PLAYING: 'PLAYING',
  WANT_TO_PLAY: 'WANT_TO_PLAY',
  BACKLOG: 'BACKLOG',
  DROPPED: 'DROPPED'
};

export type GameStatus = (typeof GameStatus)[keyof typeof GameStatus]

}

export type GameStatus = $Enums.GameStatus

export const GameStatus: typeof $Enums.GameStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playabilityInfo`: Exposes CRUD operations for the **PlayabilityInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayabilityInfos
    * const playabilityInfos = await prisma.playabilityInfo.findMany()
    * ```
    */
  get playabilityInfo(): Prisma.PlayabilityInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resourceLink`: Exposes CRUD operations for the **ResourceLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResourceLinks
    * const resourceLinks = await prisma.resourceLink.findMany()
    * ```
    */
  get resourceLink(): Prisma.ResourceLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userGameEntry`: Exposes CRUD operations for the **UserGameEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGameEntries
    * const userGameEntries = await prisma.userGameEntry.findMany()
    * ```
    */
  get userGameEntry(): Prisma.UserGameEntryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Game: 'Game',
    PlayabilityInfo: 'PlayabilityInfo',
    ResourceLink: 'ResourceLink',
    UserGameEntry: 'UserGameEntry'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "game" | "playabilityInfo" | "resourceLink" | "userGameEntry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      PlayabilityInfo: {
        payload: Prisma.$PlayabilityInfoPayload<ExtArgs>
        fields: Prisma.PlayabilityInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayabilityInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayabilityInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayabilityInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayabilityInfoPayload>
          }
          findFirst: {
            args: Prisma.PlayabilityInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayabilityInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayabilityInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayabilityInfoPayload>
          }
          findMany: {
            args: Prisma.PlayabilityInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayabilityInfoPayload>[]
          }
          create: {
            args: Prisma.PlayabilityInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayabilityInfoPayload>
          }
          createMany: {
            args: Prisma.PlayabilityInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayabilityInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayabilityInfoPayload>[]
          }
          delete: {
            args: Prisma.PlayabilityInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayabilityInfoPayload>
          }
          update: {
            args: Prisma.PlayabilityInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayabilityInfoPayload>
          }
          deleteMany: {
            args: Prisma.PlayabilityInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayabilityInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayabilityInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayabilityInfoPayload>[]
          }
          upsert: {
            args: Prisma.PlayabilityInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayabilityInfoPayload>
          }
          aggregate: {
            args: Prisma.PlayabilityInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayabilityInfo>
          }
          groupBy: {
            args: Prisma.PlayabilityInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayabilityInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayabilityInfoCountArgs<ExtArgs>
            result: $Utils.Optional<PlayabilityInfoCountAggregateOutputType> | number
          }
        }
      }
      ResourceLink: {
        payload: Prisma.$ResourceLinkPayload<ExtArgs>
        fields: Prisma.ResourceLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceLinkPayload>
          }
          findFirst: {
            args: Prisma.ResourceLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceLinkPayload>
          }
          findMany: {
            args: Prisma.ResourceLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceLinkPayload>[]
          }
          create: {
            args: Prisma.ResourceLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceLinkPayload>
          }
          createMany: {
            args: Prisma.ResourceLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceLinkPayload>[]
          }
          delete: {
            args: Prisma.ResourceLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceLinkPayload>
          }
          update: {
            args: Prisma.ResourceLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceLinkPayload>
          }
          deleteMany: {
            args: Prisma.ResourceLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResourceLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceLinkPayload>[]
          }
          upsert: {
            args: Prisma.ResourceLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceLinkPayload>
          }
          aggregate: {
            args: Prisma.ResourceLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResourceLink>
          }
          groupBy: {
            args: Prisma.ResourceLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourceLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceLinkCountArgs<ExtArgs>
            result: $Utils.Optional<ResourceLinkCountAggregateOutputType> | number
          }
        }
      }
      UserGameEntry: {
        payload: Prisma.$UserGameEntryPayload<ExtArgs>
        fields: Prisma.UserGameEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGameEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGameEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGameEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGameEntryPayload>
          }
          findFirst: {
            args: Prisma.UserGameEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGameEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGameEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGameEntryPayload>
          }
          findMany: {
            args: Prisma.UserGameEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGameEntryPayload>[]
          }
          create: {
            args: Prisma.UserGameEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGameEntryPayload>
          }
          createMany: {
            args: Prisma.UserGameEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserGameEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGameEntryPayload>[]
          }
          delete: {
            args: Prisma.UserGameEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGameEntryPayload>
          }
          update: {
            args: Prisma.UserGameEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGameEntryPayload>
          }
          deleteMany: {
            args: Prisma.UserGameEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserGameEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserGameEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGameEntryPayload>[]
          }
          upsert: {
            args: Prisma.UserGameEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGameEntryPayload>
          }
          aggregate: {
            args: Prisma.UserGameEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserGameEntry>
          }
          groupBy: {
            args: Prisma.UserGameEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGameEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGameEntryCountArgs<ExtArgs>
            result: $Utils.Optional<UserGameEntryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    game?: GameOmit
    playabilityInfo?: PlayabilityInfoOmit
    resourceLink?: ResourceLinkOmit
    userGameEntry?: UserGameEntryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    gameEntries: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameEntries?: boolean | UserCountOutputTypeCountGameEntriesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGameEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGameEntryWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    playabilityInfo: number
    resourceLinks: number
    userEntries: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playabilityInfo?: boolean | GameCountOutputTypeCountPlayabilityInfoArgs
    resourceLinks?: boolean | GameCountOutputTypeCountResourceLinksArgs
    userEntries?: boolean | GameCountOutputTypeCountUserEntriesArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountPlayabilityInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayabilityInfoWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountResourceLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceLinkWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountUserEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGameEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    auth0Sub: string | null
    createdAt: Date | null
    updatedAt: Date | null
    theme: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    auth0Sub: string | null
    createdAt: Date | null
    updatedAt: Date | null
    theme: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    auth0Sub: number
    createdAt: number
    updatedAt: number
    theme: number
    ownedPlatforms: number
    preferredGenres: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    auth0Sub?: true
    createdAt?: true
    updatedAt?: true
    theme?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    auth0Sub?: true
    createdAt?: true
    updatedAt?: true
    theme?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    auth0Sub?: true
    createdAt?: true
    updatedAt?: true
    theme?: true
    ownedPlatforms?: true
    preferredGenres?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    auth0Sub: string
    createdAt: Date
    updatedAt: Date
    theme: string | null
    ownedPlatforms: string[]
    preferredGenres: string[]
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    auth0Sub?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    theme?: boolean
    ownedPlatforms?: boolean
    preferredGenres?: boolean
    gameEntries?: boolean | User$gameEntriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    auth0Sub?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    theme?: boolean
    ownedPlatforms?: boolean
    preferredGenres?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    auth0Sub?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    theme?: boolean
    ownedPlatforms?: boolean
    preferredGenres?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    auth0Sub?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    theme?: boolean
    ownedPlatforms?: boolean
    preferredGenres?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "auth0Sub" | "createdAt" | "updatedAt" | "theme" | "ownedPlatforms" | "preferredGenres", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameEntries?: boolean | User$gameEntriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      gameEntries: Prisma.$UserGameEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      auth0Sub: string
      createdAt: Date
      updatedAt: Date
      theme: string | null
      ownedPlatforms: string[]
      preferredGenres: string[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gameEntries<T extends User$gameEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$gameEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGameEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly auth0Sub: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly theme: FieldRef<"User", 'String'>
    readonly ownedPlatforms: FieldRef<"User", 'String[]'>
    readonly preferredGenres: FieldRef<"User", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.gameEntries
   */
  export type User$gameEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameEntry
     */
    select?: UserGameEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameEntry
     */
    omit?: UserGameEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameEntryInclude<ExtArgs> | null
    where?: UserGameEntryWhereInput
    orderBy?: UserGameEntryOrderByWithRelationInput | UserGameEntryOrderByWithRelationInput[]
    cursor?: UserGameEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGameEntryScalarFieldEnum | UserGameEntryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    beginnerFriendliness: number | null
    modernPlayabilityScore: number | null
  }

  export type GameSumAggregateOutputType = {
    beginnerFriendliness: number | null
    modernPlayabilityScore: number | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    title: string | null
    releaseDate: Date | null
    developer: string | null
    publisher: string | null
    genre: string | null
    subgenre: string | null
    beginnerFriendliness: number | null
    modernPlayabilityScore: number | null
    estimatedCompletionTime: string | null
    synopsis: string | null
    isEntryPoint: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    title: string | null
    releaseDate: Date | null
    developer: string | null
    publisher: string | null
    genre: string | null
    subgenre: string | null
    beginnerFriendliness: number | null
    modernPlayabilityScore: number | null
    estimatedCompletionTime: string | null
    synopsis: string | null
    isEntryPoint: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    title: number
    alternativeTitles: number
    releaseDate: number
    developer: number
    publisher: number
    genre: number
    subgenre: number
    beginnerFriendliness: number
    modernPlayabilityScore: number
    estimatedCompletionTime: number
    synopsis: number
    isEntryPoint: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    beginnerFriendliness?: true
    modernPlayabilityScore?: true
  }

  export type GameSumAggregateInputType = {
    beginnerFriendliness?: true
    modernPlayabilityScore?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    title?: true
    releaseDate?: true
    developer?: true
    publisher?: true
    genre?: true
    subgenre?: true
    beginnerFriendliness?: true
    modernPlayabilityScore?: true
    estimatedCompletionTime?: true
    synopsis?: true
    isEntryPoint?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    title?: true
    releaseDate?: true
    developer?: true
    publisher?: true
    genre?: true
    subgenre?: true
    beginnerFriendliness?: true
    modernPlayabilityScore?: true
    estimatedCompletionTime?: true
    synopsis?: true
    isEntryPoint?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    title?: true
    alternativeTitles?: true
    releaseDate?: true
    developer?: true
    publisher?: true
    genre?: true
    subgenre?: true
    beginnerFriendliness?: true
    modernPlayabilityScore?: true
    estimatedCompletionTime?: true
    synopsis?: true
    isEntryPoint?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    title: string
    alternativeTitles: string[]
    releaseDate: Date | null
    developer: string | null
    publisher: string | null
    genre: string | null
    subgenre: string | null
    beginnerFriendliness: number | null
    modernPlayabilityScore: number | null
    estimatedCompletionTime: string | null
    synopsis: string | null
    isEntryPoint: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    alternativeTitles?: boolean
    releaseDate?: boolean
    developer?: boolean
    publisher?: boolean
    genre?: boolean
    subgenre?: boolean
    beginnerFriendliness?: boolean
    modernPlayabilityScore?: boolean
    estimatedCompletionTime?: boolean
    synopsis?: boolean
    isEntryPoint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playabilityInfo?: boolean | Game$playabilityInfoArgs<ExtArgs>
    resourceLinks?: boolean | Game$resourceLinksArgs<ExtArgs>
    userEntries?: boolean | Game$userEntriesArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    alternativeTitles?: boolean
    releaseDate?: boolean
    developer?: boolean
    publisher?: boolean
    genre?: boolean
    subgenre?: boolean
    beginnerFriendliness?: boolean
    modernPlayabilityScore?: boolean
    estimatedCompletionTime?: boolean
    synopsis?: boolean
    isEntryPoint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    alternativeTitles?: boolean
    releaseDate?: boolean
    developer?: boolean
    publisher?: boolean
    genre?: boolean
    subgenre?: boolean
    beginnerFriendliness?: boolean
    modernPlayabilityScore?: boolean
    estimatedCompletionTime?: boolean
    synopsis?: boolean
    isEntryPoint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    title?: boolean
    alternativeTitles?: boolean
    releaseDate?: boolean
    developer?: boolean
    publisher?: boolean
    genre?: boolean
    subgenre?: boolean
    beginnerFriendliness?: boolean
    modernPlayabilityScore?: boolean
    estimatedCompletionTime?: boolean
    synopsis?: boolean
    isEntryPoint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "alternativeTitles" | "releaseDate" | "developer" | "publisher" | "genre" | "subgenre" | "beginnerFriendliness" | "modernPlayabilityScore" | "estimatedCompletionTime" | "synopsis" | "isEntryPoint" | "createdAt" | "updatedAt", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playabilityInfo?: boolean | Game$playabilityInfoArgs<ExtArgs>
    resourceLinks?: boolean | Game$resourceLinksArgs<ExtArgs>
    userEntries?: boolean | Game$userEntriesArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      playabilityInfo: Prisma.$PlayabilityInfoPayload<ExtArgs>[]
      resourceLinks: Prisma.$ResourceLinkPayload<ExtArgs>[]
      userEntries: Prisma.$UserGameEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      alternativeTitles: string[]
      releaseDate: Date | null
      developer: string | null
      publisher: string | null
      genre: string | null
      subgenre: string | null
      beginnerFriendliness: number | null
      modernPlayabilityScore: number | null
      estimatedCompletionTime: string | null
      synopsis: string | null
      isEntryPoint: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playabilityInfo<T extends Game$playabilityInfoArgs<ExtArgs> = {}>(args?: Subset<T, Game$playabilityInfoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayabilityInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resourceLinks<T extends Game$resourceLinksArgs<ExtArgs> = {}>(args?: Subset<T, Game$resourceLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userEntries<T extends Game$userEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Game$userEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGameEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly title: FieldRef<"Game", 'String'>
    readonly alternativeTitles: FieldRef<"Game", 'String[]'>
    readonly releaseDate: FieldRef<"Game", 'DateTime'>
    readonly developer: FieldRef<"Game", 'String'>
    readonly publisher: FieldRef<"Game", 'String'>
    readonly genre: FieldRef<"Game", 'String'>
    readonly subgenre: FieldRef<"Game", 'String'>
    readonly beginnerFriendliness: FieldRef<"Game", 'Int'>
    readonly modernPlayabilityScore: FieldRef<"Game", 'Int'>
    readonly estimatedCompletionTime: FieldRef<"Game", 'String'>
    readonly synopsis: FieldRef<"Game", 'String'>
    readonly isEntryPoint: FieldRef<"Game", 'Boolean'>
    readonly createdAt: FieldRef<"Game", 'DateTime'>
    readonly updatedAt: FieldRef<"Game", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.playabilityInfo
   */
  export type Game$playabilityInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayabilityInfo
     */
    select?: PlayabilityInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayabilityInfo
     */
    omit?: PlayabilityInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayabilityInfoInclude<ExtArgs> | null
    where?: PlayabilityInfoWhereInput
    orderBy?: PlayabilityInfoOrderByWithRelationInput | PlayabilityInfoOrderByWithRelationInput[]
    cursor?: PlayabilityInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayabilityInfoScalarFieldEnum | PlayabilityInfoScalarFieldEnum[]
  }

  /**
   * Game.resourceLinks
   */
  export type Game$resourceLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkInclude<ExtArgs> | null
    where?: ResourceLinkWhereInput
    orderBy?: ResourceLinkOrderByWithRelationInput | ResourceLinkOrderByWithRelationInput[]
    cursor?: ResourceLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourceLinkScalarFieldEnum | ResourceLinkScalarFieldEnum[]
  }

  /**
   * Game.userEntries
   */
  export type Game$userEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameEntry
     */
    select?: UserGameEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameEntry
     */
    omit?: UserGameEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameEntryInclude<ExtArgs> | null
    where?: UserGameEntryWhereInput
    orderBy?: UserGameEntryOrderByWithRelationInput | UserGameEntryOrderByWithRelationInput[]
    cursor?: UserGameEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGameEntryScalarFieldEnum | UserGameEntryScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model PlayabilityInfo
   */

  export type AggregatePlayabilityInfo = {
    _count: PlayabilityInfoCountAggregateOutputType | null
    _min: PlayabilityInfoMinAggregateOutputType | null
    _max: PlayabilityInfoMaxAggregateOutputType | null
  }

  export type PlayabilityInfoMinAggregateOutputType = {
    id: string | null
    platform: string | null
    originalPlatform: string | null
    regionRestrictions: string | null
    notableVersionDiffs: string | null
    systemRequirements: string | null
    gameId: string | null
  }

  export type PlayabilityInfoMaxAggregateOutputType = {
    id: string | null
    platform: string | null
    originalPlatform: string | null
    regionRestrictions: string | null
    notableVersionDiffs: string | null
    systemRequirements: string | null
    gameId: string | null
  }

  export type PlayabilityInfoCountAggregateOutputType = {
    id: number
    platform: number
    modernAvailability: number
    originalPlatform: number
    digitalStoreLinks: number
    subscriptionServices: number
    regionRestrictions: number
    languageOptions: number
    notableVersionDiffs: number
    qualityOfLifeFeatures: number
    systemRequirements: number
    gameId: number
    _all: number
  }


  export type PlayabilityInfoMinAggregateInputType = {
    id?: true
    platform?: true
    originalPlatform?: true
    regionRestrictions?: true
    notableVersionDiffs?: true
    systemRequirements?: true
    gameId?: true
  }

  export type PlayabilityInfoMaxAggregateInputType = {
    id?: true
    platform?: true
    originalPlatform?: true
    regionRestrictions?: true
    notableVersionDiffs?: true
    systemRequirements?: true
    gameId?: true
  }

  export type PlayabilityInfoCountAggregateInputType = {
    id?: true
    platform?: true
    modernAvailability?: true
    originalPlatform?: true
    digitalStoreLinks?: true
    subscriptionServices?: true
    regionRestrictions?: true
    languageOptions?: true
    notableVersionDiffs?: true
    qualityOfLifeFeatures?: true
    systemRequirements?: true
    gameId?: true
    _all?: true
  }

  export type PlayabilityInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayabilityInfo to aggregate.
     */
    where?: PlayabilityInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayabilityInfos to fetch.
     */
    orderBy?: PlayabilityInfoOrderByWithRelationInput | PlayabilityInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayabilityInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayabilityInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayabilityInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayabilityInfos
    **/
    _count?: true | PlayabilityInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayabilityInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayabilityInfoMaxAggregateInputType
  }

  export type GetPlayabilityInfoAggregateType<T extends PlayabilityInfoAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayabilityInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayabilityInfo[P]>
      : GetScalarType<T[P], AggregatePlayabilityInfo[P]>
  }




  export type PlayabilityInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayabilityInfoWhereInput
    orderBy?: PlayabilityInfoOrderByWithAggregationInput | PlayabilityInfoOrderByWithAggregationInput[]
    by: PlayabilityInfoScalarFieldEnum[] | PlayabilityInfoScalarFieldEnum
    having?: PlayabilityInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayabilityInfoCountAggregateInputType | true
    _min?: PlayabilityInfoMinAggregateInputType
    _max?: PlayabilityInfoMaxAggregateInputType
  }

  export type PlayabilityInfoGroupByOutputType = {
    id: string
    platform: string
    modernAvailability: string[]
    originalPlatform: string | null
    digitalStoreLinks: string[]
    subscriptionServices: string[]
    regionRestrictions: string | null
    languageOptions: string[]
    notableVersionDiffs: string | null
    qualityOfLifeFeatures: string[]
    systemRequirements: string | null
    gameId: string
    _count: PlayabilityInfoCountAggregateOutputType | null
    _min: PlayabilityInfoMinAggregateOutputType | null
    _max: PlayabilityInfoMaxAggregateOutputType | null
  }

  type GetPlayabilityInfoGroupByPayload<T extends PlayabilityInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayabilityInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayabilityInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayabilityInfoGroupByOutputType[P]>
            : GetScalarType<T[P], PlayabilityInfoGroupByOutputType[P]>
        }
      >
    >


  export type PlayabilityInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    modernAvailability?: boolean
    originalPlatform?: boolean
    digitalStoreLinks?: boolean
    subscriptionServices?: boolean
    regionRestrictions?: boolean
    languageOptions?: boolean
    notableVersionDiffs?: boolean
    qualityOfLifeFeatures?: boolean
    systemRequirements?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playabilityInfo"]>

  export type PlayabilityInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    modernAvailability?: boolean
    originalPlatform?: boolean
    digitalStoreLinks?: boolean
    subscriptionServices?: boolean
    regionRestrictions?: boolean
    languageOptions?: boolean
    notableVersionDiffs?: boolean
    qualityOfLifeFeatures?: boolean
    systemRequirements?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playabilityInfo"]>

  export type PlayabilityInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    modernAvailability?: boolean
    originalPlatform?: boolean
    digitalStoreLinks?: boolean
    subscriptionServices?: boolean
    regionRestrictions?: boolean
    languageOptions?: boolean
    notableVersionDiffs?: boolean
    qualityOfLifeFeatures?: boolean
    systemRequirements?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playabilityInfo"]>

  export type PlayabilityInfoSelectScalar = {
    id?: boolean
    platform?: boolean
    modernAvailability?: boolean
    originalPlatform?: boolean
    digitalStoreLinks?: boolean
    subscriptionServices?: boolean
    regionRestrictions?: boolean
    languageOptions?: boolean
    notableVersionDiffs?: boolean
    qualityOfLifeFeatures?: boolean
    systemRequirements?: boolean
    gameId?: boolean
  }

  export type PlayabilityInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "platform" | "modernAvailability" | "originalPlatform" | "digitalStoreLinks" | "subscriptionServices" | "regionRestrictions" | "languageOptions" | "notableVersionDiffs" | "qualityOfLifeFeatures" | "systemRequirements" | "gameId", ExtArgs["result"]["playabilityInfo"]>
  export type PlayabilityInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type PlayabilityInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type PlayabilityInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $PlayabilityInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayabilityInfo"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      platform: string
      modernAvailability: string[]
      originalPlatform: string | null
      digitalStoreLinks: string[]
      subscriptionServices: string[]
      regionRestrictions: string | null
      languageOptions: string[]
      notableVersionDiffs: string | null
      qualityOfLifeFeatures: string[]
      systemRequirements: string | null
      gameId: string
    }, ExtArgs["result"]["playabilityInfo"]>
    composites: {}
  }

  type PlayabilityInfoGetPayload<S extends boolean | null | undefined | PlayabilityInfoDefaultArgs> = $Result.GetResult<Prisma.$PlayabilityInfoPayload, S>

  type PlayabilityInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayabilityInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayabilityInfoCountAggregateInputType | true
    }

  export interface PlayabilityInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayabilityInfo'], meta: { name: 'PlayabilityInfo' } }
    /**
     * Find zero or one PlayabilityInfo that matches the filter.
     * @param {PlayabilityInfoFindUniqueArgs} args - Arguments to find a PlayabilityInfo
     * @example
     * // Get one PlayabilityInfo
     * const playabilityInfo = await prisma.playabilityInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayabilityInfoFindUniqueArgs>(args: SelectSubset<T, PlayabilityInfoFindUniqueArgs<ExtArgs>>): Prisma__PlayabilityInfoClient<$Result.GetResult<Prisma.$PlayabilityInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayabilityInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayabilityInfoFindUniqueOrThrowArgs} args - Arguments to find a PlayabilityInfo
     * @example
     * // Get one PlayabilityInfo
     * const playabilityInfo = await prisma.playabilityInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayabilityInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayabilityInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayabilityInfoClient<$Result.GetResult<Prisma.$PlayabilityInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayabilityInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayabilityInfoFindFirstArgs} args - Arguments to find a PlayabilityInfo
     * @example
     * // Get one PlayabilityInfo
     * const playabilityInfo = await prisma.playabilityInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayabilityInfoFindFirstArgs>(args?: SelectSubset<T, PlayabilityInfoFindFirstArgs<ExtArgs>>): Prisma__PlayabilityInfoClient<$Result.GetResult<Prisma.$PlayabilityInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayabilityInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayabilityInfoFindFirstOrThrowArgs} args - Arguments to find a PlayabilityInfo
     * @example
     * // Get one PlayabilityInfo
     * const playabilityInfo = await prisma.playabilityInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayabilityInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayabilityInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayabilityInfoClient<$Result.GetResult<Prisma.$PlayabilityInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayabilityInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayabilityInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayabilityInfos
     * const playabilityInfos = await prisma.playabilityInfo.findMany()
     * 
     * // Get first 10 PlayabilityInfos
     * const playabilityInfos = await prisma.playabilityInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playabilityInfoWithIdOnly = await prisma.playabilityInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayabilityInfoFindManyArgs>(args?: SelectSubset<T, PlayabilityInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayabilityInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayabilityInfo.
     * @param {PlayabilityInfoCreateArgs} args - Arguments to create a PlayabilityInfo.
     * @example
     * // Create one PlayabilityInfo
     * const PlayabilityInfo = await prisma.playabilityInfo.create({
     *   data: {
     *     // ... data to create a PlayabilityInfo
     *   }
     * })
     * 
     */
    create<T extends PlayabilityInfoCreateArgs>(args: SelectSubset<T, PlayabilityInfoCreateArgs<ExtArgs>>): Prisma__PlayabilityInfoClient<$Result.GetResult<Prisma.$PlayabilityInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayabilityInfos.
     * @param {PlayabilityInfoCreateManyArgs} args - Arguments to create many PlayabilityInfos.
     * @example
     * // Create many PlayabilityInfos
     * const playabilityInfo = await prisma.playabilityInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayabilityInfoCreateManyArgs>(args?: SelectSubset<T, PlayabilityInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayabilityInfos and returns the data saved in the database.
     * @param {PlayabilityInfoCreateManyAndReturnArgs} args - Arguments to create many PlayabilityInfos.
     * @example
     * // Create many PlayabilityInfos
     * const playabilityInfo = await prisma.playabilityInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayabilityInfos and only return the `id`
     * const playabilityInfoWithIdOnly = await prisma.playabilityInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayabilityInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayabilityInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayabilityInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayabilityInfo.
     * @param {PlayabilityInfoDeleteArgs} args - Arguments to delete one PlayabilityInfo.
     * @example
     * // Delete one PlayabilityInfo
     * const PlayabilityInfo = await prisma.playabilityInfo.delete({
     *   where: {
     *     // ... filter to delete one PlayabilityInfo
     *   }
     * })
     * 
     */
    delete<T extends PlayabilityInfoDeleteArgs>(args: SelectSubset<T, PlayabilityInfoDeleteArgs<ExtArgs>>): Prisma__PlayabilityInfoClient<$Result.GetResult<Prisma.$PlayabilityInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayabilityInfo.
     * @param {PlayabilityInfoUpdateArgs} args - Arguments to update one PlayabilityInfo.
     * @example
     * // Update one PlayabilityInfo
     * const playabilityInfo = await prisma.playabilityInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayabilityInfoUpdateArgs>(args: SelectSubset<T, PlayabilityInfoUpdateArgs<ExtArgs>>): Prisma__PlayabilityInfoClient<$Result.GetResult<Prisma.$PlayabilityInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayabilityInfos.
     * @param {PlayabilityInfoDeleteManyArgs} args - Arguments to filter PlayabilityInfos to delete.
     * @example
     * // Delete a few PlayabilityInfos
     * const { count } = await prisma.playabilityInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayabilityInfoDeleteManyArgs>(args?: SelectSubset<T, PlayabilityInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayabilityInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayabilityInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayabilityInfos
     * const playabilityInfo = await prisma.playabilityInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayabilityInfoUpdateManyArgs>(args: SelectSubset<T, PlayabilityInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayabilityInfos and returns the data updated in the database.
     * @param {PlayabilityInfoUpdateManyAndReturnArgs} args - Arguments to update many PlayabilityInfos.
     * @example
     * // Update many PlayabilityInfos
     * const playabilityInfo = await prisma.playabilityInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayabilityInfos and only return the `id`
     * const playabilityInfoWithIdOnly = await prisma.playabilityInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayabilityInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayabilityInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayabilityInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayabilityInfo.
     * @param {PlayabilityInfoUpsertArgs} args - Arguments to update or create a PlayabilityInfo.
     * @example
     * // Update or create a PlayabilityInfo
     * const playabilityInfo = await prisma.playabilityInfo.upsert({
     *   create: {
     *     // ... data to create a PlayabilityInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayabilityInfo we want to update
     *   }
     * })
     */
    upsert<T extends PlayabilityInfoUpsertArgs>(args: SelectSubset<T, PlayabilityInfoUpsertArgs<ExtArgs>>): Prisma__PlayabilityInfoClient<$Result.GetResult<Prisma.$PlayabilityInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayabilityInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayabilityInfoCountArgs} args - Arguments to filter PlayabilityInfos to count.
     * @example
     * // Count the number of PlayabilityInfos
     * const count = await prisma.playabilityInfo.count({
     *   where: {
     *     // ... the filter for the PlayabilityInfos we want to count
     *   }
     * })
    **/
    count<T extends PlayabilityInfoCountArgs>(
      args?: Subset<T, PlayabilityInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayabilityInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayabilityInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayabilityInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayabilityInfoAggregateArgs>(args: Subset<T, PlayabilityInfoAggregateArgs>): Prisma.PrismaPromise<GetPlayabilityInfoAggregateType<T>>

    /**
     * Group by PlayabilityInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayabilityInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayabilityInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayabilityInfoGroupByArgs['orderBy'] }
        : { orderBy?: PlayabilityInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayabilityInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayabilityInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayabilityInfo model
   */
  readonly fields: PlayabilityInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayabilityInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayabilityInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayabilityInfo model
   */
  interface PlayabilityInfoFieldRefs {
    readonly id: FieldRef<"PlayabilityInfo", 'String'>
    readonly platform: FieldRef<"PlayabilityInfo", 'String'>
    readonly modernAvailability: FieldRef<"PlayabilityInfo", 'String[]'>
    readonly originalPlatform: FieldRef<"PlayabilityInfo", 'String'>
    readonly digitalStoreLinks: FieldRef<"PlayabilityInfo", 'String[]'>
    readonly subscriptionServices: FieldRef<"PlayabilityInfo", 'String[]'>
    readonly regionRestrictions: FieldRef<"PlayabilityInfo", 'String'>
    readonly languageOptions: FieldRef<"PlayabilityInfo", 'String[]'>
    readonly notableVersionDiffs: FieldRef<"PlayabilityInfo", 'String'>
    readonly qualityOfLifeFeatures: FieldRef<"PlayabilityInfo", 'String[]'>
    readonly systemRequirements: FieldRef<"PlayabilityInfo", 'String'>
    readonly gameId: FieldRef<"PlayabilityInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PlayabilityInfo findUnique
   */
  export type PlayabilityInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayabilityInfo
     */
    select?: PlayabilityInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayabilityInfo
     */
    omit?: PlayabilityInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayabilityInfoInclude<ExtArgs> | null
    /**
     * Filter, which PlayabilityInfo to fetch.
     */
    where: PlayabilityInfoWhereUniqueInput
  }

  /**
   * PlayabilityInfo findUniqueOrThrow
   */
  export type PlayabilityInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayabilityInfo
     */
    select?: PlayabilityInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayabilityInfo
     */
    omit?: PlayabilityInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayabilityInfoInclude<ExtArgs> | null
    /**
     * Filter, which PlayabilityInfo to fetch.
     */
    where: PlayabilityInfoWhereUniqueInput
  }

  /**
   * PlayabilityInfo findFirst
   */
  export type PlayabilityInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayabilityInfo
     */
    select?: PlayabilityInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayabilityInfo
     */
    omit?: PlayabilityInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayabilityInfoInclude<ExtArgs> | null
    /**
     * Filter, which PlayabilityInfo to fetch.
     */
    where?: PlayabilityInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayabilityInfos to fetch.
     */
    orderBy?: PlayabilityInfoOrderByWithRelationInput | PlayabilityInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayabilityInfos.
     */
    cursor?: PlayabilityInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayabilityInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayabilityInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayabilityInfos.
     */
    distinct?: PlayabilityInfoScalarFieldEnum | PlayabilityInfoScalarFieldEnum[]
  }

  /**
   * PlayabilityInfo findFirstOrThrow
   */
  export type PlayabilityInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayabilityInfo
     */
    select?: PlayabilityInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayabilityInfo
     */
    omit?: PlayabilityInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayabilityInfoInclude<ExtArgs> | null
    /**
     * Filter, which PlayabilityInfo to fetch.
     */
    where?: PlayabilityInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayabilityInfos to fetch.
     */
    orderBy?: PlayabilityInfoOrderByWithRelationInput | PlayabilityInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayabilityInfos.
     */
    cursor?: PlayabilityInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayabilityInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayabilityInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayabilityInfos.
     */
    distinct?: PlayabilityInfoScalarFieldEnum | PlayabilityInfoScalarFieldEnum[]
  }

  /**
   * PlayabilityInfo findMany
   */
  export type PlayabilityInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayabilityInfo
     */
    select?: PlayabilityInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayabilityInfo
     */
    omit?: PlayabilityInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayabilityInfoInclude<ExtArgs> | null
    /**
     * Filter, which PlayabilityInfos to fetch.
     */
    where?: PlayabilityInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayabilityInfos to fetch.
     */
    orderBy?: PlayabilityInfoOrderByWithRelationInput | PlayabilityInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayabilityInfos.
     */
    cursor?: PlayabilityInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayabilityInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayabilityInfos.
     */
    skip?: number
    distinct?: PlayabilityInfoScalarFieldEnum | PlayabilityInfoScalarFieldEnum[]
  }

  /**
   * PlayabilityInfo create
   */
  export type PlayabilityInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayabilityInfo
     */
    select?: PlayabilityInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayabilityInfo
     */
    omit?: PlayabilityInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayabilityInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayabilityInfo.
     */
    data: XOR<PlayabilityInfoCreateInput, PlayabilityInfoUncheckedCreateInput>
  }

  /**
   * PlayabilityInfo createMany
   */
  export type PlayabilityInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayabilityInfos.
     */
    data: PlayabilityInfoCreateManyInput | PlayabilityInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayabilityInfo createManyAndReturn
   */
  export type PlayabilityInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayabilityInfo
     */
    select?: PlayabilityInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayabilityInfo
     */
    omit?: PlayabilityInfoOmit<ExtArgs> | null
    /**
     * The data used to create many PlayabilityInfos.
     */
    data: PlayabilityInfoCreateManyInput | PlayabilityInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayabilityInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayabilityInfo update
   */
  export type PlayabilityInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayabilityInfo
     */
    select?: PlayabilityInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayabilityInfo
     */
    omit?: PlayabilityInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayabilityInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayabilityInfo.
     */
    data: XOR<PlayabilityInfoUpdateInput, PlayabilityInfoUncheckedUpdateInput>
    /**
     * Choose, which PlayabilityInfo to update.
     */
    where: PlayabilityInfoWhereUniqueInput
  }

  /**
   * PlayabilityInfo updateMany
   */
  export type PlayabilityInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayabilityInfos.
     */
    data: XOR<PlayabilityInfoUpdateManyMutationInput, PlayabilityInfoUncheckedUpdateManyInput>
    /**
     * Filter which PlayabilityInfos to update
     */
    where?: PlayabilityInfoWhereInput
    /**
     * Limit how many PlayabilityInfos to update.
     */
    limit?: number
  }

  /**
   * PlayabilityInfo updateManyAndReturn
   */
  export type PlayabilityInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayabilityInfo
     */
    select?: PlayabilityInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayabilityInfo
     */
    omit?: PlayabilityInfoOmit<ExtArgs> | null
    /**
     * The data used to update PlayabilityInfos.
     */
    data: XOR<PlayabilityInfoUpdateManyMutationInput, PlayabilityInfoUncheckedUpdateManyInput>
    /**
     * Filter which PlayabilityInfos to update
     */
    where?: PlayabilityInfoWhereInput
    /**
     * Limit how many PlayabilityInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayabilityInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayabilityInfo upsert
   */
  export type PlayabilityInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayabilityInfo
     */
    select?: PlayabilityInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayabilityInfo
     */
    omit?: PlayabilityInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayabilityInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayabilityInfo to update in case it exists.
     */
    where: PlayabilityInfoWhereUniqueInput
    /**
     * In case the PlayabilityInfo found by the `where` argument doesn't exist, create a new PlayabilityInfo with this data.
     */
    create: XOR<PlayabilityInfoCreateInput, PlayabilityInfoUncheckedCreateInput>
    /**
     * In case the PlayabilityInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayabilityInfoUpdateInput, PlayabilityInfoUncheckedUpdateInput>
  }

  /**
   * PlayabilityInfo delete
   */
  export type PlayabilityInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayabilityInfo
     */
    select?: PlayabilityInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayabilityInfo
     */
    omit?: PlayabilityInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayabilityInfoInclude<ExtArgs> | null
    /**
     * Filter which PlayabilityInfo to delete.
     */
    where: PlayabilityInfoWhereUniqueInput
  }

  /**
   * PlayabilityInfo deleteMany
   */
  export type PlayabilityInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayabilityInfos to delete
     */
    where?: PlayabilityInfoWhereInput
    /**
     * Limit how many PlayabilityInfos to delete.
     */
    limit?: number
  }

  /**
   * PlayabilityInfo without action
   */
  export type PlayabilityInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayabilityInfo
     */
    select?: PlayabilityInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayabilityInfo
     */
    omit?: PlayabilityInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayabilityInfoInclude<ExtArgs> | null
  }


  /**
   * Model ResourceLink
   */

  export type AggregateResourceLink = {
    _count: ResourceLinkCountAggregateOutputType | null
    _avg: ResourceLinkAvgAggregateOutputType | null
    _sum: ResourceLinkSumAggregateOutputType | null
    _min: ResourceLinkMinAggregateOutputType | null
    _max: ResourceLinkMaxAggregateOutputType | null
  }

  export type ResourceLinkAvgAggregateOutputType = {
    communityRating: number | null
  }

  export type ResourceLinkSumAggregateOutputType = {
    communityRating: number | null
  }

  export type ResourceLinkMinAggregateOutputType = {
    id: string | null
    type: string | null
    url: string | null
    title: string | null
    sourceCreator: string | null
    description: string | null
    communityRating: number | null
    lastVerifiedAt: Date | null
    gameId: string | null
  }

  export type ResourceLinkMaxAggregateOutputType = {
    id: string | null
    type: string | null
    url: string | null
    title: string | null
    sourceCreator: string | null
    description: string | null
    communityRating: number | null
    lastVerifiedAt: Date | null
    gameId: string | null
  }

  export type ResourceLinkCountAggregateOutputType = {
    id: number
    type: number
    url: number
    title: number
    sourceCreator: number
    description: number
    communityRating: number
    lastVerifiedAt: number
    gameId: number
    _all: number
  }


  export type ResourceLinkAvgAggregateInputType = {
    communityRating?: true
  }

  export type ResourceLinkSumAggregateInputType = {
    communityRating?: true
  }

  export type ResourceLinkMinAggregateInputType = {
    id?: true
    type?: true
    url?: true
    title?: true
    sourceCreator?: true
    description?: true
    communityRating?: true
    lastVerifiedAt?: true
    gameId?: true
  }

  export type ResourceLinkMaxAggregateInputType = {
    id?: true
    type?: true
    url?: true
    title?: true
    sourceCreator?: true
    description?: true
    communityRating?: true
    lastVerifiedAt?: true
    gameId?: true
  }

  export type ResourceLinkCountAggregateInputType = {
    id?: true
    type?: true
    url?: true
    title?: true
    sourceCreator?: true
    description?: true
    communityRating?: true
    lastVerifiedAt?: true
    gameId?: true
    _all?: true
  }

  export type ResourceLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceLink to aggregate.
     */
    where?: ResourceLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceLinks to fetch.
     */
    orderBy?: ResourceLinkOrderByWithRelationInput | ResourceLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResourceLinks
    **/
    _count?: true | ResourceLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResourceLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResourceLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceLinkMaxAggregateInputType
  }

  export type GetResourceLinkAggregateType<T extends ResourceLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateResourceLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResourceLink[P]>
      : GetScalarType<T[P], AggregateResourceLink[P]>
  }




  export type ResourceLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceLinkWhereInput
    orderBy?: ResourceLinkOrderByWithAggregationInput | ResourceLinkOrderByWithAggregationInput[]
    by: ResourceLinkScalarFieldEnum[] | ResourceLinkScalarFieldEnum
    having?: ResourceLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceLinkCountAggregateInputType | true
    _avg?: ResourceLinkAvgAggregateInputType
    _sum?: ResourceLinkSumAggregateInputType
    _min?: ResourceLinkMinAggregateInputType
    _max?: ResourceLinkMaxAggregateInputType
  }

  export type ResourceLinkGroupByOutputType = {
    id: string
    type: string
    url: string
    title: string
    sourceCreator: string | null
    description: string | null
    communityRating: number | null
    lastVerifiedAt: Date | null
    gameId: string
    _count: ResourceLinkCountAggregateOutputType | null
    _avg: ResourceLinkAvgAggregateOutputType | null
    _sum: ResourceLinkSumAggregateOutputType | null
    _min: ResourceLinkMinAggregateOutputType | null
    _max: ResourceLinkMaxAggregateOutputType | null
  }

  type GetResourceLinkGroupByPayload<T extends ResourceLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceLinkGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceLinkGroupByOutputType[P]>
        }
      >
    >


  export type ResourceLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    url?: boolean
    title?: boolean
    sourceCreator?: boolean
    description?: boolean
    communityRating?: boolean
    lastVerifiedAt?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resourceLink"]>

  export type ResourceLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    url?: boolean
    title?: boolean
    sourceCreator?: boolean
    description?: boolean
    communityRating?: boolean
    lastVerifiedAt?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resourceLink"]>

  export type ResourceLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    url?: boolean
    title?: boolean
    sourceCreator?: boolean
    description?: boolean
    communityRating?: boolean
    lastVerifiedAt?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resourceLink"]>

  export type ResourceLinkSelectScalar = {
    id?: boolean
    type?: boolean
    url?: boolean
    title?: boolean
    sourceCreator?: boolean
    description?: boolean
    communityRating?: boolean
    lastVerifiedAt?: boolean
    gameId?: boolean
  }

  export type ResourceLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "url" | "title" | "sourceCreator" | "description" | "communityRating" | "lastVerifiedAt" | "gameId", ExtArgs["result"]["resourceLink"]>
  export type ResourceLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type ResourceLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type ResourceLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $ResourceLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResourceLink"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      url: string
      title: string
      sourceCreator: string | null
      description: string | null
      communityRating: number | null
      lastVerifiedAt: Date | null
      gameId: string
    }, ExtArgs["result"]["resourceLink"]>
    composites: {}
  }

  type ResourceLinkGetPayload<S extends boolean | null | undefined | ResourceLinkDefaultArgs> = $Result.GetResult<Prisma.$ResourceLinkPayload, S>

  type ResourceLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResourceLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResourceLinkCountAggregateInputType | true
    }

  export interface ResourceLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResourceLink'], meta: { name: 'ResourceLink' } }
    /**
     * Find zero or one ResourceLink that matches the filter.
     * @param {ResourceLinkFindUniqueArgs} args - Arguments to find a ResourceLink
     * @example
     * // Get one ResourceLink
     * const resourceLink = await prisma.resourceLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResourceLinkFindUniqueArgs>(args: SelectSubset<T, ResourceLinkFindUniqueArgs<ExtArgs>>): Prisma__ResourceLinkClient<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResourceLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResourceLinkFindUniqueOrThrowArgs} args - Arguments to find a ResourceLink
     * @example
     * // Get one ResourceLink
     * const resourceLink = await prisma.resourceLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResourceLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, ResourceLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResourceLinkClient<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResourceLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceLinkFindFirstArgs} args - Arguments to find a ResourceLink
     * @example
     * // Get one ResourceLink
     * const resourceLink = await prisma.resourceLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResourceLinkFindFirstArgs>(args?: SelectSubset<T, ResourceLinkFindFirstArgs<ExtArgs>>): Prisma__ResourceLinkClient<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResourceLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceLinkFindFirstOrThrowArgs} args - Arguments to find a ResourceLink
     * @example
     * // Get one ResourceLink
     * const resourceLink = await prisma.resourceLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResourceLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, ResourceLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResourceLinkClient<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResourceLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResourceLinks
     * const resourceLinks = await prisma.resourceLink.findMany()
     * 
     * // Get first 10 ResourceLinks
     * const resourceLinks = await prisma.resourceLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceLinkWithIdOnly = await prisma.resourceLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResourceLinkFindManyArgs>(args?: SelectSubset<T, ResourceLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResourceLink.
     * @param {ResourceLinkCreateArgs} args - Arguments to create a ResourceLink.
     * @example
     * // Create one ResourceLink
     * const ResourceLink = await prisma.resourceLink.create({
     *   data: {
     *     // ... data to create a ResourceLink
     *   }
     * })
     * 
     */
    create<T extends ResourceLinkCreateArgs>(args: SelectSubset<T, ResourceLinkCreateArgs<ExtArgs>>): Prisma__ResourceLinkClient<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResourceLinks.
     * @param {ResourceLinkCreateManyArgs} args - Arguments to create many ResourceLinks.
     * @example
     * // Create many ResourceLinks
     * const resourceLink = await prisma.resourceLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResourceLinkCreateManyArgs>(args?: SelectSubset<T, ResourceLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResourceLinks and returns the data saved in the database.
     * @param {ResourceLinkCreateManyAndReturnArgs} args - Arguments to create many ResourceLinks.
     * @example
     * // Create many ResourceLinks
     * const resourceLink = await prisma.resourceLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResourceLinks and only return the `id`
     * const resourceLinkWithIdOnly = await prisma.resourceLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResourceLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, ResourceLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResourceLink.
     * @param {ResourceLinkDeleteArgs} args - Arguments to delete one ResourceLink.
     * @example
     * // Delete one ResourceLink
     * const ResourceLink = await prisma.resourceLink.delete({
     *   where: {
     *     // ... filter to delete one ResourceLink
     *   }
     * })
     * 
     */
    delete<T extends ResourceLinkDeleteArgs>(args: SelectSubset<T, ResourceLinkDeleteArgs<ExtArgs>>): Prisma__ResourceLinkClient<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResourceLink.
     * @param {ResourceLinkUpdateArgs} args - Arguments to update one ResourceLink.
     * @example
     * // Update one ResourceLink
     * const resourceLink = await prisma.resourceLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResourceLinkUpdateArgs>(args: SelectSubset<T, ResourceLinkUpdateArgs<ExtArgs>>): Prisma__ResourceLinkClient<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResourceLinks.
     * @param {ResourceLinkDeleteManyArgs} args - Arguments to filter ResourceLinks to delete.
     * @example
     * // Delete a few ResourceLinks
     * const { count } = await prisma.resourceLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResourceLinkDeleteManyArgs>(args?: SelectSubset<T, ResourceLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResourceLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResourceLinks
     * const resourceLink = await prisma.resourceLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResourceLinkUpdateManyArgs>(args: SelectSubset<T, ResourceLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResourceLinks and returns the data updated in the database.
     * @param {ResourceLinkUpdateManyAndReturnArgs} args - Arguments to update many ResourceLinks.
     * @example
     * // Update many ResourceLinks
     * const resourceLink = await prisma.resourceLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResourceLinks and only return the `id`
     * const resourceLinkWithIdOnly = await prisma.resourceLink.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResourceLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, ResourceLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResourceLink.
     * @param {ResourceLinkUpsertArgs} args - Arguments to update or create a ResourceLink.
     * @example
     * // Update or create a ResourceLink
     * const resourceLink = await prisma.resourceLink.upsert({
     *   create: {
     *     // ... data to create a ResourceLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResourceLink we want to update
     *   }
     * })
     */
    upsert<T extends ResourceLinkUpsertArgs>(args: SelectSubset<T, ResourceLinkUpsertArgs<ExtArgs>>): Prisma__ResourceLinkClient<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResourceLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceLinkCountArgs} args - Arguments to filter ResourceLinks to count.
     * @example
     * // Count the number of ResourceLinks
     * const count = await prisma.resourceLink.count({
     *   where: {
     *     // ... the filter for the ResourceLinks we want to count
     *   }
     * })
    **/
    count<T extends ResourceLinkCountArgs>(
      args?: Subset<T, ResourceLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResourceLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResourceLinkAggregateArgs>(args: Subset<T, ResourceLinkAggregateArgs>): Prisma.PrismaPromise<GetResourceLinkAggregateType<T>>

    /**
     * Group by ResourceLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResourceLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceLinkGroupByArgs['orderBy'] }
        : { orderBy?: ResourceLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResourceLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResourceLink model
   */
  readonly fields: ResourceLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResourceLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResourceLink model
   */
  interface ResourceLinkFieldRefs {
    readonly id: FieldRef<"ResourceLink", 'String'>
    readonly type: FieldRef<"ResourceLink", 'String'>
    readonly url: FieldRef<"ResourceLink", 'String'>
    readonly title: FieldRef<"ResourceLink", 'String'>
    readonly sourceCreator: FieldRef<"ResourceLink", 'String'>
    readonly description: FieldRef<"ResourceLink", 'String'>
    readonly communityRating: FieldRef<"ResourceLink", 'Float'>
    readonly lastVerifiedAt: FieldRef<"ResourceLink", 'DateTime'>
    readonly gameId: FieldRef<"ResourceLink", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ResourceLink findUnique
   */
  export type ResourceLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkInclude<ExtArgs> | null
    /**
     * Filter, which ResourceLink to fetch.
     */
    where: ResourceLinkWhereUniqueInput
  }

  /**
   * ResourceLink findUniqueOrThrow
   */
  export type ResourceLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkInclude<ExtArgs> | null
    /**
     * Filter, which ResourceLink to fetch.
     */
    where: ResourceLinkWhereUniqueInput
  }

  /**
   * ResourceLink findFirst
   */
  export type ResourceLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkInclude<ExtArgs> | null
    /**
     * Filter, which ResourceLink to fetch.
     */
    where?: ResourceLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceLinks to fetch.
     */
    orderBy?: ResourceLinkOrderByWithRelationInput | ResourceLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceLinks.
     */
    cursor?: ResourceLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceLinks.
     */
    distinct?: ResourceLinkScalarFieldEnum | ResourceLinkScalarFieldEnum[]
  }

  /**
   * ResourceLink findFirstOrThrow
   */
  export type ResourceLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkInclude<ExtArgs> | null
    /**
     * Filter, which ResourceLink to fetch.
     */
    where?: ResourceLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceLinks to fetch.
     */
    orderBy?: ResourceLinkOrderByWithRelationInput | ResourceLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceLinks.
     */
    cursor?: ResourceLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceLinks.
     */
    distinct?: ResourceLinkScalarFieldEnum | ResourceLinkScalarFieldEnum[]
  }

  /**
   * ResourceLink findMany
   */
  export type ResourceLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkInclude<ExtArgs> | null
    /**
     * Filter, which ResourceLinks to fetch.
     */
    where?: ResourceLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceLinks to fetch.
     */
    orderBy?: ResourceLinkOrderByWithRelationInput | ResourceLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResourceLinks.
     */
    cursor?: ResourceLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceLinks.
     */
    skip?: number
    distinct?: ResourceLinkScalarFieldEnum | ResourceLinkScalarFieldEnum[]
  }

  /**
   * ResourceLink create
   */
  export type ResourceLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a ResourceLink.
     */
    data: XOR<ResourceLinkCreateInput, ResourceLinkUncheckedCreateInput>
  }

  /**
   * ResourceLink createMany
   */
  export type ResourceLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResourceLinks.
     */
    data: ResourceLinkCreateManyInput | ResourceLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResourceLink createManyAndReturn
   */
  export type ResourceLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * The data used to create many ResourceLinks.
     */
    data: ResourceLinkCreateManyInput | ResourceLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResourceLink update
   */
  export type ResourceLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a ResourceLink.
     */
    data: XOR<ResourceLinkUpdateInput, ResourceLinkUncheckedUpdateInput>
    /**
     * Choose, which ResourceLink to update.
     */
    where: ResourceLinkWhereUniqueInput
  }

  /**
   * ResourceLink updateMany
   */
  export type ResourceLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResourceLinks.
     */
    data: XOR<ResourceLinkUpdateManyMutationInput, ResourceLinkUncheckedUpdateManyInput>
    /**
     * Filter which ResourceLinks to update
     */
    where?: ResourceLinkWhereInput
    /**
     * Limit how many ResourceLinks to update.
     */
    limit?: number
  }

  /**
   * ResourceLink updateManyAndReturn
   */
  export type ResourceLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * The data used to update ResourceLinks.
     */
    data: XOR<ResourceLinkUpdateManyMutationInput, ResourceLinkUncheckedUpdateManyInput>
    /**
     * Filter which ResourceLinks to update
     */
    where?: ResourceLinkWhereInput
    /**
     * Limit how many ResourceLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResourceLink upsert
   */
  export type ResourceLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the ResourceLink to update in case it exists.
     */
    where: ResourceLinkWhereUniqueInput
    /**
     * In case the ResourceLink found by the `where` argument doesn't exist, create a new ResourceLink with this data.
     */
    create: XOR<ResourceLinkCreateInput, ResourceLinkUncheckedCreateInput>
    /**
     * In case the ResourceLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceLinkUpdateInput, ResourceLinkUncheckedUpdateInput>
  }

  /**
   * ResourceLink delete
   */
  export type ResourceLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkInclude<ExtArgs> | null
    /**
     * Filter which ResourceLink to delete.
     */
    where: ResourceLinkWhereUniqueInput
  }

  /**
   * ResourceLink deleteMany
   */
  export type ResourceLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceLinks to delete
     */
    where?: ResourceLinkWhereInput
    /**
     * Limit how many ResourceLinks to delete.
     */
    limit?: number
  }

  /**
   * ResourceLink without action
   */
  export type ResourceLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkInclude<ExtArgs> | null
  }


  /**
   * Model UserGameEntry
   */

  export type AggregateUserGameEntry = {
    _count: UserGameEntryCountAggregateOutputType | null
    _avg: UserGameEntryAvgAggregateOutputType | null
    _sum: UserGameEntrySumAggregateOutputType | null
    _min: UserGameEntryMinAggregateOutputType | null
    _max: UserGameEntryMaxAggregateOutputType | null
  }

  export type UserGameEntryAvgAggregateOutputType = {
    rating: number | null
  }

  export type UserGameEntrySumAggregateOutputType = {
    rating: number | null
  }

  export type UserGameEntryMinAggregateOutputType = {
    id: string | null
    status: $Enums.GameStatus | null
    rating: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    gameId: string | null
  }

  export type UserGameEntryMaxAggregateOutputType = {
    id: string | null
    status: $Enums.GameStatus | null
    rating: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    gameId: string | null
  }

  export type UserGameEntryCountAggregateOutputType = {
    id: number
    status: number
    rating: number
    notes: number
    createdAt: number
    updatedAt: number
    userId: number
    gameId: number
    _all: number
  }


  export type UserGameEntryAvgAggregateInputType = {
    rating?: true
  }

  export type UserGameEntrySumAggregateInputType = {
    rating?: true
  }

  export type UserGameEntryMinAggregateInputType = {
    id?: true
    status?: true
    rating?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    gameId?: true
  }

  export type UserGameEntryMaxAggregateInputType = {
    id?: true
    status?: true
    rating?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    gameId?: true
  }

  export type UserGameEntryCountAggregateInputType = {
    id?: true
    status?: true
    rating?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    gameId?: true
    _all?: true
  }

  export type UserGameEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGameEntry to aggregate.
     */
    where?: UserGameEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGameEntries to fetch.
     */
    orderBy?: UserGameEntryOrderByWithRelationInput | UserGameEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGameEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGameEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGameEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGameEntries
    **/
    _count?: true | UserGameEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserGameEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserGameEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGameEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGameEntryMaxAggregateInputType
  }

  export type GetUserGameEntryAggregateType<T extends UserGameEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGameEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGameEntry[P]>
      : GetScalarType<T[P], AggregateUserGameEntry[P]>
  }




  export type UserGameEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGameEntryWhereInput
    orderBy?: UserGameEntryOrderByWithAggregationInput | UserGameEntryOrderByWithAggregationInput[]
    by: UserGameEntryScalarFieldEnum[] | UserGameEntryScalarFieldEnum
    having?: UserGameEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGameEntryCountAggregateInputType | true
    _avg?: UserGameEntryAvgAggregateInputType
    _sum?: UserGameEntrySumAggregateInputType
    _min?: UserGameEntryMinAggregateInputType
    _max?: UserGameEntryMaxAggregateInputType
  }

  export type UserGameEntryGroupByOutputType = {
    id: string
    status: $Enums.GameStatus
    rating: number | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    gameId: string
    _count: UserGameEntryCountAggregateOutputType | null
    _avg: UserGameEntryAvgAggregateOutputType | null
    _sum: UserGameEntrySumAggregateOutputType | null
    _min: UserGameEntryMinAggregateOutputType | null
    _max: UserGameEntryMaxAggregateOutputType | null
  }

  type GetUserGameEntryGroupByPayload<T extends UserGameEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGameEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGameEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGameEntryGroupByOutputType[P]>
            : GetScalarType<T[P], UserGameEntryGroupByOutputType[P]>
        }
      >
    >


  export type UserGameEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    rating?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    gameId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGameEntry"]>

  export type UserGameEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    rating?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    gameId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGameEntry"]>

  export type UserGameEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    rating?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    gameId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGameEntry"]>

  export type UserGameEntrySelectScalar = {
    id?: boolean
    status?: boolean
    rating?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    gameId?: boolean
  }

  export type UserGameEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "rating" | "notes" | "createdAt" | "updatedAt" | "userId" | "gameId", ExtArgs["result"]["userGameEntry"]>
  export type UserGameEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type UserGameEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type UserGameEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $UserGameEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserGameEntry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.GameStatus
      rating: number | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
      gameId: string
    }, ExtArgs["result"]["userGameEntry"]>
    composites: {}
  }

  type UserGameEntryGetPayload<S extends boolean | null | undefined | UserGameEntryDefaultArgs> = $Result.GetResult<Prisma.$UserGameEntryPayload, S>

  type UserGameEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserGameEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserGameEntryCountAggregateInputType | true
    }

  export interface UserGameEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGameEntry'], meta: { name: 'UserGameEntry' } }
    /**
     * Find zero or one UserGameEntry that matches the filter.
     * @param {UserGameEntryFindUniqueArgs} args - Arguments to find a UserGameEntry
     * @example
     * // Get one UserGameEntry
     * const userGameEntry = await prisma.userGameEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserGameEntryFindUniqueArgs>(args: SelectSubset<T, UserGameEntryFindUniqueArgs<ExtArgs>>): Prisma__UserGameEntryClient<$Result.GetResult<Prisma.$UserGameEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserGameEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserGameEntryFindUniqueOrThrowArgs} args - Arguments to find a UserGameEntry
     * @example
     * // Get one UserGameEntry
     * const userGameEntry = await prisma.userGameEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserGameEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, UserGameEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserGameEntryClient<$Result.GetResult<Prisma.$UserGameEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGameEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameEntryFindFirstArgs} args - Arguments to find a UserGameEntry
     * @example
     * // Get one UserGameEntry
     * const userGameEntry = await prisma.userGameEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserGameEntryFindFirstArgs>(args?: SelectSubset<T, UserGameEntryFindFirstArgs<ExtArgs>>): Prisma__UserGameEntryClient<$Result.GetResult<Prisma.$UserGameEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGameEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameEntryFindFirstOrThrowArgs} args - Arguments to find a UserGameEntry
     * @example
     * // Get one UserGameEntry
     * const userGameEntry = await prisma.userGameEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserGameEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, UserGameEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserGameEntryClient<$Result.GetResult<Prisma.$UserGameEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserGameEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGameEntries
     * const userGameEntries = await prisma.userGameEntry.findMany()
     * 
     * // Get first 10 UserGameEntries
     * const userGameEntries = await prisma.userGameEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userGameEntryWithIdOnly = await prisma.userGameEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserGameEntryFindManyArgs>(args?: SelectSubset<T, UserGameEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGameEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserGameEntry.
     * @param {UserGameEntryCreateArgs} args - Arguments to create a UserGameEntry.
     * @example
     * // Create one UserGameEntry
     * const UserGameEntry = await prisma.userGameEntry.create({
     *   data: {
     *     // ... data to create a UserGameEntry
     *   }
     * })
     * 
     */
    create<T extends UserGameEntryCreateArgs>(args: SelectSubset<T, UserGameEntryCreateArgs<ExtArgs>>): Prisma__UserGameEntryClient<$Result.GetResult<Prisma.$UserGameEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserGameEntries.
     * @param {UserGameEntryCreateManyArgs} args - Arguments to create many UserGameEntries.
     * @example
     * // Create many UserGameEntries
     * const userGameEntry = await prisma.userGameEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserGameEntryCreateManyArgs>(args?: SelectSubset<T, UserGameEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserGameEntries and returns the data saved in the database.
     * @param {UserGameEntryCreateManyAndReturnArgs} args - Arguments to create many UserGameEntries.
     * @example
     * // Create many UserGameEntries
     * const userGameEntry = await prisma.userGameEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserGameEntries and only return the `id`
     * const userGameEntryWithIdOnly = await prisma.userGameEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserGameEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, UserGameEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGameEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserGameEntry.
     * @param {UserGameEntryDeleteArgs} args - Arguments to delete one UserGameEntry.
     * @example
     * // Delete one UserGameEntry
     * const UserGameEntry = await prisma.userGameEntry.delete({
     *   where: {
     *     // ... filter to delete one UserGameEntry
     *   }
     * })
     * 
     */
    delete<T extends UserGameEntryDeleteArgs>(args: SelectSubset<T, UserGameEntryDeleteArgs<ExtArgs>>): Prisma__UserGameEntryClient<$Result.GetResult<Prisma.$UserGameEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserGameEntry.
     * @param {UserGameEntryUpdateArgs} args - Arguments to update one UserGameEntry.
     * @example
     * // Update one UserGameEntry
     * const userGameEntry = await prisma.userGameEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserGameEntryUpdateArgs>(args: SelectSubset<T, UserGameEntryUpdateArgs<ExtArgs>>): Prisma__UserGameEntryClient<$Result.GetResult<Prisma.$UserGameEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserGameEntries.
     * @param {UserGameEntryDeleteManyArgs} args - Arguments to filter UserGameEntries to delete.
     * @example
     * // Delete a few UserGameEntries
     * const { count } = await prisma.userGameEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserGameEntryDeleteManyArgs>(args?: SelectSubset<T, UserGameEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGameEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGameEntries
     * const userGameEntry = await prisma.userGameEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserGameEntryUpdateManyArgs>(args: SelectSubset<T, UserGameEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGameEntries and returns the data updated in the database.
     * @param {UserGameEntryUpdateManyAndReturnArgs} args - Arguments to update many UserGameEntries.
     * @example
     * // Update many UserGameEntries
     * const userGameEntry = await prisma.userGameEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserGameEntries and only return the `id`
     * const userGameEntryWithIdOnly = await prisma.userGameEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserGameEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, UserGameEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGameEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserGameEntry.
     * @param {UserGameEntryUpsertArgs} args - Arguments to update or create a UserGameEntry.
     * @example
     * // Update or create a UserGameEntry
     * const userGameEntry = await prisma.userGameEntry.upsert({
     *   create: {
     *     // ... data to create a UserGameEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGameEntry we want to update
     *   }
     * })
     */
    upsert<T extends UserGameEntryUpsertArgs>(args: SelectSubset<T, UserGameEntryUpsertArgs<ExtArgs>>): Prisma__UserGameEntryClient<$Result.GetResult<Prisma.$UserGameEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserGameEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameEntryCountArgs} args - Arguments to filter UserGameEntries to count.
     * @example
     * // Count the number of UserGameEntries
     * const count = await prisma.userGameEntry.count({
     *   where: {
     *     // ... the filter for the UserGameEntries we want to count
     *   }
     * })
    **/
    count<T extends UserGameEntryCountArgs>(
      args?: Subset<T, UserGameEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGameEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGameEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserGameEntryAggregateArgs>(args: Subset<T, UserGameEntryAggregateArgs>): Prisma.PrismaPromise<GetUserGameEntryAggregateType<T>>

    /**
     * Group by UserGameEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGameEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGameEntryGroupByArgs['orderBy'] }
        : { orderBy?: UserGameEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGameEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGameEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGameEntry model
   */
  readonly fields: UserGameEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGameEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGameEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserGameEntry model
   */
  interface UserGameEntryFieldRefs {
    readonly id: FieldRef<"UserGameEntry", 'String'>
    readonly status: FieldRef<"UserGameEntry", 'GameStatus'>
    readonly rating: FieldRef<"UserGameEntry", 'Int'>
    readonly notes: FieldRef<"UserGameEntry", 'String'>
    readonly createdAt: FieldRef<"UserGameEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"UserGameEntry", 'DateTime'>
    readonly userId: FieldRef<"UserGameEntry", 'String'>
    readonly gameId: FieldRef<"UserGameEntry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserGameEntry findUnique
   */
  export type UserGameEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameEntry
     */
    select?: UserGameEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameEntry
     */
    omit?: UserGameEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameEntryInclude<ExtArgs> | null
    /**
     * Filter, which UserGameEntry to fetch.
     */
    where: UserGameEntryWhereUniqueInput
  }

  /**
   * UserGameEntry findUniqueOrThrow
   */
  export type UserGameEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameEntry
     */
    select?: UserGameEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameEntry
     */
    omit?: UserGameEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameEntryInclude<ExtArgs> | null
    /**
     * Filter, which UserGameEntry to fetch.
     */
    where: UserGameEntryWhereUniqueInput
  }

  /**
   * UserGameEntry findFirst
   */
  export type UserGameEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameEntry
     */
    select?: UserGameEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameEntry
     */
    omit?: UserGameEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameEntryInclude<ExtArgs> | null
    /**
     * Filter, which UserGameEntry to fetch.
     */
    where?: UserGameEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGameEntries to fetch.
     */
    orderBy?: UserGameEntryOrderByWithRelationInput | UserGameEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGameEntries.
     */
    cursor?: UserGameEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGameEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGameEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGameEntries.
     */
    distinct?: UserGameEntryScalarFieldEnum | UserGameEntryScalarFieldEnum[]
  }

  /**
   * UserGameEntry findFirstOrThrow
   */
  export type UserGameEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameEntry
     */
    select?: UserGameEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameEntry
     */
    omit?: UserGameEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameEntryInclude<ExtArgs> | null
    /**
     * Filter, which UserGameEntry to fetch.
     */
    where?: UserGameEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGameEntries to fetch.
     */
    orderBy?: UserGameEntryOrderByWithRelationInput | UserGameEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGameEntries.
     */
    cursor?: UserGameEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGameEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGameEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGameEntries.
     */
    distinct?: UserGameEntryScalarFieldEnum | UserGameEntryScalarFieldEnum[]
  }

  /**
   * UserGameEntry findMany
   */
  export type UserGameEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameEntry
     */
    select?: UserGameEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameEntry
     */
    omit?: UserGameEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameEntryInclude<ExtArgs> | null
    /**
     * Filter, which UserGameEntries to fetch.
     */
    where?: UserGameEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGameEntries to fetch.
     */
    orderBy?: UserGameEntryOrderByWithRelationInput | UserGameEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGameEntries.
     */
    cursor?: UserGameEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGameEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGameEntries.
     */
    skip?: number
    distinct?: UserGameEntryScalarFieldEnum | UserGameEntryScalarFieldEnum[]
  }

  /**
   * UserGameEntry create
   */
  export type UserGameEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameEntry
     */
    select?: UserGameEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameEntry
     */
    omit?: UserGameEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a UserGameEntry.
     */
    data: XOR<UserGameEntryCreateInput, UserGameEntryUncheckedCreateInput>
  }

  /**
   * UserGameEntry createMany
   */
  export type UserGameEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGameEntries.
     */
    data: UserGameEntryCreateManyInput | UserGameEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGameEntry createManyAndReturn
   */
  export type UserGameEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameEntry
     */
    select?: UserGameEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameEntry
     */
    omit?: UserGameEntryOmit<ExtArgs> | null
    /**
     * The data used to create many UserGameEntries.
     */
    data: UserGameEntryCreateManyInput | UserGameEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGameEntry update
   */
  export type UserGameEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameEntry
     */
    select?: UserGameEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameEntry
     */
    omit?: UserGameEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a UserGameEntry.
     */
    data: XOR<UserGameEntryUpdateInput, UserGameEntryUncheckedUpdateInput>
    /**
     * Choose, which UserGameEntry to update.
     */
    where: UserGameEntryWhereUniqueInput
  }

  /**
   * UserGameEntry updateMany
   */
  export type UserGameEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGameEntries.
     */
    data: XOR<UserGameEntryUpdateManyMutationInput, UserGameEntryUncheckedUpdateManyInput>
    /**
     * Filter which UserGameEntries to update
     */
    where?: UserGameEntryWhereInput
    /**
     * Limit how many UserGameEntries to update.
     */
    limit?: number
  }

  /**
   * UserGameEntry updateManyAndReturn
   */
  export type UserGameEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameEntry
     */
    select?: UserGameEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameEntry
     */
    omit?: UserGameEntryOmit<ExtArgs> | null
    /**
     * The data used to update UserGameEntries.
     */
    data: XOR<UserGameEntryUpdateManyMutationInput, UserGameEntryUncheckedUpdateManyInput>
    /**
     * Filter which UserGameEntries to update
     */
    where?: UserGameEntryWhereInput
    /**
     * Limit how many UserGameEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGameEntry upsert
   */
  export type UserGameEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameEntry
     */
    select?: UserGameEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameEntry
     */
    omit?: UserGameEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the UserGameEntry to update in case it exists.
     */
    where: UserGameEntryWhereUniqueInput
    /**
     * In case the UserGameEntry found by the `where` argument doesn't exist, create a new UserGameEntry with this data.
     */
    create: XOR<UserGameEntryCreateInput, UserGameEntryUncheckedCreateInput>
    /**
     * In case the UserGameEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGameEntryUpdateInput, UserGameEntryUncheckedUpdateInput>
  }

  /**
   * UserGameEntry delete
   */
  export type UserGameEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameEntry
     */
    select?: UserGameEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameEntry
     */
    omit?: UserGameEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameEntryInclude<ExtArgs> | null
    /**
     * Filter which UserGameEntry to delete.
     */
    where: UserGameEntryWhereUniqueInput
  }

  /**
   * UserGameEntry deleteMany
   */
  export type UserGameEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGameEntries to delete
     */
    where?: UserGameEntryWhereInput
    /**
     * Limit how many UserGameEntries to delete.
     */
    limit?: number
  }

  /**
   * UserGameEntry without action
   */
  export type UserGameEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameEntry
     */
    select?: UserGameEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameEntry
     */
    omit?: UserGameEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameEntryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    auth0Sub: 'auth0Sub',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    theme: 'theme',
    ownedPlatforms: 'ownedPlatforms',
    preferredGenres: 'preferredGenres'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    title: 'title',
    alternativeTitles: 'alternativeTitles',
    releaseDate: 'releaseDate',
    developer: 'developer',
    publisher: 'publisher',
    genre: 'genre',
    subgenre: 'subgenre',
    beginnerFriendliness: 'beginnerFriendliness',
    modernPlayabilityScore: 'modernPlayabilityScore',
    estimatedCompletionTime: 'estimatedCompletionTime',
    synopsis: 'synopsis',
    isEntryPoint: 'isEntryPoint',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const PlayabilityInfoScalarFieldEnum: {
    id: 'id',
    platform: 'platform',
    modernAvailability: 'modernAvailability',
    originalPlatform: 'originalPlatform',
    digitalStoreLinks: 'digitalStoreLinks',
    subscriptionServices: 'subscriptionServices',
    regionRestrictions: 'regionRestrictions',
    languageOptions: 'languageOptions',
    notableVersionDiffs: 'notableVersionDiffs',
    qualityOfLifeFeatures: 'qualityOfLifeFeatures',
    systemRequirements: 'systemRequirements',
    gameId: 'gameId'
  };

  export type PlayabilityInfoScalarFieldEnum = (typeof PlayabilityInfoScalarFieldEnum)[keyof typeof PlayabilityInfoScalarFieldEnum]


  export const ResourceLinkScalarFieldEnum: {
    id: 'id',
    type: 'type',
    url: 'url',
    title: 'title',
    sourceCreator: 'sourceCreator',
    description: 'description',
    communityRating: 'communityRating',
    lastVerifiedAt: 'lastVerifiedAt',
    gameId: 'gameId'
  };

  export type ResourceLinkScalarFieldEnum = (typeof ResourceLinkScalarFieldEnum)[keyof typeof ResourceLinkScalarFieldEnum]


  export const UserGameEntryScalarFieldEnum: {
    id: 'id',
    status: 'status',
    rating: 'rating',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    gameId: 'gameId'
  };

  export type UserGameEntryScalarFieldEnum = (typeof UserGameEntryScalarFieldEnum)[keyof typeof UserGameEntryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'GameStatus'
   */
  export type EnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus'>
    


  /**
   * Reference to a field of type 'GameStatus[]'
   */
  export type ListEnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    auth0Sub?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    theme?: StringNullableFilter<"User"> | string | null
    ownedPlatforms?: StringNullableListFilter<"User">
    preferredGenres?: StringNullableListFilter<"User">
    gameEntries?: UserGameEntryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    auth0Sub?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    theme?: SortOrderInput | SortOrder
    ownedPlatforms?: SortOrder
    preferredGenres?: SortOrder
    gameEntries?: UserGameEntryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    auth0Sub?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    theme?: StringNullableFilter<"User"> | string | null
    ownedPlatforms?: StringNullableListFilter<"User">
    preferredGenres?: StringNullableListFilter<"User">
    gameEntries?: UserGameEntryListRelationFilter
  }, "id" | "username" | "email" | "auth0Sub">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    auth0Sub?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    theme?: SortOrderInput | SortOrder
    ownedPlatforms?: SortOrder
    preferredGenres?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    auth0Sub?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    theme?: StringNullableWithAggregatesFilter<"User"> | string | null
    ownedPlatforms?: StringNullableListFilter<"User">
    preferredGenres?: StringNullableListFilter<"User">
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: StringFilter<"Game"> | string
    title?: StringFilter<"Game"> | string
    alternativeTitles?: StringNullableListFilter<"Game">
    releaseDate?: DateTimeNullableFilter<"Game"> | Date | string | null
    developer?: StringNullableFilter<"Game"> | string | null
    publisher?: StringNullableFilter<"Game"> | string | null
    genre?: StringNullableFilter<"Game"> | string | null
    subgenre?: StringNullableFilter<"Game"> | string | null
    beginnerFriendliness?: IntNullableFilter<"Game"> | number | null
    modernPlayabilityScore?: IntNullableFilter<"Game"> | number | null
    estimatedCompletionTime?: StringNullableFilter<"Game"> | string | null
    synopsis?: StringNullableFilter<"Game"> | string | null
    isEntryPoint?: BoolNullableFilter<"Game"> | boolean | null
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    playabilityInfo?: PlayabilityInfoListRelationFilter
    resourceLinks?: ResourceLinkListRelationFilter
    userEntries?: UserGameEntryListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    alternativeTitles?: SortOrder
    releaseDate?: SortOrderInput | SortOrder
    developer?: SortOrderInput | SortOrder
    publisher?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    subgenre?: SortOrderInput | SortOrder
    beginnerFriendliness?: SortOrderInput | SortOrder
    modernPlayabilityScore?: SortOrderInput | SortOrder
    estimatedCompletionTime?: SortOrderInput | SortOrder
    synopsis?: SortOrderInput | SortOrder
    isEntryPoint?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playabilityInfo?: PlayabilityInfoOrderByRelationAggregateInput
    resourceLinks?: ResourceLinkOrderByRelationAggregateInput
    userEntries?: UserGameEntryOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    title?: StringFilter<"Game"> | string
    alternativeTitles?: StringNullableListFilter<"Game">
    releaseDate?: DateTimeNullableFilter<"Game"> | Date | string | null
    developer?: StringNullableFilter<"Game"> | string | null
    publisher?: StringNullableFilter<"Game"> | string | null
    genre?: StringNullableFilter<"Game"> | string | null
    subgenre?: StringNullableFilter<"Game"> | string | null
    beginnerFriendliness?: IntNullableFilter<"Game"> | number | null
    modernPlayabilityScore?: IntNullableFilter<"Game"> | number | null
    estimatedCompletionTime?: StringNullableFilter<"Game"> | string | null
    synopsis?: StringNullableFilter<"Game"> | string | null
    isEntryPoint?: BoolNullableFilter<"Game"> | boolean | null
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    playabilityInfo?: PlayabilityInfoListRelationFilter
    resourceLinks?: ResourceLinkListRelationFilter
    userEntries?: UserGameEntryListRelationFilter
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    alternativeTitles?: SortOrder
    releaseDate?: SortOrderInput | SortOrder
    developer?: SortOrderInput | SortOrder
    publisher?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    subgenre?: SortOrderInput | SortOrder
    beginnerFriendliness?: SortOrderInput | SortOrder
    modernPlayabilityScore?: SortOrderInput | SortOrder
    estimatedCompletionTime?: SortOrderInput | SortOrder
    synopsis?: SortOrderInput | SortOrder
    isEntryPoint?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Game"> | string
    title?: StringWithAggregatesFilter<"Game"> | string
    alternativeTitles?: StringNullableListFilter<"Game">
    releaseDate?: DateTimeNullableWithAggregatesFilter<"Game"> | Date | string | null
    developer?: StringNullableWithAggregatesFilter<"Game"> | string | null
    publisher?: StringNullableWithAggregatesFilter<"Game"> | string | null
    genre?: StringNullableWithAggregatesFilter<"Game"> | string | null
    subgenre?: StringNullableWithAggregatesFilter<"Game"> | string | null
    beginnerFriendliness?: IntNullableWithAggregatesFilter<"Game"> | number | null
    modernPlayabilityScore?: IntNullableWithAggregatesFilter<"Game"> | number | null
    estimatedCompletionTime?: StringNullableWithAggregatesFilter<"Game"> | string | null
    synopsis?: StringNullableWithAggregatesFilter<"Game"> | string | null
    isEntryPoint?: BoolNullableWithAggregatesFilter<"Game"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
  }

  export type PlayabilityInfoWhereInput = {
    AND?: PlayabilityInfoWhereInput | PlayabilityInfoWhereInput[]
    OR?: PlayabilityInfoWhereInput[]
    NOT?: PlayabilityInfoWhereInput | PlayabilityInfoWhereInput[]
    id?: StringFilter<"PlayabilityInfo"> | string
    platform?: StringFilter<"PlayabilityInfo"> | string
    modernAvailability?: StringNullableListFilter<"PlayabilityInfo">
    originalPlatform?: StringNullableFilter<"PlayabilityInfo"> | string | null
    digitalStoreLinks?: StringNullableListFilter<"PlayabilityInfo">
    subscriptionServices?: StringNullableListFilter<"PlayabilityInfo">
    regionRestrictions?: StringNullableFilter<"PlayabilityInfo"> | string | null
    languageOptions?: StringNullableListFilter<"PlayabilityInfo">
    notableVersionDiffs?: StringNullableFilter<"PlayabilityInfo"> | string | null
    qualityOfLifeFeatures?: StringNullableListFilter<"PlayabilityInfo">
    systemRequirements?: StringNullableFilter<"PlayabilityInfo"> | string | null
    gameId?: StringFilter<"PlayabilityInfo"> | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type PlayabilityInfoOrderByWithRelationInput = {
    id?: SortOrder
    platform?: SortOrder
    modernAvailability?: SortOrder
    originalPlatform?: SortOrderInput | SortOrder
    digitalStoreLinks?: SortOrder
    subscriptionServices?: SortOrder
    regionRestrictions?: SortOrderInput | SortOrder
    languageOptions?: SortOrder
    notableVersionDiffs?: SortOrderInput | SortOrder
    qualityOfLifeFeatures?: SortOrder
    systemRequirements?: SortOrderInput | SortOrder
    gameId?: SortOrder
    game?: GameOrderByWithRelationInput
  }

  export type PlayabilityInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayabilityInfoWhereInput | PlayabilityInfoWhereInput[]
    OR?: PlayabilityInfoWhereInput[]
    NOT?: PlayabilityInfoWhereInput | PlayabilityInfoWhereInput[]
    platform?: StringFilter<"PlayabilityInfo"> | string
    modernAvailability?: StringNullableListFilter<"PlayabilityInfo">
    originalPlatform?: StringNullableFilter<"PlayabilityInfo"> | string | null
    digitalStoreLinks?: StringNullableListFilter<"PlayabilityInfo">
    subscriptionServices?: StringNullableListFilter<"PlayabilityInfo">
    regionRestrictions?: StringNullableFilter<"PlayabilityInfo"> | string | null
    languageOptions?: StringNullableListFilter<"PlayabilityInfo">
    notableVersionDiffs?: StringNullableFilter<"PlayabilityInfo"> | string | null
    qualityOfLifeFeatures?: StringNullableListFilter<"PlayabilityInfo">
    systemRequirements?: StringNullableFilter<"PlayabilityInfo"> | string | null
    gameId?: StringFilter<"PlayabilityInfo"> | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id">

  export type PlayabilityInfoOrderByWithAggregationInput = {
    id?: SortOrder
    platform?: SortOrder
    modernAvailability?: SortOrder
    originalPlatform?: SortOrderInput | SortOrder
    digitalStoreLinks?: SortOrder
    subscriptionServices?: SortOrder
    regionRestrictions?: SortOrderInput | SortOrder
    languageOptions?: SortOrder
    notableVersionDiffs?: SortOrderInput | SortOrder
    qualityOfLifeFeatures?: SortOrder
    systemRequirements?: SortOrderInput | SortOrder
    gameId?: SortOrder
    _count?: PlayabilityInfoCountOrderByAggregateInput
    _max?: PlayabilityInfoMaxOrderByAggregateInput
    _min?: PlayabilityInfoMinOrderByAggregateInput
  }

  export type PlayabilityInfoScalarWhereWithAggregatesInput = {
    AND?: PlayabilityInfoScalarWhereWithAggregatesInput | PlayabilityInfoScalarWhereWithAggregatesInput[]
    OR?: PlayabilityInfoScalarWhereWithAggregatesInput[]
    NOT?: PlayabilityInfoScalarWhereWithAggregatesInput | PlayabilityInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayabilityInfo"> | string
    platform?: StringWithAggregatesFilter<"PlayabilityInfo"> | string
    modernAvailability?: StringNullableListFilter<"PlayabilityInfo">
    originalPlatform?: StringNullableWithAggregatesFilter<"PlayabilityInfo"> | string | null
    digitalStoreLinks?: StringNullableListFilter<"PlayabilityInfo">
    subscriptionServices?: StringNullableListFilter<"PlayabilityInfo">
    regionRestrictions?: StringNullableWithAggregatesFilter<"PlayabilityInfo"> | string | null
    languageOptions?: StringNullableListFilter<"PlayabilityInfo">
    notableVersionDiffs?: StringNullableWithAggregatesFilter<"PlayabilityInfo"> | string | null
    qualityOfLifeFeatures?: StringNullableListFilter<"PlayabilityInfo">
    systemRequirements?: StringNullableWithAggregatesFilter<"PlayabilityInfo"> | string | null
    gameId?: StringWithAggregatesFilter<"PlayabilityInfo"> | string
  }

  export type ResourceLinkWhereInput = {
    AND?: ResourceLinkWhereInput | ResourceLinkWhereInput[]
    OR?: ResourceLinkWhereInput[]
    NOT?: ResourceLinkWhereInput | ResourceLinkWhereInput[]
    id?: StringFilter<"ResourceLink"> | string
    type?: StringFilter<"ResourceLink"> | string
    url?: StringFilter<"ResourceLink"> | string
    title?: StringFilter<"ResourceLink"> | string
    sourceCreator?: StringNullableFilter<"ResourceLink"> | string | null
    description?: StringNullableFilter<"ResourceLink"> | string | null
    communityRating?: FloatNullableFilter<"ResourceLink"> | number | null
    lastVerifiedAt?: DateTimeNullableFilter<"ResourceLink"> | Date | string | null
    gameId?: StringFilter<"ResourceLink"> | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type ResourceLinkOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    title?: SortOrder
    sourceCreator?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    communityRating?: SortOrderInput | SortOrder
    lastVerifiedAt?: SortOrderInput | SortOrder
    gameId?: SortOrder
    game?: GameOrderByWithRelationInput
  }

  export type ResourceLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResourceLinkWhereInput | ResourceLinkWhereInput[]
    OR?: ResourceLinkWhereInput[]
    NOT?: ResourceLinkWhereInput | ResourceLinkWhereInput[]
    type?: StringFilter<"ResourceLink"> | string
    url?: StringFilter<"ResourceLink"> | string
    title?: StringFilter<"ResourceLink"> | string
    sourceCreator?: StringNullableFilter<"ResourceLink"> | string | null
    description?: StringNullableFilter<"ResourceLink"> | string | null
    communityRating?: FloatNullableFilter<"ResourceLink"> | number | null
    lastVerifiedAt?: DateTimeNullableFilter<"ResourceLink"> | Date | string | null
    gameId?: StringFilter<"ResourceLink"> | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id">

  export type ResourceLinkOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    title?: SortOrder
    sourceCreator?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    communityRating?: SortOrderInput | SortOrder
    lastVerifiedAt?: SortOrderInput | SortOrder
    gameId?: SortOrder
    _count?: ResourceLinkCountOrderByAggregateInput
    _avg?: ResourceLinkAvgOrderByAggregateInput
    _max?: ResourceLinkMaxOrderByAggregateInput
    _min?: ResourceLinkMinOrderByAggregateInput
    _sum?: ResourceLinkSumOrderByAggregateInput
  }

  export type ResourceLinkScalarWhereWithAggregatesInput = {
    AND?: ResourceLinkScalarWhereWithAggregatesInput | ResourceLinkScalarWhereWithAggregatesInput[]
    OR?: ResourceLinkScalarWhereWithAggregatesInput[]
    NOT?: ResourceLinkScalarWhereWithAggregatesInput | ResourceLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResourceLink"> | string
    type?: StringWithAggregatesFilter<"ResourceLink"> | string
    url?: StringWithAggregatesFilter<"ResourceLink"> | string
    title?: StringWithAggregatesFilter<"ResourceLink"> | string
    sourceCreator?: StringNullableWithAggregatesFilter<"ResourceLink"> | string | null
    description?: StringNullableWithAggregatesFilter<"ResourceLink"> | string | null
    communityRating?: FloatNullableWithAggregatesFilter<"ResourceLink"> | number | null
    lastVerifiedAt?: DateTimeNullableWithAggregatesFilter<"ResourceLink"> | Date | string | null
    gameId?: StringWithAggregatesFilter<"ResourceLink"> | string
  }

  export type UserGameEntryWhereInput = {
    AND?: UserGameEntryWhereInput | UserGameEntryWhereInput[]
    OR?: UserGameEntryWhereInput[]
    NOT?: UserGameEntryWhereInput | UserGameEntryWhereInput[]
    id?: StringFilter<"UserGameEntry"> | string
    status?: EnumGameStatusFilter<"UserGameEntry"> | $Enums.GameStatus
    rating?: IntNullableFilter<"UserGameEntry"> | number | null
    notes?: StringNullableFilter<"UserGameEntry"> | string | null
    createdAt?: DateTimeFilter<"UserGameEntry"> | Date | string
    updatedAt?: DateTimeFilter<"UserGameEntry"> | Date | string
    userId?: StringFilter<"UserGameEntry"> | string
    gameId?: StringFilter<"UserGameEntry"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type UserGameEntryOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    rating?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    user?: UserOrderByWithRelationInput
    game?: GameOrderByWithRelationInput
  }

  export type UserGameEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_gameId?: UserGameEntryUserIdGameIdCompoundUniqueInput
    AND?: UserGameEntryWhereInput | UserGameEntryWhereInput[]
    OR?: UserGameEntryWhereInput[]
    NOT?: UserGameEntryWhereInput | UserGameEntryWhereInput[]
    status?: EnumGameStatusFilter<"UserGameEntry"> | $Enums.GameStatus
    rating?: IntNullableFilter<"UserGameEntry"> | number | null
    notes?: StringNullableFilter<"UserGameEntry"> | string | null
    createdAt?: DateTimeFilter<"UserGameEntry"> | Date | string
    updatedAt?: DateTimeFilter<"UserGameEntry"> | Date | string
    userId?: StringFilter<"UserGameEntry"> | string
    gameId?: StringFilter<"UserGameEntry"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id" | "userId_gameId">

  export type UserGameEntryOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    rating?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    _count?: UserGameEntryCountOrderByAggregateInput
    _avg?: UserGameEntryAvgOrderByAggregateInput
    _max?: UserGameEntryMaxOrderByAggregateInput
    _min?: UserGameEntryMinOrderByAggregateInput
    _sum?: UserGameEntrySumOrderByAggregateInput
  }

  export type UserGameEntryScalarWhereWithAggregatesInput = {
    AND?: UserGameEntryScalarWhereWithAggregatesInput | UserGameEntryScalarWhereWithAggregatesInput[]
    OR?: UserGameEntryScalarWhereWithAggregatesInput[]
    NOT?: UserGameEntryScalarWhereWithAggregatesInput | UserGameEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserGameEntry"> | string
    status?: EnumGameStatusWithAggregatesFilter<"UserGameEntry"> | $Enums.GameStatus
    rating?: IntNullableWithAggregatesFilter<"UserGameEntry"> | number | null
    notes?: StringNullableWithAggregatesFilter<"UserGameEntry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserGameEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserGameEntry"> | Date | string
    userId?: StringWithAggregatesFilter<"UserGameEntry"> | string
    gameId?: StringWithAggregatesFilter<"UserGameEntry"> | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    auth0Sub: string
    createdAt?: Date | string
    updatedAt?: Date | string
    theme?: string | null
    ownedPlatforms?: UserCreateownedPlatformsInput | string[]
    preferredGenres?: UserCreatepreferredGenresInput | string[]
    gameEntries?: UserGameEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    auth0Sub: string
    createdAt?: Date | string
    updatedAt?: Date | string
    theme?: string | null
    ownedPlatforms?: UserCreateownedPlatformsInput | string[]
    preferredGenres?: UserCreatepreferredGenresInput | string[]
    gameEntries?: UserGameEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    auth0Sub?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    ownedPlatforms?: UserUpdateownedPlatformsInput | string[]
    preferredGenres?: UserUpdatepreferredGenresInput | string[]
    gameEntries?: UserGameEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    auth0Sub?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    ownedPlatforms?: UserUpdateownedPlatformsInput | string[]
    preferredGenres?: UserUpdatepreferredGenresInput | string[]
    gameEntries?: UserGameEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    auth0Sub: string
    createdAt?: Date | string
    updatedAt?: Date | string
    theme?: string | null
    ownedPlatforms?: UserCreateownedPlatformsInput | string[]
    preferredGenres?: UserCreatepreferredGenresInput | string[]
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    auth0Sub?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    ownedPlatforms?: UserUpdateownedPlatformsInput | string[]
    preferredGenres?: UserUpdatepreferredGenresInput | string[]
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    auth0Sub?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    ownedPlatforms?: UserUpdateownedPlatformsInput | string[]
    preferredGenres?: UserUpdatepreferredGenresInput | string[]
  }

  export type GameCreateInput = {
    id?: string
    title: string
    alternativeTitles?: GameCreatealternativeTitlesInput | string[]
    releaseDate?: Date | string | null
    developer?: string | null
    publisher?: string | null
    genre?: string | null
    subgenre?: string | null
    beginnerFriendliness?: number | null
    modernPlayabilityScore?: number | null
    estimatedCompletionTime?: string | null
    synopsis?: string | null
    isEntryPoint?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playabilityInfo?: PlayabilityInfoCreateNestedManyWithoutGameInput
    resourceLinks?: ResourceLinkCreateNestedManyWithoutGameInput
    userEntries?: UserGameEntryCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    title: string
    alternativeTitles?: GameCreatealternativeTitlesInput | string[]
    releaseDate?: Date | string | null
    developer?: string | null
    publisher?: string | null
    genre?: string | null
    subgenre?: string | null
    beginnerFriendliness?: number | null
    modernPlayabilityScore?: number | null
    estimatedCompletionTime?: string | null
    synopsis?: string | null
    isEntryPoint?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playabilityInfo?: PlayabilityInfoUncheckedCreateNestedManyWithoutGameInput
    resourceLinks?: ResourceLinkUncheckedCreateNestedManyWithoutGameInput
    userEntries?: UserGameEntryUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    alternativeTitles?: GameUpdatealternativeTitlesInput | string[]
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    beginnerFriendliness?: NullableIntFieldUpdateOperationsInput | number | null
    modernPlayabilityScore?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedCompletionTime?: NullableStringFieldUpdateOperationsInput | string | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    isEntryPoint?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playabilityInfo?: PlayabilityInfoUpdateManyWithoutGameNestedInput
    resourceLinks?: ResourceLinkUpdateManyWithoutGameNestedInput
    userEntries?: UserGameEntryUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    alternativeTitles?: GameUpdatealternativeTitlesInput | string[]
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    beginnerFriendliness?: NullableIntFieldUpdateOperationsInput | number | null
    modernPlayabilityScore?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedCompletionTime?: NullableStringFieldUpdateOperationsInput | string | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    isEntryPoint?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playabilityInfo?: PlayabilityInfoUncheckedUpdateManyWithoutGameNestedInput
    resourceLinks?: ResourceLinkUncheckedUpdateManyWithoutGameNestedInput
    userEntries?: UserGameEntryUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: string
    title: string
    alternativeTitles?: GameCreatealternativeTitlesInput | string[]
    releaseDate?: Date | string | null
    developer?: string | null
    publisher?: string | null
    genre?: string | null
    subgenre?: string | null
    beginnerFriendliness?: number | null
    modernPlayabilityScore?: number | null
    estimatedCompletionTime?: string | null
    synopsis?: string | null
    isEntryPoint?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    alternativeTitles?: GameUpdatealternativeTitlesInput | string[]
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    beginnerFriendliness?: NullableIntFieldUpdateOperationsInput | number | null
    modernPlayabilityScore?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedCompletionTime?: NullableStringFieldUpdateOperationsInput | string | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    isEntryPoint?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    alternativeTitles?: GameUpdatealternativeTitlesInput | string[]
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    beginnerFriendliness?: NullableIntFieldUpdateOperationsInput | number | null
    modernPlayabilityScore?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedCompletionTime?: NullableStringFieldUpdateOperationsInput | string | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    isEntryPoint?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayabilityInfoCreateInput = {
    id?: string
    platform: string
    modernAvailability?: PlayabilityInfoCreatemodernAvailabilityInput | string[]
    originalPlatform?: string | null
    digitalStoreLinks?: PlayabilityInfoCreatedigitalStoreLinksInput | string[]
    subscriptionServices?: PlayabilityInfoCreatesubscriptionServicesInput | string[]
    regionRestrictions?: string | null
    languageOptions?: PlayabilityInfoCreatelanguageOptionsInput | string[]
    notableVersionDiffs?: string | null
    qualityOfLifeFeatures?: PlayabilityInfoCreatequalityOfLifeFeaturesInput | string[]
    systemRequirements?: string | null
    game: GameCreateNestedOneWithoutPlayabilityInfoInput
  }

  export type PlayabilityInfoUncheckedCreateInput = {
    id?: string
    platform: string
    modernAvailability?: PlayabilityInfoCreatemodernAvailabilityInput | string[]
    originalPlatform?: string | null
    digitalStoreLinks?: PlayabilityInfoCreatedigitalStoreLinksInput | string[]
    subscriptionServices?: PlayabilityInfoCreatesubscriptionServicesInput | string[]
    regionRestrictions?: string | null
    languageOptions?: PlayabilityInfoCreatelanguageOptionsInput | string[]
    notableVersionDiffs?: string | null
    qualityOfLifeFeatures?: PlayabilityInfoCreatequalityOfLifeFeaturesInput | string[]
    systemRequirements?: string | null
    gameId: string
  }

  export type PlayabilityInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    modernAvailability?: PlayabilityInfoUpdatemodernAvailabilityInput | string[]
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    digitalStoreLinks?: PlayabilityInfoUpdatedigitalStoreLinksInput | string[]
    subscriptionServices?: PlayabilityInfoUpdatesubscriptionServicesInput | string[]
    regionRestrictions?: NullableStringFieldUpdateOperationsInput | string | null
    languageOptions?: PlayabilityInfoUpdatelanguageOptionsInput | string[]
    notableVersionDiffs?: NullableStringFieldUpdateOperationsInput | string | null
    qualityOfLifeFeatures?: PlayabilityInfoUpdatequalityOfLifeFeaturesInput | string[]
    systemRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    game?: GameUpdateOneRequiredWithoutPlayabilityInfoNestedInput
  }

  export type PlayabilityInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    modernAvailability?: PlayabilityInfoUpdatemodernAvailabilityInput | string[]
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    digitalStoreLinks?: PlayabilityInfoUpdatedigitalStoreLinksInput | string[]
    subscriptionServices?: PlayabilityInfoUpdatesubscriptionServicesInput | string[]
    regionRestrictions?: NullableStringFieldUpdateOperationsInput | string | null
    languageOptions?: PlayabilityInfoUpdatelanguageOptionsInput | string[]
    notableVersionDiffs?: NullableStringFieldUpdateOperationsInput | string | null
    qualityOfLifeFeatures?: PlayabilityInfoUpdatequalityOfLifeFeaturesInput | string[]
    systemRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type PlayabilityInfoCreateManyInput = {
    id?: string
    platform: string
    modernAvailability?: PlayabilityInfoCreatemodernAvailabilityInput | string[]
    originalPlatform?: string | null
    digitalStoreLinks?: PlayabilityInfoCreatedigitalStoreLinksInput | string[]
    subscriptionServices?: PlayabilityInfoCreatesubscriptionServicesInput | string[]
    regionRestrictions?: string | null
    languageOptions?: PlayabilityInfoCreatelanguageOptionsInput | string[]
    notableVersionDiffs?: string | null
    qualityOfLifeFeatures?: PlayabilityInfoCreatequalityOfLifeFeaturesInput | string[]
    systemRequirements?: string | null
    gameId: string
  }

  export type PlayabilityInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    modernAvailability?: PlayabilityInfoUpdatemodernAvailabilityInput | string[]
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    digitalStoreLinks?: PlayabilityInfoUpdatedigitalStoreLinksInput | string[]
    subscriptionServices?: PlayabilityInfoUpdatesubscriptionServicesInput | string[]
    regionRestrictions?: NullableStringFieldUpdateOperationsInput | string | null
    languageOptions?: PlayabilityInfoUpdatelanguageOptionsInput | string[]
    notableVersionDiffs?: NullableStringFieldUpdateOperationsInput | string | null
    qualityOfLifeFeatures?: PlayabilityInfoUpdatequalityOfLifeFeaturesInput | string[]
    systemRequirements?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayabilityInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    modernAvailability?: PlayabilityInfoUpdatemodernAvailabilityInput | string[]
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    digitalStoreLinks?: PlayabilityInfoUpdatedigitalStoreLinksInput | string[]
    subscriptionServices?: PlayabilityInfoUpdatesubscriptionServicesInput | string[]
    regionRestrictions?: NullableStringFieldUpdateOperationsInput | string | null
    languageOptions?: PlayabilityInfoUpdatelanguageOptionsInput | string[]
    notableVersionDiffs?: NullableStringFieldUpdateOperationsInput | string | null
    qualityOfLifeFeatures?: PlayabilityInfoUpdatequalityOfLifeFeaturesInput | string[]
    systemRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type ResourceLinkCreateInput = {
    id?: string
    type: string
    url: string
    title: string
    sourceCreator?: string | null
    description?: string | null
    communityRating?: number | null
    lastVerifiedAt?: Date | string | null
    game: GameCreateNestedOneWithoutResourceLinksInput
  }

  export type ResourceLinkUncheckedCreateInput = {
    id?: string
    type: string
    url: string
    title: string
    sourceCreator?: string | null
    description?: string | null
    communityRating?: number | null
    lastVerifiedAt?: Date | string | null
    gameId: string
  }

  export type ResourceLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sourceCreator?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityRating?: NullableFloatFieldUpdateOperationsInput | number | null
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    game?: GameUpdateOneRequiredWithoutResourceLinksNestedInput
  }

  export type ResourceLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sourceCreator?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityRating?: NullableFloatFieldUpdateOperationsInput | number | null
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type ResourceLinkCreateManyInput = {
    id?: string
    type: string
    url: string
    title: string
    sourceCreator?: string | null
    description?: string | null
    communityRating?: number | null
    lastVerifiedAt?: Date | string | null
    gameId: string
  }

  export type ResourceLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sourceCreator?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityRating?: NullableFloatFieldUpdateOperationsInput | number | null
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResourceLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sourceCreator?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityRating?: NullableFloatFieldUpdateOperationsInput | number | null
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type UserGameEntryCreateInput = {
    id?: string
    status: $Enums.GameStatus
    rating?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGameEntriesInput
    game: GameCreateNestedOneWithoutUserEntriesInput
  }

  export type UserGameEntryUncheckedCreateInput = {
    id?: string
    status: $Enums.GameStatus
    rating?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    gameId: string
  }

  export type UserGameEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGameEntriesNestedInput
    game?: GameUpdateOneRequiredWithoutUserEntriesNestedInput
  }

  export type UserGameEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type UserGameEntryCreateManyInput = {
    id?: string
    status: $Enums.GameStatus
    rating?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    gameId: string
  }

  export type UserGameEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGameEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserGameEntryListRelationFilter = {
    every?: UserGameEntryWhereInput
    some?: UserGameEntryWhereInput
    none?: UserGameEntryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserGameEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    auth0Sub?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    theme?: SortOrder
    ownedPlatforms?: SortOrder
    preferredGenres?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    auth0Sub?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    theme?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    auth0Sub?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    theme?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type PlayabilityInfoListRelationFilter = {
    every?: PlayabilityInfoWhereInput
    some?: PlayabilityInfoWhereInput
    none?: PlayabilityInfoWhereInput
  }

  export type ResourceLinkListRelationFilter = {
    every?: ResourceLinkWhereInput
    some?: ResourceLinkWhereInput
    none?: ResourceLinkWhereInput
  }

  export type PlayabilityInfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResourceLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    alternativeTitles?: SortOrder
    releaseDate?: SortOrder
    developer?: SortOrder
    publisher?: SortOrder
    genre?: SortOrder
    subgenre?: SortOrder
    beginnerFriendliness?: SortOrder
    modernPlayabilityScore?: SortOrder
    estimatedCompletionTime?: SortOrder
    synopsis?: SortOrder
    isEntryPoint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    beginnerFriendliness?: SortOrder
    modernPlayabilityScore?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    releaseDate?: SortOrder
    developer?: SortOrder
    publisher?: SortOrder
    genre?: SortOrder
    subgenre?: SortOrder
    beginnerFriendliness?: SortOrder
    modernPlayabilityScore?: SortOrder
    estimatedCompletionTime?: SortOrder
    synopsis?: SortOrder
    isEntryPoint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    releaseDate?: SortOrder
    developer?: SortOrder
    publisher?: SortOrder
    genre?: SortOrder
    subgenre?: SortOrder
    beginnerFriendliness?: SortOrder
    modernPlayabilityScore?: SortOrder
    estimatedCompletionTime?: SortOrder
    synopsis?: SortOrder
    isEntryPoint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    beginnerFriendliness?: SortOrder
    modernPlayabilityScore?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type PlayabilityInfoCountOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    modernAvailability?: SortOrder
    originalPlatform?: SortOrder
    digitalStoreLinks?: SortOrder
    subscriptionServices?: SortOrder
    regionRestrictions?: SortOrder
    languageOptions?: SortOrder
    notableVersionDiffs?: SortOrder
    qualityOfLifeFeatures?: SortOrder
    systemRequirements?: SortOrder
    gameId?: SortOrder
  }

  export type PlayabilityInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    originalPlatform?: SortOrder
    regionRestrictions?: SortOrder
    notableVersionDiffs?: SortOrder
    systemRequirements?: SortOrder
    gameId?: SortOrder
  }

  export type PlayabilityInfoMinOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    originalPlatform?: SortOrder
    regionRestrictions?: SortOrder
    notableVersionDiffs?: SortOrder
    systemRequirements?: SortOrder
    gameId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ResourceLinkCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    title?: SortOrder
    sourceCreator?: SortOrder
    description?: SortOrder
    communityRating?: SortOrder
    lastVerifiedAt?: SortOrder
    gameId?: SortOrder
  }

  export type ResourceLinkAvgOrderByAggregateInput = {
    communityRating?: SortOrder
  }

  export type ResourceLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    title?: SortOrder
    sourceCreator?: SortOrder
    description?: SortOrder
    communityRating?: SortOrder
    lastVerifiedAt?: SortOrder
    gameId?: SortOrder
  }

  export type ResourceLinkMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    title?: SortOrder
    sourceCreator?: SortOrder
    description?: SortOrder
    communityRating?: SortOrder
    lastVerifiedAt?: SortOrder
    gameId?: SortOrder
  }

  export type ResourceLinkSumOrderByAggregateInput = {
    communityRating?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserGameEntryUserIdGameIdCompoundUniqueInput = {
    userId: string
    gameId: string
  }

  export type UserGameEntryCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
  }

  export type UserGameEntryAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type UserGameEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
  }

  export type UserGameEntryMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
  }

  export type UserGameEntrySumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type EnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type UserCreateownedPlatformsInput = {
    set: string[]
  }

  export type UserCreatepreferredGenresInput = {
    set: string[]
  }

  export type UserGameEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGameEntryCreateWithoutUserInput, UserGameEntryUncheckedCreateWithoutUserInput> | UserGameEntryCreateWithoutUserInput[] | UserGameEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameEntryCreateOrConnectWithoutUserInput | UserGameEntryCreateOrConnectWithoutUserInput[]
    createMany?: UserGameEntryCreateManyUserInputEnvelope
    connect?: UserGameEntryWhereUniqueInput | UserGameEntryWhereUniqueInput[]
  }

  export type UserGameEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGameEntryCreateWithoutUserInput, UserGameEntryUncheckedCreateWithoutUserInput> | UserGameEntryCreateWithoutUserInput[] | UserGameEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameEntryCreateOrConnectWithoutUserInput | UserGameEntryCreateOrConnectWithoutUserInput[]
    createMany?: UserGameEntryCreateManyUserInputEnvelope
    connect?: UserGameEntryWhereUniqueInput | UserGameEntryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateownedPlatformsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdatepreferredGenresInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserGameEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGameEntryCreateWithoutUserInput, UserGameEntryUncheckedCreateWithoutUserInput> | UserGameEntryCreateWithoutUserInput[] | UserGameEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameEntryCreateOrConnectWithoutUserInput | UserGameEntryCreateOrConnectWithoutUserInput[]
    upsert?: UserGameEntryUpsertWithWhereUniqueWithoutUserInput | UserGameEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGameEntryCreateManyUserInputEnvelope
    set?: UserGameEntryWhereUniqueInput | UserGameEntryWhereUniqueInput[]
    disconnect?: UserGameEntryWhereUniqueInput | UserGameEntryWhereUniqueInput[]
    delete?: UserGameEntryWhereUniqueInput | UserGameEntryWhereUniqueInput[]
    connect?: UserGameEntryWhereUniqueInput | UserGameEntryWhereUniqueInput[]
    update?: UserGameEntryUpdateWithWhereUniqueWithoutUserInput | UserGameEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGameEntryUpdateManyWithWhereWithoutUserInput | UserGameEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGameEntryScalarWhereInput | UserGameEntryScalarWhereInput[]
  }

  export type UserGameEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGameEntryCreateWithoutUserInput, UserGameEntryUncheckedCreateWithoutUserInput> | UserGameEntryCreateWithoutUserInput[] | UserGameEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameEntryCreateOrConnectWithoutUserInput | UserGameEntryCreateOrConnectWithoutUserInput[]
    upsert?: UserGameEntryUpsertWithWhereUniqueWithoutUserInput | UserGameEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGameEntryCreateManyUserInputEnvelope
    set?: UserGameEntryWhereUniqueInput | UserGameEntryWhereUniqueInput[]
    disconnect?: UserGameEntryWhereUniqueInput | UserGameEntryWhereUniqueInput[]
    delete?: UserGameEntryWhereUniqueInput | UserGameEntryWhereUniqueInput[]
    connect?: UserGameEntryWhereUniqueInput | UserGameEntryWhereUniqueInput[]
    update?: UserGameEntryUpdateWithWhereUniqueWithoutUserInput | UserGameEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGameEntryUpdateManyWithWhereWithoutUserInput | UserGameEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGameEntryScalarWhereInput | UserGameEntryScalarWhereInput[]
  }

  export type GameCreatealternativeTitlesInput = {
    set: string[]
  }

  export type PlayabilityInfoCreateNestedManyWithoutGameInput = {
    create?: XOR<PlayabilityInfoCreateWithoutGameInput, PlayabilityInfoUncheckedCreateWithoutGameInput> | PlayabilityInfoCreateWithoutGameInput[] | PlayabilityInfoUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlayabilityInfoCreateOrConnectWithoutGameInput | PlayabilityInfoCreateOrConnectWithoutGameInput[]
    createMany?: PlayabilityInfoCreateManyGameInputEnvelope
    connect?: PlayabilityInfoWhereUniqueInput | PlayabilityInfoWhereUniqueInput[]
  }

  export type ResourceLinkCreateNestedManyWithoutGameInput = {
    create?: XOR<ResourceLinkCreateWithoutGameInput, ResourceLinkUncheckedCreateWithoutGameInput> | ResourceLinkCreateWithoutGameInput[] | ResourceLinkUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ResourceLinkCreateOrConnectWithoutGameInput | ResourceLinkCreateOrConnectWithoutGameInput[]
    createMany?: ResourceLinkCreateManyGameInputEnvelope
    connect?: ResourceLinkWhereUniqueInput | ResourceLinkWhereUniqueInput[]
  }

  export type UserGameEntryCreateNestedManyWithoutGameInput = {
    create?: XOR<UserGameEntryCreateWithoutGameInput, UserGameEntryUncheckedCreateWithoutGameInput> | UserGameEntryCreateWithoutGameInput[] | UserGameEntryUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameEntryCreateOrConnectWithoutGameInput | UserGameEntryCreateOrConnectWithoutGameInput[]
    createMany?: UserGameEntryCreateManyGameInputEnvelope
    connect?: UserGameEntryWhereUniqueInput | UserGameEntryWhereUniqueInput[]
  }

  export type PlayabilityInfoUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<PlayabilityInfoCreateWithoutGameInput, PlayabilityInfoUncheckedCreateWithoutGameInput> | PlayabilityInfoCreateWithoutGameInput[] | PlayabilityInfoUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlayabilityInfoCreateOrConnectWithoutGameInput | PlayabilityInfoCreateOrConnectWithoutGameInput[]
    createMany?: PlayabilityInfoCreateManyGameInputEnvelope
    connect?: PlayabilityInfoWhereUniqueInput | PlayabilityInfoWhereUniqueInput[]
  }

  export type ResourceLinkUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<ResourceLinkCreateWithoutGameInput, ResourceLinkUncheckedCreateWithoutGameInput> | ResourceLinkCreateWithoutGameInput[] | ResourceLinkUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ResourceLinkCreateOrConnectWithoutGameInput | ResourceLinkCreateOrConnectWithoutGameInput[]
    createMany?: ResourceLinkCreateManyGameInputEnvelope
    connect?: ResourceLinkWhereUniqueInput | ResourceLinkWhereUniqueInput[]
  }

  export type UserGameEntryUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<UserGameEntryCreateWithoutGameInput, UserGameEntryUncheckedCreateWithoutGameInput> | UserGameEntryCreateWithoutGameInput[] | UserGameEntryUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameEntryCreateOrConnectWithoutGameInput | UserGameEntryCreateOrConnectWithoutGameInput[]
    createMany?: UserGameEntryCreateManyGameInputEnvelope
    connect?: UserGameEntryWhereUniqueInput | UserGameEntryWhereUniqueInput[]
  }

  export type GameUpdatealternativeTitlesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type PlayabilityInfoUpdateManyWithoutGameNestedInput = {
    create?: XOR<PlayabilityInfoCreateWithoutGameInput, PlayabilityInfoUncheckedCreateWithoutGameInput> | PlayabilityInfoCreateWithoutGameInput[] | PlayabilityInfoUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlayabilityInfoCreateOrConnectWithoutGameInput | PlayabilityInfoCreateOrConnectWithoutGameInput[]
    upsert?: PlayabilityInfoUpsertWithWhereUniqueWithoutGameInput | PlayabilityInfoUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: PlayabilityInfoCreateManyGameInputEnvelope
    set?: PlayabilityInfoWhereUniqueInput | PlayabilityInfoWhereUniqueInput[]
    disconnect?: PlayabilityInfoWhereUniqueInput | PlayabilityInfoWhereUniqueInput[]
    delete?: PlayabilityInfoWhereUniqueInput | PlayabilityInfoWhereUniqueInput[]
    connect?: PlayabilityInfoWhereUniqueInput | PlayabilityInfoWhereUniqueInput[]
    update?: PlayabilityInfoUpdateWithWhereUniqueWithoutGameInput | PlayabilityInfoUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: PlayabilityInfoUpdateManyWithWhereWithoutGameInput | PlayabilityInfoUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: PlayabilityInfoScalarWhereInput | PlayabilityInfoScalarWhereInput[]
  }

  export type ResourceLinkUpdateManyWithoutGameNestedInput = {
    create?: XOR<ResourceLinkCreateWithoutGameInput, ResourceLinkUncheckedCreateWithoutGameInput> | ResourceLinkCreateWithoutGameInput[] | ResourceLinkUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ResourceLinkCreateOrConnectWithoutGameInput | ResourceLinkCreateOrConnectWithoutGameInput[]
    upsert?: ResourceLinkUpsertWithWhereUniqueWithoutGameInput | ResourceLinkUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: ResourceLinkCreateManyGameInputEnvelope
    set?: ResourceLinkWhereUniqueInput | ResourceLinkWhereUniqueInput[]
    disconnect?: ResourceLinkWhereUniqueInput | ResourceLinkWhereUniqueInput[]
    delete?: ResourceLinkWhereUniqueInput | ResourceLinkWhereUniqueInput[]
    connect?: ResourceLinkWhereUniqueInput | ResourceLinkWhereUniqueInput[]
    update?: ResourceLinkUpdateWithWhereUniqueWithoutGameInput | ResourceLinkUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: ResourceLinkUpdateManyWithWhereWithoutGameInput | ResourceLinkUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: ResourceLinkScalarWhereInput | ResourceLinkScalarWhereInput[]
  }

  export type UserGameEntryUpdateManyWithoutGameNestedInput = {
    create?: XOR<UserGameEntryCreateWithoutGameInput, UserGameEntryUncheckedCreateWithoutGameInput> | UserGameEntryCreateWithoutGameInput[] | UserGameEntryUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameEntryCreateOrConnectWithoutGameInput | UserGameEntryCreateOrConnectWithoutGameInput[]
    upsert?: UserGameEntryUpsertWithWhereUniqueWithoutGameInput | UserGameEntryUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: UserGameEntryCreateManyGameInputEnvelope
    set?: UserGameEntryWhereUniqueInput | UserGameEntryWhereUniqueInput[]
    disconnect?: UserGameEntryWhereUniqueInput | UserGameEntryWhereUniqueInput[]
    delete?: UserGameEntryWhereUniqueInput | UserGameEntryWhereUniqueInput[]
    connect?: UserGameEntryWhereUniqueInput | UserGameEntryWhereUniqueInput[]
    update?: UserGameEntryUpdateWithWhereUniqueWithoutGameInput | UserGameEntryUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: UserGameEntryUpdateManyWithWhereWithoutGameInput | UserGameEntryUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: UserGameEntryScalarWhereInput | UserGameEntryScalarWhereInput[]
  }

  export type PlayabilityInfoUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<PlayabilityInfoCreateWithoutGameInput, PlayabilityInfoUncheckedCreateWithoutGameInput> | PlayabilityInfoCreateWithoutGameInput[] | PlayabilityInfoUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlayabilityInfoCreateOrConnectWithoutGameInput | PlayabilityInfoCreateOrConnectWithoutGameInput[]
    upsert?: PlayabilityInfoUpsertWithWhereUniqueWithoutGameInput | PlayabilityInfoUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: PlayabilityInfoCreateManyGameInputEnvelope
    set?: PlayabilityInfoWhereUniqueInput | PlayabilityInfoWhereUniqueInput[]
    disconnect?: PlayabilityInfoWhereUniqueInput | PlayabilityInfoWhereUniqueInput[]
    delete?: PlayabilityInfoWhereUniqueInput | PlayabilityInfoWhereUniqueInput[]
    connect?: PlayabilityInfoWhereUniqueInput | PlayabilityInfoWhereUniqueInput[]
    update?: PlayabilityInfoUpdateWithWhereUniqueWithoutGameInput | PlayabilityInfoUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: PlayabilityInfoUpdateManyWithWhereWithoutGameInput | PlayabilityInfoUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: PlayabilityInfoScalarWhereInput | PlayabilityInfoScalarWhereInput[]
  }

  export type ResourceLinkUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<ResourceLinkCreateWithoutGameInput, ResourceLinkUncheckedCreateWithoutGameInput> | ResourceLinkCreateWithoutGameInput[] | ResourceLinkUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ResourceLinkCreateOrConnectWithoutGameInput | ResourceLinkCreateOrConnectWithoutGameInput[]
    upsert?: ResourceLinkUpsertWithWhereUniqueWithoutGameInput | ResourceLinkUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: ResourceLinkCreateManyGameInputEnvelope
    set?: ResourceLinkWhereUniqueInput | ResourceLinkWhereUniqueInput[]
    disconnect?: ResourceLinkWhereUniqueInput | ResourceLinkWhereUniqueInput[]
    delete?: ResourceLinkWhereUniqueInput | ResourceLinkWhereUniqueInput[]
    connect?: ResourceLinkWhereUniqueInput | ResourceLinkWhereUniqueInput[]
    update?: ResourceLinkUpdateWithWhereUniqueWithoutGameInput | ResourceLinkUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: ResourceLinkUpdateManyWithWhereWithoutGameInput | ResourceLinkUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: ResourceLinkScalarWhereInput | ResourceLinkScalarWhereInput[]
  }

  export type UserGameEntryUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<UserGameEntryCreateWithoutGameInput, UserGameEntryUncheckedCreateWithoutGameInput> | UserGameEntryCreateWithoutGameInput[] | UserGameEntryUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameEntryCreateOrConnectWithoutGameInput | UserGameEntryCreateOrConnectWithoutGameInput[]
    upsert?: UserGameEntryUpsertWithWhereUniqueWithoutGameInput | UserGameEntryUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: UserGameEntryCreateManyGameInputEnvelope
    set?: UserGameEntryWhereUniqueInput | UserGameEntryWhereUniqueInput[]
    disconnect?: UserGameEntryWhereUniqueInput | UserGameEntryWhereUniqueInput[]
    delete?: UserGameEntryWhereUniqueInput | UserGameEntryWhereUniqueInput[]
    connect?: UserGameEntryWhereUniqueInput | UserGameEntryWhereUniqueInput[]
    update?: UserGameEntryUpdateWithWhereUniqueWithoutGameInput | UserGameEntryUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: UserGameEntryUpdateManyWithWhereWithoutGameInput | UserGameEntryUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: UserGameEntryScalarWhereInput | UserGameEntryScalarWhereInput[]
  }

  export type PlayabilityInfoCreatemodernAvailabilityInput = {
    set: string[]
  }

  export type PlayabilityInfoCreatedigitalStoreLinksInput = {
    set: string[]
  }

  export type PlayabilityInfoCreatesubscriptionServicesInput = {
    set: string[]
  }

  export type PlayabilityInfoCreatelanguageOptionsInput = {
    set: string[]
  }

  export type PlayabilityInfoCreatequalityOfLifeFeaturesInput = {
    set: string[]
  }

  export type GameCreateNestedOneWithoutPlayabilityInfoInput = {
    create?: XOR<GameCreateWithoutPlayabilityInfoInput, GameUncheckedCreateWithoutPlayabilityInfoInput>
    connectOrCreate?: GameCreateOrConnectWithoutPlayabilityInfoInput
    connect?: GameWhereUniqueInput
  }

  export type PlayabilityInfoUpdatemodernAvailabilityInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PlayabilityInfoUpdatedigitalStoreLinksInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PlayabilityInfoUpdatesubscriptionServicesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PlayabilityInfoUpdatelanguageOptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PlayabilityInfoUpdatequalityOfLifeFeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GameUpdateOneRequiredWithoutPlayabilityInfoNestedInput = {
    create?: XOR<GameCreateWithoutPlayabilityInfoInput, GameUncheckedCreateWithoutPlayabilityInfoInput>
    connectOrCreate?: GameCreateOrConnectWithoutPlayabilityInfoInput
    upsert?: GameUpsertWithoutPlayabilityInfoInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutPlayabilityInfoInput, GameUpdateWithoutPlayabilityInfoInput>, GameUncheckedUpdateWithoutPlayabilityInfoInput>
  }

  export type GameCreateNestedOneWithoutResourceLinksInput = {
    create?: XOR<GameCreateWithoutResourceLinksInput, GameUncheckedCreateWithoutResourceLinksInput>
    connectOrCreate?: GameCreateOrConnectWithoutResourceLinksInput
    connect?: GameWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GameUpdateOneRequiredWithoutResourceLinksNestedInput = {
    create?: XOR<GameCreateWithoutResourceLinksInput, GameUncheckedCreateWithoutResourceLinksInput>
    connectOrCreate?: GameCreateOrConnectWithoutResourceLinksInput
    upsert?: GameUpsertWithoutResourceLinksInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutResourceLinksInput, GameUpdateWithoutResourceLinksInput>, GameUncheckedUpdateWithoutResourceLinksInput>
  }

  export type UserCreateNestedOneWithoutGameEntriesInput = {
    create?: XOR<UserCreateWithoutGameEntriesInput, UserUncheckedCreateWithoutGameEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutUserEntriesInput = {
    create?: XOR<GameCreateWithoutUserEntriesInput, GameUncheckedCreateWithoutUserEntriesInput>
    connectOrCreate?: GameCreateOrConnectWithoutUserEntriesInput
    connect?: GameWhereUniqueInput
  }

  export type EnumGameStatusFieldUpdateOperationsInput = {
    set?: $Enums.GameStatus
  }

  export type UserUpdateOneRequiredWithoutGameEntriesNestedInput = {
    create?: XOR<UserCreateWithoutGameEntriesInput, UserUncheckedCreateWithoutGameEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameEntriesInput
    upsert?: UserUpsertWithoutGameEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGameEntriesInput, UserUpdateWithoutGameEntriesInput>, UserUncheckedUpdateWithoutGameEntriesInput>
  }

  export type GameUpdateOneRequiredWithoutUserEntriesNestedInput = {
    create?: XOR<GameCreateWithoutUserEntriesInput, GameUncheckedCreateWithoutUserEntriesInput>
    connectOrCreate?: GameCreateOrConnectWithoutUserEntriesInput
    upsert?: GameUpsertWithoutUserEntriesInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutUserEntriesInput, GameUpdateWithoutUserEntriesInput>, GameUncheckedUpdateWithoutUserEntriesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type NestedEnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type UserGameEntryCreateWithoutUserInput = {
    id?: string
    status: $Enums.GameStatus
    rating?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game: GameCreateNestedOneWithoutUserEntriesInput
  }

  export type UserGameEntryUncheckedCreateWithoutUserInput = {
    id?: string
    status: $Enums.GameStatus
    rating?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gameId: string
  }

  export type UserGameEntryCreateOrConnectWithoutUserInput = {
    where: UserGameEntryWhereUniqueInput
    create: XOR<UserGameEntryCreateWithoutUserInput, UserGameEntryUncheckedCreateWithoutUserInput>
  }

  export type UserGameEntryCreateManyUserInputEnvelope = {
    data: UserGameEntryCreateManyUserInput | UserGameEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserGameEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: UserGameEntryWhereUniqueInput
    update: XOR<UserGameEntryUpdateWithoutUserInput, UserGameEntryUncheckedUpdateWithoutUserInput>
    create: XOR<UserGameEntryCreateWithoutUserInput, UserGameEntryUncheckedCreateWithoutUserInput>
  }

  export type UserGameEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: UserGameEntryWhereUniqueInput
    data: XOR<UserGameEntryUpdateWithoutUserInput, UserGameEntryUncheckedUpdateWithoutUserInput>
  }

  export type UserGameEntryUpdateManyWithWhereWithoutUserInput = {
    where: UserGameEntryScalarWhereInput
    data: XOR<UserGameEntryUpdateManyMutationInput, UserGameEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type UserGameEntryScalarWhereInput = {
    AND?: UserGameEntryScalarWhereInput | UserGameEntryScalarWhereInput[]
    OR?: UserGameEntryScalarWhereInput[]
    NOT?: UserGameEntryScalarWhereInput | UserGameEntryScalarWhereInput[]
    id?: StringFilter<"UserGameEntry"> | string
    status?: EnumGameStatusFilter<"UserGameEntry"> | $Enums.GameStatus
    rating?: IntNullableFilter<"UserGameEntry"> | number | null
    notes?: StringNullableFilter<"UserGameEntry"> | string | null
    createdAt?: DateTimeFilter<"UserGameEntry"> | Date | string
    updatedAt?: DateTimeFilter<"UserGameEntry"> | Date | string
    userId?: StringFilter<"UserGameEntry"> | string
    gameId?: StringFilter<"UserGameEntry"> | string
  }

  export type PlayabilityInfoCreateWithoutGameInput = {
    id?: string
    platform: string
    modernAvailability?: PlayabilityInfoCreatemodernAvailabilityInput | string[]
    originalPlatform?: string | null
    digitalStoreLinks?: PlayabilityInfoCreatedigitalStoreLinksInput | string[]
    subscriptionServices?: PlayabilityInfoCreatesubscriptionServicesInput | string[]
    regionRestrictions?: string | null
    languageOptions?: PlayabilityInfoCreatelanguageOptionsInput | string[]
    notableVersionDiffs?: string | null
    qualityOfLifeFeatures?: PlayabilityInfoCreatequalityOfLifeFeaturesInput | string[]
    systemRequirements?: string | null
  }

  export type PlayabilityInfoUncheckedCreateWithoutGameInput = {
    id?: string
    platform: string
    modernAvailability?: PlayabilityInfoCreatemodernAvailabilityInput | string[]
    originalPlatform?: string | null
    digitalStoreLinks?: PlayabilityInfoCreatedigitalStoreLinksInput | string[]
    subscriptionServices?: PlayabilityInfoCreatesubscriptionServicesInput | string[]
    regionRestrictions?: string | null
    languageOptions?: PlayabilityInfoCreatelanguageOptionsInput | string[]
    notableVersionDiffs?: string | null
    qualityOfLifeFeatures?: PlayabilityInfoCreatequalityOfLifeFeaturesInput | string[]
    systemRequirements?: string | null
  }

  export type PlayabilityInfoCreateOrConnectWithoutGameInput = {
    where: PlayabilityInfoWhereUniqueInput
    create: XOR<PlayabilityInfoCreateWithoutGameInput, PlayabilityInfoUncheckedCreateWithoutGameInput>
  }

  export type PlayabilityInfoCreateManyGameInputEnvelope = {
    data: PlayabilityInfoCreateManyGameInput | PlayabilityInfoCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type ResourceLinkCreateWithoutGameInput = {
    id?: string
    type: string
    url: string
    title: string
    sourceCreator?: string | null
    description?: string | null
    communityRating?: number | null
    lastVerifiedAt?: Date | string | null
  }

  export type ResourceLinkUncheckedCreateWithoutGameInput = {
    id?: string
    type: string
    url: string
    title: string
    sourceCreator?: string | null
    description?: string | null
    communityRating?: number | null
    lastVerifiedAt?: Date | string | null
  }

  export type ResourceLinkCreateOrConnectWithoutGameInput = {
    where: ResourceLinkWhereUniqueInput
    create: XOR<ResourceLinkCreateWithoutGameInput, ResourceLinkUncheckedCreateWithoutGameInput>
  }

  export type ResourceLinkCreateManyGameInputEnvelope = {
    data: ResourceLinkCreateManyGameInput | ResourceLinkCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type UserGameEntryCreateWithoutGameInput = {
    id?: string
    status: $Enums.GameStatus
    rating?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGameEntriesInput
  }

  export type UserGameEntryUncheckedCreateWithoutGameInput = {
    id?: string
    status: $Enums.GameStatus
    rating?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type UserGameEntryCreateOrConnectWithoutGameInput = {
    where: UserGameEntryWhereUniqueInput
    create: XOR<UserGameEntryCreateWithoutGameInput, UserGameEntryUncheckedCreateWithoutGameInput>
  }

  export type UserGameEntryCreateManyGameInputEnvelope = {
    data: UserGameEntryCreateManyGameInput | UserGameEntryCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type PlayabilityInfoUpsertWithWhereUniqueWithoutGameInput = {
    where: PlayabilityInfoWhereUniqueInput
    update: XOR<PlayabilityInfoUpdateWithoutGameInput, PlayabilityInfoUncheckedUpdateWithoutGameInput>
    create: XOR<PlayabilityInfoCreateWithoutGameInput, PlayabilityInfoUncheckedCreateWithoutGameInput>
  }

  export type PlayabilityInfoUpdateWithWhereUniqueWithoutGameInput = {
    where: PlayabilityInfoWhereUniqueInput
    data: XOR<PlayabilityInfoUpdateWithoutGameInput, PlayabilityInfoUncheckedUpdateWithoutGameInput>
  }

  export type PlayabilityInfoUpdateManyWithWhereWithoutGameInput = {
    where: PlayabilityInfoScalarWhereInput
    data: XOR<PlayabilityInfoUpdateManyMutationInput, PlayabilityInfoUncheckedUpdateManyWithoutGameInput>
  }

  export type PlayabilityInfoScalarWhereInput = {
    AND?: PlayabilityInfoScalarWhereInput | PlayabilityInfoScalarWhereInput[]
    OR?: PlayabilityInfoScalarWhereInput[]
    NOT?: PlayabilityInfoScalarWhereInput | PlayabilityInfoScalarWhereInput[]
    id?: StringFilter<"PlayabilityInfo"> | string
    platform?: StringFilter<"PlayabilityInfo"> | string
    modernAvailability?: StringNullableListFilter<"PlayabilityInfo">
    originalPlatform?: StringNullableFilter<"PlayabilityInfo"> | string | null
    digitalStoreLinks?: StringNullableListFilter<"PlayabilityInfo">
    subscriptionServices?: StringNullableListFilter<"PlayabilityInfo">
    regionRestrictions?: StringNullableFilter<"PlayabilityInfo"> | string | null
    languageOptions?: StringNullableListFilter<"PlayabilityInfo">
    notableVersionDiffs?: StringNullableFilter<"PlayabilityInfo"> | string | null
    qualityOfLifeFeatures?: StringNullableListFilter<"PlayabilityInfo">
    systemRequirements?: StringNullableFilter<"PlayabilityInfo"> | string | null
    gameId?: StringFilter<"PlayabilityInfo"> | string
  }

  export type ResourceLinkUpsertWithWhereUniqueWithoutGameInput = {
    where: ResourceLinkWhereUniqueInput
    update: XOR<ResourceLinkUpdateWithoutGameInput, ResourceLinkUncheckedUpdateWithoutGameInput>
    create: XOR<ResourceLinkCreateWithoutGameInput, ResourceLinkUncheckedCreateWithoutGameInput>
  }

  export type ResourceLinkUpdateWithWhereUniqueWithoutGameInput = {
    where: ResourceLinkWhereUniqueInput
    data: XOR<ResourceLinkUpdateWithoutGameInput, ResourceLinkUncheckedUpdateWithoutGameInput>
  }

  export type ResourceLinkUpdateManyWithWhereWithoutGameInput = {
    where: ResourceLinkScalarWhereInput
    data: XOR<ResourceLinkUpdateManyMutationInput, ResourceLinkUncheckedUpdateManyWithoutGameInput>
  }

  export type ResourceLinkScalarWhereInput = {
    AND?: ResourceLinkScalarWhereInput | ResourceLinkScalarWhereInput[]
    OR?: ResourceLinkScalarWhereInput[]
    NOT?: ResourceLinkScalarWhereInput | ResourceLinkScalarWhereInput[]
    id?: StringFilter<"ResourceLink"> | string
    type?: StringFilter<"ResourceLink"> | string
    url?: StringFilter<"ResourceLink"> | string
    title?: StringFilter<"ResourceLink"> | string
    sourceCreator?: StringNullableFilter<"ResourceLink"> | string | null
    description?: StringNullableFilter<"ResourceLink"> | string | null
    communityRating?: FloatNullableFilter<"ResourceLink"> | number | null
    lastVerifiedAt?: DateTimeNullableFilter<"ResourceLink"> | Date | string | null
    gameId?: StringFilter<"ResourceLink"> | string
  }

  export type UserGameEntryUpsertWithWhereUniqueWithoutGameInput = {
    where: UserGameEntryWhereUniqueInput
    update: XOR<UserGameEntryUpdateWithoutGameInput, UserGameEntryUncheckedUpdateWithoutGameInput>
    create: XOR<UserGameEntryCreateWithoutGameInput, UserGameEntryUncheckedCreateWithoutGameInput>
  }

  export type UserGameEntryUpdateWithWhereUniqueWithoutGameInput = {
    where: UserGameEntryWhereUniqueInput
    data: XOR<UserGameEntryUpdateWithoutGameInput, UserGameEntryUncheckedUpdateWithoutGameInput>
  }

  export type UserGameEntryUpdateManyWithWhereWithoutGameInput = {
    where: UserGameEntryScalarWhereInput
    data: XOR<UserGameEntryUpdateManyMutationInput, UserGameEntryUncheckedUpdateManyWithoutGameInput>
  }

  export type GameCreateWithoutPlayabilityInfoInput = {
    id?: string
    title: string
    alternativeTitles?: GameCreatealternativeTitlesInput | string[]
    releaseDate?: Date | string | null
    developer?: string | null
    publisher?: string | null
    genre?: string | null
    subgenre?: string | null
    beginnerFriendliness?: number | null
    modernPlayabilityScore?: number | null
    estimatedCompletionTime?: string | null
    synopsis?: string | null
    isEntryPoint?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resourceLinks?: ResourceLinkCreateNestedManyWithoutGameInput
    userEntries?: UserGameEntryCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutPlayabilityInfoInput = {
    id?: string
    title: string
    alternativeTitles?: GameCreatealternativeTitlesInput | string[]
    releaseDate?: Date | string | null
    developer?: string | null
    publisher?: string | null
    genre?: string | null
    subgenre?: string | null
    beginnerFriendliness?: number | null
    modernPlayabilityScore?: number | null
    estimatedCompletionTime?: string | null
    synopsis?: string | null
    isEntryPoint?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resourceLinks?: ResourceLinkUncheckedCreateNestedManyWithoutGameInput
    userEntries?: UserGameEntryUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPlayabilityInfoInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPlayabilityInfoInput, GameUncheckedCreateWithoutPlayabilityInfoInput>
  }

  export type GameUpsertWithoutPlayabilityInfoInput = {
    update: XOR<GameUpdateWithoutPlayabilityInfoInput, GameUncheckedUpdateWithoutPlayabilityInfoInput>
    create: XOR<GameCreateWithoutPlayabilityInfoInput, GameUncheckedCreateWithoutPlayabilityInfoInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutPlayabilityInfoInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutPlayabilityInfoInput, GameUncheckedUpdateWithoutPlayabilityInfoInput>
  }

  export type GameUpdateWithoutPlayabilityInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    alternativeTitles?: GameUpdatealternativeTitlesInput | string[]
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    beginnerFriendliness?: NullableIntFieldUpdateOperationsInput | number | null
    modernPlayabilityScore?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedCompletionTime?: NullableStringFieldUpdateOperationsInput | string | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    isEntryPoint?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resourceLinks?: ResourceLinkUpdateManyWithoutGameNestedInput
    userEntries?: UserGameEntryUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutPlayabilityInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    alternativeTitles?: GameUpdatealternativeTitlesInput | string[]
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    beginnerFriendliness?: NullableIntFieldUpdateOperationsInput | number | null
    modernPlayabilityScore?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedCompletionTime?: NullableStringFieldUpdateOperationsInput | string | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    isEntryPoint?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resourceLinks?: ResourceLinkUncheckedUpdateManyWithoutGameNestedInput
    userEntries?: UserGameEntryUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateWithoutResourceLinksInput = {
    id?: string
    title: string
    alternativeTitles?: GameCreatealternativeTitlesInput | string[]
    releaseDate?: Date | string | null
    developer?: string | null
    publisher?: string | null
    genre?: string | null
    subgenre?: string | null
    beginnerFriendliness?: number | null
    modernPlayabilityScore?: number | null
    estimatedCompletionTime?: string | null
    synopsis?: string | null
    isEntryPoint?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playabilityInfo?: PlayabilityInfoCreateNestedManyWithoutGameInput
    userEntries?: UserGameEntryCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutResourceLinksInput = {
    id?: string
    title: string
    alternativeTitles?: GameCreatealternativeTitlesInput | string[]
    releaseDate?: Date | string | null
    developer?: string | null
    publisher?: string | null
    genre?: string | null
    subgenre?: string | null
    beginnerFriendliness?: number | null
    modernPlayabilityScore?: number | null
    estimatedCompletionTime?: string | null
    synopsis?: string | null
    isEntryPoint?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playabilityInfo?: PlayabilityInfoUncheckedCreateNestedManyWithoutGameInput
    userEntries?: UserGameEntryUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutResourceLinksInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutResourceLinksInput, GameUncheckedCreateWithoutResourceLinksInput>
  }

  export type GameUpsertWithoutResourceLinksInput = {
    update: XOR<GameUpdateWithoutResourceLinksInput, GameUncheckedUpdateWithoutResourceLinksInput>
    create: XOR<GameCreateWithoutResourceLinksInput, GameUncheckedCreateWithoutResourceLinksInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutResourceLinksInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutResourceLinksInput, GameUncheckedUpdateWithoutResourceLinksInput>
  }

  export type GameUpdateWithoutResourceLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    alternativeTitles?: GameUpdatealternativeTitlesInput | string[]
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    beginnerFriendliness?: NullableIntFieldUpdateOperationsInput | number | null
    modernPlayabilityScore?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedCompletionTime?: NullableStringFieldUpdateOperationsInput | string | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    isEntryPoint?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playabilityInfo?: PlayabilityInfoUpdateManyWithoutGameNestedInput
    userEntries?: UserGameEntryUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutResourceLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    alternativeTitles?: GameUpdatealternativeTitlesInput | string[]
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    beginnerFriendliness?: NullableIntFieldUpdateOperationsInput | number | null
    modernPlayabilityScore?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedCompletionTime?: NullableStringFieldUpdateOperationsInput | string | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    isEntryPoint?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playabilityInfo?: PlayabilityInfoUncheckedUpdateManyWithoutGameNestedInput
    userEntries?: UserGameEntryUncheckedUpdateManyWithoutGameNestedInput
  }

  export type UserCreateWithoutGameEntriesInput = {
    id?: string
    username: string
    email: string
    auth0Sub: string
    createdAt?: Date | string
    updatedAt?: Date | string
    theme?: string | null
    ownedPlatforms?: UserCreateownedPlatformsInput | string[]
    preferredGenres?: UserCreatepreferredGenresInput | string[]
  }

  export type UserUncheckedCreateWithoutGameEntriesInput = {
    id?: string
    username: string
    email: string
    auth0Sub: string
    createdAt?: Date | string
    updatedAt?: Date | string
    theme?: string | null
    ownedPlatforms?: UserCreateownedPlatformsInput | string[]
    preferredGenres?: UserCreatepreferredGenresInput | string[]
  }

  export type UserCreateOrConnectWithoutGameEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGameEntriesInput, UserUncheckedCreateWithoutGameEntriesInput>
  }

  export type GameCreateWithoutUserEntriesInput = {
    id?: string
    title: string
    alternativeTitles?: GameCreatealternativeTitlesInput | string[]
    releaseDate?: Date | string | null
    developer?: string | null
    publisher?: string | null
    genre?: string | null
    subgenre?: string | null
    beginnerFriendliness?: number | null
    modernPlayabilityScore?: number | null
    estimatedCompletionTime?: string | null
    synopsis?: string | null
    isEntryPoint?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playabilityInfo?: PlayabilityInfoCreateNestedManyWithoutGameInput
    resourceLinks?: ResourceLinkCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutUserEntriesInput = {
    id?: string
    title: string
    alternativeTitles?: GameCreatealternativeTitlesInput | string[]
    releaseDate?: Date | string | null
    developer?: string | null
    publisher?: string | null
    genre?: string | null
    subgenre?: string | null
    beginnerFriendliness?: number | null
    modernPlayabilityScore?: number | null
    estimatedCompletionTime?: string | null
    synopsis?: string | null
    isEntryPoint?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playabilityInfo?: PlayabilityInfoUncheckedCreateNestedManyWithoutGameInput
    resourceLinks?: ResourceLinkUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutUserEntriesInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutUserEntriesInput, GameUncheckedCreateWithoutUserEntriesInput>
  }

  export type UserUpsertWithoutGameEntriesInput = {
    update: XOR<UserUpdateWithoutGameEntriesInput, UserUncheckedUpdateWithoutGameEntriesInput>
    create: XOR<UserCreateWithoutGameEntriesInput, UserUncheckedCreateWithoutGameEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGameEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGameEntriesInput, UserUncheckedUpdateWithoutGameEntriesInput>
  }

  export type UserUpdateWithoutGameEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    auth0Sub?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    ownedPlatforms?: UserUpdateownedPlatformsInput | string[]
    preferredGenres?: UserUpdatepreferredGenresInput | string[]
  }

  export type UserUncheckedUpdateWithoutGameEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    auth0Sub?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    ownedPlatforms?: UserUpdateownedPlatformsInput | string[]
    preferredGenres?: UserUpdatepreferredGenresInput | string[]
  }

  export type GameUpsertWithoutUserEntriesInput = {
    update: XOR<GameUpdateWithoutUserEntriesInput, GameUncheckedUpdateWithoutUserEntriesInput>
    create: XOR<GameCreateWithoutUserEntriesInput, GameUncheckedCreateWithoutUserEntriesInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutUserEntriesInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutUserEntriesInput, GameUncheckedUpdateWithoutUserEntriesInput>
  }

  export type GameUpdateWithoutUserEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    alternativeTitles?: GameUpdatealternativeTitlesInput | string[]
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    beginnerFriendliness?: NullableIntFieldUpdateOperationsInput | number | null
    modernPlayabilityScore?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedCompletionTime?: NullableStringFieldUpdateOperationsInput | string | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    isEntryPoint?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playabilityInfo?: PlayabilityInfoUpdateManyWithoutGameNestedInput
    resourceLinks?: ResourceLinkUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutUserEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    alternativeTitles?: GameUpdatealternativeTitlesInput | string[]
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    beginnerFriendliness?: NullableIntFieldUpdateOperationsInput | number | null
    modernPlayabilityScore?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedCompletionTime?: NullableStringFieldUpdateOperationsInput | string | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    isEntryPoint?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playabilityInfo?: PlayabilityInfoUncheckedUpdateManyWithoutGameNestedInput
    resourceLinks?: ResourceLinkUncheckedUpdateManyWithoutGameNestedInput
  }

  export type UserGameEntryCreateManyUserInput = {
    id?: string
    status: $Enums.GameStatus
    rating?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gameId: string
  }

  export type UserGameEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutUserEntriesNestedInput
  }

  export type UserGameEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type UserGameEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type PlayabilityInfoCreateManyGameInput = {
    id?: string
    platform: string
    modernAvailability?: PlayabilityInfoCreatemodernAvailabilityInput | string[]
    originalPlatform?: string | null
    digitalStoreLinks?: PlayabilityInfoCreatedigitalStoreLinksInput | string[]
    subscriptionServices?: PlayabilityInfoCreatesubscriptionServicesInput | string[]
    regionRestrictions?: string | null
    languageOptions?: PlayabilityInfoCreatelanguageOptionsInput | string[]
    notableVersionDiffs?: string | null
    qualityOfLifeFeatures?: PlayabilityInfoCreatequalityOfLifeFeaturesInput | string[]
    systemRequirements?: string | null
  }

  export type ResourceLinkCreateManyGameInput = {
    id?: string
    type: string
    url: string
    title: string
    sourceCreator?: string | null
    description?: string | null
    communityRating?: number | null
    lastVerifiedAt?: Date | string | null
  }

  export type UserGameEntryCreateManyGameInput = {
    id?: string
    status: $Enums.GameStatus
    rating?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PlayabilityInfoUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    modernAvailability?: PlayabilityInfoUpdatemodernAvailabilityInput | string[]
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    digitalStoreLinks?: PlayabilityInfoUpdatedigitalStoreLinksInput | string[]
    subscriptionServices?: PlayabilityInfoUpdatesubscriptionServicesInput | string[]
    regionRestrictions?: NullableStringFieldUpdateOperationsInput | string | null
    languageOptions?: PlayabilityInfoUpdatelanguageOptionsInput | string[]
    notableVersionDiffs?: NullableStringFieldUpdateOperationsInput | string | null
    qualityOfLifeFeatures?: PlayabilityInfoUpdatequalityOfLifeFeaturesInput | string[]
    systemRequirements?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayabilityInfoUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    modernAvailability?: PlayabilityInfoUpdatemodernAvailabilityInput | string[]
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    digitalStoreLinks?: PlayabilityInfoUpdatedigitalStoreLinksInput | string[]
    subscriptionServices?: PlayabilityInfoUpdatesubscriptionServicesInput | string[]
    regionRestrictions?: NullableStringFieldUpdateOperationsInput | string | null
    languageOptions?: PlayabilityInfoUpdatelanguageOptionsInput | string[]
    notableVersionDiffs?: NullableStringFieldUpdateOperationsInput | string | null
    qualityOfLifeFeatures?: PlayabilityInfoUpdatequalityOfLifeFeaturesInput | string[]
    systemRequirements?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayabilityInfoUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    modernAvailability?: PlayabilityInfoUpdatemodernAvailabilityInput | string[]
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    digitalStoreLinks?: PlayabilityInfoUpdatedigitalStoreLinksInput | string[]
    subscriptionServices?: PlayabilityInfoUpdatesubscriptionServicesInput | string[]
    regionRestrictions?: NullableStringFieldUpdateOperationsInput | string | null
    languageOptions?: PlayabilityInfoUpdatelanguageOptionsInput | string[]
    notableVersionDiffs?: NullableStringFieldUpdateOperationsInput | string | null
    qualityOfLifeFeatures?: PlayabilityInfoUpdatequalityOfLifeFeaturesInput | string[]
    systemRequirements?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResourceLinkUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sourceCreator?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityRating?: NullableFloatFieldUpdateOperationsInput | number | null
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResourceLinkUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sourceCreator?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityRating?: NullableFloatFieldUpdateOperationsInput | number | null
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResourceLinkUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sourceCreator?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityRating?: NullableFloatFieldUpdateOperationsInput | number | null
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserGameEntryUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGameEntriesNestedInput
  }

  export type UserGameEntryUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserGameEntryUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
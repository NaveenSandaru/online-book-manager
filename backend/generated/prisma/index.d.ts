
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
 * Model checkout_history
 * 
 */
export type checkout_history = $Result.DefaultSelection<Prisma.$checkout_historyPayload>
/**
 * Model email_verifications
 * 
 */
export type email_verifications = $Result.DefaultSelection<Prisma.$email_verificationsPayload>
/**
 * Model shipping
 * 
 */
export type shipping = $Result.DefaultSelection<Prisma.$shippingPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Checkout_histories
 * const checkout_histories = await prisma.checkout_history.findMany()
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
   * // Fetch zero or more Checkout_histories
   * const checkout_histories = await prisma.checkout_history.findMany()
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
   * `prisma.checkout_history`: Exposes CRUD operations for the **checkout_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checkout_histories
    * const checkout_histories = await prisma.checkout_history.findMany()
    * ```
    */
  get checkout_history(): Prisma.checkout_historyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.email_verifications`: Exposes CRUD operations for the **email_verifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Email_verifications
    * const email_verifications = await prisma.email_verifications.findMany()
    * ```
    */
  get email_verifications(): Prisma.email_verificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipping`: Exposes CRUD operations for the **shipping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shippings
    * const shippings = await prisma.shipping.findMany()
    * ```
    */
  get shipping(): Prisma.shippingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    checkout_history: 'checkout_history',
    email_verifications: 'email_verifications',
    shipping: 'shipping',
    user: 'user'
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
      modelProps: "checkout_history" | "email_verifications" | "shipping" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      checkout_history: {
        payload: Prisma.$checkout_historyPayload<ExtArgs>
        fields: Prisma.checkout_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.checkout_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkout_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.checkout_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkout_historyPayload>
          }
          findFirst: {
            args: Prisma.checkout_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkout_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.checkout_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkout_historyPayload>
          }
          findMany: {
            args: Prisma.checkout_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkout_historyPayload>[]
          }
          create: {
            args: Prisma.checkout_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkout_historyPayload>
          }
          createMany: {
            args: Prisma.checkout_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.checkout_historyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkout_historyPayload>[]
          }
          delete: {
            args: Prisma.checkout_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkout_historyPayload>
          }
          update: {
            args: Prisma.checkout_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkout_historyPayload>
          }
          deleteMany: {
            args: Prisma.checkout_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.checkout_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.checkout_historyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkout_historyPayload>[]
          }
          upsert: {
            args: Prisma.checkout_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkout_historyPayload>
          }
          aggregate: {
            args: Prisma.Checkout_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckout_history>
          }
          groupBy: {
            args: Prisma.checkout_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Checkout_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.checkout_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Checkout_historyCountAggregateOutputType> | number
          }
        }
      }
      email_verifications: {
        payload: Prisma.$email_verificationsPayload<ExtArgs>
        fields: Prisma.email_verificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.email_verificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.email_verificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationsPayload>
          }
          findFirst: {
            args: Prisma.email_verificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.email_verificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationsPayload>
          }
          findMany: {
            args: Prisma.email_verificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationsPayload>[]
          }
          create: {
            args: Prisma.email_verificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationsPayload>
          }
          createMany: {
            args: Prisma.email_verificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.email_verificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationsPayload>[]
          }
          delete: {
            args: Prisma.email_verificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationsPayload>
          }
          update: {
            args: Prisma.email_verificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationsPayload>
          }
          deleteMany: {
            args: Prisma.email_verificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.email_verificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.email_verificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationsPayload>[]
          }
          upsert: {
            args: Prisma.email_verificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationsPayload>
          }
          aggregate: {
            args: Prisma.Email_verificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmail_verifications>
          }
          groupBy: {
            args: Prisma.email_verificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Email_verificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.email_verificationsCountArgs<ExtArgs>
            result: $Utils.Optional<Email_verificationsCountAggregateOutputType> | number
          }
        }
      }
      shipping: {
        payload: Prisma.$shippingPayload<ExtArgs>
        fields: Prisma.shippingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.shippingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shippingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.shippingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shippingPayload>
          }
          findFirst: {
            args: Prisma.shippingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shippingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.shippingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shippingPayload>
          }
          findMany: {
            args: Prisma.shippingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shippingPayload>[]
          }
          create: {
            args: Prisma.shippingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shippingPayload>
          }
          createMany: {
            args: Prisma.shippingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.shippingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shippingPayload>[]
          }
          delete: {
            args: Prisma.shippingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shippingPayload>
          }
          update: {
            args: Prisma.shippingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shippingPayload>
          }
          deleteMany: {
            args: Prisma.shippingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.shippingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.shippingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shippingPayload>[]
          }
          upsert: {
            args: Prisma.shippingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shippingPayload>
          }
          aggregate: {
            args: Prisma.ShippingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipping>
          }
          groupBy: {
            args: Prisma.shippingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShippingGroupByOutputType>[]
          }
          count: {
            args: Prisma.shippingCountArgs<ExtArgs>
            result: $Utils.Optional<ShippingCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
    checkout_history?: checkout_historyOmit
    email_verifications?: email_verificationsOmit
    shipping?: shippingOmit
    user?: userOmit
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
    checkout_history: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkout_history?: boolean | UserCountOutputTypeCountCheckout_historyArgs
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
  export type UserCountOutputTypeCountCheckout_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: checkout_historyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model checkout_history
   */

  export type AggregateCheckout_history = {
    _count: Checkout_historyCountAggregateOutputType | null
    _avg: Checkout_historyAvgAggregateOutputType | null
    _sum: Checkout_historySumAggregateOutputType | null
    _min: Checkout_historyMinAggregateOutputType | null
    _max: Checkout_historyMaxAggregateOutputType | null
  }

  export type Checkout_historyAvgAggregateOutputType = {
    total_price: Decimal | null
    qty: number | null
  }

  export type Checkout_historySumAggregateOutputType = {
    total_price: Decimal | null
    qty: number | null
  }

  export type Checkout_historyMinAggregateOutputType = {
    email: string | null
    book_isbn: string | null
    total_price: Decimal | null
    qty: number | null
    checkout_date_and_time: Date | null
  }

  export type Checkout_historyMaxAggregateOutputType = {
    email: string | null
    book_isbn: string | null
    total_price: Decimal | null
    qty: number | null
    checkout_date_and_time: Date | null
  }

  export type Checkout_historyCountAggregateOutputType = {
    email: number
    book_isbn: number
    total_price: number
    qty: number
    checkout_date_and_time: number
    _all: number
  }


  export type Checkout_historyAvgAggregateInputType = {
    total_price?: true
    qty?: true
  }

  export type Checkout_historySumAggregateInputType = {
    total_price?: true
    qty?: true
  }

  export type Checkout_historyMinAggregateInputType = {
    email?: true
    book_isbn?: true
    total_price?: true
    qty?: true
    checkout_date_and_time?: true
  }

  export type Checkout_historyMaxAggregateInputType = {
    email?: true
    book_isbn?: true
    total_price?: true
    qty?: true
    checkout_date_and_time?: true
  }

  export type Checkout_historyCountAggregateInputType = {
    email?: true
    book_isbn?: true
    total_price?: true
    qty?: true
    checkout_date_and_time?: true
    _all?: true
  }

  export type Checkout_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which checkout_history to aggregate.
     */
    where?: checkout_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of checkout_histories to fetch.
     */
    orderBy?: checkout_historyOrderByWithRelationInput | checkout_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: checkout_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` checkout_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` checkout_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned checkout_histories
    **/
    _count?: true | Checkout_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Checkout_historyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Checkout_historySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Checkout_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Checkout_historyMaxAggregateInputType
  }

  export type GetCheckout_historyAggregateType<T extends Checkout_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckout_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckout_history[P]>
      : GetScalarType<T[P], AggregateCheckout_history[P]>
  }




  export type checkout_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: checkout_historyWhereInput
    orderBy?: checkout_historyOrderByWithAggregationInput | checkout_historyOrderByWithAggregationInput[]
    by: Checkout_historyScalarFieldEnum[] | Checkout_historyScalarFieldEnum
    having?: checkout_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Checkout_historyCountAggregateInputType | true
    _avg?: Checkout_historyAvgAggregateInputType
    _sum?: Checkout_historySumAggregateInputType
    _min?: Checkout_historyMinAggregateInputType
    _max?: Checkout_historyMaxAggregateInputType
  }

  export type Checkout_historyGroupByOutputType = {
    email: string
    book_isbn: string
    total_price: Decimal
    qty: number
    checkout_date_and_time: Date
    _count: Checkout_historyCountAggregateOutputType | null
    _avg: Checkout_historyAvgAggregateOutputType | null
    _sum: Checkout_historySumAggregateOutputType | null
    _min: Checkout_historyMinAggregateOutputType | null
    _max: Checkout_historyMaxAggregateOutputType | null
  }

  type GetCheckout_historyGroupByPayload<T extends checkout_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Checkout_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Checkout_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Checkout_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Checkout_historyGroupByOutputType[P]>
        }
      >
    >


  export type checkout_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    book_isbn?: boolean
    total_price?: boolean
    qty?: boolean
    checkout_date_and_time?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkout_history"]>

  export type checkout_historySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    book_isbn?: boolean
    total_price?: boolean
    qty?: boolean
    checkout_date_and_time?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkout_history"]>

  export type checkout_historySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    book_isbn?: boolean
    total_price?: boolean
    qty?: boolean
    checkout_date_and_time?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkout_history"]>

  export type checkout_historySelectScalar = {
    email?: boolean
    book_isbn?: boolean
    total_price?: boolean
    qty?: boolean
    checkout_date_and_time?: boolean
  }

  export type checkout_historyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email" | "book_isbn" | "total_price" | "qty" | "checkout_date_and_time", ExtArgs["result"]["checkout_history"]>
  export type checkout_historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type checkout_historyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type checkout_historyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $checkout_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "checkout_history"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      email: string
      book_isbn: string
      total_price: Prisma.Decimal
      qty: number
      checkout_date_and_time: Date
    }, ExtArgs["result"]["checkout_history"]>
    composites: {}
  }

  type checkout_historyGetPayload<S extends boolean | null | undefined | checkout_historyDefaultArgs> = $Result.GetResult<Prisma.$checkout_historyPayload, S>

  type checkout_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<checkout_historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Checkout_historyCountAggregateInputType | true
    }

  export interface checkout_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['checkout_history'], meta: { name: 'checkout_history' } }
    /**
     * Find zero or one Checkout_history that matches the filter.
     * @param {checkout_historyFindUniqueArgs} args - Arguments to find a Checkout_history
     * @example
     * // Get one Checkout_history
     * const checkout_history = await prisma.checkout_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends checkout_historyFindUniqueArgs>(args: SelectSubset<T, checkout_historyFindUniqueArgs<ExtArgs>>): Prisma__checkout_historyClient<$Result.GetResult<Prisma.$checkout_historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Checkout_history that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {checkout_historyFindUniqueOrThrowArgs} args - Arguments to find a Checkout_history
     * @example
     * // Get one Checkout_history
     * const checkout_history = await prisma.checkout_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends checkout_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, checkout_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__checkout_historyClient<$Result.GetResult<Prisma.$checkout_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checkout_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checkout_historyFindFirstArgs} args - Arguments to find a Checkout_history
     * @example
     * // Get one Checkout_history
     * const checkout_history = await prisma.checkout_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends checkout_historyFindFirstArgs>(args?: SelectSubset<T, checkout_historyFindFirstArgs<ExtArgs>>): Prisma__checkout_historyClient<$Result.GetResult<Prisma.$checkout_historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checkout_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checkout_historyFindFirstOrThrowArgs} args - Arguments to find a Checkout_history
     * @example
     * // Get one Checkout_history
     * const checkout_history = await prisma.checkout_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends checkout_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, checkout_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__checkout_historyClient<$Result.GetResult<Prisma.$checkout_historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Checkout_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checkout_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checkout_histories
     * const checkout_histories = await prisma.checkout_history.findMany()
     * 
     * // Get first 10 Checkout_histories
     * const checkout_histories = await prisma.checkout_history.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const checkout_historyWithEmailOnly = await prisma.checkout_history.findMany({ select: { email: true } })
     * 
     */
    findMany<T extends checkout_historyFindManyArgs>(args?: SelectSubset<T, checkout_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$checkout_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Checkout_history.
     * @param {checkout_historyCreateArgs} args - Arguments to create a Checkout_history.
     * @example
     * // Create one Checkout_history
     * const Checkout_history = await prisma.checkout_history.create({
     *   data: {
     *     // ... data to create a Checkout_history
     *   }
     * })
     * 
     */
    create<T extends checkout_historyCreateArgs>(args: SelectSubset<T, checkout_historyCreateArgs<ExtArgs>>): Prisma__checkout_historyClient<$Result.GetResult<Prisma.$checkout_historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Checkout_histories.
     * @param {checkout_historyCreateManyArgs} args - Arguments to create many Checkout_histories.
     * @example
     * // Create many Checkout_histories
     * const checkout_history = await prisma.checkout_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends checkout_historyCreateManyArgs>(args?: SelectSubset<T, checkout_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Checkout_histories and returns the data saved in the database.
     * @param {checkout_historyCreateManyAndReturnArgs} args - Arguments to create many Checkout_histories.
     * @example
     * // Create many Checkout_histories
     * const checkout_history = await prisma.checkout_history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Checkout_histories and only return the `email`
     * const checkout_historyWithEmailOnly = await prisma.checkout_history.createManyAndReturn({
     *   select: { email: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends checkout_historyCreateManyAndReturnArgs>(args?: SelectSubset<T, checkout_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$checkout_historyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Checkout_history.
     * @param {checkout_historyDeleteArgs} args - Arguments to delete one Checkout_history.
     * @example
     * // Delete one Checkout_history
     * const Checkout_history = await prisma.checkout_history.delete({
     *   where: {
     *     // ... filter to delete one Checkout_history
     *   }
     * })
     * 
     */
    delete<T extends checkout_historyDeleteArgs>(args: SelectSubset<T, checkout_historyDeleteArgs<ExtArgs>>): Prisma__checkout_historyClient<$Result.GetResult<Prisma.$checkout_historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Checkout_history.
     * @param {checkout_historyUpdateArgs} args - Arguments to update one Checkout_history.
     * @example
     * // Update one Checkout_history
     * const checkout_history = await prisma.checkout_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends checkout_historyUpdateArgs>(args: SelectSubset<T, checkout_historyUpdateArgs<ExtArgs>>): Prisma__checkout_historyClient<$Result.GetResult<Prisma.$checkout_historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Checkout_histories.
     * @param {checkout_historyDeleteManyArgs} args - Arguments to filter Checkout_histories to delete.
     * @example
     * // Delete a few Checkout_histories
     * const { count } = await prisma.checkout_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends checkout_historyDeleteManyArgs>(args?: SelectSubset<T, checkout_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checkout_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checkout_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checkout_histories
     * const checkout_history = await prisma.checkout_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends checkout_historyUpdateManyArgs>(args: SelectSubset<T, checkout_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checkout_histories and returns the data updated in the database.
     * @param {checkout_historyUpdateManyAndReturnArgs} args - Arguments to update many Checkout_histories.
     * @example
     * // Update many Checkout_histories
     * const checkout_history = await prisma.checkout_history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Checkout_histories and only return the `email`
     * const checkout_historyWithEmailOnly = await prisma.checkout_history.updateManyAndReturn({
     *   select: { email: true },
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
    updateManyAndReturn<T extends checkout_historyUpdateManyAndReturnArgs>(args: SelectSubset<T, checkout_historyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$checkout_historyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Checkout_history.
     * @param {checkout_historyUpsertArgs} args - Arguments to update or create a Checkout_history.
     * @example
     * // Update or create a Checkout_history
     * const checkout_history = await prisma.checkout_history.upsert({
     *   create: {
     *     // ... data to create a Checkout_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Checkout_history we want to update
     *   }
     * })
     */
    upsert<T extends checkout_historyUpsertArgs>(args: SelectSubset<T, checkout_historyUpsertArgs<ExtArgs>>): Prisma__checkout_historyClient<$Result.GetResult<Prisma.$checkout_historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Checkout_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checkout_historyCountArgs} args - Arguments to filter Checkout_histories to count.
     * @example
     * // Count the number of Checkout_histories
     * const count = await prisma.checkout_history.count({
     *   where: {
     *     // ... the filter for the Checkout_histories we want to count
     *   }
     * })
    **/
    count<T extends checkout_historyCountArgs>(
      args?: Subset<T, checkout_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Checkout_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Checkout_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Checkout_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Checkout_historyAggregateArgs>(args: Subset<T, Checkout_historyAggregateArgs>): Prisma.PrismaPromise<GetCheckout_historyAggregateType<T>>

    /**
     * Group by Checkout_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checkout_historyGroupByArgs} args - Group by arguments.
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
      T extends checkout_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: checkout_historyGroupByArgs['orderBy'] }
        : { orderBy?: checkout_historyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, checkout_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckout_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the checkout_history model
   */
  readonly fields: checkout_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for checkout_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__checkout_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the checkout_history model
   */
  interface checkout_historyFieldRefs {
    readonly email: FieldRef<"checkout_history", 'String'>
    readonly book_isbn: FieldRef<"checkout_history", 'String'>
    readonly total_price: FieldRef<"checkout_history", 'Decimal'>
    readonly qty: FieldRef<"checkout_history", 'Int'>
    readonly checkout_date_and_time: FieldRef<"checkout_history", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * checkout_history findUnique
   */
  export type checkout_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkout_history
     */
    select?: checkout_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkout_history
     */
    omit?: checkout_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkout_historyInclude<ExtArgs> | null
    /**
     * Filter, which checkout_history to fetch.
     */
    where: checkout_historyWhereUniqueInput
  }

  /**
   * checkout_history findUniqueOrThrow
   */
  export type checkout_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkout_history
     */
    select?: checkout_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkout_history
     */
    omit?: checkout_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkout_historyInclude<ExtArgs> | null
    /**
     * Filter, which checkout_history to fetch.
     */
    where: checkout_historyWhereUniqueInput
  }

  /**
   * checkout_history findFirst
   */
  export type checkout_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkout_history
     */
    select?: checkout_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkout_history
     */
    omit?: checkout_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkout_historyInclude<ExtArgs> | null
    /**
     * Filter, which checkout_history to fetch.
     */
    where?: checkout_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of checkout_histories to fetch.
     */
    orderBy?: checkout_historyOrderByWithRelationInput | checkout_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for checkout_histories.
     */
    cursor?: checkout_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` checkout_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` checkout_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of checkout_histories.
     */
    distinct?: Checkout_historyScalarFieldEnum | Checkout_historyScalarFieldEnum[]
  }

  /**
   * checkout_history findFirstOrThrow
   */
  export type checkout_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkout_history
     */
    select?: checkout_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkout_history
     */
    omit?: checkout_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkout_historyInclude<ExtArgs> | null
    /**
     * Filter, which checkout_history to fetch.
     */
    where?: checkout_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of checkout_histories to fetch.
     */
    orderBy?: checkout_historyOrderByWithRelationInput | checkout_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for checkout_histories.
     */
    cursor?: checkout_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` checkout_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` checkout_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of checkout_histories.
     */
    distinct?: Checkout_historyScalarFieldEnum | Checkout_historyScalarFieldEnum[]
  }

  /**
   * checkout_history findMany
   */
  export type checkout_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkout_history
     */
    select?: checkout_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkout_history
     */
    omit?: checkout_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkout_historyInclude<ExtArgs> | null
    /**
     * Filter, which checkout_histories to fetch.
     */
    where?: checkout_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of checkout_histories to fetch.
     */
    orderBy?: checkout_historyOrderByWithRelationInput | checkout_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing checkout_histories.
     */
    cursor?: checkout_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` checkout_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` checkout_histories.
     */
    skip?: number
    distinct?: Checkout_historyScalarFieldEnum | Checkout_historyScalarFieldEnum[]
  }

  /**
   * checkout_history create
   */
  export type checkout_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkout_history
     */
    select?: checkout_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkout_history
     */
    omit?: checkout_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkout_historyInclude<ExtArgs> | null
    /**
     * The data needed to create a checkout_history.
     */
    data: XOR<checkout_historyCreateInput, checkout_historyUncheckedCreateInput>
  }

  /**
   * checkout_history createMany
   */
  export type checkout_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many checkout_histories.
     */
    data: checkout_historyCreateManyInput | checkout_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * checkout_history createManyAndReturn
   */
  export type checkout_historyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkout_history
     */
    select?: checkout_historySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the checkout_history
     */
    omit?: checkout_historyOmit<ExtArgs> | null
    /**
     * The data used to create many checkout_histories.
     */
    data: checkout_historyCreateManyInput | checkout_historyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkout_historyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * checkout_history update
   */
  export type checkout_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkout_history
     */
    select?: checkout_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkout_history
     */
    omit?: checkout_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkout_historyInclude<ExtArgs> | null
    /**
     * The data needed to update a checkout_history.
     */
    data: XOR<checkout_historyUpdateInput, checkout_historyUncheckedUpdateInput>
    /**
     * Choose, which checkout_history to update.
     */
    where: checkout_historyWhereUniqueInput
  }

  /**
   * checkout_history updateMany
   */
  export type checkout_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update checkout_histories.
     */
    data: XOR<checkout_historyUpdateManyMutationInput, checkout_historyUncheckedUpdateManyInput>
    /**
     * Filter which checkout_histories to update
     */
    where?: checkout_historyWhereInput
    /**
     * Limit how many checkout_histories to update.
     */
    limit?: number
  }

  /**
   * checkout_history updateManyAndReturn
   */
  export type checkout_historyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkout_history
     */
    select?: checkout_historySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the checkout_history
     */
    omit?: checkout_historyOmit<ExtArgs> | null
    /**
     * The data used to update checkout_histories.
     */
    data: XOR<checkout_historyUpdateManyMutationInput, checkout_historyUncheckedUpdateManyInput>
    /**
     * Filter which checkout_histories to update
     */
    where?: checkout_historyWhereInput
    /**
     * Limit how many checkout_histories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkout_historyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * checkout_history upsert
   */
  export type checkout_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkout_history
     */
    select?: checkout_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkout_history
     */
    omit?: checkout_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkout_historyInclude<ExtArgs> | null
    /**
     * The filter to search for the checkout_history to update in case it exists.
     */
    where: checkout_historyWhereUniqueInput
    /**
     * In case the checkout_history found by the `where` argument doesn't exist, create a new checkout_history with this data.
     */
    create: XOR<checkout_historyCreateInput, checkout_historyUncheckedCreateInput>
    /**
     * In case the checkout_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<checkout_historyUpdateInput, checkout_historyUncheckedUpdateInput>
  }

  /**
   * checkout_history delete
   */
  export type checkout_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkout_history
     */
    select?: checkout_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkout_history
     */
    omit?: checkout_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkout_historyInclude<ExtArgs> | null
    /**
     * Filter which checkout_history to delete.
     */
    where: checkout_historyWhereUniqueInput
  }

  /**
   * checkout_history deleteMany
   */
  export type checkout_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which checkout_histories to delete
     */
    where?: checkout_historyWhereInput
    /**
     * Limit how many checkout_histories to delete.
     */
    limit?: number
  }

  /**
   * checkout_history without action
   */
  export type checkout_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkout_history
     */
    select?: checkout_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkout_history
     */
    omit?: checkout_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkout_historyInclude<ExtArgs> | null
  }


  /**
   * Model email_verifications
   */

  export type AggregateEmail_verifications = {
    _count: Email_verificationsCountAggregateOutputType | null
    _min: Email_verificationsMinAggregateOutputType | null
    _max: Email_verificationsMaxAggregateOutputType | null
  }

  export type Email_verificationsMinAggregateOutputType = {
    email: string | null
    code: string | null
  }

  export type Email_verificationsMaxAggregateOutputType = {
    email: string | null
    code: string | null
  }

  export type Email_verificationsCountAggregateOutputType = {
    email: number
    code: number
    _all: number
  }


  export type Email_verificationsMinAggregateInputType = {
    email?: true
    code?: true
  }

  export type Email_verificationsMaxAggregateInputType = {
    email?: true
    code?: true
  }

  export type Email_verificationsCountAggregateInputType = {
    email?: true
    code?: true
    _all?: true
  }

  export type Email_verificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_verifications to aggregate.
     */
    where?: email_verificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verifications to fetch.
     */
    orderBy?: email_verificationsOrderByWithRelationInput | email_verificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: email_verificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned email_verifications
    **/
    _count?: true | Email_verificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Email_verificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Email_verificationsMaxAggregateInputType
  }

  export type GetEmail_verificationsAggregateType<T extends Email_verificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateEmail_verifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail_verifications[P]>
      : GetScalarType<T[P], AggregateEmail_verifications[P]>
  }




  export type email_verificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: email_verificationsWhereInput
    orderBy?: email_verificationsOrderByWithAggregationInput | email_verificationsOrderByWithAggregationInput[]
    by: Email_verificationsScalarFieldEnum[] | Email_verificationsScalarFieldEnum
    having?: email_verificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Email_verificationsCountAggregateInputType | true
    _min?: Email_verificationsMinAggregateInputType
    _max?: Email_verificationsMaxAggregateInputType
  }

  export type Email_verificationsGroupByOutputType = {
    email: string
    code: string
    _count: Email_verificationsCountAggregateOutputType | null
    _min: Email_verificationsMinAggregateOutputType | null
    _max: Email_verificationsMaxAggregateOutputType | null
  }

  type GetEmail_verificationsGroupByPayload<T extends email_verificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Email_verificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Email_verificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Email_verificationsGroupByOutputType[P]>
            : GetScalarType<T[P], Email_verificationsGroupByOutputType[P]>
        }
      >
    >


  export type email_verificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    code?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email_verifications"]>

  export type email_verificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    code?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email_verifications"]>

  export type email_verificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    code?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email_verifications"]>

  export type email_verificationsSelectScalar = {
    email?: boolean
    code?: boolean
  }

  export type email_verificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email" | "code", ExtArgs["result"]["email_verifications"]>
  export type email_verificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type email_verificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type email_verificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $email_verificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "email_verifications"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      email: string
      code: string
    }, ExtArgs["result"]["email_verifications"]>
    composites: {}
  }

  type email_verificationsGetPayload<S extends boolean | null | undefined | email_verificationsDefaultArgs> = $Result.GetResult<Prisma.$email_verificationsPayload, S>

  type email_verificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<email_verificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Email_verificationsCountAggregateInputType | true
    }

  export interface email_verificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['email_verifications'], meta: { name: 'email_verifications' } }
    /**
     * Find zero or one Email_verifications that matches the filter.
     * @param {email_verificationsFindUniqueArgs} args - Arguments to find a Email_verifications
     * @example
     * // Get one Email_verifications
     * const email_verifications = await prisma.email_verifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends email_verificationsFindUniqueArgs>(args: SelectSubset<T, email_verificationsFindUniqueArgs<ExtArgs>>): Prisma__email_verificationsClient<$Result.GetResult<Prisma.$email_verificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Email_verifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {email_verificationsFindUniqueOrThrowArgs} args - Arguments to find a Email_verifications
     * @example
     * // Get one Email_verifications
     * const email_verifications = await prisma.email_verifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends email_verificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, email_verificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__email_verificationsClient<$Result.GetResult<Prisma.$email_verificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email_verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationsFindFirstArgs} args - Arguments to find a Email_verifications
     * @example
     * // Get one Email_verifications
     * const email_verifications = await prisma.email_verifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends email_verificationsFindFirstArgs>(args?: SelectSubset<T, email_verificationsFindFirstArgs<ExtArgs>>): Prisma__email_verificationsClient<$Result.GetResult<Prisma.$email_verificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email_verifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationsFindFirstOrThrowArgs} args - Arguments to find a Email_verifications
     * @example
     * // Get one Email_verifications
     * const email_verifications = await prisma.email_verifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends email_verificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, email_verificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__email_verificationsClient<$Result.GetResult<Prisma.$email_verificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Email_verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Email_verifications
     * const email_verifications = await prisma.email_verifications.findMany()
     * 
     * // Get first 10 Email_verifications
     * const email_verifications = await prisma.email_verifications.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const email_verificationsWithEmailOnly = await prisma.email_verifications.findMany({ select: { email: true } })
     * 
     */
    findMany<T extends email_verificationsFindManyArgs>(args?: SelectSubset<T, email_verificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_verificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Email_verifications.
     * @param {email_verificationsCreateArgs} args - Arguments to create a Email_verifications.
     * @example
     * // Create one Email_verifications
     * const Email_verifications = await prisma.email_verifications.create({
     *   data: {
     *     // ... data to create a Email_verifications
     *   }
     * })
     * 
     */
    create<T extends email_verificationsCreateArgs>(args: SelectSubset<T, email_verificationsCreateArgs<ExtArgs>>): Prisma__email_verificationsClient<$Result.GetResult<Prisma.$email_verificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Email_verifications.
     * @param {email_verificationsCreateManyArgs} args - Arguments to create many Email_verifications.
     * @example
     * // Create many Email_verifications
     * const email_verifications = await prisma.email_verifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends email_verificationsCreateManyArgs>(args?: SelectSubset<T, email_verificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Email_verifications and returns the data saved in the database.
     * @param {email_verificationsCreateManyAndReturnArgs} args - Arguments to create many Email_verifications.
     * @example
     * // Create many Email_verifications
     * const email_verifications = await prisma.email_verifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Email_verifications and only return the `email`
     * const email_verificationsWithEmailOnly = await prisma.email_verifications.createManyAndReturn({
     *   select: { email: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends email_verificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, email_verificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_verificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Email_verifications.
     * @param {email_verificationsDeleteArgs} args - Arguments to delete one Email_verifications.
     * @example
     * // Delete one Email_verifications
     * const Email_verifications = await prisma.email_verifications.delete({
     *   where: {
     *     // ... filter to delete one Email_verifications
     *   }
     * })
     * 
     */
    delete<T extends email_verificationsDeleteArgs>(args: SelectSubset<T, email_verificationsDeleteArgs<ExtArgs>>): Prisma__email_verificationsClient<$Result.GetResult<Prisma.$email_verificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Email_verifications.
     * @param {email_verificationsUpdateArgs} args - Arguments to update one Email_verifications.
     * @example
     * // Update one Email_verifications
     * const email_verifications = await prisma.email_verifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends email_verificationsUpdateArgs>(args: SelectSubset<T, email_verificationsUpdateArgs<ExtArgs>>): Prisma__email_verificationsClient<$Result.GetResult<Prisma.$email_verificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Email_verifications.
     * @param {email_verificationsDeleteManyArgs} args - Arguments to filter Email_verifications to delete.
     * @example
     * // Delete a few Email_verifications
     * const { count } = await prisma.email_verifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends email_verificationsDeleteManyArgs>(args?: SelectSubset<T, email_verificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Email_verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Email_verifications
     * const email_verifications = await prisma.email_verifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends email_verificationsUpdateManyArgs>(args: SelectSubset<T, email_verificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Email_verifications and returns the data updated in the database.
     * @param {email_verificationsUpdateManyAndReturnArgs} args - Arguments to update many Email_verifications.
     * @example
     * // Update many Email_verifications
     * const email_verifications = await prisma.email_verifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Email_verifications and only return the `email`
     * const email_verificationsWithEmailOnly = await prisma.email_verifications.updateManyAndReturn({
     *   select: { email: true },
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
    updateManyAndReturn<T extends email_verificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, email_verificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_verificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Email_verifications.
     * @param {email_verificationsUpsertArgs} args - Arguments to update or create a Email_verifications.
     * @example
     * // Update or create a Email_verifications
     * const email_verifications = await prisma.email_verifications.upsert({
     *   create: {
     *     // ... data to create a Email_verifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email_verifications we want to update
     *   }
     * })
     */
    upsert<T extends email_verificationsUpsertArgs>(args: SelectSubset<T, email_verificationsUpsertArgs<ExtArgs>>): Prisma__email_verificationsClient<$Result.GetResult<Prisma.$email_verificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Email_verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationsCountArgs} args - Arguments to filter Email_verifications to count.
     * @example
     * // Count the number of Email_verifications
     * const count = await prisma.email_verifications.count({
     *   where: {
     *     // ... the filter for the Email_verifications we want to count
     *   }
     * })
    **/
    count<T extends email_verificationsCountArgs>(
      args?: Subset<T, email_verificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Email_verificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Email_verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Email_verificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Email_verificationsAggregateArgs>(args: Subset<T, Email_verificationsAggregateArgs>): Prisma.PrismaPromise<GetEmail_verificationsAggregateType<T>>

    /**
     * Group by Email_verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationsGroupByArgs} args - Group by arguments.
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
      T extends email_verificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: email_verificationsGroupByArgs['orderBy'] }
        : { orderBy?: email_verificationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, email_verificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmail_verificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the email_verifications model
   */
  readonly fields: email_verificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for email_verifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__email_verificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the email_verifications model
   */
  interface email_verificationsFieldRefs {
    readonly email: FieldRef<"email_verifications", 'String'>
    readonly code: FieldRef<"email_verifications", 'String'>
  }
    

  // Custom InputTypes
  /**
   * email_verifications findUnique
   */
  export type email_verificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verifications
     */
    select?: email_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verifications
     */
    omit?: email_verificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationsInclude<ExtArgs> | null
    /**
     * Filter, which email_verifications to fetch.
     */
    where: email_verificationsWhereUniqueInput
  }

  /**
   * email_verifications findUniqueOrThrow
   */
  export type email_verificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verifications
     */
    select?: email_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verifications
     */
    omit?: email_verificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationsInclude<ExtArgs> | null
    /**
     * Filter, which email_verifications to fetch.
     */
    where: email_verificationsWhereUniqueInput
  }

  /**
   * email_verifications findFirst
   */
  export type email_verificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verifications
     */
    select?: email_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verifications
     */
    omit?: email_verificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationsInclude<ExtArgs> | null
    /**
     * Filter, which email_verifications to fetch.
     */
    where?: email_verificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verifications to fetch.
     */
    orderBy?: email_verificationsOrderByWithRelationInput | email_verificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for email_verifications.
     */
    cursor?: email_verificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_verifications.
     */
    distinct?: Email_verificationsScalarFieldEnum | Email_verificationsScalarFieldEnum[]
  }

  /**
   * email_verifications findFirstOrThrow
   */
  export type email_verificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verifications
     */
    select?: email_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verifications
     */
    omit?: email_verificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationsInclude<ExtArgs> | null
    /**
     * Filter, which email_verifications to fetch.
     */
    where?: email_verificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verifications to fetch.
     */
    orderBy?: email_verificationsOrderByWithRelationInput | email_verificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for email_verifications.
     */
    cursor?: email_verificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_verifications.
     */
    distinct?: Email_verificationsScalarFieldEnum | Email_verificationsScalarFieldEnum[]
  }

  /**
   * email_verifications findMany
   */
  export type email_verificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verifications
     */
    select?: email_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verifications
     */
    omit?: email_verificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationsInclude<ExtArgs> | null
    /**
     * Filter, which email_verifications to fetch.
     */
    where?: email_verificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verifications to fetch.
     */
    orderBy?: email_verificationsOrderByWithRelationInput | email_verificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing email_verifications.
     */
    cursor?: email_verificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verifications.
     */
    skip?: number
    distinct?: Email_verificationsScalarFieldEnum | Email_verificationsScalarFieldEnum[]
  }

  /**
   * email_verifications create
   */
  export type email_verificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verifications
     */
    select?: email_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verifications
     */
    omit?: email_verificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a email_verifications.
     */
    data: XOR<email_verificationsCreateInput, email_verificationsUncheckedCreateInput>
  }

  /**
   * email_verifications createMany
   */
  export type email_verificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many email_verifications.
     */
    data: email_verificationsCreateManyInput | email_verificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * email_verifications createManyAndReturn
   */
  export type email_verificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verifications
     */
    select?: email_verificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the email_verifications
     */
    omit?: email_verificationsOmit<ExtArgs> | null
    /**
     * The data used to create many email_verifications.
     */
    data: email_verificationsCreateManyInput | email_verificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * email_verifications update
   */
  export type email_verificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verifications
     */
    select?: email_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verifications
     */
    omit?: email_verificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a email_verifications.
     */
    data: XOR<email_verificationsUpdateInput, email_verificationsUncheckedUpdateInput>
    /**
     * Choose, which email_verifications to update.
     */
    where: email_verificationsWhereUniqueInput
  }

  /**
   * email_verifications updateMany
   */
  export type email_verificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update email_verifications.
     */
    data: XOR<email_verificationsUpdateManyMutationInput, email_verificationsUncheckedUpdateManyInput>
    /**
     * Filter which email_verifications to update
     */
    where?: email_verificationsWhereInput
    /**
     * Limit how many email_verifications to update.
     */
    limit?: number
  }

  /**
   * email_verifications updateManyAndReturn
   */
  export type email_verificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verifications
     */
    select?: email_verificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the email_verifications
     */
    omit?: email_verificationsOmit<ExtArgs> | null
    /**
     * The data used to update email_verifications.
     */
    data: XOR<email_verificationsUpdateManyMutationInput, email_verificationsUncheckedUpdateManyInput>
    /**
     * Filter which email_verifications to update
     */
    where?: email_verificationsWhereInput
    /**
     * Limit how many email_verifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * email_verifications upsert
   */
  export type email_verificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verifications
     */
    select?: email_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verifications
     */
    omit?: email_verificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the email_verifications to update in case it exists.
     */
    where: email_verificationsWhereUniqueInput
    /**
     * In case the email_verifications found by the `where` argument doesn't exist, create a new email_verifications with this data.
     */
    create: XOR<email_verificationsCreateInput, email_verificationsUncheckedCreateInput>
    /**
     * In case the email_verifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<email_verificationsUpdateInput, email_verificationsUncheckedUpdateInput>
  }

  /**
   * email_verifications delete
   */
  export type email_verificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verifications
     */
    select?: email_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verifications
     */
    omit?: email_verificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationsInclude<ExtArgs> | null
    /**
     * Filter which email_verifications to delete.
     */
    where: email_verificationsWhereUniqueInput
  }

  /**
   * email_verifications deleteMany
   */
  export type email_verificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_verifications to delete
     */
    where?: email_verificationsWhereInput
    /**
     * Limit how many email_verifications to delete.
     */
    limit?: number
  }

  /**
   * email_verifications without action
   */
  export type email_verificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verifications
     */
    select?: email_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verifications
     */
    omit?: email_verificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationsInclude<ExtArgs> | null
  }


  /**
   * Model shipping
   */

  export type AggregateShipping = {
    _count: ShippingCountAggregateOutputType | null
    _min: ShippingMinAggregateOutputType | null
    _max: ShippingMaxAggregateOutputType | null
  }

  export type ShippingMinAggregateOutputType = {
    email: string | null
    address: string | null
    postalcode: string | null
    country: string | null
  }

  export type ShippingMaxAggregateOutputType = {
    email: string | null
    address: string | null
    postalcode: string | null
    country: string | null
  }

  export type ShippingCountAggregateOutputType = {
    email: number
    address: number
    postalcode: number
    country: number
    _all: number
  }


  export type ShippingMinAggregateInputType = {
    email?: true
    address?: true
    postalcode?: true
    country?: true
  }

  export type ShippingMaxAggregateInputType = {
    email?: true
    address?: true
    postalcode?: true
    country?: true
  }

  export type ShippingCountAggregateInputType = {
    email?: true
    address?: true
    postalcode?: true
    country?: true
    _all?: true
  }

  export type ShippingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shipping to aggregate.
     */
    where?: shippingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shippings to fetch.
     */
    orderBy?: shippingOrderByWithRelationInput | shippingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: shippingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shippings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shippings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shippings
    **/
    _count?: true | ShippingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShippingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShippingMaxAggregateInputType
  }

  export type GetShippingAggregateType<T extends ShippingAggregateArgs> = {
        [P in keyof T & keyof AggregateShipping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipping[P]>
      : GetScalarType<T[P], AggregateShipping[P]>
  }




  export type shippingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shippingWhereInput
    orderBy?: shippingOrderByWithAggregationInput | shippingOrderByWithAggregationInput[]
    by: ShippingScalarFieldEnum[] | ShippingScalarFieldEnum
    having?: shippingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShippingCountAggregateInputType | true
    _min?: ShippingMinAggregateInputType
    _max?: ShippingMaxAggregateInputType
  }

  export type ShippingGroupByOutputType = {
    email: string
    address: string
    postalcode: string
    country: string
    _count: ShippingCountAggregateOutputType | null
    _min: ShippingMinAggregateOutputType | null
    _max: ShippingMaxAggregateOutputType | null
  }

  type GetShippingGroupByPayload<T extends shippingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShippingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShippingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShippingGroupByOutputType[P]>
            : GetScalarType<T[P], ShippingGroupByOutputType[P]>
        }
      >
    >


  export type shippingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    address?: boolean
    postalcode?: boolean
    country?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipping"]>

  export type shippingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    address?: boolean
    postalcode?: boolean
    country?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipping"]>

  export type shippingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    address?: boolean
    postalcode?: boolean
    country?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipping"]>

  export type shippingSelectScalar = {
    email?: boolean
    address?: boolean
    postalcode?: boolean
    country?: boolean
  }

  export type shippingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email" | "address" | "postalcode" | "country", ExtArgs["result"]["shipping"]>
  export type shippingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type shippingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type shippingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $shippingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "shipping"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      email: string
      address: string
      postalcode: string
      country: string
    }, ExtArgs["result"]["shipping"]>
    composites: {}
  }

  type shippingGetPayload<S extends boolean | null | undefined | shippingDefaultArgs> = $Result.GetResult<Prisma.$shippingPayload, S>

  type shippingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<shippingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShippingCountAggregateInputType | true
    }

  export interface shippingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['shipping'], meta: { name: 'shipping' } }
    /**
     * Find zero or one Shipping that matches the filter.
     * @param {shippingFindUniqueArgs} args - Arguments to find a Shipping
     * @example
     * // Get one Shipping
     * const shipping = await prisma.shipping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends shippingFindUniqueArgs>(args: SelectSubset<T, shippingFindUniqueArgs<ExtArgs>>): Prisma__shippingClient<$Result.GetResult<Prisma.$shippingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shipping that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {shippingFindUniqueOrThrowArgs} args - Arguments to find a Shipping
     * @example
     * // Get one Shipping
     * const shipping = await prisma.shipping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends shippingFindUniqueOrThrowArgs>(args: SelectSubset<T, shippingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__shippingClient<$Result.GetResult<Prisma.$shippingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shippingFindFirstArgs} args - Arguments to find a Shipping
     * @example
     * // Get one Shipping
     * const shipping = await prisma.shipping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends shippingFindFirstArgs>(args?: SelectSubset<T, shippingFindFirstArgs<ExtArgs>>): Prisma__shippingClient<$Result.GetResult<Prisma.$shippingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shippingFindFirstOrThrowArgs} args - Arguments to find a Shipping
     * @example
     * // Get one Shipping
     * const shipping = await prisma.shipping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends shippingFindFirstOrThrowArgs>(args?: SelectSubset<T, shippingFindFirstOrThrowArgs<ExtArgs>>): Prisma__shippingClient<$Result.GetResult<Prisma.$shippingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shippings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shippingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shippings
     * const shippings = await prisma.shipping.findMany()
     * 
     * // Get first 10 Shippings
     * const shippings = await prisma.shipping.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const shippingWithEmailOnly = await prisma.shipping.findMany({ select: { email: true } })
     * 
     */
    findMany<T extends shippingFindManyArgs>(args?: SelectSubset<T, shippingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shippingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shipping.
     * @param {shippingCreateArgs} args - Arguments to create a Shipping.
     * @example
     * // Create one Shipping
     * const Shipping = await prisma.shipping.create({
     *   data: {
     *     // ... data to create a Shipping
     *   }
     * })
     * 
     */
    create<T extends shippingCreateArgs>(args: SelectSubset<T, shippingCreateArgs<ExtArgs>>): Prisma__shippingClient<$Result.GetResult<Prisma.$shippingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shippings.
     * @param {shippingCreateManyArgs} args - Arguments to create many Shippings.
     * @example
     * // Create many Shippings
     * const shipping = await prisma.shipping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends shippingCreateManyArgs>(args?: SelectSubset<T, shippingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shippings and returns the data saved in the database.
     * @param {shippingCreateManyAndReturnArgs} args - Arguments to create many Shippings.
     * @example
     * // Create many Shippings
     * const shipping = await prisma.shipping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shippings and only return the `email`
     * const shippingWithEmailOnly = await prisma.shipping.createManyAndReturn({
     *   select: { email: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends shippingCreateManyAndReturnArgs>(args?: SelectSubset<T, shippingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shippingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shipping.
     * @param {shippingDeleteArgs} args - Arguments to delete one Shipping.
     * @example
     * // Delete one Shipping
     * const Shipping = await prisma.shipping.delete({
     *   where: {
     *     // ... filter to delete one Shipping
     *   }
     * })
     * 
     */
    delete<T extends shippingDeleteArgs>(args: SelectSubset<T, shippingDeleteArgs<ExtArgs>>): Prisma__shippingClient<$Result.GetResult<Prisma.$shippingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shipping.
     * @param {shippingUpdateArgs} args - Arguments to update one Shipping.
     * @example
     * // Update one Shipping
     * const shipping = await prisma.shipping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends shippingUpdateArgs>(args: SelectSubset<T, shippingUpdateArgs<ExtArgs>>): Prisma__shippingClient<$Result.GetResult<Prisma.$shippingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shippings.
     * @param {shippingDeleteManyArgs} args - Arguments to filter Shippings to delete.
     * @example
     * // Delete a few Shippings
     * const { count } = await prisma.shipping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends shippingDeleteManyArgs>(args?: SelectSubset<T, shippingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shippings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shippingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shippings
     * const shipping = await prisma.shipping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends shippingUpdateManyArgs>(args: SelectSubset<T, shippingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shippings and returns the data updated in the database.
     * @param {shippingUpdateManyAndReturnArgs} args - Arguments to update many Shippings.
     * @example
     * // Update many Shippings
     * const shipping = await prisma.shipping.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shippings and only return the `email`
     * const shippingWithEmailOnly = await prisma.shipping.updateManyAndReturn({
     *   select: { email: true },
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
    updateManyAndReturn<T extends shippingUpdateManyAndReturnArgs>(args: SelectSubset<T, shippingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shippingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shipping.
     * @param {shippingUpsertArgs} args - Arguments to update or create a Shipping.
     * @example
     * // Update or create a Shipping
     * const shipping = await prisma.shipping.upsert({
     *   create: {
     *     // ... data to create a Shipping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shipping we want to update
     *   }
     * })
     */
    upsert<T extends shippingUpsertArgs>(args: SelectSubset<T, shippingUpsertArgs<ExtArgs>>): Prisma__shippingClient<$Result.GetResult<Prisma.$shippingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shippings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shippingCountArgs} args - Arguments to filter Shippings to count.
     * @example
     * // Count the number of Shippings
     * const count = await prisma.shipping.count({
     *   where: {
     *     // ... the filter for the Shippings we want to count
     *   }
     * })
    **/
    count<T extends shippingCountArgs>(
      args?: Subset<T, shippingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShippingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shipping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShippingAggregateArgs>(args: Subset<T, ShippingAggregateArgs>): Prisma.PrismaPromise<GetShippingAggregateType<T>>

    /**
     * Group by Shipping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shippingGroupByArgs} args - Group by arguments.
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
      T extends shippingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: shippingGroupByArgs['orderBy'] }
        : { orderBy?: shippingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, shippingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShippingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the shipping model
   */
  readonly fields: shippingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for shipping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__shippingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the shipping model
   */
  interface shippingFieldRefs {
    readonly email: FieldRef<"shipping", 'String'>
    readonly address: FieldRef<"shipping", 'String'>
    readonly postalcode: FieldRef<"shipping", 'String'>
    readonly country: FieldRef<"shipping", 'String'>
  }
    

  // Custom InputTypes
  /**
   * shipping findUnique
   */
  export type shippingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipping
     */
    select?: shippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipping
     */
    omit?: shippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shippingInclude<ExtArgs> | null
    /**
     * Filter, which shipping to fetch.
     */
    where: shippingWhereUniqueInput
  }

  /**
   * shipping findUniqueOrThrow
   */
  export type shippingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipping
     */
    select?: shippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipping
     */
    omit?: shippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shippingInclude<ExtArgs> | null
    /**
     * Filter, which shipping to fetch.
     */
    where: shippingWhereUniqueInput
  }

  /**
   * shipping findFirst
   */
  export type shippingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipping
     */
    select?: shippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipping
     */
    omit?: shippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shippingInclude<ExtArgs> | null
    /**
     * Filter, which shipping to fetch.
     */
    where?: shippingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shippings to fetch.
     */
    orderBy?: shippingOrderByWithRelationInput | shippingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shippings.
     */
    cursor?: shippingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shippings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shippings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shippings.
     */
    distinct?: ShippingScalarFieldEnum | ShippingScalarFieldEnum[]
  }

  /**
   * shipping findFirstOrThrow
   */
  export type shippingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipping
     */
    select?: shippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipping
     */
    omit?: shippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shippingInclude<ExtArgs> | null
    /**
     * Filter, which shipping to fetch.
     */
    where?: shippingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shippings to fetch.
     */
    orderBy?: shippingOrderByWithRelationInput | shippingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shippings.
     */
    cursor?: shippingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shippings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shippings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shippings.
     */
    distinct?: ShippingScalarFieldEnum | ShippingScalarFieldEnum[]
  }

  /**
   * shipping findMany
   */
  export type shippingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipping
     */
    select?: shippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipping
     */
    omit?: shippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shippingInclude<ExtArgs> | null
    /**
     * Filter, which shippings to fetch.
     */
    where?: shippingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shippings to fetch.
     */
    orderBy?: shippingOrderByWithRelationInput | shippingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shippings.
     */
    cursor?: shippingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shippings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shippings.
     */
    skip?: number
    distinct?: ShippingScalarFieldEnum | ShippingScalarFieldEnum[]
  }

  /**
   * shipping create
   */
  export type shippingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipping
     */
    select?: shippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipping
     */
    omit?: shippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shippingInclude<ExtArgs> | null
    /**
     * The data needed to create a shipping.
     */
    data: XOR<shippingCreateInput, shippingUncheckedCreateInput>
  }

  /**
   * shipping createMany
   */
  export type shippingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many shippings.
     */
    data: shippingCreateManyInput | shippingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * shipping createManyAndReturn
   */
  export type shippingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipping
     */
    select?: shippingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shipping
     */
    omit?: shippingOmit<ExtArgs> | null
    /**
     * The data used to create many shippings.
     */
    data: shippingCreateManyInput | shippingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shippingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * shipping update
   */
  export type shippingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipping
     */
    select?: shippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipping
     */
    omit?: shippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shippingInclude<ExtArgs> | null
    /**
     * The data needed to update a shipping.
     */
    data: XOR<shippingUpdateInput, shippingUncheckedUpdateInput>
    /**
     * Choose, which shipping to update.
     */
    where: shippingWhereUniqueInput
  }

  /**
   * shipping updateMany
   */
  export type shippingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update shippings.
     */
    data: XOR<shippingUpdateManyMutationInput, shippingUncheckedUpdateManyInput>
    /**
     * Filter which shippings to update
     */
    where?: shippingWhereInput
    /**
     * Limit how many shippings to update.
     */
    limit?: number
  }

  /**
   * shipping updateManyAndReturn
   */
  export type shippingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipping
     */
    select?: shippingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shipping
     */
    omit?: shippingOmit<ExtArgs> | null
    /**
     * The data used to update shippings.
     */
    data: XOR<shippingUpdateManyMutationInput, shippingUncheckedUpdateManyInput>
    /**
     * Filter which shippings to update
     */
    where?: shippingWhereInput
    /**
     * Limit how many shippings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shippingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * shipping upsert
   */
  export type shippingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipping
     */
    select?: shippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipping
     */
    omit?: shippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shippingInclude<ExtArgs> | null
    /**
     * The filter to search for the shipping to update in case it exists.
     */
    where: shippingWhereUniqueInput
    /**
     * In case the shipping found by the `where` argument doesn't exist, create a new shipping with this data.
     */
    create: XOR<shippingCreateInput, shippingUncheckedCreateInput>
    /**
     * In case the shipping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<shippingUpdateInput, shippingUncheckedUpdateInput>
  }

  /**
   * shipping delete
   */
  export type shippingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipping
     */
    select?: shippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipping
     */
    omit?: shippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shippingInclude<ExtArgs> | null
    /**
     * Filter which shipping to delete.
     */
    where: shippingWhereUniqueInput
  }

  /**
   * shipping deleteMany
   */
  export type shippingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shippings to delete
     */
    where?: shippingWhereInput
    /**
     * Limit how many shippings to delete.
     */
    limit?: number
  }

  /**
   * shipping without action
   */
  export type shippingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipping
     */
    select?: shippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipping
     */
    omit?: shippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shippingInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    name: string | null
    email: string | null
    phone_number: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    name: string | null
    email: string | null
    phone_number: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    name: number
    email: number
    phone_number: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    name?: true
    email?: true
    phone_number?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    name?: true
    email?: true
    phone_number?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    name?: true
    email?: true
    phone_number?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    name: string
    email: string
    phone_number: string | null
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    checkout_history?: boolean | user$checkout_historyArgs<ExtArgs>
    email_verifications?: boolean | user$email_verificationsArgs<ExtArgs>
    shipping?: boolean | user$shippingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    name?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "email" | "phone_number" | "password", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkout_history?: boolean | user$checkout_historyArgs<ExtArgs>
    email_verifications?: boolean | user$email_verificationsArgs<ExtArgs>
    shipping?: boolean | user$shippingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      checkout_history: Prisma.$checkout_historyPayload<ExtArgs>[]
      email_verifications: Prisma.$email_verificationsPayload<ExtArgs> | null
      shipping: Prisma.$shippingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      email: string
      phone_number: string | null
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const userWithNameOnly = await prisma.user.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `name`
     * const userWithNameOnly = await prisma.user.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
     * // Update zero or more Users and only return the `name`
     * const userWithNameOnly = await prisma.user.updateManyAndReturn({
     *   select: { name: true },
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    checkout_history<T extends user$checkout_historyArgs<ExtArgs> = {}>(args?: Subset<T, user$checkout_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$checkout_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    email_verifications<T extends user$email_verificationsArgs<ExtArgs> = {}>(args?: Subset<T, user$email_verificationsArgs<ExtArgs>>): Prisma__email_verificationsClient<$Result.GetResult<Prisma.$email_verificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    shipping<T extends user$shippingArgs<ExtArgs> = {}>(args?: Subset<T, user$shippingArgs<ExtArgs>>): Prisma__shippingClient<$Result.GetResult<Prisma.$shippingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly phone_number: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.checkout_history
   */
  export type user$checkout_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkout_history
     */
    select?: checkout_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkout_history
     */
    omit?: checkout_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkout_historyInclude<ExtArgs> | null
    where?: checkout_historyWhereInput
    orderBy?: checkout_historyOrderByWithRelationInput | checkout_historyOrderByWithRelationInput[]
    cursor?: checkout_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Checkout_historyScalarFieldEnum | Checkout_historyScalarFieldEnum[]
  }

  /**
   * user.email_verifications
   */
  export type user$email_verificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verifications
     */
    select?: email_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verifications
     */
    omit?: email_verificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationsInclude<ExtArgs> | null
    where?: email_verificationsWhereInput
  }

  /**
   * user.shipping
   */
  export type user$shippingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipping
     */
    select?: shippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipping
     */
    omit?: shippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shippingInclude<ExtArgs> | null
    where?: shippingWhereInput
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
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


  export const Checkout_historyScalarFieldEnum: {
    email: 'email',
    book_isbn: 'book_isbn',
    total_price: 'total_price',
    qty: 'qty',
    checkout_date_and_time: 'checkout_date_and_time'
  };

  export type Checkout_historyScalarFieldEnum = (typeof Checkout_historyScalarFieldEnum)[keyof typeof Checkout_historyScalarFieldEnum]


  export const Email_verificationsScalarFieldEnum: {
    email: 'email',
    code: 'code'
  };

  export type Email_verificationsScalarFieldEnum = (typeof Email_verificationsScalarFieldEnum)[keyof typeof Email_verificationsScalarFieldEnum]


  export const ShippingScalarFieldEnum: {
    email: 'email',
    address: 'address',
    postalcode: 'postalcode',
    country: 'country'
  };

  export type ShippingScalarFieldEnum = (typeof ShippingScalarFieldEnum)[keyof typeof ShippingScalarFieldEnum]


  export const UserScalarFieldEnum: {
    name: 'name',
    email: 'email',
    phone_number: 'phone_number',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type checkout_historyWhereInput = {
    AND?: checkout_historyWhereInput | checkout_historyWhereInput[]
    OR?: checkout_historyWhereInput[]
    NOT?: checkout_historyWhereInput | checkout_historyWhereInput[]
    email?: StringFilter<"checkout_history"> | string
    book_isbn?: StringFilter<"checkout_history"> | string
    total_price?: DecimalFilter<"checkout_history"> | Decimal | DecimalJsLike | number | string
    qty?: IntFilter<"checkout_history"> | number
    checkout_date_and_time?: DateTimeFilter<"checkout_history"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type checkout_historyOrderByWithRelationInput = {
    email?: SortOrder
    book_isbn?: SortOrder
    total_price?: SortOrder
    qty?: SortOrder
    checkout_date_and_time?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type checkout_historyWhereUniqueInput = Prisma.AtLeast<{
    email_book_isbn_checkout_date_and_time?: checkout_historyEmailBook_isbnCheckout_date_and_timeCompoundUniqueInput
    AND?: checkout_historyWhereInput | checkout_historyWhereInput[]
    OR?: checkout_historyWhereInput[]
    NOT?: checkout_historyWhereInput | checkout_historyWhereInput[]
    email?: StringFilter<"checkout_history"> | string
    book_isbn?: StringFilter<"checkout_history"> | string
    total_price?: DecimalFilter<"checkout_history"> | Decimal | DecimalJsLike | number | string
    qty?: IntFilter<"checkout_history"> | number
    checkout_date_and_time?: DateTimeFilter<"checkout_history"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "email_book_isbn_checkout_date_and_time">

  export type checkout_historyOrderByWithAggregationInput = {
    email?: SortOrder
    book_isbn?: SortOrder
    total_price?: SortOrder
    qty?: SortOrder
    checkout_date_and_time?: SortOrder
    _count?: checkout_historyCountOrderByAggregateInput
    _avg?: checkout_historyAvgOrderByAggregateInput
    _max?: checkout_historyMaxOrderByAggregateInput
    _min?: checkout_historyMinOrderByAggregateInput
    _sum?: checkout_historySumOrderByAggregateInput
  }

  export type checkout_historyScalarWhereWithAggregatesInput = {
    AND?: checkout_historyScalarWhereWithAggregatesInput | checkout_historyScalarWhereWithAggregatesInput[]
    OR?: checkout_historyScalarWhereWithAggregatesInput[]
    NOT?: checkout_historyScalarWhereWithAggregatesInput | checkout_historyScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"checkout_history"> | string
    book_isbn?: StringWithAggregatesFilter<"checkout_history"> | string
    total_price?: DecimalWithAggregatesFilter<"checkout_history"> | Decimal | DecimalJsLike | number | string
    qty?: IntWithAggregatesFilter<"checkout_history"> | number
    checkout_date_and_time?: DateTimeWithAggregatesFilter<"checkout_history"> | Date | string
  }

  export type email_verificationsWhereInput = {
    AND?: email_verificationsWhereInput | email_verificationsWhereInput[]
    OR?: email_verificationsWhereInput[]
    NOT?: email_verificationsWhereInput | email_verificationsWhereInput[]
    email?: StringFilter<"email_verifications"> | string
    code?: StringFilter<"email_verifications"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type email_verificationsOrderByWithRelationInput = {
    email?: SortOrder
    code?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type email_verificationsWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    AND?: email_verificationsWhereInput | email_verificationsWhereInput[]
    OR?: email_verificationsWhereInput[]
    NOT?: email_verificationsWhereInput | email_verificationsWhereInput[]
    code?: StringFilter<"email_verifications"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "email">

  export type email_verificationsOrderByWithAggregationInput = {
    email?: SortOrder
    code?: SortOrder
    _count?: email_verificationsCountOrderByAggregateInput
    _max?: email_verificationsMaxOrderByAggregateInput
    _min?: email_verificationsMinOrderByAggregateInput
  }

  export type email_verificationsScalarWhereWithAggregatesInput = {
    AND?: email_verificationsScalarWhereWithAggregatesInput | email_verificationsScalarWhereWithAggregatesInput[]
    OR?: email_verificationsScalarWhereWithAggregatesInput[]
    NOT?: email_verificationsScalarWhereWithAggregatesInput | email_verificationsScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"email_verifications"> | string
    code?: StringWithAggregatesFilter<"email_verifications"> | string
  }

  export type shippingWhereInput = {
    AND?: shippingWhereInput | shippingWhereInput[]
    OR?: shippingWhereInput[]
    NOT?: shippingWhereInput | shippingWhereInput[]
    email?: StringFilter<"shipping"> | string
    address?: StringFilter<"shipping"> | string
    postalcode?: StringFilter<"shipping"> | string
    country?: StringFilter<"shipping"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type shippingOrderByWithRelationInput = {
    email?: SortOrder
    address?: SortOrder
    postalcode?: SortOrder
    country?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type shippingWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    AND?: shippingWhereInput | shippingWhereInput[]
    OR?: shippingWhereInput[]
    NOT?: shippingWhereInput | shippingWhereInput[]
    address?: StringFilter<"shipping"> | string
    postalcode?: StringFilter<"shipping"> | string
    country?: StringFilter<"shipping"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "email">

  export type shippingOrderByWithAggregationInput = {
    email?: SortOrder
    address?: SortOrder
    postalcode?: SortOrder
    country?: SortOrder
    _count?: shippingCountOrderByAggregateInput
    _max?: shippingMaxOrderByAggregateInput
    _min?: shippingMinOrderByAggregateInput
  }

  export type shippingScalarWhereWithAggregatesInput = {
    AND?: shippingScalarWhereWithAggregatesInput | shippingScalarWhereWithAggregatesInput[]
    OR?: shippingScalarWhereWithAggregatesInput[]
    NOT?: shippingScalarWhereWithAggregatesInput | shippingScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"shipping"> | string
    address?: StringWithAggregatesFilter<"shipping"> | string
    postalcode?: StringWithAggregatesFilter<"shipping"> | string
    country?: StringWithAggregatesFilter<"shipping"> | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    phone_number?: StringNullableFilter<"user"> | string | null
    password?: StringFilter<"user"> | string
    checkout_history?: Checkout_historyListRelationFilter
    email_verifications?: XOR<Email_verificationsNullableScalarRelationFilter, email_verificationsWhereInput> | null
    shipping?: XOR<ShippingNullableScalarRelationFilter, shippingWhereInput> | null
  }

  export type userOrderByWithRelationInput = {
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    password?: SortOrder
    checkout_history?: checkout_historyOrderByRelationAggregateInput
    email_verifications?: email_verificationsOrderByWithRelationInput
    shipping?: shippingOrderByWithRelationInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    phone_number?: StringNullableFilter<"user"> | string | null
    password?: StringFilter<"user"> | string
    checkout_history?: Checkout_historyListRelationFilter
    email_verifications?: XOR<Email_verificationsNullableScalarRelationFilter, email_verificationsWhereInput> | null
    shipping?: XOR<ShippingNullableScalarRelationFilter, shippingWhereInput> | null
  }, "email">

  export type userOrderByWithAggregationInput = {
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    password?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    phone_number?: StringNullableWithAggregatesFilter<"user"> | string | null
    password?: StringWithAggregatesFilter<"user"> | string
  }

  export type checkout_historyCreateInput = {
    book_isbn: string
    total_price: Decimal | DecimalJsLike | number | string
    qty: number
    checkout_date_and_time: Date | string
    user: userCreateNestedOneWithoutCheckout_historyInput
  }

  export type checkout_historyUncheckedCreateInput = {
    email: string
    book_isbn: string
    total_price: Decimal | DecimalJsLike | number | string
    qty: number
    checkout_date_and_time: Date | string
  }

  export type checkout_historyUpdateInput = {
    book_isbn?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    checkout_date_and_time?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutCheckout_historyNestedInput
  }

  export type checkout_historyUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    book_isbn?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    checkout_date_and_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type checkout_historyCreateManyInput = {
    email: string
    book_isbn: string
    total_price: Decimal | DecimalJsLike | number | string
    qty: number
    checkout_date_and_time: Date | string
  }

  export type checkout_historyUpdateManyMutationInput = {
    book_isbn?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    checkout_date_and_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type checkout_historyUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    book_isbn?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    checkout_date_and_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_verificationsCreateInput = {
    code: string
    user: userCreateNestedOneWithoutEmail_verificationsInput
  }

  export type email_verificationsUncheckedCreateInput = {
    email: string
    code: string
  }

  export type email_verificationsUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutEmail_verificationsNestedInput
  }

  export type email_verificationsUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type email_verificationsCreateManyInput = {
    email: string
    code: string
  }

  export type email_verificationsUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
  }

  export type email_verificationsUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type shippingCreateInput = {
    address: string
    postalcode: string
    country: string
    user: userCreateNestedOneWithoutShippingInput
  }

  export type shippingUncheckedCreateInput = {
    email: string
    address: string
    postalcode: string
    country: string
  }

  export type shippingUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    postalcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutShippingNestedInput
  }

  export type shippingUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    postalcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type shippingCreateManyInput = {
    email: string
    address: string
    postalcode: string
    country: string
  }

  export type shippingUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    postalcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type shippingUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    postalcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateInput = {
    name: string
    email: string
    phone_number?: string | null
    password: string
    checkout_history?: checkout_historyCreateNestedManyWithoutUserInput
    email_verifications?: email_verificationsCreateNestedOneWithoutUserInput
    shipping?: shippingCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    name: string
    email: string
    phone_number?: string | null
    password: string
    checkout_history?: checkout_historyUncheckedCreateNestedManyWithoutUserInput
    email_verifications?: email_verificationsUncheckedCreateNestedOneWithoutUserInput
    shipping?: shippingUncheckedCreateNestedOneWithoutUserInput
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    checkout_history?: checkout_historyUpdateManyWithoutUserNestedInput
    email_verifications?: email_verificationsUpdateOneWithoutUserNestedInput
    shipping?: shippingUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    checkout_history?: checkout_historyUncheckedUpdateManyWithoutUserNestedInput
    email_verifications?: email_verificationsUncheckedUpdateOneWithoutUserNestedInput
    shipping?: shippingUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    name: string
    email: string
    phone_number?: string | null
    password: string
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type checkout_historyEmailBook_isbnCheckout_date_and_timeCompoundUniqueInput = {
    email: string
    book_isbn: string
    checkout_date_and_time: Date | string
  }

  export type checkout_historyCountOrderByAggregateInput = {
    email?: SortOrder
    book_isbn?: SortOrder
    total_price?: SortOrder
    qty?: SortOrder
    checkout_date_and_time?: SortOrder
  }

  export type checkout_historyAvgOrderByAggregateInput = {
    total_price?: SortOrder
    qty?: SortOrder
  }

  export type checkout_historyMaxOrderByAggregateInput = {
    email?: SortOrder
    book_isbn?: SortOrder
    total_price?: SortOrder
    qty?: SortOrder
    checkout_date_and_time?: SortOrder
  }

  export type checkout_historyMinOrderByAggregateInput = {
    email?: SortOrder
    book_isbn?: SortOrder
    total_price?: SortOrder
    qty?: SortOrder
    checkout_date_and_time?: SortOrder
  }

  export type checkout_historySumOrderByAggregateInput = {
    total_price?: SortOrder
    qty?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type email_verificationsCountOrderByAggregateInput = {
    email?: SortOrder
    code?: SortOrder
  }

  export type email_verificationsMaxOrderByAggregateInput = {
    email?: SortOrder
    code?: SortOrder
  }

  export type email_verificationsMinOrderByAggregateInput = {
    email?: SortOrder
    code?: SortOrder
  }

  export type shippingCountOrderByAggregateInput = {
    email?: SortOrder
    address?: SortOrder
    postalcode?: SortOrder
    country?: SortOrder
  }

  export type shippingMaxOrderByAggregateInput = {
    email?: SortOrder
    address?: SortOrder
    postalcode?: SortOrder
    country?: SortOrder
  }

  export type shippingMinOrderByAggregateInput = {
    email?: SortOrder
    address?: SortOrder
    postalcode?: SortOrder
    country?: SortOrder
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

  export type Checkout_historyListRelationFilter = {
    every?: checkout_historyWhereInput
    some?: checkout_historyWhereInput
    none?: checkout_historyWhereInput
  }

  export type Email_verificationsNullableScalarRelationFilter = {
    is?: email_verificationsWhereInput | null
    isNot?: email_verificationsWhereInput | null
  }

  export type ShippingNullableScalarRelationFilter = {
    is?: shippingWhereInput | null
    isNot?: shippingWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type checkout_historyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
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

  export type userCreateNestedOneWithoutCheckout_historyInput = {
    create?: XOR<userCreateWithoutCheckout_historyInput, userUncheckedCreateWithoutCheckout_historyInput>
    connectOrCreate?: userCreateOrConnectWithoutCheckout_historyInput
    connect?: userWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type userUpdateOneRequiredWithoutCheckout_historyNestedInput = {
    create?: XOR<userCreateWithoutCheckout_historyInput, userUncheckedCreateWithoutCheckout_historyInput>
    connectOrCreate?: userCreateOrConnectWithoutCheckout_historyInput
    upsert?: userUpsertWithoutCheckout_historyInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCheckout_historyInput, userUpdateWithoutCheckout_historyInput>, userUncheckedUpdateWithoutCheckout_historyInput>
  }

  export type userCreateNestedOneWithoutEmail_verificationsInput = {
    create?: XOR<userCreateWithoutEmail_verificationsInput, userUncheckedCreateWithoutEmail_verificationsInput>
    connectOrCreate?: userCreateOrConnectWithoutEmail_verificationsInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutEmail_verificationsNestedInput = {
    create?: XOR<userCreateWithoutEmail_verificationsInput, userUncheckedCreateWithoutEmail_verificationsInput>
    connectOrCreate?: userCreateOrConnectWithoutEmail_verificationsInput
    upsert?: userUpsertWithoutEmail_verificationsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutEmail_verificationsInput, userUpdateWithoutEmail_verificationsInput>, userUncheckedUpdateWithoutEmail_verificationsInput>
  }

  export type userCreateNestedOneWithoutShippingInput = {
    create?: XOR<userCreateWithoutShippingInput, userUncheckedCreateWithoutShippingInput>
    connectOrCreate?: userCreateOrConnectWithoutShippingInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutShippingNestedInput = {
    create?: XOR<userCreateWithoutShippingInput, userUncheckedCreateWithoutShippingInput>
    connectOrCreate?: userCreateOrConnectWithoutShippingInput
    upsert?: userUpsertWithoutShippingInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutShippingInput, userUpdateWithoutShippingInput>, userUncheckedUpdateWithoutShippingInput>
  }

  export type checkout_historyCreateNestedManyWithoutUserInput = {
    create?: XOR<checkout_historyCreateWithoutUserInput, checkout_historyUncheckedCreateWithoutUserInput> | checkout_historyCreateWithoutUserInput[] | checkout_historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: checkout_historyCreateOrConnectWithoutUserInput | checkout_historyCreateOrConnectWithoutUserInput[]
    createMany?: checkout_historyCreateManyUserInputEnvelope
    connect?: checkout_historyWhereUniqueInput | checkout_historyWhereUniqueInput[]
  }

  export type email_verificationsCreateNestedOneWithoutUserInput = {
    create?: XOR<email_verificationsCreateWithoutUserInput, email_verificationsUncheckedCreateWithoutUserInput>
    connectOrCreate?: email_verificationsCreateOrConnectWithoutUserInput
    connect?: email_verificationsWhereUniqueInput
  }

  export type shippingCreateNestedOneWithoutUserInput = {
    create?: XOR<shippingCreateWithoutUserInput, shippingUncheckedCreateWithoutUserInput>
    connectOrCreate?: shippingCreateOrConnectWithoutUserInput
    connect?: shippingWhereUniqueInput
  }

  export type checkout_historyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<checkout_historyCreateWithoutUserInput, checkout_historyUncheckedCreateWithoutUserInput> | checkout_historyCreateWithoutUserInput[] | checkout_historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: checkout_historyCreateOrConnectWithoutUserInput | checkout_historyCreateOrConnectWithoutUserInput[]
    createMany?: checkout_historyCreateManyUserInputEnvelope
    connect?: checkout_historyWhereUniqueInput | checkout_historyWhereUniqueInput[]
  }

  export type email_verificationsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<email_verificationsCreateWithoutUserInput, email_verificationsUncheckedCreateWithoutUserInput>
    connectOrCreate?: email_verificationsCreateOrConnectWithoutUserInput
    connect?: email_verificationsWhereUniqueInput
  }

  export type shippingUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<shippingCreateWithoutUserInput, shippingUncheckedCreateWithoutUserInput>
    connectOrCreate?: shippingCreateOrConnectWithoutUserInput
    connect?: shippingWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type checkout_historyUpdateManyWithoutUserNestedInput = {
    create?: XOR<checkout_historyCreateWithoutUserInput, checkout_historyUncheckedCreateWithoutUserInput> | checkout_historyCreateWithoutUserInput[] | checkout_historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: checkout_historyCreateOrConnectWithoutUserInput | checkout_historyCreateOrConnectWithoutUserInput[]
    upsert?: checkout_historyUpsertWithWhereUniqueWithoutUserInput | checkout_historyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: checkout_historyCreateManyUserInputEnvelope
    set?: checkout_historyWhereUniqueInput | checkout_historyWhereUniqueInput[]
    disconnect?: checkout_historyWhereUniqueInput | checkout_historyWhereUniqueInput[]
    delete?: checkout_historyWhereUniqueInput | checkout_historyWhereUniqueInput[]
    connect?: checkout_historyWhereUniqueInput | checkout_historyWhereUniqueInput[]
    update?: checkout_historyUpdateWithWhereUniqueWithoutUserInput | checkout_historyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: checkout_historyUpdateManyWithWhereWithoutUserInput | checkout_historyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: checkout_historyScalarWhereInput | checkout_historyScalarWhereInput[]
  }

  export type email_verificationsUpdateOneWithoutUserNestedInput = {
    create?: XOR<email_verificationsCreateWithoutUserInput, email_verificationsUncheckedCreateWithoutUserInput>
    connectOrCreate?: email_verificationsCreateOrConnectWithoutUserInput
    upsert?: email_verificationsUpsertWithoutUserInput
    disconnect?: email_verificationsWhereInput | boolean
    delete?: email_verificationsWhereInput | boolean
    connect?: email_verificationsWhereUniqueInput
    update?: XOR<XOR<email_verificationsUpdateToOneWithWhereWithoutUserInput, email_verificationsUpdateWithoutUserInput>, email_verificationsUncheckedUpdateWithoutUserInput>
  }

  export type shippingUpdateOneWithoutUserNestedInput = {
    create?: XOR<shippingCreateWithoutUserInput, shippingUncheckedCreateWithoutUserInput>
    connectOrCreate?: shippingCreateOrConnectWithoutUserInput
    upsert?: shippingUpsertWithoutUserInput
    disconnect?: shippingWhereInput | boolean
    delete?: shippingWhereInput | boolean
    connect?: shippingWhereUniqueInput
    update?: XOR<XOR<shippingUpdateToOneWithWhereWithoutUserInput, shippingUpdateWithoutUserInput>, shippingUncheckedUpdateWithoutUserInput>
  }

  export type checkout_historyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<checkout_historyCreateWithoutUserInput, checkout_historyUncheckedCreateWithoutUserInput> | checkout_historyCreateWithoutUserInput[] | checkout_historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: checkout_historyCreateOrConnectWithoutUserInput | checkout_historyCreateOrConnectWithoutUserInput[]
    upsert?: checkout_historyUpsertWithWhereUniqueWithoutUserInput | checkout_historyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: checkout_historyCreateManyUserInputEnvelope
    set?: checkout_historyWhereUniqueInput | checkout_historyWhereUniqueInput[]
    disconnect?: checkout_historyWhereUniqueInput | checkout_historyWhereUniqueInput[]
    delete?: checkout_historyWhereUniqueInput | checkout_historyWhereUniqueInput[]
    connect?: checkout_historyWhereUniqueInput | checkout_historyWhereUniqueInput[]
    update?: checkout_historyUpdateWithWhereUniqueWithoutUserInput | checkout_historyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: checkout_historyUpdateManyWithWhereWithoutUserInput | checkout_historyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: checkout_historyScalarWhereInput | checkout_historyScalarWhereInput[]
  }

  export type email_verificationsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<email_verificationsCreateWithoutUserInput, email_verificationsUncheckedCreateWithoutUserInput>
    connectOrCreate?: email_verificationsCreateOrConnectWithoutUserInput
    upsert?: email_verificationsUpsertWithoutUserInput
    disconnect?: email_verificationsWhereInput | boolean
    delete?: email_verificationsWhereInput | boolean
    connect?: email_verificationsWhereUniqueInput
    update?: XOR<XOR<email_verificationsUpdateToOneWithWhereWithoutUserInput, email_verificationsUpdateWithoutUserInput>, email_verificationsUncheckedUpdateWithoutUserInput>
  }

  export type shippingUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<shippingCreateWithoutUserInput, shippingUncheckedCreateWithoutUserInput>
    connectOrCreate?: shippingCreateOrConnectWithoutUserInput
    upsert?: shippingUpsertWithoutUserInput
    disconnect?: shippingWhereInput | boolean
    delete?: shippingWhereInput | boolean
    connect?: shippingWhereUniqueInput
    update?: XOR<XOR<shippingUpdateToOneWithWhereWithoutUserInput, shippingUpdateWithoutUserInput>, shippingUncheckedUpdateWithoutUserInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type userCreateWithoutCheckout_historyInput = {
    name: string
    email: string
    phone_number?: string | null
    password: string
    email_verifications?: email_verificationsCreateNestedOneWithoutUserInput
    shipping?: shippingCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutCheckout_historyInput = {
    name: string
    email: string
    phone_number?: string | null
    password: string
    email_verifications?: email_verificationsUncheckedCreateNestedOneWithoutUserInput
    shipping?: shippingUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutCheckout_historyInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCheckout_historyInput, userUncheckedCreateWithoutCheckout_historyInput>
  }

  export type userUpsertWithoutCheckout_historyInput = {
    update: XOR<userUpdateWithoutCheckout_historyInput, userUncheckedUpdateWithoutCheckout_historyInput>
    create: XOR<userCreateWithoutCheckout_historyInput, userUncheckedCreateWithoutCheckout_historyInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCheckout_historyInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCheckout_historyInput, userUncheckedUpdateWithoutCheckout_historyInput>
  }

  export type userUpdateWithoutCheckout_historyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    email_verifications?: email_verificationsUpdateOneWithoutUserNestedInput
    shipping?: shippingUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCheckout_historyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    email_verifications?: email_verificationsUncheckedUpdateOneWithoutUserNestedInput
    shipping?: shippingUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userCreateWithoutEmail_verificationsInput = {
    name: string
    email: string
    phone_number?: string | null
    password: string
    checkout_history?: checkout_historyCreateNestedManyWithoutUserInput
    shipping?: shippingCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutEmail_verificationsInput = {
    name: string
    email: string
    phone_number?: string | null
    password: string
    checkout_history?: checkout_historyUncheckedCreateNestedManyWithoutUserInput
    shipping?: shippingUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutEmail_verificationsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutEmail_verificationsInput, userUncheckedCreateWithoutEmail_verificationsInput>
  }

  export type userUpsertWithoutEmail_verificationsInput = {
    update: XOR<userUpdateWithoutEmail_verificationsInput, userUncheckedUpdateWithoutEmail_verificationsInput>
    create: XOR<userCreateWithoutEmail_verificationsInput, userUncheckedCreateWithoutEmail_verificationsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutEmail_verificationsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutEmail_verificationsInput, userUncheckedUpdateWithoutEmail_verificationsInput>
  }

  export type userUpdateWithoutEmail_verificationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    checkout_history?: checkout_historyUpdateManyWithoutUserNestedInput
    shipping?: shippingUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutEmail_verificationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    checkout_history?: checkout_historyUncheckedUpdateManyWithoutUserNestedInput
    shipping?: shippingUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userCreateWithoutShippingInput = {
    name: string
    email: string
    phone_number?: string | null
    password: string
    checkout_history?: checkout_historyCreateNestedManyWithoutUserInput
    email_verifications?: email_verificationsCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutShippingInput = {
    name: string
    email: string
    phone_number?: string | null
    password: string
    checkout_history?: checkout_historyUncheckedCreateNestedManyWithoutUserInput
    email_verifications?: email_verificationsUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutShippingInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutShippingInput, userUncheckedCreateWithoutShippingInput>
  }

  export type userUpsertWithoutShippingInput = {
    update: XOR<userUpdateWithoutShippingInput, userUncheckedUpdateWithoutShippingInput>
    create: XOR<userCreateWithoutShippingInput, userUncheckedCreateWithoutShippingInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutShippingInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutShippingInput, userUncheckedUpdateWithoutShippingInput>
  }

  export type userUpdateWithoutShippingInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    checkout_history?: checkout_historyUpdateManyWithoutUserNestedInput
    email_verifications?: email_verificationsUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutShippingInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    checkout_history?: checkout_historyUncheckedUpdateManyWithoutUserNestedInput
    email_verifications?: email_verificationsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type checkout_historyCreateWithoutUserInput = {
    book_isbn: string
    total_price: Decimal | DecimalJsLike | number | string
    qty: number
    checkout_date_and_time: Date | string
  }

  export type checkout_historyUncheckedCreateWithoutUserInput = {
    book_isbn: string
    total_price: Decimal | DecimalJsLike | number | string
    qty: number
    checkout_date_and_time: Date | string
  }

  export type checkout_historyCreateOrConnectWithoutUserInput = {
    where: checkout_historyWhereUniqueInput
    create: XOR<checkout_historyCreateWithoutUserInput, checkout_historyUncheckedCreateWithoutUserInput>
  }

  export type checkout_historyCreateManyUserInputEnvelope = {
    data: checkout_historyCreateManyUserInput | checkout_historyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type email_verificationsCreateWithoutUserInput = {
    code: string
  }

  export type email_verificationsUncheckedCreateWithoutUserInput = {
    code: string
  }

  export type email_verificationsCreateOrConnectWithoutUserInput = {
    where: email_verificationsWhereUniqueInput
    create: XOR<email_verificationsCreateWithoutUserInput, email_verificationsUncheckedCreateWithoutUserInput>
  }

  export type shippingCreateWithoutUserInput = {
    address: string
    postalcode: string
    country: string
  }

  export type shippingUncheckedCreateWithoutUserInput = {
    address: string
    postalcode: string
    country: string
  }

  export type shippingCreateOrConnectWithoutUserInput = {
    where: shippingWhereUniqueInput
    create: XOR<shippingCreateWithoutUserInput, shippingUncheckedCreateWithoutUserInput>
  }

  export type checkout_historyUpsertWithWhereUniqueWithoutUserInput = {
    where: checkout_historyWhereUniqueInput
    update: XOR<checkout_historyUpdateWithoutUserInput, checkout_historyUncheckedUpdateWithoutUserInput>
    create: XOR<checkout_historyCreateWithoutUserInput, checkout_historyUncheckedCreateWithoutUserInput>
  }

  export type checkout_historyUpdateWithWhereUniqueWithoutUserInput = {
    where: checkout_historyWhereUniqueInput
    data: XOR<checkout_historyUpdateWithoutUserInput, checkout_historyUncheckedUpdateWithoutUserInput>
  }

  export type checkout_historyUpdateManyWithWhereWithoutUserInput = {
    where: checkout_historyScalarWhereInput
    data: XOR<checkout_historyUpdateManyMutationInput, checkout_historyUncheckedUpdateManyWithoutUserInput>
  }

  export type checkout_historyScalarWhereInput = {
    AND?: checkout_historyScalarWhereInput | checkout_historyScalarWhereInput[]
    OR?: checkout_historyScalarWhereInput[]
    NOT?: checkout_historyScalarWhereInput | checkout_historyScalarWhereInput[]
    email?: StringFilter<"checkout_history"> | string
    book_isbn?: StringFilter<"checkout_history"> | string
    total_price?: DecimalFilter<"checkout_history"> | Decimal | DecimalJsLike | number | string
    qty?: IntFilter<"checkout_history"> | number
    checkout_date_and_time?: DateTimeFilter<"checkout_history"> | Date | string
  }

  export type email_verificationsUpsertWithoutUserInput = {
    update: XOR<email_verificationsUpdateWithoutUserInput, email_verificationsUncheckedUpdateWithoutUserInput>
    create: XOR<email_verificationsCreateWithoutUserInput, email_verificationsUncheckedCreateWithoutUserInput>
    where?: email_verificationsWhereInput
  }

  export type email_verificationsUpdateToOneWithWhereWithoutUserInput = {
    where?: email_verificationsWhereInput
    data: XOR<email_verificationsUpdateWithoutUserInput, email_verificationsUncheckedUpdateWithoutUserInput>
  }

  export type email_verificationsUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
  }

  export type email_verificationsUncheckedUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
  }

  export type shippingUpsertWithoutUserInput = {
    update: XOR<shippingUpdateWithoutUserInput, shippingUncheckedUpdateWithoutUserInput>
    create: XOR<shippingCreateWithoutUserInput, shippingUncheckedCreateWithoutUserInput>
    where?: shippingWhereInput
  }

  export type shippingUpdateToOneWithWhereWithoutUserInput = {
    where?: shippingWhereInput
    data: XOR<shippingUpdateWithoutUserInput, shippingUncheckedUpdateWithoutUserInput>
  }

  export type shippingUpdateWithoutUserInput = {
    address?: StringFieldUpdateOperationsInput | string
    postalcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type shippingUncheckedUpdateWithoutUserInput = {
    address?: StringFieldUpdateOperationsInput | string
    postalcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type checkout_historyCreateManyUserInput = {
    book_isbn: string
    total_price: Decimal | DecimalJsLike | number | string
    qty: number
    checkout_date_and_time: Date | string
  }

  export type checkout_historyUpdateWithoutUserInput = {
    book_isbn?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    checkout_date_and_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type checkout_historyUncheckedUpdateWithoutUserInput = {
    book_isbn?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    checkout_date_and_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type checkout_historyUncheckedUpdateManyWithoutUserInput = {
    book_isbn?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    checkout_date_and_time?: DateTimeFieldUpdateOperationsInput | Date | string
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
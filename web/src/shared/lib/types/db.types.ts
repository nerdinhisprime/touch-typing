import { DBSchema, IDBPDatabase } from "idb"

export interface directoryHandleTypes {
  id: string
  descriptor: FileSystemDirectoryHandle
}

export interface AppDBSchema extends DBSchema {
  directoryHandle: {
    key: string
    value: directoryHandleTypes
  }
}

export type AppDBInstance = IDBPDatabase<AppDBSchema>

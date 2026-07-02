import { openDB } from "idb";
import { AppDBInstance } from "./types/db.types";
import {
  DB_NAME,
  DB_VERSION,
  OBJ_STORE_HANDLES
} from "@shared/config";

export const initDB = async (): Promise<AppDBInstance> => {
  return await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if(!db.objectStoreNames.contains(OBJ_STORE_HANDLES)) {
        db.createObjectStore(OBJ_STORE_HANDLES, { keyPath: 'id' })
      }
    }
  })
}

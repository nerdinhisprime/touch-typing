import { ref } from "vue"
import { initDB } from "./indexedDB"
import { OBJ_STORE_HANDLES } from "../config"

const DIR_HANDLE_STORAGE_KEY = 'access'

export const useFileSystemAccess = () => {
  const directoryHandle = ref<FileSystemDirectoryHandle | null>(null)

  const selectDirectory = async () => {
    try {
      const rawHandle = await window.showDirectoryPicker({ mode: 'read' })
      directoryHandle.value = rawHandle

      const DB = await initDB()
      await DB.put(OBJ_STORE_HANDLES, {
        id: DIR_HANDLE_STORAGE_KEY,
        descriptor: rawHandle
      })
    } catch (err) { console.error(err) }
  }

  const restorePersistedAccess = async () => {
    try {
      const DB = await initDB()
      const gotRecord = await DB.get(OBJ_STORE_HANDLES, DIR_HANDLE_STORAGE_KEY)

      if(!gotRecord || !gotRecord.descriptor) return

      const handle = gotRecord.descriptor
      directoryHandle.value = handle
    } catch (err) { console.error(err) }
  }

  const requestPermission = async () => {
    if(!directoryHandle.value) return
    try {
      await directoryHandle.value.requestPermission({ mode: 'read' })
    } catch(err) { console.error(err) }
  }

  return {
    selectDirectory,
    restorePersistedAccess,
    requestPermission,
  }
}

import { MMKV } from 'react-native-mmkv';

export const tokenStorage = new MMKV({
    id: 'tokenStorage',
    encryptionKey: 'secret-key-123456', 
});

export const storage = new MMKV({
    id: 'my-app-storage',
    encryptionKey: 'secret-key-112006',
})

export const mmkvStorage = {
    setItem: (key: string, value: string) => {
        storage.set(key, value);
    },
    getItem: (key: string) => {
        const value = storage.getString(key);
        return value !== undefined ? value : null;
    },
    removeItem: (key: string) => {
        storage.delete(key);
    },
}
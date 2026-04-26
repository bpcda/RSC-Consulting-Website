import { Client, Databases, ID } from "appwrite";

const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT as string;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID as string;

export const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID as string;
export const CONTACT_COLLECTION_ID = import.meta.env.VITE_APPWRITE_CONTACT_COLLECTION_ID as string;

if (!ENDPOINT || !PROJECT_ID) {
  console.warn(
    "Appwrite credentials not configured. Set VITE_APPWRITE_ENDPOINT and VITE_APPWRITE_PROJECT_ID."
  );
}

export const client = new Client().setEndpoint(ENDPOINT ?? "").setProject(PROJECT_ID ?? "");

export const databases = new Databases(client);
export { ID };

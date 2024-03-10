import dotenv from "dotenv";

// Your web app's Firebase configuration
dotenv.config();

const getDotenv = (key: string | number): string => {
    const value = process.env[key];
    if (value === undefined || value === null) {
        throw new Error(`${key} is undefined or null`);
    }
    return value;
};

export default getDotenv;

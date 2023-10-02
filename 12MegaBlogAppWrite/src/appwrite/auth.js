import conf from "../conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  Client = new Client();
  account;

  constructor() {
    this.Client.setEndpoint(conf.appwriteUrl).setProject(
      conf.appwriteProjectId
    );
    this.account = new Account(this.Client);
  }

  // Signup

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        // call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  // Login

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
    return null;
  }

  // Logout

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const AuthService = new AuthService();

export default AuthService;

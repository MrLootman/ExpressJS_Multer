import databaseClient, { type Result } from "../../../database/client";

class UserRepository {
  async create(userData: { email: string; password: string; avatar?: string }) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (email, password, avatar) VALUES (?, ?, ?)",
      [userData.email, userData.password, userData?.avatar],
    );

    return result.affectedRows;
  }
}

export default new UserRepository();

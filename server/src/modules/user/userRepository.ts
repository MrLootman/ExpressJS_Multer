import databaseClient, { type Result } from "../../../database/client";

class UserRepository {
  async create(userData: { email: string; password: string; image?: string }) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (email, password, image) VALUES (?, ?, ?)",
      [userData.email, userData.password, userData?.image],
    );

    return result.affectedRows;
  }
}

export default new UserRepository();

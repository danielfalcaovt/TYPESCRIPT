import Product from "../entities/Product";
import { appDataSource } from "@shared/typeorm";

export const UserRepository = appDataSource.getRepository(Product).extend({
  findByName(name: string) {
      return this.createQueryBuilder("product")
          .where("user.name   = :firstName", { name })
          .getMany()
  },
})

// user.controller.ts
export class UserController {
  users() {
      return UserRepository.findByName("Daniel");
  };
};

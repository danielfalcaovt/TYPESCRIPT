import { Staff } from "../entities/Staff";
import { dataSource } from "@shared/typeorm";

export const StaffRepository = dataSource.getRepository(Staff);


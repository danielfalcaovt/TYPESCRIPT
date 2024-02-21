import { Staff } from "../entities/Staff";
import { dataSource } from "@shared/typeorm";
import { StaffRepository } from "./StaffRepository";

export class staffController {
    Staff() {
        return StaffRepository.find()
    }
}
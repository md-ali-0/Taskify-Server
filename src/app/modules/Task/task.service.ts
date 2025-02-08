import { Prisma, Task } from "@prisma/client";
import { paginationHelper } from "../../../helpars/paginationHelper";
import prisma from "../../../shared/prisma";
import { IAuthUser } from "../../interfaces/common";
import { IPaginationOptions } from "../../interfaces/pagination";

const create = async (user: IAuthUser, payload: Task) => {

    const result = await prisma.task.create({
        data: payload,
    });

    return result;
};

const getAll = async (
    user: IAuthUser,
    params: Record<string, unknown>,
    options: IPaginationOptions
) => {
    const { page, limit, skip } = paginationHelper.calculatePagination(options);
    const { searchTerm, ...filterData } = params;

    const andCondions: Prisma.TaskWhereInput[] = [];

    if (params.searchTerm) {
        andCondions.push({
            OR: ["name"].map((field) => ({
                [field]: {
                    contains: params.searchTerm,
                    mode: "insensitive",
                },
            })),
        });
    }

    if (Object.keys(filterData).length > 0) {
        andCondions.push({
            AND: Object.keys(filterData).map((key) => ({
                [key]: {
                    equals: (filterData as any)[key],
                },
            })),
        });
    }

    //console.dir(andCondions, { depth: 'inifinity' })
    const whereConditons: Prisma.TaskWhereInput = { AND: andCondions };

    const result = await prisma.task.findMany({
        where: whereConditons,
        skip,
        take: limit,
        orderBy:
            options.sortBy && options.sortOrder
                ? {
                      [options?.sortBy]: options.sortOrder,
                  }
                : {
                      createdAt: "desc",
                  },
    });

    const total = await prisma.task.count({
        where: whereConditons,
    });

    const totalPage = Math.ceil(total / limit);

    return {
        meta: {
            page,
            limit,
            total,
            totalPage,
        },
        data: result,
    };
};

const getOne = async (id: string): Promise<Task | null> => {
    const result = await prisma.task.findUnique({
        where: {
            id,
        },
    });

    return result;
};

const update = async (id: string, data: Partial<Task>): Promise<Task> => {
    await prisma.task.findUniqueOrThrow({
        where: {
            id,
        },
    });

    const result = await prisma.task.update({
        where: {
            id,
        },
        data,
    });

    return result;
};

const remove = async (id: string): Promise<Task | null> => {
    await prisma.task.findUniqueOrThrow({
        where: {
            id,
        },
    });

    const result = await prisma.task.delete({
        where: {
            id,
        },
    });

    return result;
};

export const TaskService = {
    create,
    getAll,
    getOne,
    update,
    remove,
};

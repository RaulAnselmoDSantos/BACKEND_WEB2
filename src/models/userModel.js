import {PrismaClient} from "@prisma/client"; 

const prisma = new PrismaClient(); 

const getAll = async () => {
   const usuarios = await prisma.usuario.findMany();
   return usuarios
}

const create = () => {

}

export default {getAll, create}
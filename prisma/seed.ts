import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const manticora = await prisma.basilisco.upsert({
        where: { name: 'Basilisco' },
        update: {},
        create: {
            name: 'Basilisco',
            description: 'It was a fabulous being created by Greek mythology that was described as a giant snake loaded with lethal venom.',
            lastSee: 'Tres de Noviembre',
            countlastSee: 5,
            extinct: false,
        },
    });

    const dragon = await prisma.basilisco.upsert({
        where: { name: 'Serpiente' },
        update: {},
        create: {
            name: 'Serpiente',
            description: 'Present an elongated and cylindrical body; They have no limbs, and have a very flexible bony skeleton.',
            lastSee: 'San Vicente',
            countlastSee: 12,
            extinct: false,
        },
    });

    console.log({ manticora, dragon });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

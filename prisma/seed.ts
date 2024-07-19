import prisma from "../lib/prisma";
import { seedData } from "./seedData"

async function main() {
    await Promise.all(
        seedData.map(async (item) => {
            await prisma.properties.create({
                data: {
                    name: item.name,
                    propertyUse: item.propertyUse,
                    price: item.price,
                    size: item.size,
                    location: item.location,
                    readyToMove: item.readyToMove,
                    project: item.project,
                    latitude: item.latitude,
                    longitude: item.longitude,
                    imageNumber: item.imageNumber,
                    detail: {
                        create: item.details.map((detail) => ({
                            detail: detail.detail,
                            quantity: detail.quantity
                        }))
                    }
                }
            })
        })
    )
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

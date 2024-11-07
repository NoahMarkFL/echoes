/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import FeedsContent from "./content";

export default async function FeedsPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  const loggedInUser = await prisma.user.findUnique({
    where: { clerkUserId: user.id },
  });

  if (!loggedInUser) {
    await prisma.user.create({
      data: {
        clerkUserId: user.id,
        name: `${user.firstName} ${user.lastName}`,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });
  }

  return <FeedsContent user={user as any} />;
}

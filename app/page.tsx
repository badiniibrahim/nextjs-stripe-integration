"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { loadStripe } from "@stripe/stripe-js";
import { checkoutCredits } from "@/lib/actions/checkout.actions";

export default function Home() {
  useEffect(() => {
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }, []);

  const onCheckout = async () => {
    await checkoutCredits();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={onCheckout} method="POST">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>T-shirt</CardTitle>
            <CardDescription>10€</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-center w-full">
            <Button type="submit" role="link">
              Checkout
            </Button>
          </CardFooter>
        </Card>
      </form>
    </main>
  );
}

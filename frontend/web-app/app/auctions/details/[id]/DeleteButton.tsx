"use client";
import { deleteAuction } from "@/app/actions/auctionActions";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

interface Props {
  id: string;
}

export default function DeleteButton({ id }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleDelete = () => {
    setLoading(true);
    deleteAuction(id)
      .then((res) => {
        if (res.error) throw res.error;
        router.push("/");
      })
      .catch((err) => {
        toast.error(err.status + " " + err.message);
      })
      .finally(() => setLoading(false));
  };
  return (
    <Button
      color="failure"
      outline
      isProcessing={loading}
      onClick={handleDelete}
    >
      Delete Auction
    </Button>
  );
}

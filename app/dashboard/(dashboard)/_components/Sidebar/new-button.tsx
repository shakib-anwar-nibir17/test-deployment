"use client";

import { CreateOrganization } from "@clerk/nextjs";
import { Plus } from "lucide-react";

import { Hint } from "@/components/hint";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint
            label="Create organization"
            side="right"
            align="start"
            sideOffset={18}
          >
            <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
              <Plus className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent>
        <CreateOrganization afterCreateOrganizationUrl="/dashboard" />
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;

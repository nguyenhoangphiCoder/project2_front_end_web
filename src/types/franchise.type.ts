export type FranChises = {
  id: string;
  name: string;
  owner: string;
  address: string;
  phone_number: string;
};

export type CreateFranChises = Pick<
  FranChises,
  "name" | "address" | "phone_number"
> & {
  owner_id: number;
};

export type UpdateFranChise = Omit<CreateFranChises, "owner_id">;

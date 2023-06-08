export interface NavbarProps {
  image?: string;
}

export interface NavCatagoriesProps {
  open: boolean;
  setOpen: boolean;
  links: {
    to: string;
    name: string;
  }[];
}

export type SocialComponentType = {
  [key: string]: ({ color, className }: Props) => JSX.Element;
};

export type fieldsType={
  id:string;
  labelText:string;
  labelFor:string;
  name:string;
  type:string;
  isRequired?:boolean;
  placeholder?:string;
}[]

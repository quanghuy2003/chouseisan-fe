import {Eventt} from "./Eventt";

export class Vote {
  id?:string;
  schedule?:string;
  status?:string;
  comment?:string;
  // @ts-ignore
  eventtId: Eventt
}

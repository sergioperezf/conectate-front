import { TechnicalInformation } from  './technical-information.models'

export class Tool {
    public id:number;
    public name:string;
    public description :string;
    public urlSite :string;
    public typeLicense :string;
    public urlDownload: string;
    public technicalInformation : TechnicalInformation[] = [];

    constructor(){}
}

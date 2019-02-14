// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================

import { User } from './user.model';


export class Shipment  extends User {

    constructor(currentPassword?: string, newPassword?: string, confirmPassword?: string) {
        super();

        this.currentPassword = currentPassword;
        this.newPassword = newPassword;
        this.confirmPassword = confirmPassword;
    }

    public currentPassword: string;
    public newPassword: string;
    public confirmPassword: string;

    //TODODO: replace constructor parameters with this values:

    //public orderId: number;
    //public productLink: string;
    //public brandName: string;
    //public buyerAdress: string;




}

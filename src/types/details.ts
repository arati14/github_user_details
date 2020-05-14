export const FETCH_USER_DETAILS = "FETCH_USER_DETAILS";
export const FETCH_USER_NAME = "FETCH_USER_NAME";
export interface fetchNameAction{
    type: typeof FETCH_USER_NAME;
    name:string;
}
export interface fetchDetailsAction{
    type: typeof FETCH_USER_DETAILS
    data:any;
    // login:string;
    // avatar_url:string;
    // name:string;
    // email:string
}
export type detailsAction = fetchDetailsAction|fetchNameAction;
export type appAction = detailsAction;
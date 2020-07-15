export const FETCH_USER_DETAILS = "FETCH_USER_DETAILS";
export const FETCH_USER_NAME = "FETCH_USER_NAME";
export const ADD_REPO = "ADD_REPO";
export const CONTRIBUTION_DATA ="CONTRIBUTION_DATA";
export const REPO_LANGUAGE ="REPO_LANGUAGE";
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
export interface fetchRepoAction{
    type: typeof ADD_REPO;
    data1:any;
}
export interface fetchContributionData{
    type: typeof CONTRIBUTION_DATA;
    data2:any;

}
export interface fetchRepoLanguage{
    type: typeof REPO_LANGUAGE;
    data3:any;
}
export type detailsAction = fetchDetailsAction|fetchNameAction|fetchRepoAction|fetchContributionData|fetchRepoLanguage;
export type appAction = detailsAction;
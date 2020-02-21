export declare class Footer {
    pageUrl: string;
    pageLastUpdated: string;
    showLogin: boolean;
    loginUrl: string;
    showLogout: boolean;
    logoutUrl: string;
    validateName(newValue: string): void;
    showLoginOrLogout(): boolean;
    hasLastUpdated(): boolean;
    render(): any;
}

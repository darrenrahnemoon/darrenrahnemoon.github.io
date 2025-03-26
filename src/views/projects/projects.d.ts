export declare const projects: Project[];
export interface Project {
    slug?: string;
    name: string;
    summary: string;
    date: Date;
    thumbnail?: string;
    icon?: string;
    component?: () => any;
    url?: string;
}

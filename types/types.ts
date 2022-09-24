export interface Project {
    homepage: string,
    topics: string[],
    html_url: string,
    description?: string,
    name: string
}

export interface Projects {
	projects: Project[]
}

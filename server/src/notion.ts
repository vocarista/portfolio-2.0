const { Client }  = require('@notionhq/client');
require('dotenv').config();
const notion = new Client({
    auth: process.env.NOTION_KEY,
});


export async function getSkills (): Promise<any>{
    const response = await notion.databases.query({
        database_id: process.env.NOTION_SKILLS_DB,
        sorts: [{
            property: 'skill_name',
            direction: 'ascending'
        }]
    })
    // console.log(response.results[0].properties)
    return response.results.map((item: any) => ({
        id: item.id,
        name: item.properties.skill_name.title[0].plain_text,
        icon: item.properties.icon.url ? item.properties.icon.url : ``,
    }))
}

export async function getRoles(): Promise<any>{
    const response = await notion.databases.query({
        database_id: process.env.NOTION_ROLES_DB,
    })

    // console.log(response.results[0].properties.desc.rich_text)
    return response.results.map((item: any) => ({
        id: item.id,
        name: item.properties.role_name.title[0].plain_text,
        employer: item.properties.employer.rich_text[0].plain_text,
        icon: item.properties.icon.url ? item.properties.icon.url : ``,
        start_date: item.properties.start_date.rich_text[0].plain_text,
        end_date: item.properties.end_date.rich_text[0].plain_text,
        isOngoing: item.properties.isOngoing.checkbox,
        desc: item.properties.desc.rich_text[0] ? item.properties.desc.rich_text[0].plain_text : ''
    }))
}

export async function getProjects(): Promise<any>{
    const response = await notion.databases.query({
        database_id: process.env.NOTION_PROJECTS_DB,
        sorts: [{
            property: 'start_date',
            direction: 'descending'
        }]
    })
    // console.log(response.results[0].properties)
    return response.results.map((item: any) => ({
        id: item.id,
        name: item.properties.project_name.title[0].plain_text,
        url: item.properties.url.url ? item.properties.url.url : '',
        thumbnail: item.properties.thumbnail.url ? item.properties.thumbnail.url : '',
        desc: item.properties.desc.rich_text[0].plain_text,
        isOngoing: item.properties.isOngoing.checkbox,
        tags: item.properties.tags.multi_select.map((tag: any) => tag.name),
        start_date: item.properties.start_date.date.start,
        update_date: item.properties.update_date.date.start,
    }))
}

export async function getEducation(): Promise<any> {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_EDUCATION_KEY,
        sorts: [{
            property: 'start_date',
            direction: 'descending',
        }]
    })

    // console.log(response.results[0].properties)
    return response.results.map((item: any) => ({
        id: item.id,
        name: item.properties.institution_name.title[0].plain_text,
        degree: item.properties.degree.rich_text[0].plain_text,
        course: item.properties.course.rich_text[0] ? item.properties.course.rich_text[0].plain_text : '',
        grade: item.properties.grade.rich_text[0].plain_text,
        icon: item.properties.icon.url ? item.properties.icon.url : '',
        start_date: item.properties.start_date.rich_text[0].plain_text,
        end_date: item.properties.end_date.rich_text[0].plain_text,
        isOngoing: item.properties.isOngoing.checkbox,
    }))
}

export async function getCerts(): Promise<any>{
    const response = await notion.databases.query({
        database_id: process.env.NOTION_CERTS_KEY,
        sorts: [{
            property: 'rank',
            direction: 'ascending'
        }]
    })
    return response.results.map((item: any) => ({
        id: item.id,
        name: item.properties.cert_name.title[0].plain_text,
        org_name: item.properties.org_name.rich_text[0].plain_text,
        date: item.properties.date.rich_text[0].plain_text,
        url: item.properties.url.url ? item.properties.url.url : ''
    }))
}

export async function getAchievements(): Promise<any>{
    const response = await notion.databases.query({
        database_id: process.env.NOTION_ACHIEVEMENTS_KEY,
    })
    if (response.results.length == 0) return [];
    return response.results.map((item: any) => ({
        id: item.id,
        name: item.properties.name.title[0].plain_text,
        desc: item.properties.desc.rich_text[0].plain_text,
        date: item.properties.date.date.start,
        url: item.properties.url.url
    }))
}

export async function getAbout(): Promise<any>{
    const response = await notion.databases.query({
        database_id: process.env.NOTION_TEXTS_KEY,
        filter: {
            property: 'name',
            title: {equals: 'About'}
        }
    })
    return { about: response.results[0].properties.text.rich_text[0].plain_text };
}